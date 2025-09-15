import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
    alias: {
      // Corrige estos alias para que apunten a los archivos correctos
      'aws-amplify': resolve(__dirname, 'node_modules/aws-amplify/dist/esm/index.mjs'),
      '@aws-amplify/core': resolve(__dirname, 'node_modules/@aws-amplify/core/dist/esm/index.mjs'),
      '@aws-amplify/auth': resolve(__dirname, 'node_modules/@aws-amplify/auth/dist/esm/index.mjs'),
      '@aws-amplify/storage': resolve(__dirname, 'node_modules/@aws-amplify/storage/dist/esm/index.mjs'),
      '@aws-amplify/ui': resolve(__dirname, 'node_modules/@aws-amplify/ui/dist/esm/index.mjs')
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@aws-amplify/ui-react',
      'aws-amplify'
    ],
    exclude: ['@aws-amplify/ui-react/node_modules']
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  }
})