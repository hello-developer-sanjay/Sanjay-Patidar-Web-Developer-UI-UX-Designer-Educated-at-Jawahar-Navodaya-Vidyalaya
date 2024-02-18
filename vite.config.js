import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      '@emotion/styled': '@emotion/styled/base',
      '@chakra-ui/system': '@chakra-ui/system/dist/system.cjs.js'
    }
  }
});
