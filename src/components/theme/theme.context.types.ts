import type { ThemeProps } from './theme.types'

export type ThemeContextValue = {
	theme: ThemeProps
	changeTheme: (theme: Partial<ThemeProps>) => void
}
