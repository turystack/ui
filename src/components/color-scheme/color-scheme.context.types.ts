export type ColorScheme = 'light' | 'dark' | 'system'

export type ColorSchemeContextValue = {
	colorScheme: ColorScheme
	changeColorScheme: (colorScheme: ColorScheme) => void
}
