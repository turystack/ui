import { type PropsWithChildren, useLayoutEffect, useState } from 'react'

import { ColorSchemeContext } from './color-scheme.context'
import type { ColorScheme } from './color-scheme.context.types'
import type { ColorSchemeProviderProps } from './color-scheme.types'

export function ColorSchemeProvider({ defaultColorScheme = 'light', children }: PropsWithChildren<ColorSchemeProviderProps>) {
	const localStorageColorScheme =
		typeof window !== 'undefined' ? (localStorage.getItem('colorScheme') as ColorScheme) : null

	const [colorScheme, setColorScheme] = useState<ColorScheme>(localStorageColorScheme ?? defaultColorScheme)

	const changeColorScheme = (next: ColorScheme) => {
		setColorScheme(next)
		localStorage.setItem('colorScheme', next)
	}

	useLayoutEffect(() => {
		const root = window.document.documentElement

		root.classList.remove('light', 'dark')

		if (colorScheme === 'system') {
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
			root.classList.add(systemTheme)
			return
		}

		root.classList.add(colorScheme)
	}, [colorScheme])

	return (
		<ColorSchemeContext.Provider value={{ colorScheme, changeColorScheme }}>
			{children}
		</ColorSchemeContext.Provider>
	)
}
