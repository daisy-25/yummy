import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 하위 주소에서도 동작하도록 상대 경로로 빌드
  base: './',
  build: {
    // Node 24의 fs.rmSync가 한글 경로(식단앱)에서 죽어요. dist 비우기는 package.json의 build가 안전한 방법으로 대신 해요
    emptyOutDir: false,
  },
})
