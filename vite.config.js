import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [
        react(),

        VitePWA({
            registerType: 'autoUpdate',

            manifest: {
                name: 'Mi Tiendita',
                short_name: 'Mi Tiendita',
                description: 'Catálogo de productos de una tienda de abarrotes',
                theme_color: '#198754',
                background_color: '#f8f9fa',
                display: 'standalone',
                start_url: '/',

                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        })
    ]
});
