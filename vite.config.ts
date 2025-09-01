import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// IMPORTANT:
// - If you deploy to https://<username>.github.io/<REPO_NAME>/, set base to '/<REPO_NAME>/'
// - If you deploy to https://<username>.github.io (user site), set base to '/'
export default defineConfig({
  base: '/caro-website/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/icon-192.png', 'icons/icon-512.png'],
      manifest: {
        name: 'Your Name — Portfolio',
        short_name: 'Portfolio',
        start_url: './',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0ea5e9',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ]
})
