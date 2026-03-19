import {
	type PropsWithChildren,
	useCallback,
	useLayoutEffect,
	useRef,
	useState,
} from 'react'

import { ThemeContext } from './theme.context'
import { getStoredTheme, setStoredTheme } from './theme.storage'
import type { ThemeProps } from './theme.types'
import { ALL_THEME_CSS_VARS, applyTheme } from './theme.utils'

type ThemeProviderProps = {
	defaultTheme?: ThemeProps
}

export function ThemeProvider({
	defaultTheme = {},
	children,
}: PropsWithChildren<ThemeProviderProps>) {
	const [theme, setTheme] = useState<ThemeProps>({
		...defaultTheme,
		...getStoredTheme(),
	})

	const appliedVarsRef = useRef<string[]>([])

	const applyVars = useCallback((currentTheme: ThemeProps) => {
		const root = document.documentElement
		const isDark = root.classList.contains('dark')
		const vars = applyTheme(currentTheme, isDark)

		for (const prop of appliedVarsRef.current) {
			if (!(prop in vars)) {
				root.style.removeProperty(prop)
			}
		}

		for (const [key, value] of Object.entries(vars)) {
			root.style.setProperty(key, value)
		}

		appliedVarsRef.current = Object.keys(vars)
	}, [])

	const changeTheme = useCallback((next: Partial<ThemeProps>) => {
		setTheme((prev) => {
			const merged = {
				...prev,
				...next,
			}
			setStoredTheme(merged)
			return merged
		})
	}, [])

	useLayoutEffect(() => {
		applyVars(theme)

		const root = document.documentElement
		const observer = new MutationObserver((mutations) => {
			for (const mutation of mutations) {
				if (
					mutation.type === 'attributes' &&
					mutation.attributeName === 'class'
				) {
					applyVars(theme)
				}
			}
		})

		observer.observe(root, {
			attributeFilter: [
				'class',
			],
			attributes: true,
		})

		return () => {
			observer.disconnect()
			const rootEl = document.documentElement
			for (const prop of ALL_THEME_CSS_VARS) {
				rootEl.style.removeProperty(prop)
			}
		}
	}, [
		theme,
		applyVars,
	])

	return (
		<ThemeContext.Provider
			value={{
				changeTheme,
				theme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}
