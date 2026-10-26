import React from 'react';
import { ChevronDown } from 'lucide-react';
import { EMAIL } from '../data/siteData';

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
const POLICY_LIST: { title: string; points: string[] }[] = [
    {
        title: 'Privacy Policy',
        points: [
            'When you use WhatsApp, phone, email or the enquiry form, we receive only the details you choose to share, such as your name, phone number and business information.',
            'The enquiry form opens WhatsApp with your message ready. Nothing is sent until you press Send in WhatsApp.',
            'We use your details only to reply to your enquiry and deliver your project.',
            'We do not sell or share your details with third parties.',
            'To ask us to delete your details, message us on WhatsApp or email us.',
        ],
    },
    {
        title: 'Terms of Service',
        points: [
            'Project scope, price and timeline are agreed in writing (WhatsApp or email) before work starts.',
            'Content you provide, such as text, logos and photos, must be yours to use.',
            'Timelines depend on you sending content and feedback on time.',
            'Your first year of domain and hosting is included. You own your domain.',
            'Support covers fixes and small updates within the agreed support period. New pages and new features are quoted separately.',
            'Optional care plans have a minimum term of 3 months, paid in advance.',
        ],
    },
];

export const Policies: React.FC = () => (
    <section id="policies" className="py-10 md:py-14 bg-paper border-b border-ink/15">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="mb-5 flex items-end justify-between gap-4">
                <div className="font-mono text-xs text-vermilion-text uppercase tracking-widest font-bold">
                    [ LEGAL ]
                </div>
                <div className="font-mono text-[11px] text-ink-muted">Last updated: October 2026</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start font-sans">
                {POLICY_LIST.map((p) => (
                    <details
                        key={p.title}
                        className="group bg-card border border-ink/15 rounded-xl shadow-mobile-soft open:border-ink/30 transition-colors"
                    >
                        <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-display font-bold text-base text-ink [&::-webkit-details-marker]:hidden">
                            <span>{p.title}</span>
                            <ChevronDown className="w-5 h-5 text-vermilion-text transition-transform duration-300 group-open:rotate-180" />
                        </summary>
                        <div className="border-t border-ink/10 px-5 pb-5 pt-4">
                            <ul className="space-y-2.5 text-sm leading-relaxed text-ink-muted">
                                {p.points.map((pt) => (
                                    <li key={pt} className="flex items-start gap-2.5">
                                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-vermilion-text" />
                                        <span>{pt}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-xs text-ink-muted">
                                Questions? Email{' '}
                                <a href={`mailto:${EMAIL}`} className="font-bold text-vermilion-text underline underline-offset-2">
                                    {EMAIL}
                                </a>
                            </p>
                        </div>
                    </details>
                ))}
            </div>
        </div>
    </section>
);