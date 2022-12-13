import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  server: {
    // host: true,
    port : 3000,
    proxy: {
        '/api': {
            target: 'https://animixplay.to',
            changeOrigin: true,
            secure: false,
            ws: true,
            rewrite: (path) => path.replace(/^\/api/, ""),
        },
        '/cdn': {
            target: 'https://cdn.animixplay.to/api/search',
            changeOrigin: true,
            secure: false,
            ws: true,
            rewrite: (path) => path.replace(/^\/cdn/, ""),
        },
        
    }
    
},
})

