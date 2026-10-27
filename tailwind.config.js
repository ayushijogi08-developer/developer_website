/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        short: { raw: '(min-width: 768px) and (max-height: 820px)' },
      },
      colors: {
        paper: "#F4F0EA",
        "paper-dark": "#E9E3D8",
        ink: "#111110",
        "ink-muted": "#3D3A33",
        "ink-faded": "#3D3A33",
        vermilion: "#FF4B2B",
        "vermilion-text": "#C22F17",
        "vermilion-light": "#FF6A4D",
        "vermilion-dark": "#A82611",
        card: "#FAF8F5",
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', '"Clash Display"', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
        sans: ['"General Sans"', '"Satoshi"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
        hindi: ['"Tiro Devanagari Hindi"', 'serif'],
      },
      borderRadius: {
        'stamp': '2px',
        'badge': '4px',
        'asym-1': '24px 4px 18px 6px',
        'asym-2': '6px 20px 4px 24px',
      },
      boxShadow: {
        'stamp': '3px 3px 0px #111110',
        'stamp-hover': '5px 5px 0px #111110',
        'card': '6px 6px 0px rgba(17, 17, 16, 0.08)',
        'lift': '10px 10px 0px #111110',
        'mobile-soft': '0 8px 24px rgba(17, 17, 16, 0.08)',
        'mobile-card': '0 4px 16px rgba(17, 17, 16, 0.06)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-slow': 'marquee 50s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}
