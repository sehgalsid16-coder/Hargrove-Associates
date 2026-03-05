import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        practice: resolve(__dirname, 'practice-areas.html'),
        civil: resolve(__dirname, 'civil-litigation.html'),
        corporate: resolve(__dirname, 'corporate-disputes.html'),
        divorce: resolve(__dirname, 'family-divorce.html'),
        estate: resolve(__dirname, 'estate-litigation.html'),
        attorneys: resolve(__dirname, 'attorneys.html'),
        results: resolve(__dirname, 'results.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});
