import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
// import classnames from 'vite-plugin-classnames'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: "/Videorywebsite",
})
