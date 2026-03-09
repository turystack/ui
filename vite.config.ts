import path from 'node:path'
import pkg from './package.json'

import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			fileName: 'index',
			formats: [
				'es',
			],
		},
		rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
      ],
    },
	},
	plugins: [
		tailwindcss(),
		react(),
		dts({
			include: [
				'src',
			],
			rollupTypes: true,
			tsconfigPath: './tsconfig.app.json',
		}),
	],
	resolve: {
		dedupe: [
			'react',
			'react-dom',
			'react/jsx-runtime',
			'@radix-ui/react-slot',
			'lucide-react',
		],
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
