import type { ThemeProps } from './theme.types'

export const THEME_STORAGE_KEY = 'turystack-theme'

export function getStoredTheme(): ThemeProps | null {
	if (typeof window === 'undefined') {
		return null
	}

	try {
		const raw = localStorage.getItem(THEME_STORAGE_KEY)
		return raw ? (JSON.parse(raw) as ThemeProps) : null
	} catch {
		return null
	}
}

export function setStoredTheme(theme: ThemeProps): void {
	localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme))
}
