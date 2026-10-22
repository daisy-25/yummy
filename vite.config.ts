import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 하위 주소에서도 동작하도록 상대 경로로 빌드
  base: './',
})
