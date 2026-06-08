import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    // Esto asegura que siempre se genere un bundle limpio e inyectable
    rollupOptions: {
      external: ['react', 'react-dom'],
      input: 'src/main.tsx',
      output: {
        entryFileNames: 'bundle.js',
        format: 'iife', // Esto es lo que elimina el error de 'require'
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});