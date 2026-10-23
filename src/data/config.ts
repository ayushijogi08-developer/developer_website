/**
 * CANONICAL BRAND & CONTACT CONFIGURATION
 * Single Source of Truth for Kunj Technologies
 */

export const BRAND_CONFIG = {
  brandName: "Kunj Technologies",
  brandShort: "Kunj",
  brandInitials: "KT",
  tagline: "Websites and apps for local businesses",
  legalName: "Kunj Technologies",
  founderName: "Darshan Jogi",
  founderRole: "Developer & Studio Owner",
  location: "Akola, Maharashtra, India",
  phone: "+91 9511817720",
  whatsappNumber: "+91 9511817720",
  whatsappMessage: "Hi Kunj Technologies, I saw your website and would like to discuss a project for my business.",

  // TODO: Add registered custom domain when provided by client (e.g. 'kunjtechnologies.in')
  domain: "", // [TODO: Domain pending client purchase]

  // Verified business email
  email: "darshanjogi36@gmail.com",

  socialLinks: [
    {
      name: "WhatsApp",
      href: "https://wa.me/919511817720?text=Hi%20Kunj%20Technologies%2C%20I%20saw%20your%20website%20and%20would%20like%20to%20discuss%20a%20project%20for%20my%20business.",
    },
    // TODO: Update with official social media handles
    { name: "Instagram", href: "https://instagram.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
  ],
} as const;

export const {
  brandName: BRAND_NAME,
  brandShort: BRAND_SHORT,
  brandInitials: BRAND_INITIALS,
  tagline: TAGLINE,
  legalName: LEGAL_NAME,
  founderName: FOUNDER_NAME,
  founderRole: FOUNDER_ROLE,
  location: BRAND_LOCATION,
  phone: PHONE_NUMBER,
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappMessage: WHATSAPP_MESSAGE,
  domain: DOMAIN,
  email: EMAIL,
  socialLinks: SOCIAL_LINKS,
} = BRAND_CONFIG;

export const CURRENT_YEAR = new Date().getFullYear();

/**
 * Safeguard: Production & Runtime validator.
 * Throws and halts build if any forbidden legacy or generic placeholder is present.
 */
const FORBIDDEN_PLACEHOLDER_PATTERNS = [
  new RegExp(['kaa', 'gaz'].join(''), 'i'),
  new RegExp(['example', '\\.com'].join(''), 'i'),
  new RegExp('0'.repeat(10)),
  new RegExp('1234567890'),
  new RegExp('9876543210'),
  /@placeholder/i,
  /yourdomain\.com/i,
];

export function validateBrandConfig(): void {
  const valuesToCheck = [
    BRAND_CONFIG.brandName,
    BRAND_CONFIG.legalName,
    BRAND_CONFIG.phone,
    BRAND_CONFIG.whatsappNumber,
    BRAND_CONFIG.email,
    BRAND_CONFIG.domain,
    ...BRAND_CONFIG.socialLinks.map((s) => s.href),
  ].join(' ');

  for (const pattern of FORBIDDEN_PLACEHOLDER_PATTERNS) {
    if (pattern.test(valuesToCheck)) {
      throw new Error(
        `[CONFIG SAFEGUARD ERROR] Forbidden placeholder or legacy brand pattern detected matching ${pattern}. Update configuration with verified credentials.`
      );
    }
  }
}

// Run validation immediately
validateBrandConfig();
