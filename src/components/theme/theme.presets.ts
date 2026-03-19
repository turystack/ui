import type {
	ThemeBaseColor,
	ThemeFont,
	ThemePrimaryColor,
	ThemeProps,
	ThemeRadius,
	ThemeStyle,
} from './theme.types'

type ColorVars = {
	light: Record<string, string>
	dark: Record<string, string>
}

export const BASE_COLOR_VARS: Record<ThemeBaseColor, ColorVars> = {
	gray: {
		dark: {
			'--t-accent': 'hsl(215 27.9% 16.9%)',
			'--t-accent-foreground': 'hsl(210 20% 98%)',
			'--t-background': 'hsl(224 71.4% 4.1%)',
			'--t-border': 'hsl(215 27.9% 16.9%)',
			'--t-card': 'hsl(224 71.4% 4.1%)',
			'--t-card-foreground': 'hsl(210 20% 98%)',
			'--t-foreground': 'hsl(210 20% 98%)',
			'--t-input': 'hsl(215 27.9% 16.9%)',
			'--t-muted': 'hsl(215 27.9% 16.9%)',
			'--t-muted-foreground': 'hsl(217.9 10.6% 64.9%)',
			'--t-popover': 'hsl(224 71.4% 4.1%)',
			'--t-popover-foreground': 'hsl(210 20% 98%)',
			'--t-secondary': 'hsl(215 27.9% 16.9%)',
			'--t-secondary-foreground': 'hsl(210 20% 98%)',
		},
		light: {
			'--t-accent': 'hsl(220 14.3% 95.9%)',
			'--t-accent-foreground': 'hsl(220.9 39.3% 11%)',
			'--t-background': 'hsl(0 0% 100%)',
			'--t-border': 'hsl(220 13% 91%)',
			'--t-card': 'hsl(0 0% 100%)',
			'--t-card-foreground': 'hsl(224 71.4% 4.1%)',
			'--t-foreground': 'hsl(224 71.4% 4.1%)',
			'--t-input': 'hsl(220 13% 91%)',
			'--t-muted': 'hsl(220 14.3% 95.9%)',
			'--t-muted-foreground': 'hsl(220 8.9% 46.1%)',
			'--t-popover': 'hsl(0 0% 100%)',
			'--t-popover-foreground': 'hsl(224 71.4% 4.1%)',
			'--t-secondary': 'hsl(220 14.3% 95.9%)',
			'--t-secondary-foreground': 'hsl(220.9 39.3% 11%)',
		},
	},
	neutral: {
		dark: {
			'--t-accent': 'hsl(240 3.7% 15.9%)',
			'--t-accent-foreground': 'hsl(0 0% 98%)',
			'--t-background': 'hsl(240 10% 3.9%)',
			'--t-border': 'hsl(240 3.7% 15.9%)',
			'--t-card': 'hsl(240 10% 3.9%)',
			'--t-card-foreground': 'hsl(0 0% 98%)',
			'--t-foreground': 'hsl(0 0% 98%)',
			'--t-input': 'hsl(240 3.7% 15.9%)',
			'--t-muted': 'hsl(240 3.7% 15.9%)',
			'--t-muted-foreground': 'hsl(240 5% 64.9%)',
			'--t-popover': 'hsl(240 10% 3.9%)',
			'--t-popover-foreground': 'hsl(0 0% 98%)',
			'--t-secondary': 'hsl(240 3.7% 15.9%)',
			'--t-secondary-foreground': 'hsl(0 0% 98%)',
		},
		light: {
			'--t-accent': 'hsl(240 4.8% 95.9%)',
			'--t-accent-foreground': 'hsl(240 5.9% 10%)',
			'--t-background': 'hsl(0 0% 100%)',
			'--t-border': 'hsl(240 5.9% 90%)',
			'--t-card': 'hsl(0 0% 100%)',
			'--t-card-foreground': 'hsl(240 10% 3.9%)',
			'--t-foreground': 'hsl(240 10% 3.9%)',
			'--t-input': 'hsl(240 5.9% 90%)',
			'--t-muted': 'hsl(240 4.8% 95.9%)',
			'--t-muted-foreground': 'hsl(240 3.8% 46.1%)',
			'--t-popover': 'hsl(0 0% 100%)',
			'--t-popover-foreground': 'hsl(240 10% 3.9%)',
			'--t-secondary': 'hsl(240 4.8% 95.9%)',
			'--t-secondary-foreground': 'hsl(240 5.9% 10%)',
		},
	},
	stone: {
		dark: {
			'--t-accent': 'hsl(12 6.5% 15.1%)',
			'--t-accent-foreground': 'hsl(60 9.1% 97.8%)',
			'--t-background': 'hsl(20 14.3% 4.1%)',
			'--t-border': 'hsl(12 6.5% 15.1%)',
			'--t-card': 'hsl(20 14.3% 4.1%)',
			'--t-card-foreground': 'hsl(60 9.1% 97.8%)',
			'--t-foreground': 'hsl(60 9.1% 97.8%)',
			'--t-input': 'hsl(12 6.5% 15.1%)',
			'--t-muted': 'hsl(12 6.5% 15.1%)',
			'--t-muted-foreground': 'hsl(24 5.4% 63.9%)',
			'--t-popover': 'hsl(20 14.3% 4.1%)',
			'--t-popover-foreground': 'hsl(60 9.1% 97.8%)',
			'--t-secondary': 'hsl(12 6.5% 15.1%)',
			'--t-secondary-foreground': 'hsl(60 9.1% 97.8%)',
		},
		light: {
			'--t-accent': 'hsl(60 4.8% 95.9%)',
			'--t-accent-foreground': 'hsl(24 9.8% 10%)',
			'--t-background': 'hsl(0 0% 100%)',
			'--t-border': 'hsl(20 5.9% 90%)',
			'--t-card': 'hsl(0 0% 100%)',
			'--t-card-foreground': 'hsl(20 14.3% 4.1%)',
			'--t-foreground': 'hsl(20 14.3% 4.1%)',
			'--t-input': 'hsl(20 5.9% 90%)',
			'--t-muted': 'hsl(60 4.8% 95.9%)',
			'--t-muted-foreground': 'hsl(25 5.3% 44.7%)',
			'--t-popover': 'hsl(0 0% 100%)',
			'--t-popover-foreground': 'hsl(20 14.3% 4.1%)',
			'--t-secondary': 'hsl(60 4.8% 95.9%)',
			'--t-secondary-foreground': 'hsl(24 9.8% 10%)',
		},
	},
	zinc: {
		dark: {
			'--t-accent': 'hsl(240 3.7% 15.9%)',
			'--t-accent-foreground': 'hsl(0 0% 98%)',
			'--t-background': 'hsl(240 10% 3.9%)',
			'--t-border': 'hsl(240 3.7% 15.9%)',
			'--t-card': 'hsl(240 10% 3.9%)',
			'--t-card-foreground': 'hsl(0 0% 98%)',
			'--t-foreground': 'hsl(0 0% 98%)',
			'--t-input': 'hsl(240 3.7% 15.9%)',
			'--t-muted': 'hsl(240 3.7% 15.9%)',
			'--t-muted-foreground': 'hsl(240 5% 64.9%)',
			'--t-popover': 'hsl(240 10% 3.9%)',
			'--t-popover-foreground': 'hsl(0 0% 98%)',
			'--t-secondary': 'hsl(240 3.7% 15.9%)',
			'--t-secondary-foreground': 'hsl(0 0% 98%)',
		},
		light: {
			'--t-accent': 'hsl(240 4.8% 95.9%)',
			'--t-accent-foreground': 'hsl(240 5.9% 10%)',
			'--t-background': 'hsl(0 0% 100%)',
			'--t-border': 'hsl(240 5.9% 90%)',
			'--t-card': 'hsl(0 0% 100%)',
			'--t-card-foreground': 'hsl(240 10% 3.9%)',
			'--t-foreground': 'hsl(240 10% 3.9%)',
			'--t-input': 'hsl(240 5.9% 90%)',
			'--t-muted': 'hsl(240 4.8% 95.9%)',
			'--t-muted-foreground': 'hsl(240 3.8% 46.1%)',
			'--t-popover': 'hsl(0 0% 100%)',
			'--t-popover-foreground': 'hsl(240 10% 3.9%)',
			'--t-secondary': 'hsl(240 4.8% 95.9%)',
			'--t-secondary-foreground': 'hsl(240 5.9% 10%)',
		},
	},
}

