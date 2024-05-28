import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/CHAT/', // Update base URL to '/CHAT/'
  build: {
    outDir: 'docs', // Output build files to the 'docs' folder
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
      },
    },
  },
});
