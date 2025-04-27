import { defineConfig } from 'vite';

export default defineConfig({
  base: '/quick-conventional-commits/', // Replace with your repo name
  build: {
    outDir: 'dist', // Make sure the build output is directed to 'dist' folder
  },
});
