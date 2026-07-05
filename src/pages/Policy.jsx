import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const accordionData = [
  {
    id: 1,
    title: "Scope of Employee Relations",
    icon: "shield",
    content: (
      <div className="space-y-4 text-on-surface-variant">
        <p>This policy outlines the principles governing relations between R.E. Lodronio Builders Inc. and its employees. These standards support a positive, safe, and productive workplace.</p>
        <p>Employees are expected to abide by all policies to ensure fair treatment, maintain quality standards, and uphold the company's commitment to safety and excellence.</p>
      </div>
    )
  },
  {
    id: 2,
    title: "Casual / Temporary Employment",
    icon: "person",
    content: (
      <div className="space-y-4 text-on-surface-variant">
        <p>Casual employees are workers hired on a short-term basis for specific projects. Their employment ends upon completion of the assigned work or when their services are no longer needed for the project.</p>
        <p>More policy details will be added later.</p>
      </div>
    )
  },
  { id: 3, title: "Disciplinary Process", icon: "description", content: <p className="text-on-surface-variant">Policy details will be added later.</p> },
  { id: 4, title: "Attendance and Punctuality", icon: "schedule", content: <p className="text-on-surface-variant">Policy details will be added later.</p> },
  { id: 5, title: "Workday policies", icon: "calendar_today", content: <p className="text-on-surface-variant">Policy details will be added later.</p> },
  { id: 6, title: "Work Standby Procedure", icon: "autorenew", content: <p className="text-on-surface-variant">Policy details will be added later.</p> },
  { id: 7, title: "Involuntary Termination Procedure", icon: "warning", content: <p className="text-on-surface-variant">Policy details will be added later.</p> },
  { id: 8, title: "Return to Work, Job Abandonment, and Separation", icon: "undo", content: <p className="text-on-surface-variant">Policy details will be added later.</p> },
  { id: 9, title: "Bonus, 13th Month Pay and Other Incentives", icon: "redeem", content: <p className="text-on-surface-variant">Policy details will be added later.</p> },
  { id: 10, title: "Grievance Management Procedure", icon: "chat_bubble_outline", content: <p className="text-on-surface-variant">Policy details will be added later.</p> },
];

export default function Policy() {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background text-on-background font-body-md">
      <Navbar />
      {/* Top Section */}
      <section className="pt-32 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="max-w-3xl">
          <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mb-6">
            [ COMPANY AND POLICIES ]
          </p>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg tracking-tight mb-6">
            Employees standards <span className="italic font-serif">and</span><br />policies
          </h1>
          <p className="text-body-lg text-on-surface-variant leading-relaxed">
            These policies define the working relationship between R.E. Lodronio Builders Inc. and its employees. They are intended to promote fairness, safety, accountability, and professionalism across every project site.
          </p>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="bg-surface-container py-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="font-headline-md text-headline-md mb-4">Policy manual</h2>
            <p className="text-on-surface-variant">
              Select a section below to read the full policy. The manual covers employment terms, conduct, attendance, compensation, grievance procedures, and separation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto border-t border-outline-variant/30">
            {accordionData.map((item) => (
              <div key={item.id} className="border-b border-outline-variant/30">
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full py-6 flex items-center justify-between text-left hover:bg-surface-variant/20 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white rounded flex items-center justify-center shadow-sm text-on-surface-variant">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <span className="font-body-lg font-medium">{item.title}</span>
                  </div>
                  <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ${openId === item.id ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openId === item.id ? 'max-h-[1000px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
                >
                  <div className="pl-18 pr-4">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <h2 className="font-display-lg text-headline-md md:text-headline-lg tracking-tight mb-4 max-w-4xl mx-auto">
          “For every house is built by someone, but <span className="italic font-serif">God</span> is the <span className="italic font-serif">builder of everything</span>”
        </h2>
        <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
          - HEBREWS 3:4
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-surface-dim py-8 px-margin-mobile md:px-margin-desktop text-on-surface-variant font-label-caps text-label-caps uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© 2026 RE Lodronio Builders Inc</div>
        <div>Building with purpose, since 2008</div>
      </footer>
    </div>
  );
}
