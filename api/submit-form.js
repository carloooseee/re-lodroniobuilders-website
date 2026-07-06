import nodemailer from 'nodemailer';

// Simple in-memory rate limiter (resets on cold start; good enough for serverless)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5;

function isRateLimited(ip) {
    const now = Date.now();
    const entry = rateLimitMap.get(ip) || { count: 0, start: now };

    if (now - entry.start > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.set(ip, { count: 1, start: now });
        return false;
    }

    if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
        return true;
    }

    entry.count++;
    rateLimitMap.set(ip, entry);
    return false;
}

// Escape HTML special characters to prevent XSS in email body
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    // Rate limiting by IP
    const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
    if (isRateLimited(ip)) {
        return res.status(429).json({ error: 'Too many requests. Please wait a minute and try again.' });
    }

    const { name, email, subject, ticketId } = req.body;

    // Required field validation
    if (!name || !email || !ticketId) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Input length validation
    if (name.length > 100) {
        return res.status(400).json({ error: 'Name must be 100 characters or fewer' });
    }
    if (email.length > 254) {
        return res.status(400).json({ error: 'Email address is too long' });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Invalid email address' });
    }

    // Sanitize user input before embedding in HTML
    const safeName = escapeHtml(name);
    const safeSubject = escapeHtml(subject || 'your inquiry');
    const safeTicketId = escapeHtml(ticketId);

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD
            }
        });

        await transporter.sendMail({
            from: `RE Lodronio Builders Inc. <${process.env.GMAIL_USER}>`,
            to: email,
            subject: `We received your message — Ref. ${safeTicketId}`,
            html: `
                <div style="font-family: Georgia, serif; max-width: 520px; margin: 0 auto; color: #1a1c1c;">
                    <div style="border-bottom: 1px solid #e0e0e0; padding-bottom: 16px; margin-bottom: 24px;">
                        <h2 style="font-size: 20px; font-weight: 400; margin: 0; letter-spacing: 0.02em;">RE Lodronio Builders Inc.</h2>
                        <p style="font-size: 11px; color: #6b6b6b; margin: 4px 0 0; letter-spacing: 0.1em; text-transform: uppercase;">Formerly REL Builders and Design</p>
                    </div>
                    
                    <p style="font-size: 15px; line-height: 1.6;">Hi ${safeName},</p>

                    <p style="font-size: 15px; line-height: 1.6;">
                        Thank you for reaching out. We have received your message regarding <em>${safeSubject}</em> and our team will get back to you within <strong>1&ndash;2 business days</strong>.
                    </p>

                    <div style="background: #f4f3f3; border-left: 3px solid #000; padding: 16px 20px; margin: 28px 0;">
                        <p style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: #6b6b6b; margin: 0 0 6px;">Your Reference Number</p>
                        <p style="font-size: 18px; font-family: monospace; font-weight: bold; letter-spacing: 0.2em; margin: 0;">${safeTicketId}</p>
                        <p style="font-size: 11px; color: #6b6b6b; margin: 8px 0 0;">Please keep this number for your records.</p>
                    </div>

                    <p style="font-size: 15px; line-height: 1.6;">
                        If you have any additional details to share, you can reply directly to this email.
                    </p>

                    <p style="font-size: 15px; line-height: 1.6; margin-top: 32px;">
                        Warm regards,<br />
                        <strong>RE Lodronio Builders Inc.</strong><br />
                        <span style="font-size: 12px; color: #6b6b6b;">No. 2 M. Santos Avenue, Santos Village Phase 3, Las Pi&ntilde;as City</span>
                    </p>

                    <div style="border-top: 1px solid #e0e0e0; padding-top: 16px; margin-top: 32px;">
                        <p style="font-size: 10px; color: #9e9e9e; letter-spacing: 0.05em;">This is an automated reply. Please do not reply if this is not the correct address.</p>
                    </div>
                </div>
            `
        });

        return res.status(200).json({ success: true });
    } catch (err) {
        console.error('Email send error:', err);
        return res.status(500).json({ error: 'Could not send confirmation email.' });
    }
}
