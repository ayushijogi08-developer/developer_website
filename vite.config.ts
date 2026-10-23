import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

/**
 * Safeguard Plugin:
 * Ensures production builds immediately fail if any forbidden placeholder
 * (example.com, 0000000000, kaagaz*) is detected in the generated assets or chunks.
 */
function placeholderSafeguardPlugin(): Plugin {
  return {
    name: 'placeholder-safeguard',
    generateBundle(_, bundle) {
      const FORBIDDEN_PATTERNS = [
        { pattern: /kaagaz/i, label: 'kaagaz*' },
        { pattern: /example\.com/i, label: 'example.com' },
        { pattern: /0000000000/, label: '0000000000' }
      ]

      for (const [fileName, asset] of Object.entries(bundle)) {
        // Only inspect JavaScript, HTML, and CSS bundles
        if (!/\.(js|html|css)$/.test(fileName)) continue

        const content = asset.type === 'asset' ? asset.source.toString() : asset.code
        for (const { pattern, label } of FORBIDDEN_PATTERNS) {
          if (pattern.test(content)) {
            throw new Error(
              `[PRODUCTION BUILD ERROR] Forbidden placeholder "${label}" detected in "${fileName}". Update configuration with verified credentials.`
            )
          }
        }
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), placeholderSafeguardPlugin()],
})
