import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const accordionData = [
  {
    id: 1,
    title: "Scope of Employee Relations",
    icon: "shield",
    content: (
      <div className="space-y-4 text-on-surface-variant leading-relaxed">
        <p>The following policies govern the working relationship between R.E. Lodronio Builders Inc. and its employees. These standards apply to all workers deployed across company projects and sites.</p>
        <p>Covered areas include: personal conduct, dress code, corrective action, disciplinary capabilities and grievance policy, time and attendance, non-retaliation policy, leave policy, and work day policy.</p>
      </div>
    )
  },
  {
    id: 2,
    title: "Casual / Temporary Employment",
    icon: "person",
    content: (
      <div className="space-y-4 text-on-surface-variant leading-relaxed">
        <p>Casual employees are workers who do not have a regular or systematic hour of work, or an expectation of continuing work. A typical casual employee is employed on a daily basis when the need arises.</p>
        <p>Casual employees assigned to a particular job site will be notified by the employer, including the estimated time of completion of the project and the timeline of which the employee is expected to work.</p>
        <p>Worker contracts shall be co-terminus with the client contract. Once assigned to a particular job site, the worker's contract will be based on the actual scope of work that needs to be done within the start and completion of the project. The work contract may vary from three months to five months, extendable month on month if needed.</p>
        <p>The employer, upon signing of the worker's contract, shall explain in detail the scope of works expected from the worker and the estimated turnaround time for the worker to finish his assigned task.</p>
        <div className="pt-2">
          <strong className="text-primary block mb-1">Payment of salaries:</strong>
          <p>Employees shall be paid on a weekly basis (every Saturday of each month). The basic salary of the worker shall be indicated and discussed accordingly. The salary will be based solely on the attendance submitted by the timekeeper and verified by the immediate manager.</p>
          <p className="mt-1 italic text-sm">Sample computation of basic salary: daily rate × number of days for one work week = Saturday pay-out.</p>
        </div>
        <div className="pt-2">
          <strong className="text-primary block mb-1">Overtime:</strong>
          <p>Overtime shall be advised by the project site once the need arises and shall be authorized by the engineer and need approval of Ar. Roco Lodronio.</p>
          <p className="mt-1 italic text-sm">Sample computation: daily rate ÷ 8 hours = per hour rate × number of hours OT rendered.</p>
        </div>
        <div className="pt-2">
          <strong className="text-primary block mb-1">Holiday work:</strong>
          <p>Holiday work shall be advised to the worker prior to the schedule by the company manager or the immediate supervisor in the job site. Only the regular holiday is entitled for holiday pay.</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Special non-working holiday:</strong> additional 30% of the basic salary.</li>
            <li><strong>Rest day:</strong> additional 50% of the basic salary.</li>
            <li><strong>Regular holiday pay:</strong> 100% or times 2 of the basic salary.</li>
          </ul>
        </div>
        <div className="pt-2">
          <strong className="text-primary block mb-1">Night differential:</strong>
          <p>Workers assigned to the night shift (10:00pm–6:00am) shall be entitled to a night differential.</p>
          <p className="mt-1 italic text-sm">Calculation: Hourly rate × 10% × 8 hours.</p>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Disciplinary Process",
    icon: "description",
    content: (
      <div className="space-y-4 text-on-surface-variant leading-relaxed">
        <p>Common cases and complaints include, but are not limited to: behavioral (disrespect to authorities, client or people in the workplace), attendance and punctuality (excessive tardiness, absences, undertime), and violation of dress code policy (improper attire in the workplace).</p>
        <p>All policies and regulations shall be discussed with workers before onboarding, either by one-on-one discussion or by group. All cases shall be discussed within the company officers and legal advisor.</p>
        <p>Turnaround time for this process shall be fifteen (15) working days upon receipt of complaint. The worker shall be advised in case there will be an extension to come up with a decision.</p>
        <div className="pt-2">
          <strong className="text-primary block mb-2">Disciplining employees escalation:</strong>
          <div className="bg-surface p-4 border border-outline-variant/20 rounded font-serif italic text-center space-y-1">
            <p>1st offense — verbal warning;</p>
            <p>2nd offense — issuance of notice to explain (written warning);</p>
            <p>3rd offense — issuance of NTE (for suspension);</p>
            <p>4th offense — immediate termination of contract.</p>
          </div>
        </div>
        <div className="pt-2">
          <strong className="text-primary block mb-1">Dress code policy:</strong>
          <p>The employer shall provide workers with three (3) long sleeves shirts. The uniform shall be free of charge provided that the worker will finish his three-month contract at a minimum. Failure to finish the contract would mean deductions of the uniform cost from the worker's final pay.</p>
          <p>The company is not responsible for any loss or damage of worker's uniforms. Request for additional or replacement shall be for the account of the worker; payment can be in cash or salary deduction.</p>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Attendance and Punctuality",
    icon: "schedule",
    content: (
      <div className="space-y-4 text-on-surface-variant leading-relaxed">
        <p>Attendance and punctuality cases include the following violations in the corrective action matrix: unauthorized absences / AWOL; failure to call the manager or the HR officer during expected working hours; tardiness (30 minutes late in work schedule will be considered as violation of this policy); and unauthorized undertime once the employee leaves from the job site before the end of duty.</p>
        <p>Workers shall be advised of his absence prior to his work schedule or within the day of absence. The project site in-charge (site engineer/foreman) shall directly report this to the HR or admin officer on the exact day itself. A verbal warning shall be done to call attention of the worker and shall be considered as first offense.</p>
        <p>In case the worker returns to work under unauthorized absence / AWOL, the engineer/foreman has the authority to not accept the worker; however, a notice to explain with written explanation should be provided by the worker for evaluation by the company officers.</p>
        <p><strong>Documentation:</strong> signed and acknowledged notice to explain; written explanation by the worker; medical document, if any; signed notice of decision. This process shall be strictly implemented; the immediate supervisor and HR/admin officer consultant shall facilitate this process.</p>
        <div className="pt-2">
          <strong className="text-primary block mb-2">Escalation process:</strong>
          <div className="bg-surface p-4 border border-outline-variant/20 rounded font-serif italic text-center space-y-1">
            <p>1st process — verbal warning;</p>
            <p>2nd process — issuance of notice to explain;</p>
            <p>3rd process — issuance of notice to explain with admin hearing schedule.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Workday policies",
    icon: "calendar_today",
    content: (
      <div className="space-y-4 text-on-surface-variant leading-relaxed">
        <p>The worker shall be advised of his work schedule prior to deployment. Any changes shall be coordinated by the admin officer or immediate supervisor to the worker; therefore, updated contact information is needed.</p>
        <p>Work hours are from <strong>8:00AM–5:00PM</strong> with fifteen (15) minutes morning break from <strong>10:00AM–10:15AM</strong>, afternoon break from <strong>3:00PM–3:15PM</strong>, and one (1) hour lunch break from <strong>12:00NN–1:00PM</strong>, Monday to Saturday. Sunday is rest day.</p>
        <p>Changes in work schedule shall be communicated by the immediate supervisor to the worker. The worker shall adhere to the schedule; otherwise, the worker shall provide a valid explanation.</p>
      </div>
    )
  },
  {
    id: 6,
    title: "Work Standby Procedure",
    icon: "autorenew",
    content: (
      <div className="space-y-4 text-on-surface-variant leading-relaxed">
        <p>The worker shall be assigned and will be advised of his schedule prior to deployment. However, there will be instances that the worker will be pulled out from his designated job site to be transferred to another job site as need arises. The immediate supervisor shall communicate the changes and timeline to the worker accordingly.</p>
        <p>Any permanent change in the work schedule shall be communicated with the worker and indicated in his work contract.</p>
      </div>
    )
  },
  {
    id: 7,
    title: "Involuntary Termination Procedure",
    icon: "warning",
    content: (
      <div className="space-y-4 text-on-surface-variant leading-relaxed">
        <p>Major offenses include, but are not limited to: gross habitual negligence of duty, serious misconduct, and abandonment of work.</p>
        <div className="pt-2">
          <strong className="text-primary block mb-1">Gross habitual negligence of duty:</strong>
          <p>The worker shall be briefed of his job description upon signing the work contract and deployment; any clarification shall be discussed with the immediate supervisor. Failure to do so with proper investigation and process shall be subject to termination of employment.</p>
        </div>
        <div className="pt-2">
          <strong className="text-primary block mb-1">Serious misconduct:</strong>
          <p>The worker is expected to perform his duty at the job site with proper conduct and respect to co-workers. Any unruly act or misbehavior in the workplace with proper investigation and process shall be subject to termination of employment.</p>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "Return to Work, Job Abandonment, and Separation",
    icon: "undo",
    content: (
      <div className="space-y-4 text-on-surface-variant leading-relaxed">
        <p>Workers returning after absence must follow proper notification and documentation procedures. Unauthorized absence or failure to report for work without valid notice may be considered job abandonment, subject to termination procedures.</p>
        <p>Upon separation, all company property — including uniforms, tools, and equipment — must be returned. Final pay will be released according to company policy and applicable labor regulations, after any lawful deductions.</p>
      </div>
    )
  },
  {
    id: 9,
    title: "Bonus, 13th Month Pay and Other Incentives",
    icon: "redeem",
    content: (
      <div className="space-y-4 text-on-surface-variant leading-relaxed">
        <div className="pt-2">
          <strong className="text-primary block mb-1">Bonus and incentives:</strong>
          <p>Any bonus or extra incentive is solely the prerogative of the employer. This is not in any way mandatory.</p>
        </div>
        <div className="pt-2">
          <strong className="text-primary block mb-1">13th month pay:</strong>
          <p>Workers who have rendered services for one (1) whole month during the calendar year shall be entitled to a 13th month pay, subject to computation based on actual attendance. Any worker who is still employed and actively working in a particular project on December 23 or before shall be entitled to a 13th month pay. Overtime pay and other additional income are not included in the computation.</p>
        </div>
      </div>
    )
  },
  {
    id: 10,
    title: "Grievance Management Procedure",
    icon: "chat_bubble_outline",
    content: (
      <div className="space-y-4 text-on-surface-variant leading-relaxed">
        <p>Grievances are complaints and problems encountered in the workplace. The complaints may be raised on any incident, discrimination, harassment, bullying or any indirect acts not personally directed to the complainant. All concerns shall be directed to the immediate supervisor or any HR/admin officer in the office.</p>
        <p>Complaints, problems and other concerns not raised or coordinated in the office or proper authority shall not be valid and will not be entertained.</p>
        <div className="pt-2">
          <strong className="text-primary block mb-1">Non-retaliation:</strong>
          <p>No retaliatory action may be taken against any worker for reporting suspected violations in good faith. Any allegations of retaliation should be reported immediately to the immediate supervisor or HR/admin officer.</p>
        </div>
      </div>
    )
  },
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
            Employees standards <span className="italic font-serif">and</span> policies
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
                  className={`overflow-hidden transition-all duration-300 ${openId === item.id ? 'max-h-[2000px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
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
