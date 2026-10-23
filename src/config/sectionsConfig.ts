/**
 * CANONICAL SECTIONS CONFIGURATION
 * Single source of truth for all sections, section numbers, headers, and scroll observers.
 */

export interface SectionConfig {
  id: string;
  number: string;
  headerLabel: string;
  navLabel: string;
  title: string;
}

export const SECTIONS_LIST: SectionConfig[] = [
  { id: 'hero', number: '01', headerLabel: 'EST. 2026 • HANDCRAFTED WEBSITES', navLabel: 'Home', title: 'HOME' },
  { id: 'why', number: '02', headerLabel: 'WHY YOU NEED A WEBSITE', navLabel: 'Why Us', title: 'WHY' },
  { id: 'work', number: '03', headerLabel: 'SECTION 03 • OUR WORK', navLabel: 'Our Work', title: 'PORTFOLIO' },
  { id: 'services', number: '04', headerLabel: 'SECTION 04 • SERVICES', navLabel: 'Services', title: 'SERVICES' },
  { id: 'included', number: '05', headerLabel: 'SECTION 05 • WHAT YOU GET', navLabel: 'What You Get', title: 'WHAT YOU GET' },
  { id: 'process', number: '06', headerLabel: 'SECTION 06 • HOW IT WORKS', navLabel: 'Process', title: 'PROCESS' },
  { id: 'about', number: '07', headerLabel: 'SECTION 07 • ABOUT', navLabel: 'About', title: 'ABOUT' },
  { id: 'pricing', number: '08', headerLabel: 'SECTION 08 • PRICING', navLabel: 'Pricing', title: 'PRICING' },
  { id: 'faq', number: '09', headerLabel: 'SECTION 09 • FAQ', navLabel: 'FAQ', title: 'FAQ' },
  { id: 'contact', number: '10', headerLabel: 'SECTION 10 • CONTACT', navLabel: 'Contact', title: 'CONTACT' },
];

export const TOTAL_SECTIONS = SECTIONS_LIST.length;

export function getSectionConfig(id: string): SectionConfig {
  const found = SECTIONS_LIST.find((s) => s.id === id);
  if (found) return found;
  return { id, number: '01', headerLabel: id, navLabel: id, title: id };
}

export function getFormattedSectionCounter(index: number): string {
  const numStr = String(index + 1).padStart(2, '0');
  const totalStr = String(TOTAL_SECTIONS).padStart(2, '0');
  return `${numStr} / ${totalStr}`;
}
