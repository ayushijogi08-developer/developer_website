import React from 'react';
import { ChevronDown } from 'lucide-react';

/* ─────────────────────────────────────────────
   EDIT THESE VALUES (only real information!)
   ───────────────────────────────────────────── */

// Add real testimonials only. While this list is empty, the section stays hidden.
// Example item:
// { quote: "Short real quote.", name: "Client Name", business: "Business Name" }
export const TESTIMONIALS: { quote: string; name: string; business: string }[] = [];

// Path to a short intro video inside /public (example: "/intro.mp4"). Empty = hidden.
export const INTRO_VIDEO_SRC = '';

// Your Google Business / Google reviews link. Empty = hidden.
export const GOOGLE_REVIEW_LINK = '';

// Confirm these match what you really offer
export const PRICE_TEXT = 'From ₹9,999';
export const TIMELINE_TEXT = 'Live in 1–3 weeks';

/* One line per demo, shown on each portfolio card. Keys = project ids. */


/* ───────── 1. Price + timeline strip (place right after Hero) ───────── */
export const TrustStrip: React.FC = () => (
    <div className="bg-paper-dark/50 border-b border-ink/15">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center font-mono text-xs sm:text-sm text-ink">
            <div><span className="text-vermilion-text font-bold">{PRICE_TEXT}</span> · clear pricing, no hidden fees</div>
            <div><span className="text-vermilion-text font-bold">{TIMELINE_TEXT}</span> · from first call to launch</div>
            <div><span className="text-vermilion-text font-bold">WhatsApp support</span> · talk directly to the developer</div>
        </div>
    </div>
);

