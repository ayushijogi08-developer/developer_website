import React, { useRef, useEffect, useState } from 'react';
import { getSectionConfig } from '../config/sectionsConfig';
import { Check, Sparkles, X } from 'lucide-react';
import { Reveal } from '../components/motion/Reveal';
import { type CtaConfig } from '../data/cta';
import { CtaButton } from '../components/CtaButton';
import { BRAND_NAME } from '../data/config';

/* ─────────────────────────────────────────────
   EDIT PRICES AND FEATURES HERE
   ───────────────────────────────────────────── */

type SiteType = 'static' | 'dynamic';

interface Plan {
  name: string;
  price: string;
  priceNote: string;
  idealFor: string;
  pages: string;
  seo: string;
  recommended?: boolean;
  features: string[];
  excluded?: string[];
}

const PLANS: Record<SiteType, Plan[]> = {
  static: [
    {
      name: 'Basic',
      price: '₹10,000 – ₹15,000',
      priceNote: 'one-time',
      idealFor: 'Small shops and service providers who need a clean web presence.',
      pages: '1–3 pages',
      seo: 'None',
      features: [
        '1–3 custom designed pages',
        'Mobile-first responsive layout',
        'One-tap Call & WhatsApp buttons',
        'Google Maps pin & location setup',

        '1-year support included',
      ],

    },
    {
      name: 'Standard',
      price: '₹15,000 – ₹20,000',
      priceNote: 'one-time',
      idealFor: 'Growing businesses with products, services and a photo gallery.',
      pages: '4–7 pages',
      seo: 'Basic',
      recommended: true,
      features: [
        '4–7 custom designed pages',
        'Product / service catalogue',
        'Photo gallery',
        'Enquiry / quotation request form',
        'Google Business profile setup',
        'Basic SEO: titles, descriptions, sitemap, speed tuning',

        '1-year support included',
      ],
    },
    {
      name: 'Premium',
      price: 'From ₹20,000',
      priceNote: 'final quote after discussion',
      idealFor: 'Established businesses wanting a full-featured digital presence.',
      pages: '8+ pages',
      seo: 'Advanced',
      features: [
        '8+ pages, fully custom design',
        'Interactive tools (calculators, comparisons)',
        'Multi-location / branch listings',
        'PDF downloads & lead tracking (analytics)',
        'Advanced SEO: keyword research, schema, Search Console',

        'Priority support',
      ],
    },
  ],
  dynamic: [
    {
      name: 'Basic',
      price: '₹25,000 – ₹35,000',
      priceNote: 'one-time',
      idealFor: 'Businesses that want to update their own content without a developer.',
      pages: '1–3 pages',
      seo: 'None',
      features: [
        '1–3 pages with a simple admin panel',
        'Edit text, photos and prices yourself',
        'Enquiries saved in a database',
        'Secure admin login',

        '1-year support included',
      ],

    },
    {
      name: 'Standard',
      price: '₹35,000 – ₹55,000',
      priceNote: 'one-time',
      idealFor: 'Businesses taking bookings, enquiries or managing a catalogue online.',
      pages: '4–7 pages',
      seo: 'Basic',
      recommended: true,
      features: [
        '4–7 pages with a full admin dashboard',
        'Catalogue / listings you can add and edit',
        'Online booking or enquiry management',
        'Email / WhatsApp notifications',
        'Basic SEO: titles, descriptions, sitemap, speed tuning',

        '1-year support included',
      ],
    },
    {
      name: 'Premium',
      price: 'From ₹55,000',
      priceNote: 'final quote after discussion',
      idealFor: 'Online stores, ordering systems and custom business apps.',
      pages: '8+ pages',
      seo: 'Advanced',
      features: [
        'Online ordering or e-commerce with payments',
        'Customer accounts & order tracking',
        'Admin dashboard with reports',
        'Custom features built for your workflow',
        'Advanced SEO: keyword research, schema, Search Console',

        'Priority support',
      ],
    },
  ],
};

const MAINTENANCE = [
  {
    name: 'Care Basic',
    price: '₹499 / month',
    points: ['Uptime monitoring', 'Monthly backup', 'Up to 2 small content edits / month'],
  },
  {
    name: 'Care Plus',
    price: '₹999 / month',
    points: ['Everything in Care Basic', 'Up to 5 content edits / month', 'Monthly speed & SEO check'],
  },
  {
    name: 'Care Pro',
    price: '₹1,999 / month',
    points: ['Everything in Care Plus', 'Up to 10 edits / month', 'Priority replies on WhatsApp'],
  },
];

/* ───────── component ───────── */

