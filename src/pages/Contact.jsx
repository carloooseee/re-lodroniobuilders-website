import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { collection, addDoc, serverTimestamp, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [ticketId, setTicketId] = useState('');
    const [content, setContent] = useState(null);
    // Honeypot field — must stay empty; bots fill it, humans don't see it
    const [honeypot, setHoneypot] = useState('');

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const docSnap = await getDoc(doc(db, 'siteSettings', 'contactContent'));
                if (docSnap.exists()) {
                    setContent(docSnap.data());
                }
            } catch (err) {
                console.error("Error fetching contact content:", err);
            }
        };
        fetchContent();
    }, []);

    const generateTicketId = () => {
        const now = new Date();
        const datePart = `${String(now.getDate()).padStart(2, '0')}${String(now.getMonth() + 1).padStart(2, '0')}`;
        const randomPart = Math.random().toString(36).toUpperCase().slice(2, 6);
        return `TKT-${datePart}-${randomPart}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Honeypot check — silently reject bots that filled the hidden field
        if (honeypot) {
            setSubmitStatus('success'); // fake success so bots don't retry
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        const newTicketId = generateTicketId();

        try {
            await addDoc(collection(db, 'messages'), {
                name,
                email,
                phone,
                subject,
                message,
                status: 'new',
                ticketId: newTicketId,
                createdAt: serverTimestamp()
            });

            // Trigger Email Auto-Replier API
            try {
                await fetch('/api/submit-form', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name,
                        email,
                        subject,
                        ticketId: newTicketId
                    })
                });
            } catch (emailErr) {
                console.warn('Auto-reply email could not be sent:', emailErr);
            }

            setTicketId(newTicketId);
            setSubmitStatus('success');
            setName('');
            setEmail('');
            setPhone('');
            setSubject('');
            setMessage('');
        } catch (error) {
            console.error('Error adding document: ', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Navbar />

            <main className="flex-grow flex flex-col max-w-container-max mx-auto w-full">

                <section className="w-full px-margin-mobile md:px-margin-desktop py-16 md:py-32 flex flex-col md:flex-row gap-16 md:gap-gutter items-start justify-between">
                    <div className="md:w-1/2 flex flex-col gap-6">
                        <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">( Contact )</p>
                        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary leading-tight">
                            Start the <br />
                            <span className="italic font-light">conversation.</span>
                        </h1>
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-4">
                            {content?.introDesc || "Reach out directly for estimates, site visits, or to discuss the home you want to build."}
                        </p>
                    </div>
                    <div className="md:w-5/12 flex flex-col w-full">

                        <div className="pb-8 structural-line mb-8">
                            <p className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">Company</p>
                            <h2 className="font-headline-md text-headline-md text-primary mb-1">{content?.companyName || "RE Lodronio Builders Inc."}</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">{content?.companySubtitle || "Formerly REL Builders and Design"}</p>
                        </div>

                        <div className="pb-8 structural-line mb-8">
                            <p className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">Contact Person</p>
                            <p className="font-body-md text-body-md text-primary">{content?.contactPersonName || "Ar. Roco E. Lodronio"}</p>
                            <p className="font-body-md text-body-md text-on-surface-variant">{content?.contactPersonRole || "Architect / Contractor"}</p>
                        </div>

                        <div className="pb-8 structural-line">
                            <p className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">Office Address</p>
                            <p className="font-body-md text-body-md text-primary">{content?.addressLine1 || "No. 2 M. Santos Avenue, Santos Village Phase 3"}</p>
                            <p className="font-body-md text-body-md text-primary">{content?.addressLine2 || "Barangay Zapote, Las Piñas City, Philippines"}</p>
                        </div>
                    </div>
                </section>

                <section className="w-full bg-surface-container-low px-margin-mobile md:px-margin-desktop py-16 md:py-32 flex flex-col md:flex-row gap-16 md:gap-gutter items-start justify-between">

                    <div className="md:w-1/2 flex flex-col w-full">
                        <h2 className="font-headline-md text-headline-md text-primary mb-12">Send a message</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-lg">
                            {submitStatus === 'success' && (
                                <div className="flex flex-col gap-2 bg-[#4CAF50]/10 text-primary p-5 rounded-md border border-[#4CAF50]/20">
                                    <p className="font-body-md text-body-md">Message sent successfully! We'll get back to you soon.</p>
                                    <div className="flex items-center gap-3 mt-1">
                                        <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Your Ticket ID:</span>
                                        <span className="font-mono font-bold text-sm tracking-widest text-[#4CAF50]">{ticketId}</span>
                                    </div>
                                    <p className="font-body-sm text-body-sm text-on-surface-variant text-[11px] mt-1">Please save this reference number for your records.</p>
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="bg-[#F44336]/10 text-[#F44336] p-4 rounded-md font-body-md border border-[#F44336]/20">
                                    Failed to send message. Please try again later.
                                </div>
                            )}
                            <div className="flex flex-col gap-2">
                                <label className="font-body-md text-body-md text-primary" htmlFor="name">Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} className="w-full pb-2 text-on-surface-variant font-body-md border-b border-primary/35 focus:border-primary focus:outline-none bg-transparent" id="name" placeholder="Your name" required type="text" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-body-md text-body-md text-primary" htmlFor="email">Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pb-2 text-on-surface-variant font-body-md border-b border-primary/35 focus:border-primary focus:outline-none bg-transparent" id="email" placeholder="Your@email.com" required type="email" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-body-md text-body-md text-primary" htmlFor="phone">Contact number</label>
                                <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full pb-2 text-on-surface-variant font-body-md border-b border-primary/35 focus:border-primary focus:outline-none bg-transparent" id="phone" placeholder="Your contact number" required type="tel" />
                            </div>
                            {/* Honeypot — hidden from real users, traps bots */}
                            <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }} tabIndex={-1}>
                                <label htmlFor="website">Leave this field empty</label>
                                <input id="website" name="website" type="text" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} autoComplete="off" tabIndex={-1} />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-body-md text-body-md text-primary" htmlFor="subject">Subject</label>
                                <input value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full pb-2 text-on-surface-variant font-body-md border-b border-primary/35 focus:border-primary focus:outline-none bg-transparent" id="subject" placeholder="Subject" required type="text" />
                            </div>
                            <div className="flex flex-col gap-2 mb-4">
                                <label className="font-body-md text-body-md text-primary" htmlFor="message">Message</label>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full pb-2 text-on-surface-variant font-body-md resize-none border-b border-primary/35 focus:border-primary focus:outline-none bg-transparent" id="message" placeholder="Type your message here...." required rows="1"></textarea>
                            </div>
                            <button disabled={isSubmitting} className="bg-primary text-on-primary font-label-caps text-label-caps py-4 px-8 w-full hover:opacity-90 transition-opacity uppercase tracking-widest disabled:opacity-50" type="submit">
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    <div className="md:w-5/12 flex flex-col w-full">

                        <div className="pb-8 structural-line mb-8">
                            <p className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">Email</p>
                            <div className="flex flex-col gap-4">
                                {content?.emails ? content.emails.split(',').map(e => e.trim()).filter(Boolean).map(email => (
                                    <a key={email} className="flex items-center gap-3 font-body-md text-body-md text-primary hover:text-secondary transition-colors" href={`mailto:${email}`}>
                                        <span className="material-symbols-outlined text-outline" data-icon="mail">mail</span>
                                        {email}
                                    </a>
                                )) : (
                                    <>
                                        <a className="flex items-center gap-3 font-body-md text-body-md text-primary hover:text-secondary transition-colors" href="mailto:rocolodronio@hotmail.com">
                                            <span className="material-symbols-outlined text-outline" data-icon="mail">mail</span>
                                            rocolodronio@hotmail.com
                                        </a>
                                        <a className="flex items-center gap-3 font-body-md text-body-md text-primary hover:text-secondary transition-colors" href="mailto:relbuildersanddesign@gmail.com">
                                            <span className="material-symbols-outlined text-outline" data-icon="mail">mail</span>
                                            relbuildersanddesign@gmail.com
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="pb-8 structural-line mb-8">
                            <p className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">Phone</p>
                            <div className="flex flex-col gap-4">
                                {content?.phones ? content.phones.split(',').map(p => p.trim()).filter(Boolean).map(phone => (
                                    <a key={phone} className="flex items-center gap-3 font-body-md text-body-md text-primary hover:text-secondary transition-colors" href={`tel:${phone}`}>
                                        <span className="material-symbols-outlined text-outline" data-icon="call">call</span>
                                        {phone}
                                    </a>
                                )) : (
                                    <>
                                        <a className="flex items-center gap-3 font-body-md text-body-md text-primary hover:text-secondary transition-colors" href="tel:872-4338">
                                            <span className="material-symbols-outlined text-outline" data-icon="call">call</span>
                                            872-4338
                                        </a>
                                        <a className="flex items-center gap-3 font-body-md text-body-md text-primary hover:text-secondary transition-colors" href="tel:0995-975-7401">
                                            <span className="material-symbols-outlined text-outline" data-icon="call">call</span>
                                            0995-975-7401
                                        </a>
                                        <a className="flex items-center gap-3 font-body-md text-body-md text-primary hover:text-secondary transition-colors" href="tel:0949-892-5217">
                                            <span className="material-symbols-outlined text-outline" data-icon="call">call</span>
                                            0949-892-5217
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="pb-8 structural-line mb-8">
                            <p className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">Online</p>
                            <a className="flex items-center gap-3 font-body-md text-body-md text-primary hover:text-secondary transition-colors" href="https://www.facebook.com/RELBuildersDesign" target="_blank" rel="noopener noreferrer">
                                <span className="material-symbols-outlined text-outline" data-icon="public">public</span>
                                RE Lodronio Builders Inc.
                            </a>
                        </div>

                        <div className="pb-8 structural-line">
                            <p className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">Visit Us</p>
                            <a className="flex items-center gap-3 font-body-md text-body-md text-primary hover:text-secondary transition-colors" href="https://maps.app.goo.gl/3DUzmKCFrcS7fTPs9" target="_blank" rel="noopener noreferrer">
                                <span className="material-symbols-outlined text-outline" data-icon="location_on">location_on</span>
                                Open in Google Maps
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

        </>
    );
}
