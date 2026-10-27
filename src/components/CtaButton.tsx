import React from 'react';
import { ArrowRight } from 'lucide-react';
import { type CtaConfig, type CtaStyle, getWhatsAppUrl, triggerFormCta } from '../data/cta';

interface CtaButtonProps {
  cta: CtaConfig;
  variant?: CtaStyle;
  label?: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  icon?: React.ReactNode;
  showIcon?: boolean;
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  cta,
  variant,
  label,
  className = '',
  onClick,
  icon,
  showIcon = true,
}) => {
  const currentVariant = variant || cta.style;
  const displayText = label || cta.label;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
      return;
    }

    if (cta.destination === '#contact') {
      e.preventDefault();
      triggerFormCta(cta.prefillMessage || cta.whatsappMessage);
    } else if (cta.destination === 'whatsapp') {
      e.preventDefault();
      const url = getWhatsAppUrl(cta.whatsappMessage);
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    // #work and other native anchors will navigate naturally
  };

  // 1. Tertiary Text Link with Arrow
  if (currentVariant === 'link') {
    const hasArrow = displayText.includes('→');
    const labelWithoutArrow = hasArrow ? displayText.replace(/→/g, '').trim() : displayText;

    return (
      <a
        href={cta.destination === 'whatsapp' ? getWhatsAppUrl(cta.whatsappMessage) : cta.destination}
        onClick={handleClick}
        target={cta.destination === 'whatsapp' ? '_blank' : undefined}
        rel={cta.destination === 'whatsapp' ? 'noopener,noreferrer' : undefined}
        className={`inline-flex items-center gap-1.5 font-sans font-bold text-sm sm:text-base text-vermilion-text hover:text-vermilion-dark hover:underline underline-offset-4 transition-colors group cursor-pointer inline-block py-2.5 ${className}`}
      >
        <span>{labelWithoutArrow}</span>
        {showIcon && (icon || <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />)}
      </a>
    );
  }

  // 2. Secondary Outline Button
  if (currentVariant === 'outline') {
    return (
      <a
        href={cta.destination === 'whatsapp' ? getWhatsAppUrl(cta.whatsappMessage) : cta.destination}
        onClick={handleClick}
        target={cta.destination === 'whatsapp' ? '_blank' : undefined}
        rel={cta.destination === 'whatsapp' ? 'noopener,noreferrer' : undefined}
        className={`min-h-[44px] sm:min-h-[48px] px-6 sm:px-8 py-3 sm:py-3.5 rounded-badge border-2 border-ink/30 hover:border-ink/70 bg-paper hover:bg-paper-dark text-ink font-sans font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] ${className}`}
      >
        <span>{displayText}</span>
        {showIcon && (icon || <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />)}
      </a>
    );
  }

  // 3. Primary Red Filled Button (Default)
  return (
    <a
      href={cta.destination === 'whatsapp' ? getWhatsAppUrl(cta.whatsappMessage) : cta.destination}
      onClick={handleClick}
      target={cta.destination === 'whatsapp' ? '_blank' : undefined}
      rel={cta.destination === 'whatsapp' ? 'noopener,noreferrer' : undefined}
      className={`min-h-[48px] sm:min-h-[52px] px-6 sm:px-8 py-3.5 sm:py-4 rounded-badge border-2 border-ink bg-vermilion-text hover:bg-vermilion-dark text-paper font-sans font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 shadow-stamp hover:shadow-stamp-hover transition-all duration-200 active:scale-[0.98] cursor-pointer ${className}`}
    >
      <span>{displayText}</span>
      {showIcon && (icon || <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />)}
    </a>
  );
};
