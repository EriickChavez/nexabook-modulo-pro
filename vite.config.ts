import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isModuleBuild = process.env.BUILD_MODE === 'module';

export default defineConfig({
  base: './',
  plugins: [react()],
  build: isModuleBuild
    ? {
        // --- Modo Módulo: bundle IIFE inyectable sin React ---
        rollupOptions: {
          external: ['react', 'react-dom'],
          input: 'src/main.tsx',
          output: {
            entryFileNames: 'bundle.js',
            format: 'iife',
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
      }
    : {
        // --- Modo Preview: bundle completo con React incluido (para GitHub Pages) ---
        rollupOptions: {
          output: {
            entryFileNames: 'bundle.js',
            format: 'iife',
          },
        },
      },
});