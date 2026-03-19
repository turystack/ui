import {
	BASE_COLOR_VARS,
	FONT_MAP,
	PRIMARY_COLOR_VARS,
	RADIUS_MAP,
	STYLE_PRESETS,
} from './theme.presets'
import type { ThemeProps } from './theme.types'

export function resolveTheme(theme: ThemeProps): Omit<ThemeProps, 'style'> {
	const preset = theme.style ? STYLE_PRESETS[theme.style] : {}

	return {
		baseColor: theme.baseColor ?? preset.baseColor,
		font: theme.font ?? preset.font,
		primaryColor: theme.primaryColor ?? preset.primaryColor,
		radius: theme.radius ?? preset.radius,
	}
}

export function applyTheme(
	theme: ThemeProps,
	isDark: boolean,
): Record<string, string> {
	const resolved = resolveTheme(theme)
	const vars: Record<string, string> = {}
	const mode = isDark ? 'dark' : 'light'

	if (resolved.baseColor) {
		const baseVars = BASE_COLOR_VARS[resolved.baseColor][mode]
		Object.assign(vars, baseVars)
	}

	if (resolved.primaryColor) {
		const primaryVars = PRIMARY_COLOR_VARS[resolved.primaryColor][mode]
		Object.assign(vars, primaryVars)
	}

	if (resolved.font) {
		vars['--font-sans'] = FONT_MAP[resolved.font]
	}

	if (resolved.radius) {
		vars['--t-radius'] = RADIUS_MAP[resolved.radius]
	}

	return vars
}

export function applyThemeToDocument(theme: ThemeProps): void {
	const root = document.documentElement
	const isDark = root.classList.contains('dark')
	const vars = applyTheme(theme, isDark)

	for (const [key, value] of Object.entries(vars)) {
		root.style.setProperty(key, value)
	}
}

export const ALL_THEME_CSS_VARS = [
	'--t-background',
	'--t-foreground',
	'--t-card',
	'--t-card-foreground',
	'--t-popover',
	'--t-popover-foreground',
	'--t-secondary',
	'--t-secondary-foreground',
	'--t-muted',
	'--t-muted-foreground',
	'--t-accent',
	'--t-accent-foreground',
	'--t-border',
	'--t-input',
	'--t-primary',
	'--t-primary-foreground',
	'--t-ring',
	'--font-sans',
	'--t-radius',
] as const