/* ───────── 2. Testimonials ───────── */
export const Testimonials: React.FC = () => {
    if (TESTIMONIALS.length === 0) return null;
    return (
        <section id="testimonials" className="py-12 md:py-20 bg-paper border-b border-ink/15">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="font-mono text-xs text-vermilion-text uppercase tracking-widest mb-2 font-bold">
                    [ CLIENT WORDS ]
                </div>
                <h2 className="font-display font-black text-[clamp(1.75rem,6vw,3rem)] uppercase tracking-tight text-ink mb-8">
                    What clients say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {TESTIMONIALS.map((t, i) => (
                        <figure key={i} className="bg-card border border-ink/15 rounded-lg p-5 sm:p-6">
                            <blockquote className="font-sans text-base text-ink leading-relaxed">“{t.quote}”</blockquote>
                            <figcaption className="mt-4 font-mono text-xs text-ink-muted">
                                <strong className="text-ink">{t.name}</strong> · {t.business}
                            </figcaption>
                        </figure>
                    ))}
                </div>
                {GOOGLE_REVIEW_LINK && (
                    <a
                        href={GOOGLE_REVIEW_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-6 font-sans font-bold text-sm text-vermilion-text underline underline-offset-4"
                    >
                        Read our Google reviews →
                    </a>
                )}
            </div>
        </section>
    );
};

/* ───────── 3. What happens after launch (place after Pricing) ───────── */
const AFTER_LAUNCH = [
    { title: 'Domain & hosting', text: 'Set up for you. Included for the first year; renewal cost is told upfront.' },
    { title: 'Support', text: '1 year of support on WhatsApp for fixes and small updates.' },
    { title: 'Ownership', text: 'Your content and your business details stay yours.' },
    { title: 'Google setup', text: 'Google Business profile and Maps pin set up so customers can find you.' },
];

export const AfterLaunch: React.FC = () => (
    <section id="after-launch" className="py-12 md:py-20 bg-paper border-b border-ink/15">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="font-mono text-xs text-vermilion-text uppercase tracking-widest mb-2 font-bold">
                [ AFTER LAUNCH ]
            </div>
            <h2 className="font-display font-black text-[clamp(1.75rem,6vw,3rem)] uppercase tracking-tight text-ink mb-8">
                No surprises <span className="font-serif italic font-normal text-vermilion-text lowercase">after launch.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {AFTER_LAUNCH.map((item) => (
                    <div key={item.title} className="bg-card border border-ink/15 rounded-lg p-5">
                        <h3 className="font-display font-bold text-lg text-ink">{item.title}</h3>
                        <p className="font-sans text-sm text-ink-muted mt-1 leading-relaxed">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

/* ───────── 4. Intro video (hidden until INTRO_VIDEO_SRC is set) ───────── */
export const IntroVideo: React.FC = () => {
    if (!INTRO_VIDEO_SRC) return null;
    return (
        <section id="intro-video" className="py-12 md:py-20 bg-paper-dark/40 border-b border-ink/15">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
                <h2 className="font-display font-black text-[clamp(1.5rem,5vw,2.5rem)] uppercase tracking-tight text-ink mb-6">
                    Meet your developer
                </h2>
                <video
                    src={INTRO_VIDEO_SRC}
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full rounded-lg border border-ink/15"
                />
            </div>
        </section>
    );
};

/* ───────── 5. Privacy & Terms (place just above Footer) ───────── */
export const Policies: React.FC = () => (
    <section id="policies" className="py-10 md:py-14 bg-paper border-b border-ink/15">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                    <div className="font-mono text-xs text-vermilion-text uppercase tracking-widest font-bold mb-1">
                        [ LEGAL & TRANSPARENCY ]
                    </div>
                    <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-ink">
                        Privacy Policy &amp; Terms of Service
                    </h2>
                </div>
                <div className="font-mono text-xs text-ink-muted">Last updated: October 26, 2026</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start font-sans">
                {/* ─── PRIVACY POLICY ACCORDION ─── */}
                <details
                    data-lenis-prevent
                    className="group bg-card border border-ink/15 rounded-xl shadow-mobile-soft open:border-ink/30 transition-colors"
                >
                    <summary className="flex min-h-[58px] cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-display font-bold text-base text-ink select-none [&::-webkit-details-marker]:hidden">
                        <div className="flex items-center gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-vermilion-text" />
                            <span>Privacy Policy</span>
                        </div>
                        <ChevronDown className="w-5 h-5 text-vermilion-text transition-transform duration-300 group-open:rotate-180" />
                    </summary>

                    <div
                        data-lenis-prevent
                        className="border-t border-ink/10 px-5 pb-6 pt-5 max-h-[65vh] sm:max-h-[560px] overflow-y-auto overscroll-contain pr-3 dropdown-scroll text-ink space-y-4 touch-pan-y"
                    >
                        <div className="border-b border-ink/10 pb-3">
                            <p className="font-mono text-xs text-ink-muted">Kunj Technologies · Last updated: October 26, 2026</p>
                            <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                                This Privacy Policy explains what personal information Kunj Technologies collects when you visit our website at{' '}
                                <a href="https://developer-website-orpin.vercel.app" target="_blank" rel="noopener noreferrer" className="text-vermilion-text underline">
                                    https://developer-website-orpin.vercel.app
                                </a>{' '}
                                or contact us, how we use it, and the choices you have. We build websites and mobile apps for local businesses, and we keep the data we collect to what we need to respond to you and deliver our work.
                            </p>
                            <p className="mt-2 text-xs text-ink-muted italic">
                                By using our website you agree to this policy. If you do not agree, please do not use the website.
                            </p>
                        </div>

                        {/* 1. Who we are */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">1. Who we are</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                Kunj Technologies is a web and app development business based in Akola, Maharashtra, India.
                            </p>
                            <ul className="text-xs sm:text-sm text-ink-muted space-y-1 list-disc pl-4">
                                <li><strong>Contact for privacy questions:</strong> <a href="mailto:darshanjogi36@gmail.com" className="text-vermilion-text underline">darshanjogi36@gmail.com</a></li>
                                <li><strong>Phone / WhatsApp:</strong> <a href="tel:+919511817720" className="text-vermilion-text underline">+91 9511817720</a></li>
                                <li><strong>Location:</strong> Akola, Maharashtra, India</li>
                            </ul>
                        </div>

                        {/* 2. Information we collect */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">2. Information we collect</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                <strong>Information you give us:</strong> When you fill in a contact or enquiry form, message us on WhatsApp, call, or email us, we may collect:
                            </p>
                            <ul className="text-xs sm:text-sm text-ink-muted space-y-1 list-disc pl-4">
                                <li>Your name</li>
                                <li>Phone number and email address</li>
                                <li>Your business name and type</li>
                                <li>The details of your project or enquiry</li>
                            </ul>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mt-2">
                                <strong>Information collected automatically:</strong> When you visit the site, we or our hosting providers may collect basic technical data such as your IP address, browser type, device type, pages visited, time spent and the website you came from. This is used to keep the site running and to understand how it is used.
                            </p>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                <strong>Cookies:</strong> Our website does not use cookies other than those strictly needed for it to work.
                            </p>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                We do not knowingly collect sensitive personal data such as financial account details, health information or government ID numbers through the website. Please do not send these to us.
                            </p>
                        </div>

                        {/* 3. How we use your information */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">3. How we use your information</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">We use your information to:</p>
                            <ul className="text-xs sm:text-sm text-ink-muted space-y-1 list-disc pl-4">
                                <li>Reply to your enquiries and send quotes or proposals</li>
                                <li>Plan, build, deliver and support the projects you hire us for</li>
                                <li>Send project updates, invoices and service messages</li>
                                <li>Improve the website, its speed and its content</li>
                                <li>Keep the website secure and prevent misuse</li>
                                <li>Meet legal, tax and accounting obligations</li>
                            </ul>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mt-1">
                                We do not sell your personal information. We send marketing messages only if you have agreed to receive them, and you can opt out at any time.
                            </p>
                        </div>

                        {/* 4. Legal basis */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">4. Legal basis</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                We process your information with your consent (for example, when you submit a form), to carry out a service or contract with you, and where required by applicable Indian law, including the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000.
                            </p>
                        </div>

                        {/* 5. Who we share information with */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">5. Who we share information with</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">We share information only where needed and only with:</p>
                            <ul className="text-xs sm:text-sm text-ink-muted space-y-1 list-disc pl-4">
                                <li>Service providers that help us run the business, such as website hosting (for example Vercel), email and communication tools, and payment or accounting services.</li>
                                <li>Professional advisers such as accountants or lawyers.</li>
                                <li>Authorities, if the law requires it or to protect our legal rights.</li>
                            </ul>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mt-1">
                                These providers may process data on servers outside India. We choose providers that apply reasonable security practices.
                            </p>
                        </div>

                        {/* 6. Client project data */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">6. Client project data</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                If you hire us, you may give us business content, customer lists, logins or other materials. We use these only to deliver your project, keep them confidential, and delete or return them when the work ends, unless the law or our agreement requires us to keep them.
                            </p>
                        </div>

                        {/* 7. How long we keep information */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">7. How long we keep information</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                We keep enquiry data for as long as needed to respond and follow up, generally up to 12 months if no project follows. Client and invoice records are kept for the period required by Indian tax and accounting law. After that, we delete or anonymise them.
                            </p>
                        </div>

                        {/* 8. Security */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">8. Security</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                We use reasonable technical and organizational measures, such as HTTPS and limited access, to protect your information. No website or method of transmission is completely secure, so we cannot guarantee absolute security.
                            </p>
                        </div>

                        {/* 9. Your rights */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">9. Your rights</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">Subject to applicable law, you may ask us to:</p>
                            <ul className="text-xs sm:text-sm text-ink-muted space-y-1 list-disc pl-4">
                                <li>Tell you what personal data we hold about you</li>
                                <li>Correct or update inaccurate data</li>
                                <li>Delete your data</li>
                                <li>Withdraw your consent to our use of it</li>
                                <li>Raise a complaint or grievance</li>
                            </ul>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mt-1">
                                To make a request, email <a href="mailto:darshanjogi36@gmail.com" className="text-vermilion-text underline font-bold">darshanjogi36@gmail.com</a>. We aim to respond within 10 days.
                            </p>
                        </div>

                        {/* 10. Children */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">10. Children</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                Our website and services are meant for businesses and adults. We do not knowingly collect personal data from anyone under 18. If you believe a child has sent us information, contact us and we will delete it.
                            </p>
                        </div>

                        {/* 11. Third-party links */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">11. Third-party links</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                Our website may link to other sites, such as social media pages or client websites. We are not responsible for their privacy practices, so please read their policies.
                            </p>
                        </div>

                        {/* 12. Changes to this policy */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">12. Changes to this policy</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                We may update this policy from time to time. The latest version will always be on this page with a new “Last updated” date.
                            </p>
                        </div>

                        {/* 13. Grievance contact */}
                        <div className="space-y-1.5 pt-2 border-t border-ink/10">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">13. Grievance Contact</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                For questions, complaints or requests about your data:
                            </p>
                            <ul className="text-xs sm:text-sm text-ink-muted space-y-1 list-disc pl-4">
                                <li><strong>Grievance contact:</strong> Darshan Jogi</li>
                                <li><strong>Email:</strong> <a href="mailto:darshanjogi36@gmail.com" className="text-vermilion-text underline">darshanjogi36@gmail.com</a></li>
                                <li><strong>Phone:</strong> <a href="tel:+919511817720" className="text-vermilion-text underline">+91 9511817720</a></li>
                                <li><strong>Address:</strong> Akola, Maharashtra, India</li>
                            </ul>
                        </div>
                    </div>
                </details>

                {/* ─── TERMS OF SERVICE ACCORDION ─── */}
                <details
                    data-lenis-prevent
                    className="group bg-card border border-ink/15 rounded-xl shadow-mobile-soft open:border-ink/30 transition-colors"
                >
                    <summary className="flex min-h-[58px] cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-display font-bold text-base text-ink select-none [&::-webkit-details-marker]:hidden">
                        <div className="flex items-center gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-vermilion-text" />
                            <span>Terms of Service</span>
                        </div>
                        <ChevronDown className="w-5 h-5 text-vermilion-text transition-transform duration-300 group-open:rotate-180" />
                    </summary>

                    <div
                        data-lenis-prevent
                        className="border-t border-ink/10 px-5 pb-6 pt-5 max-h-[65vh] sm:max-h-[560px] overflow-y-auto overscroll-contain pr-3 dropdown-scroll text-ink space-y-4 touch-pan-y"
                    >
                        <div className="border-b border-ink/10 pb-3">
                            <p className="font-mono text-xs text-ink-muted">Kunj Technologies · Last updated: October 26, 2026</p>
                            <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                                These Terms of Service (“Terms”) govern your use of the Kunj Technologies website at{' '}
                                <a href="https://developer-website-orpin.vercel.app" target="_blank" rel="noopener noreferrer" className="text-vermilion-text underline">
                                    https://developer-website-orpin.vercel.app
                                </a>{' '}
                                and the website design, web development and mobile app services we provide. By using the website or hiring us, you agree to these Terms. If you do not agree, please do not use the website or our services.
                            </p>
                        </div>

                        {/* 1. About us */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">1. About us</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                Kunj Technologies (“we”, “us”, “our”) is a web and app development business based in Akola, Maharashtra, India. You can reach us at{' '}
                                <a href="mailto:darshanjogi36@gmail.com" className="text-vermilion-text underline">darshanjogi36@gmail.com</a> or{' '}
                                <a href="tel:+919511817720" className="text-vermilion-text underline">+91 9511817720</a>.
                            </p>
                        </div>

                        {/* 2. Our services */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">2. Our services</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                We design and build websites and mobile apps for local businesses and regional enterprises, and may also provide hosting setup, maintenance and support. The exact scope, features, timeline and price of each project are set out in a written quote, proposal or agreement (“Project Agreement”). If a Project Agreement conflicts with these Terms, the Project Agreement applies to that project.
                            </p>
                        </div>

                        {/* 3. Using this website */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">3. Using this website</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">You agree to use the website lawfully and not to:</p>
                            <ul className="text-xs sm:text-sm text-ink-muted space-y-1 list-disc pl-4">
                                <li>Attempt to hack, disrupt or overload the website or its servers</li>
                                <li>Copy, scrape or resell our content without permission</li>
                                <li>Send harmful code, spam or false information</li>
                                <li>Use the website to harm others or break any law</li>
                            </ul>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mt-1">
                                We may suspend or block access if these Terms are broken.
                            </p>
                        </div>

                        {/* 4. Quotes, payments and fees */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">4. Quotes, payments and fees</h4>
                            <ul className="text-xs sm:text-sm text-ink-muted space-y-1 list-disc pl-4">
                                <li>Prices are quoted in Indian Rupees (INR) unless stated otherwise, and applicable taxes such as GST are added where required.</li>
                                <li>Unless the Project Agreement says otherwise, we require an advance of 50% before work begins, with the balance due before launch.</li>
                                <li>Payments are due within 7 days of invoice. We may pause work on overdue invoices.</li>
                                <li>Advance payments are non-refundable once work has commenced.</li>
                                <li>Third-party costs such as domain names, hosting, paid plugins, app store fees and SMS or email services are paid by you unless the quote says we cover them.</li>
                            </ul>
                        </div>

                        {/* 5. What we need from you */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">5. What we need from you</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                To finish on time, you agree to give us accurate content, images, logos, logins and feedback promptly. Delays on your side can move the delivery date. You confirm that you own, or have the right to use, all materials you give us.
                            </p>
                        </div>

                        {/* 6. Revisions and changes */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">6. Revisions and changes</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                Each project includes 2 rounds of revisions within the agreed scope. Requests beyond the agreed scope, such as new pages, features or redesigns, are quoted and billed separately.
                            </p>
                        </div>

                        {/* 7. Ownership and intellectual property */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">7. Ownership and intellectual property</h4>
                            <ul className="text-xs sm:text-sm text-ink-muted space-y-1 list-disc pl-4">
                                <li><strong>Your content:</strong> You keep ownership of all content and materials you provide.</li>
                                <li><strong>Our work:</strong> After full payment, you own the final website or app design and custom code we built for you, unless the Project Agreement says otherwise.</li>
                                <li><strong>Our tools:</strong> We keep ownership of our own tools, templates, code libraries and know-how, and of any open-source or third-party components, which stay under their own licenses.</li>
                                <li><strong>Portfolio:</strong> Unless you tell us in writing not to, we may show the finished project in our portfolio and marketing.</li>
                                <li>Until full payment is received, we keep ownership of the work and may withhold delivery.</li>
                            </ul>
                        </div>

                        {/* 8. Hosting, maintenance and support */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">8. Hosting, maintenance and support</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                Hosting, maintenance and support are included only if the Project Agreement says so. Free support period: 30 days after launch for fixing bugs in what we built. Ongoing maintenance, updates and changes after that are charged separately.
                            </p>
                        </div>

                        {/* 9. Confidentiality and privacy */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">9. Confidentiality and privacy</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                We keep your non-public business information confidential and use it only to deliver your project. How we handle personal data is explained in our Privacy Policy, which forms part of these Terms.
                            </p>
                        </div>

                        {/* 10. Third-party services */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">10. Third-party services</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                Your project may rely on services we do not control, such as hosting providers, payment gateways, app stores, maps or analytics. We are not responsible for outages, policy changes or fees from those providers.
                            </p>
                        </div>

                        {/* 11. No guarantees on results */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">11. No guarantees on results</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                We build with care, but we cannot promise specific business results such as rankings, traffic, enquiries or sales. Websites and apps may occasionally contain errors or be unavailable because of maintenance or events beyond our control.
                            </p>
                        </div>

                        {/* 12. Limitation of liability */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">12. Limitation of liability</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                To the fullest extent allowed by law, Kunj Technologies is not liable for indirect or consequential losses, including lost profits, lost data or loss of business. Our total liability for any claim relating to a project is limited to the amount you paid us for that project. Nothing in these Terms limits liability that cannot be limited under Indian law.
                            </p>
                        </div>

                        {/* 13. Cancellation and termination */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">13. Cancellation and termination</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                You may cancel a project in writing at any time. You will pay for work completed up to the cancellation date and any non-refundable costs we have already incurred. We may end a project if you do not pay, do not respond for a long period, or break these Terms. After termination, you receive the work completed and paid for.
                            </p>
                        </div>

                        {/* 14. Changes to these Terms */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">14. Changes to these Terms</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                We may update these Terms from time to time. The latest version will be on this page with a new “Last updated” date. Continuing to use the website or our services after a change means you accept it. Changes do not affect projects already agreed in a Project Agreement.
                            </p>
                        </div>

                        {/* 15. Governing law and disputes */}
                        <div className="space-y-1.5">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">15. Governing law and disputes</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                These Terms are governed by the laws of India. We will first try to resolve any dispute through friendly discussion. If that fails, the courts at Akola, Maharashtra will have exclusive jurisdiction.
                            </p>
                        </div>

                        {/* 16. Contact */}
                        <div className="space-y-1.5 pt-2 border-t border-ink/10">
                            <h4 className="font-display font-bold text-sm text-ink uppercase tracking-tight">16. Contact</h4>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                Questions about these Terms? Contact Kunj Technologies at{' '}
                                <a href="mailto:darshanjogi36@gmail.com" className="text-vermilion-text underline">darshanjogi36@gmail.com</a>,{' '}
                                <a href="tel:+919511817720" className="text-vermilion-text underline">+91 9511817720</a>.
                            </p>
                        </div>
                    </div>
                </details>
            </div>
        </div>
    </section>
);