import { createContext, useContext } from 'react'

import type { ColorSchemeContextValue } from './color-scheme.context.types'

export const ColorSchemeContext = createContext<ColorSchemeContextValue | null>(null)

export const useColorScheme = () => {
	const context = useContext(ColorSchemeContext)

	if (!context) {
		throw new Error('useColorScheme must be used within a Provider')
	}

	return context
}