export const Pricing: React.FC = () => {
  const sectionInfo = getSectionConfig('pricing');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [siteType, setSiteType] = useState<SiteType>('static');
  const [selected, setSelected] = useState<string>('Standard');

  const plans = PLANS[siteType];

  // On mobile, centre the recommended (middle) plan on load
  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.clientWidth * 0.88;
      container.scrollLeft = cardWidth * 0.85;
    }
  }, []);

  const buildCta = (plan: Plan): CtaConfig => {
    const label = `${plan.name} ${siteType} website plan (${plan.price})`;
    return {
      id: `cta-pricing-${siteType}-${plan.name.toLowerCase()}`,
      label: `Start with ${plan.name}`,
      style: 'outline',
      destination: '#contact',
      prefillMessage: `I am interested in the ${label}.`,
      whatsappMessage: `Hi ${BRAND_NAME}! I am interested in the ${label}.`,
    };
  };

  return (
    <section id="pricing" className="py-12 md:py-24 bg-grain border-b border-ink/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <Reveal>
          <div className="mb-8 pb-4 border-b border-ink/15">
            <div className="font-mono text-xs text-vermilion-text uppercase tracking-widest mb-1.5 font-bold">
              [ SECTION {sectionInfo.number} ] • PRICING
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <h2 className="font-display font-black text-[clamp(1.85rem,6vw,3.75rem)] uppercase tracking-tight text-ink leading-none">
                Simple{' '}
                <span className="font-serif italic font-normal text-vermilion-text lowercase block sm:inline">
                  pricing.
                </span>
              </h2>
              <p className="font-sans text-ink-muted text-sm sm:text-base max-w-md leading-relaxed">
                No hidden fees, no agency bloat. Clear scopes with 1 year support included.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Static / Dynamic toggle */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="inline-flex rounded-lg border-2 border-ink bg-card p-1" role="tablist" aria-label="Website type">
            {(['static', 'dynamic'] as SiteType[]).map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={siteType === t}
                onClick={() => setSiteType(t)}
                className={`px-5 py-2 rounded-md font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors min-h-[40px] ${siteType === t ? 'bg-ink text-paper' : 'text-ink hover:bg-ink/10'
                  }`}
              >
                {t === 'static' ? 'Static Website' : 'Dynamic Website'}
              </button>
            ))}
          </div>
          <p className="font-sans text-xs sm:text-sm text-ink-muted text-center max-w-xl">
            {siteType === 'static'
              ? 'Static: fast, simple sites where you ask me to make changes. Best for showing your business.'
              : 'Dynamic: sites with an admin panel and database. You can update content, take bookings or orders.'}
          </p>
        </div>

        <p className="text-center font-mono text-xs font-bold text-vermilion-text mb-2">
          Every plan includes 1-year domain, hosting and support.
        </p>

        {/* Plans: swipe carousel on mobile, grid on desktop */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 scrollbar-none pt-6 pb-6 px-1 md:px-0 md:grid md:grid-cols-3 md:gap-6 items-stretch"
        >
          {plans.map((plan) => {
            const isSelected = selected === plan.name;

            return (
              <div
                key={plan.name}
                role="button"
                tabIndex={0}
                aria-pressed={isSelected}
                onClick={() => setSelected(plan.name)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelected(plan.name);
                  }
                }}
                className={`w-[88vw] max-w-[340px] flex-shrink-0 snap-center md:w-auto relative bg-card rounded-lg flex flex-col justify-between transition-all duration-300 cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-vermilion/40 ${isSelected
                  ? 'border-2 border-vermilion-text shadow-lift ring-4 ring-vermilion/20 z-20'
                  : 'border border-ink/15 shadow-mobile-soft md:shadow-card z-10 hover:border-ink/40'
                  }`}
              >
                {/* Badge: Recommended stays on Standard; selected plan shows "Your choice" */}
                {(plan.recommended || isSelected) && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 bg-vermilion-text text-paper font-mono text-xs font-extrabold tracking-wider px-6 py-1.5 min-w-[170px] justify-center rounded-badge shadow-md border-2 border-ink whitespace-nowrap flex items-center gap-2 pointer-events-none">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    <span>{plan.recommended ? 'RECOMMENDED' : 'YOUR CHOICE'}</span>
                  </div>
                )}

                <div className={`p-5 sm:p-6 ${isSelected ? 'bg-paper-dark/40' : ''}`}>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-ink mb-1">{plan.name}</h3>
                  <div className="font-display font-black text-2xl sm:text-[1.7rem] text-vermilion-text leading-tight">
                    {plan.price}
                  </div>
                  <div className="font-mono text-[11px] text-ink-muted mb-3">{plan.priceNote}</div>
                  <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed min-h-[40px]">
                    {plan.idealFor}
                  </p>

                  <dl className="mt-4 grid grid-cols-2 gap-2 font-mono text-[11px] sm:text-xs">
                    <div className="bg-ink/5 rounded px-2.5 py-2">
                      <dt className="text-ink-muted uppercase">Pages</dt>
                      <dd className="font-bold text-ink">{plan.pages}</dd>
                    </div>
                    <div className="bg-ink/5 rounded px-2.5 py-2">
                      <dt className="text-ink-muted uppercase">SEO</dt>
                      <dd className="font-bold text-ink">{plan.seo}</dd>
                    </div>
                  </dl>
                </div>

                <div className="flex-1 p-5 sm:p-6 pt-0 border-t border-ink/10 flex flex-col justify-between">
                  <ul className="space-y-2.5 my-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <div className={`mt-0.5 rounded-full p-0.5 flex-shrink-0 ${isSelected ? 'bg-vermilion-text text-paper' : 'bg-ink/10 text-ink'}`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="font-sans text-xs sm:text-sm text-ink-muted leading-snug">{feature}</span>
                      </li>
                    ))}
                    {plan.excluded?.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 opacity-60">
                        <div className="mt-0.5 rounded-full p-0.5 flex-shrink-0 bg-ink/10 text-ink">
                          <X className="w-3 h-3" />
                        </div>
                        <span className="font-sans text-xs sm:text-sm text-ink-muted leading-snug line-through">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <CtaButton
                      cta={buildCta(plan)}
                      variant={isSelected ? 'primary' : 'outline'}
                      className="w-full justify-center"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-2 text-center font-mono text-xs sm:text-sm font-bold text-ink">
          Static websites starting from ₹9,999. Dynamic websites starting from ₹24,999.
        </p>
        <p className="mt-2 text-center font-sans text-xs text-ink-muted max-w-2xl mx-auto leading-relaxed">
          Final price depends on your content and features. Payment gateway fees, paid third-party services and
          SMS / WhatsApp API charges are extra.
        </p>

        {/* Domain, hosting & maintenance */}
        <div id="domain-hosting" className="mt-14 md:mt-20">
          <div className="mb-6 pb-3 border-b border-ink/15">
            <div className="font-mono text-xs text-vermilion-text uppercase tracking-widest mb-1.5 font-bold">
              [ DOMAIN, HOSTING & MAINTENANCE ]
            </div>
            <h3 className="font-display font-black text-[clamp(1.4rem,4.5vw,2.25rem)] uppercase tracking-tight text-ink leading-none">
              What it costs to <span className="font-serif italic font-normal text-vermilion-text lowercase">keep it running.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-card border border-ink/15 rounded-lg p-5 sm:p-6">
              <h4 className="font-display font-bold text-lg text-ink mb-1">Domain name</h4>
              <p className="font-sans text-sm text-ink-muted leading-relaxed">
                Your web address (like yourbusiness.com). I register it in your name and connect it to your website.
              </p>
              <ul className="mt-3 space-y-1.5 font-sans text-sm text-ink-muted">
                <li>• First year is included in every plan</li>
                <li>• Renewal after year 1: roughly ₹600 – ₹1,500 per year (.in / .com)</li>
                <li>• You own the domain, and I tell you the renewal date in advance</li>
              </ul>
            </div>

            <div className="bg-card border border-ink/15 rounded-lg p-5 sm:p-6">
              <h4 className="font-display font-bold text-lg text-ink mb-1">Hosting</h4>
              <p className="font-sans text-sm text-ink-muted leading-relaxed">
                The server that keeps your website online, fast and secure (with SSL / https).
              </p>
              <ul className="mt-3 space-y-1.5 font-sans text-sm text-ink-muted">
                <li>• First year is included in every plan</li>
                <li>• Static websites: renewal is usually ₹0 – ₹3,000 per year</li>
                <li>• Dynamic websites (database + admin): usually ₹3,000 – ₹8,000 per year</li>
              </ul>
            </div>
          </div>

          <p className="mt-6 mb-3 font-mono text-xs text-ink-muted text-center uppercase tracking-wider">
            Optional maintenance plans (after your included first year of support)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {MAINTENANCE.map((m) => (
              <div key={m.name} className="bg-card border border-ink/15 rounded-lg p-5">
                <h4 className="font-display font-bold text-lg text-ink">{m.name}</h4>
                <div className="font-display font-black text-xl text-vermilion-text mb-2">{m.price}</div>
                <ul className="space-y-1.5 font-sans text-sm text-ink-muted">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-vermilion-text" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center font-sans text-xs text-ink-muted max-w-2xl mx-auto leading-relaxed">
            Bigger changes such as new pages or new features are quoted separately. Costs shown for renewals are
            typical market ranges and may change with the provider.
          </p>
        </div>

      </div>
    </section>
  );
};