import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

export default {
	content: [
		'./index.html',
		'./src/**/*.{ts,tsx}',
	],
	darkMode: [
		'class',
	],
	plugins: [
		animate,
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			colors: {
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				background: 'hsl(var(--background))',
				border: 'hsl(var(--border))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				foreground: 'hsl(var(--foreground))',
				input: 'hsl(var(--input))',
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				ring: 'hsl(var(--ring))',
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				sidebar: {
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					ring: 'hsl(var(--sidebar-ring))',
				},
				tury: {
					cyan: 'hsl(var(--tury-cyan))',
					green: 'hsl(var(--tury-green))',
					orange: 'hsl(var(--tury-orange))',
					pink: 'hsl(var(--tury-pink))',
					purple: 'hsl(var(--tury-purple))',
					yellow: 'hsl(var(--tury-yellow))',
				},
			},
			fontFamily: {
				display: [
					'Inter',
					'sans-serif',
				],
				mono: [
					'JetBrains Mono',
					'monospace',
				],
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0',
					},
					to: {
						height: 'var(--radix-accordion-content-height)',
					},
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)',
					},
					to: {
						height: '0',
					},
				},
				'fade-in-up': {
					from: {
						opacity: '0',
						transform: 'translateY(20px)',
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'glow-pulse': {
					'0%, 100%': {
						opacity: '0.4',
					},
					'50%': {
						opacity: '0.8',
					},
				},
			},
		},
	},
} satisfies Config
