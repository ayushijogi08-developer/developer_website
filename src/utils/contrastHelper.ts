// WCAG Contrast Ratio Calculator Helper & Dynamic Color Resolver

/**
 * Convert Hex Color to RGB triplet
 */
function hexToRgb(hex: string): [number, number, number] {
  let cleanHex = hex.replace('#', '');
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map(c => c + c).join('');
  }
  const num = parseInt(cleanHex, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

/**
 * Calculate Relative Luminance according to W3C WCAG 2.1 algorithm
 */
function getRelativeLuminance(r: number, g: number, b: number): number {
  const [sR, sG, sB] = [r, g, b].map(v => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * sR + 0.7152 * sG + 0.0722 * sB;
}

/**
 * Calculate Contrast Ratio between two hex colors (e.g. 7.1 for 7.1:1)
 */
export function getContrastRatio(hex1: string, hex2: string): number {
  try {
    const rgb1 = hexToRgb(hex1);
    const rgb2 = hexToRgb(hex2);
    const lum1 = getRelativeLuminance(...rgb1);
    const lum2 = getRelativeLuminance(...rgb2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    const ratio = (brightest + 0.05) / (darkest + 0.05);
    return Math.round(ratio * 10) / 10;
  } catch {
    return 1.0;
  }
}

/**
 * Automatically return readable light or dark text hex for a given background color
 */
export function getReadableTextColor(bgHex: string): { title: string; body: string; muted: string } {
  try {
    const rgb = hexToRgb(bgHex);
    const lum = getRelativeLuminance(...rgb);
    
    // If background is dark (luminance < 0.2)
    if (lum < 0.25) {
      return {
        title: "#FFF8F0",
        body: "#EAE3D9",
        muted: "#C4BDB0"
      };
    } else {
      return {
        title: "#111110",
        body: "#2A2927",
        muted: "#52504B"
      };
    }
  } catch {
    return { title: "#111110", body: "#2A2927", muted: "#52504B" };
  }
}

/**
 * Dev-only console warning logger for contrast compliance checking
 */
export function verifyThemeContrast(name: string, bg: string, title: string, body: string) {
  if (import.meta.env.DEV) {
    const titleRatio = getContrastRatio(bg, title);
    const bodyRatio = getContrastRatio(bg, body);

    if (titleRatio < 7.0) {
      console.warn(`[Contrast Warning] ${name} Title contrast ${titleRatio}:1 is below 7:1 target (bg: ${bg}, title: ${title})`);
    }
    if (bodyRatio < 4.5) {
      console.warn(`[Contrast Warning] ${name} Body contrast ${bodyRatio}:1 is below 4.5:1 target (bg: ${bg}, body: ${body})`);
    }
  }
}
