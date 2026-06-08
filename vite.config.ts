import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  define: {
    'typeof require': '"undefined"',
  },
  build: {
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
  },
});