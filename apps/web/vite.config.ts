import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@agentuity/routes': fileURLToPath(
				new URL('../agentuity/src/generated/routes.ts', import.meta.url)
			),
		},
	},
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:3500',
				changeOrigin: true,
			},
		},
	},
});
