import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
      

<nav className="bg-surface dark:bg-surface text-primary dark:text-on-primary font-label-caps text-label-caps w-full top-0 border-b border-outline-variant/20 sticky z-50">
<div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="font-headline-sm text-headline-sm tracking-tight text-primary dark:text-on-primary">
                RE Lodronio Builders Inc.
            </div>
<div className="hidden md:flex space-x-gutter">
<Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-on-primary transition-colors duration-300 cursor-pointer active:opacity-70 flex items-center h-full pt-1" to="/">Home</Link>
<Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-on-primary transition-colors duration-300 cursor-pointer active:opacity-70 flex items-center h-full pt-1" to="/about">About Us</Link>
<Link className="text-primary dark:text-on-primary border-b border-primary hover:text-primary dark:hover:text-on-primary transition-colors duration-300 cursor-pointer active:opacity-70 flex items-center h-full pt-1" to="/contact">Contact</Link>
<Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-on-primary transition-colors duration-300 cursor-pointer active:opacity-70 flex items-center h-full pt-1" to="/">Policy</Link>
</div>

<button className="md:hidden p-2 text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
</div>
</nav>

<main className="flex-grow flex flex-col max-w-container-max mx-auto w-full">

<section className="w-full px-margin-mobile md:px-margin-desktop py-16 md:py-32 flex flex-col md:flex-row gap-16 md:gap-gutter items-start justify-between">
<div className="md:w-1/2 flex flex-col gap-6">
<p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">( Contact )</p>
<h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary leading-tight">
                    Start the <br />
<span className="italic font-light">conversation.</span>
</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-4">
                    Reach out directly for estimates, site visits, or to discuss the home you want to build.
                </p>
</div>
<div className="md:w-5/12 flex flex-col w-full">

<div className="pb-8 structural-line mb-8">
<p className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">Company</p>
<h2 className="font-headline-md text-headline-md text-primary mb-1">RE Lodronio Builders Inc.</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Formerly REL Builders and Design</p>
</div>

<div className="pb-8 structural-line mb-8">
<p className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">Contact Person</p>
<p className="font-body-md text-body-md text-primary">Ar. Roco E. Lodronio</p>
<p className="font-body-md text-body-md text-on-surface-variant">Architect / Contractor</p>
</div>

<div className="pb-8 structural-line">
<p className="font-label-caps text-label-caps text-on-surface-variant mb-4 uppercase">Office Address</p>
<p className="font-body-md text-body-md text-primary">No. 2 M. Santos Avenue, Santos Village Phase 3</p>
<p className="font-body-md text-body-md text-primary">Barangay Zapote, Las Piñas City, Philippines</p>
</div>
</div>
</section>

<section className="w-full bg-surface-container-low px-margin-mobile md:px-margin-desktop py-16 md:py-32 flex flex-col md:flex-row gap-16 md:gap-gutter">

<div className="md:w-1/2 flex flex-col w-full">
<h2 className="font-headline-md text-headline-md text-primary mb-12">Send a message</h2>
<form className="flex flex-col gap-8 w-full max-w-lg">
<div className="flex flex-col gap-2">
<label className="font-body-md text-body-md text-primary" for="name">Name</label>
<input className="w-full pb-2 text-on-surface-variant font-body-md" id="name" placeholder="Your name" required="" type="text" />
</div>
<div className="flex flex-col gap-2">
<label className="font-body-md text-body-md text-primary" for="email">Email</label>
<input className="w-full pb-2 text-on-surface-variant font-body-md" id="email" placeholder="Your@email.com" required="" type="email" />
</div>
<div className="flex flex-col gap-2">
<label className="font-body-md text-body-md text-primary" for="subject">Subject</label>
<input className="w-full pb-2 text-on-surface-variant font-body-md" id="subject" placeholder="Subject" type="text" />
</div>
<div className="flex flex-col gap-2 mb-4">
<label className="font-body-md text-body-md text-primary" for="message">Message</label>
<textarea className="w-full pb-2 text-on-surface-variant font-body-md resize-none" id="message" placeholder="Type your message here...." required="" rows="4"></textarea>
</div>
<button className="bg-primary text-on-primary font-label-caps text-label-caps py-4 px-8 w-full hover:opacity-90 transition-opacity uppercase tracking-widest" type="submit">
                        Send Message
                    </button>
</form>
</div>

<div className="md:w-5/12 flex flex-col w-full md:pl-8">

<div className="pb-8 structural-line mb-8">
<p className="font-label-caps text-label-caps text-on-surface-variant mb-6 uppercase">Email</p>
<div className="flex flex-col gap-4">
<a className="flex items-center gap-3 font-body-md text-body-md text-primary hover:text-secondary transition-colors" href="mailto:rocolodronio@hotmail.com">
<span className="material-symbols-outlined text-outline" data-icon="mail">mail</span>
                            rocolodronio@hotmail.com
                        </a>
<a className="flex items-center gap-3 font-body-md text-body-md text-primary hover:text-secondary transition-colors" href="mailto:relbuildersanddesign@gmail.com">
<span className="material-symbols-outlined text-outline" data-icon="mail">mail</span>
                            relbuildersanddesign@gmail.com
                        </a>
</div>
</div>

<div className="pb-8 structural-line mb-8">
<p className="font-label-caps text-label-caps text-on-surface-variant mb-6 uppercase">Phone</p>
<div className="flex flex-col gap-4">
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
</div>
</div>

<div className="pb-8 structural-line mb-8">
<p className="font-label-caps text-label-caps text-on-surface-variant mb-6 uppercase">Online</p>
<Link className="flex items-center gap-3 font-body-md text-body-md text-primary hover:text-secondary transition-colors" to="/">
<span className="material-symbols-outlined text-outline" data-icon="public">public</span>
                        RE Lodronio Builders Inc.
                    </Link>
</div>

<div>
<p className="font-label-caps text-label-caps text-on-surface-variant mb-6 uppercase">Visit Us</p>
<Link className="flex items-center gap-3 font-body-md text-body-md text-primary hover:text-secondary transition-colors" to="/">
<span className="material-symbols-outlined text-outline" data-icon="location_on">location_on</span>
                        Open in Google Maps
                    </Link>
</div>
</div>
</section>
</main>

<footer className="bg-surface dark:bg-surface text-primary dark:text-on-primary font-body-md text-body-md w-full bottom-0 border-t border-outline-variant/20 mt-auto">
<div className="flex flex-col md:flex-row justify-between items-center py-8 md:py-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-8">
<div className="font-headline-sm text-headline-sm text-primary dark:text-on-primary">
                © 2024 RE Lodronio Builders Inc.
            </div>
<div className="flex flex-wrap justify-center gap-6">
<Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-on-primary transition-colors duration-300" to="/">Home</Link>
<Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-on-primary transition-colors duration-300" to="/about">About Us</Link>
<Link className="text-primary dark:text-on-primary underline hover:text-primary dark:hover:text-on-primary transition-colors duration-300" to="/contact">Contact</Link>
<Link className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-on-primary transition-colors duration-300" to="/">Policy</Link>
</div>
<div className="text-on-surface-variant text-sm font-label-caps uppercase tracking-widest">
                Building with purpose.
            </div>
</div>
</footer>

    </>
  );
}
