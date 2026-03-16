import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const commonServerConfig = {
    host: '127.0.0.1', // Forces IPv4 to avoid localhost resolution issues
    open: false,
  };

  const commonPreviewConfig = {
    host: '127.0.0.1'
  };

  // Widget Build
  if (mode === 'widget') {
    return {
      server: commonServerConfig,
      preview: commonPreviewConfig,
      build: {
        outDir: 'dist',
        emptyOutDir: false, // Do not delete the panel build folder
        lib: {
          entry: resolve(__dirname, 'src/widget/index.js'),
          formats: ['iife'],
          name: 'EcomChatbot',
          fileName: () => 'chatbot.min.js'
        },
        rollupOptions: {
          // Zero external dependencies
          external: []
        }
      }
    };
  }

  // Panel Build (base so script/assets resolve when served from / or /panel/src/panel/)
  return {
    base: '/panel/',
    server: commonServerConfig,
    preview: commonPreviewConfig,
    build: {
      outDir: 'dist/panel',
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/panel/index.html'),
          preview: resolve(__dirname, 'src/panel/preview.html'),
          demo: resolve(__dirname, 'src/demo/index.html')
        }
      }
    }
  };
});
