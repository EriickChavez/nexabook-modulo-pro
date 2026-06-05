import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'bundle.js',
        format: 'iife',
      },
      external: ['react', 'react-dom'],
    },
  },
});