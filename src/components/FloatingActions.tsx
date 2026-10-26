import React, { useState, useEffect } from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../data/siteData';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const FloatingActions: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactEl = document.getElementById('contact');
      const footerEl = document.querySelector('footer');

      const contactPos = contactEl?.getBoundingClientRect();
      const footerPos = footerEl?.getBoundingClientRect();

      // Auto-hide inside contact section or footer
      const inContact = contactPos && contactPos.top < window.innerHeight && contactPos.bottom > 0;
      const inFooter = footerPos && footerPos.top < window.innerHeight;

      setHidden(Boolean(inContact || inFooter));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect virtual keyboard on mobile (viewport resize)
  useEffect(() => {
    if (typeof visualViewport === 'undefined') return;

    const handleResize = () => {
      // If visual viewport height is significantly less than window height, keyboard is likely open
      const heightDiff = window.innerHeight - (visualViewport?.height || window.innerHeight);
      setKeyboardOpen(heightDiff > 150);
    };

    visualViewport?.addEventListener('resize', handleResize);
    return () => visualViewport?.removeEventListener('resize', handleResize);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  if (hidden || keyboardOpen) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] text-white hover:bg-[#20ba5a] p-3.5 sm:p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center border border-white/20"
    >
      <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 fill-white" />
    </a>
  );
};
