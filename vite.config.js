import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    build: {
        cssCodeSplit: false,
        rollupOptions: {
            input: {
                app: 'index.html',
                widget: 'src/embed.tsx'
            },
            output: {
                entryFileNames: function (chunkInfo) { return (chunkInfo.name === 'widget' ? 'widget.js' : 'assets/[name]-[hash].js'); },
                assetFileNames: 'assets/[name]-[hash][extname]'
            }
        }
    }
});
