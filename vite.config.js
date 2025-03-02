import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    build: {
        outDir: 'dist', // Define a pasta de saída correta
        emptyOutDir: true, // Garante que a pasta seja limpa antes de cada build
    }
});
