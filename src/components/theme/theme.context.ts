import { createContext, useContext } from 'react'

import type { ThemeContextValue } from './theme.context.types'

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export const useTheme = () => {
	const context = useContext(ThemeContext)

	if (!context) {
		throw new Error('useTheme must be used within a Provider')
	}

	return context
}
