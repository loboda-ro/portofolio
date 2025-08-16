import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on mode
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    envDir: '.',
    envPrefix: 'VITE_',
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV || mode),
    },
  }
})
