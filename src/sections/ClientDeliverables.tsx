import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, EMAIL, BRAND_NAME } from '../data/siteData';
import { getSectionConfig } from '../config/sectionsConfig';
import { Mail, PhoneCall, Send, CheckCircle2, RefreshCw } from 'lucide-react';
import { Reveal } from '../components/motion/Reveal';

export const ClientDeliverables: React.FC = () => {
  const sectionInfo = getSectionConfig('contact');
  const [formData, setFormData] = useState({ name: '', phone: '', industry: '', webOrMaps: '', message: '' });
  const [phoneError, setPhoneError] = useState('');
  const [industryError, setIndustryError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handlePrefill = (e: Event) => {
      const customEvent = e as CustomEvent<{ message?: string; industry?: string }>;
      if (customEvent.detail?.message) {
        setFormData(prev => ({ ...prev, message: customEvent.detail.message! }));
      }
      if (customEvent.detail?.industry) {
        setFormData(prev => ({ ...prev, industry: customEvent.detail.industry! }));
      }
    };
    window.addEventListener('prefill-contact-form', handlePrefill);
    return () => window.removeEventListener('prefill-contact-form', handlePrefill);
  }, []);

  const validatePhone = (phoneStr: string) => {
    const cleanPhone = phoneStr.replace(/[^0-9+]/g, '');
    return cleanPhone.length >= 10;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    if (!formData.industry) {
      setIndustryError('Please select your business type.');
      return;
    }
    setIndustryError('');

    if (!validatePhone(formData.phone)) {
      setPhoneError('Please enter a valid 10-digit mobile number.');
      return;
    }
    setPhoneError('');

    const mapsInfo = formData.webOrMaps ? ` Existing Link: ${formData.webOrMaps}.` : '';
    const customMessage = `Hi ${BRAND_NAME}! My name is ${formData.name} (${formData.phone}). Business Type: ${formData.industry}.${mapsInfo} Note: ${formData.message || 'I want to get a free homepage preview.'}`;
    const targetUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(customMessage)}`;

    // // CHANGED: Secure external window open with noopener,noreferrer
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormData({ name: '', phone: '', industry: '', webOrMaps: '', message: '' });
    setFormSubmitted(false);
    setPhoneError('');
    setIndustryError('');
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-grain relative border-b border-ink/15 overflow-hidden">



      <div className="max-w-2xl mx-auto px-5 sm:px-6 relative z-10">

        {/* Section Header */}
        <Reveal>
          <div className="mb-8 pb-4 border-b border-ink/15 text-center sm:text-left">
            <div className="font-mono text-xs text-vermilion-text uppercase tracking-widest mb-1.5 font-bold">
              [ SECTION {sectionInfo.number} ] • CONTACT
            </div>
            <h2 className="font-display font-black text-[clamp(1.85rem,6vw,3.5rem)] uppercase tracking-tight text-ink leading-none">
              Let's Build{' '}
              <span className="font-serif italic font-normal text-vermilion-text lowercase block sm:inline">
                your site.
              </span>
            </h2>
            <p className="font-sans text-ink-muted text-sm sm:text-base mt-2 leading-relaxed">
              Send a message on WhatsApp or fill out the project inquiry form below. We reply fast with clear quotes.
            </p>
          </div>
        </Reveal>

        {/* One Column Contact Container */}
        <div className="space-y-6">

          {/* Contact Details Bar (Readable on Dark Card) */}
          <Reveal delay={0.1}>
            <div className="bg-ink text-paper rounded-lg border border-ink p-5 sm:p-6 shadow-mobile-soft space-y-4">
              <span className="stamp-badge bg-vermilion-text text-paper text-[11px]">
                DIRECT FOUNDER CONTACT
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-paper uppercase leading-snug">
                Ready to Give Your Business a Professional Website?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-paper-dark leading-relaxed">
                Call us, WhatsApp us directly, or send your details using the form below.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-paper/20 font-mono text-xs text-paper">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-vermilion hover:text-paper transition-colors py-1"
                >
                  <PhoneCall className="w-4 h-4 flex-shrink-0" />
                  <span>WhatsApp: {WHATSAPP_NUMBER}</span>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-paper-dark hover:text-vermilion transition-colors py-1"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>Email: {EMAIL}</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Form Container */}
          <Reveal delay={0.2}>
            <div className="bg-paper text-ink p-5 sm:p-7 rounded-lg border border-ink/30 shadow-mobile-soft">
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="py-6 text-center space-y-4 font-sans"
                  >
                    <div className="w-12 h-12 bg-emerald-700 text-paper rounded-full flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="font-display font-bold text-lg sm:text-xl text-ink">
                      We will message you on WhatsApp shortly.
                    </h4>
                    <p className="text-xs sm:text-sm text-ink-muted max-w-xs mx-auto">
                      Your project inquiry has been logged. You can also email us at{' '}
                      <a href={`mailto:${EMAIL}`} className="text-vermilion-text underline font-bold">{EMAIL}</a>.
                    </p>

                    <div className="pt-3">
                      <button
                        onClick={resetForm}
                        className="w-full sm:w-auto min-h-[44px] bg-paper-dark hover:bg-paper text-ink font-bold text-xs px-5 py-3 rounded-badge border border-ink/30 flex items-center justify-center gap-2 mx-auto"
                      >
                        <RefreshCw className="w-4 h-4" />
                        <span>Send Another Inquiry</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 font-sans" noValidate>
                    <div className="font-mono text-xs text-vermilion-text font-bold uppercase mb-1">
                      [ PROJECT ENQUIRY FORM ]
                    </div>

                    {/* Name */}
                    <div>
                      <label htmlFor="input-name" className="block text-xs font-mono font-bold uppercase mb-1.5 text-ink">
                        Your Name or Business Name *
                      </label>
                      <input
                        id="input-name"
                        type="text"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={handleInputFocus}
                        placeholder="e.g. Ramesh Patel / Shivam Construction"
                        className="w-full bg-card border border-ink/30 p-3 rounded-badge font-sans text-base text-ink placeholder:text-ink-muted focus:outline-none focus:border-vermilion-text focus:ring-2 focus:ring-vermilion/20 transition-all duration-200 min-h-[46px]"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="input-phone" className="block text-xs font-mono font-bold uppercase mb-1.5 text-ink">
                        Mobile / WhatsApp Number *
                      </label>
                      <input
                        id="input-phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (phoneError) setPhoneError('');
                        }}
                        onFocus={handleInputFocus}
                        placeholder="e.g. +91 98765 43210"
                        className={`w-full bg-card border p-3 rounded-badge font-sans text-base text-ink placeholder:text-ink-muted focus:outline-none transition-all duration-200 min-h-[46px] ${phoneError ? 'border-red-600 focus:ring-2 focus:ring-red-200' : 'border-ink/30 focus:border-vermilion-text focus:ring-2 focus:ring-vermilion/20'
                          }`}
                      />
                      {phoneError && (
                        <span className="text-xs text-red-600 font-mono font-bold block mt-1">
                          {phoneError}
                        </span>
                      )}
                    </div>

                    {/* Business Type */}
                    <div>
                      <label htmlFor="input-industry" className="block text-xs font-mono font-bold uppercase mb-1.5 text-ink">
                        Business Type *
                      </label>
                      <select
                        id="input-industry"
                        required
                        value={formData.industry}
                        onChange={(e) => {
                          setFormData({ ...formData, industry: e.target.value });
                          if (industryError) setIndustryError('');
                        }}
                        onFocus={handleInputFocus}
                        className={`w-full bg-card border p-3 rounded-badge font-sans text-base text-ink focus:outline-none transition-all duration-200 min-h-[46px] ${industryError ? 'border-red-600 focus:ring-2 focus:ring-red-200' : 'border-ink/30 focus:border-vermilion-text focus:ring-2 focus:ring-vermilion/20'
                          }`}
                      >
                        <option value="" disabled>Select your business</option>
                        {/* // NEW: Added Hair Salon and Dermatology Clinic options, purged OEM / Manufacturer */}
                        <option value="Hair Salon / Barbering / Academy">Hair Salon / Barbering / Academy</option>
                        <option value="Skin, Hair & Laser Clinic">Skin, Hair & Laser Clinic</option>
                        <option value="Bakery / Cafe / Restaurant">Bakery / Cafe / Restaurant</option>
                        <option value="Hotel / Resort / Banquet">Hotel / Resort / Banquet</option>
                        <option value="Stone Crusher / Quarry">Stone Crusher / Quarry</option>
                        <option value="Other Local Business">Other Local Business</option>
                      </select>
                      {industryError && (
                        <span className="text-xs text-red-600 font-mono font-bold block mt-1">
                          {industryError}
                        </span>
                      )}
                    </div>

                    {/* Website / Maps Link */}
                    <div>
                      <label htmlFor="input-web-or-maps" className="block text-xs font-mono font-bold uppercase mb-1.5 text-ink">
                        Your business website or Google Maps link (optional)
                      </label>
                      <input
                        id="input-web-or-maps"
                        type="url"
                        inputMode="url"
                        autoComplete="url"
                        value={formData.webOrMaps}
                        onChange={(e) => setFormData({ ...formData, webOrMaps: e.target.value })}
                        onFocus={handleInputFocus}
                        placeholder="https://g.co/kgs/... or existing site link"
                        className="w-full bg-card border border-ink/30 p-3 rounded-badge font-sans text-base text-ink placeholder:text-ink-muted focus:outline-none focus:border-vermilion-text focus:ring-2 focus:ring-vermilion/20 transition-all duration-200 min-h-[46px]"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="input-message" className="block text-xs font-mono font-bold uppercase mb-1.5 text-ink">
                        Short Message (Optional)
                      </label>
                      <textarea
                        id="input-message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onFocus={handleInputFocus}
                        placeholder="Tell us about your website requirements..."
                        className="w-full bg-card border border-ink/30 p-3 rounded-badge font-sans text-base text-ink placeholder:text-ink-muted focus:outline-none focus:border-vermilion-text focus:ring-2 focus:ring-vermilion/20 transition-all duration-200"
                      />
                    </div>

                    {/* Big Full-Width Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-vermilion-text hover:bg-vermilion-dark text-paper font-sans font-bold text-base py-4 min-h-[50px] rounded-badge border-2 border-ink shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send on WhatsApp</span>
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
};
