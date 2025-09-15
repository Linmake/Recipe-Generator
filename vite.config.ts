import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
    alias: {
      // Agrega estos alias para las importaciones de Amplify
      'aws-amplify': 'aws-amplify',
      '@aws-amplify/core': '@aws-amplify/core',
      '@aws-amplify/auth': '@aws-amplify/auth',
      '@aws-amplify/storage': '@aws-amplify/storage'
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
      include: [/node_modules/]
    }
  }
})