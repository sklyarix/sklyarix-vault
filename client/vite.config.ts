import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
    allowedHosts: true
  },
	resolve: {
		alias: {
			'@models': path.resolve(__dirname, '../shared/models')
		},
		extensions: ['.ts', '.tsx']
	}
})
