import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
  
export default defineConfig({
  base: '/S9_project9/',
  plugins: [react()],
})
