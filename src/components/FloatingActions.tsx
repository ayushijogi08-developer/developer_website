import React, { useState, useEffect } from 'react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../data/siteData';
import { PhoneCall, MessageSquare } from 'lucide-react';

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
  const callUrl = `tel:${WHATSAPP_NUMBER}`;

  if (hidden || keyboardOpen) return null;

  return (
    <>
      {/* Desktop Floating WhatsApp Button — Small, quiet icon button (green outline) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="hidden md:flex fixed bottom-6 right-6 z-50 bg-paper/95 text-emerald-700 hover:text-paper hover:bg-emerald-700 p-3 rounded-full border-2 border-emerald-700 shadow-sm hover:scale-105 transition-all items-center justify-center backdrop-blur-md"
      >
        <MessageSquare className="w-5 h-5" />
      </a>

      {/* Mobile Sticky Bottom Action Bar — 52px, glass-free, safe-area padding */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-ink text-paper px-5 py-1.5 border-t border-paper/10 flex items-center gap-3 bottom-action-bar"
        style={{ height: '52px' }}
      >
        {/* Call — outline style */}
        <a
          href={callUrl}
          className="flex-1 min-h-[44px] flex items-center justify-center gap-2 bg-transparent text-paper font-sans font-bold text-[13px] rounded-badge border border-paper/30 active:scale-95 transition-transform"
        >
          <PhoneCall className="w-4 h-4" />
          <span>Call</span>
        </a>

        {/* WhatsApp — primary red */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.4] min-h-[44px] flex items-center justify-center gap-2 bg-vermilion-text text-paper font-sans font-bold text-[13px] rounded-badge border border-ink active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
};