export const PRIMARY_COLOR_VARS: Record<ThemePrimaryColor, ColorVars> = {
	blue: {
		dark: {
			'--t-primary': 'hsl(217 91% 67%)',
			'--t-primary-foreground': 'hsl(224 76% 5%)',
			'--t-ring': 'hsl(217 91% 67%)',
		},
		light: {
			'--t-primary': 'hsl(217 91% 60%)',
			'--t-primary-foreground': 'hsl(214 100% 97%)',
			'--t-ring': 'hsl(217 91% 60%)',
		},
	},
	cyan: {
		dark: {
			'--t-primary': 'hsl(188 96% 53%)',
			'--t-primary-foreground': 'hsl(192 91% 7%)',
			'--t-ring': 'hsl(188 96% 53%)',
		},
		light: {
			'--t-primary': 'hsl(189 94% 43%)',
			'--t-primary-foreground': 'hsl(183 100% 96%)',
			'--t-ring': 'hsl(189 94% 43%)',
		},
	},
	fuchsia: {
		dark: {
			'--t-primary': 'hsl(292 84% 61%)',
			'--t-primary-foreground': 'hsl(297 51% 5%)',
			'--t-ring': 'hsl(292 84% 61%)',
		},
		light: {
			'--t-primary': 'hsl(293 69% 49%)',
			'--t-primary-foreground': 'hsl(289 100% 98%)',
			'--t-ring': 'hsl(293 69% 49%)',
		},
	},
	green: {
		dark: {
			'--t-primary': 'hsl(142 69% 58%)',
			'--t-primary-foreground': 'hsl(144 61% 7%)',
			'--t-ring': 'hsl(142 69% 58%)',
		},
		light: {
			'--t-primary': 'hsl(142 71% 45%)',
			'--t-primary-foreground': 'hsl(138 76% 97%)',
			'--t-ring': 'hsl(142 71% 45%)',
		},
	},
	indigo: {
		dark: {
			'--t-primary': 'hsl(234 89% 74%)',
			'--t-primary-foreground': 'hsl(243 47% 7%)',
			'--t-ring': 'hsl(234 89% 74%)',
		},
		light: {
			'--t-primary': 'hsl(239 84% 67%)',
			'--t-primary-foreground': 'hsl(226 100% 97%)',
			'--t-ring': 'hsl(239 84% 67%)',
		},
	},
	orange: {
		dark: {
			'--t-primary': 'hsl(21 90% 56%)',
			'--t-primary-foreground': 'hsl(13 81% 5%)',
			'--t-ring': 'hsl(21 90% 56%)',
		},
		light: {
			'--t-primary': 'hsl(25 95% 53%)',
			'--t-primary-foreground': 'hsl(33 100% 96%)',
			'--t-ring': 'hsl(25 95% 53%)',
		},
	},
	pink: {
		dark: {
			'--t-primary': 'hsl(330 86% 70%)',
			'--t-primary-foreground': 'hsl(336 84% 5%)',
			'--t-ring': 'hsl(330 86% 70%)',
		},
		light: {
			'--t-primary': 'hsl(330 81% 60%)',
			'--t-primary-foreground': 'hsl(327 73% 97%)',
			'--t-ring': 'hsl(330 81% 60%)',
		},
	},
	purple: {
		dark: {
			'--t-primary': 'hsl(272 91% 73%)',
			'--t-primary-foreground': 'hsl(276 100% 5%)',
			'--t-ring': 'hsl(272 91% 73%)',
		},
		light: {
			'--t-primary': 'hsl(271 91% 65%)',
			'--t-primary-foreground': 'hsl(270 100% 98%)',
			'--t-ring': 'hsl(271 91% 65%)',
		},
	},
	red: {
		dark: {
			'--t-primary': 'hsl(0 91% 71%)',
			'--t-primary-foreground': 'hsl(0 63% 5%)',
			'--t-ring': 'hsl(0 91% 71%)',
		},
		light: {
			'--t-primary': 'hsl(0 84% 60%)',
			'--t-primary-foreground': 'hsl(0 86% 97%)',
			'--t-ring': 'hsl(0 84% 60%)',
		},
	},
	rose: {
		dark: {
			'--t-primary': 'hsl(347 77% 60%)',
			'--t-primary-foreground': 'hsl(344 63% 5%)',
			'--t-ring': 'hsl(347 77% 60%)',
		},
		light: {
			'--t-primary': 'hsl(347 77% 50%)',
			'--t-primary-foreground': 'hsl(356 100% 97%)',
			'--t-ring': 'hsl(347 77% 50%)',
		},
	},
	violet: {
		dark: {
			'--t-primary': 'hsl(256 92% 76%)',
			'--t-primary-foreground': 'hsl(263 70% 5%)',
			'--t-ring': 'hsl(256 92% 76%)',
		},
		light: {
			'--t-primary': 'hsl(258 90% 66%)',
			'--t-primary-foreground': 'hsl(250 100% 98%)',
			'--t-ring': 'hsl(258 90% 66%)',
		},
	},
	yellow: {
		dark: {
			'--t-primary': 'hsl(50 98% 64%)',
			'--t-primary-foreground': 'hsl(28 73% 5%)',
			'--t-ring': 'hsl(50 98% 64%)',
		},
		light: {
			'--t-primary': 'hsl(48 96% 53%)',
			'--t-primary-foreground': 'hsl(28 73% 5%)',
			'--t-ring': 'hsl(48 96% 53%)',
		},
	},
}

export const FONT_MAP: Record<ThemeFont, string> = {
	mono: '"JetBrains Mono", monospace',
	sans: '"Inter", sans-serif',
	serif: '"Georgia", "Times New Roman", serif',
}

export const RADIUS_MAP: Record<ThemeRadius, string> = {
	lg: '0.5rem',
	md: '0.375rem',
	none: '0px',
	sm: '0.25rem',
}

export const STYLE_PRESETS: Record<ThemeStyle, Omit<ThemeProps, 'style'>> = {
	lyra: {
		baseColor: 'gray',
		font: 'sans',
		primaryColor: 'orange',
		radius: 'sm',
	},
	maia: {
		baseColor: 'stone',
		font: 'sans',
		primaryColor: 'green',
		radius: 'lg',
	},
	mira: {
		baseColor: 'neutral',
		font: 'serif',
		primaryColor: 'rose',
		radius: 'md',
	},
	nova: {
		baseColor: 'zinc',
		font: 'sans',
		primaryColor: 'violet',
		radius: 'md',
	},
	vega: {
		baseColor: 'neutral',
		font: 'sans',
		primaryColor: 'blue',
		radius: 'lg',
	},
}
