import { type PropsWithChildren } from 'react'

import { ColorSchemeProvider } from '@/components/color-scheme/color-scheme'

import { TuryStackContext } from './provider.context'
import type { TuryStackProviderProps } from './provider.types'

export function TuryStackProvider({
	children,
	defaultColorScheme = 'light',
	...props
}: PropsWithChildren<TuryStackProviderProps>) {
	return (
		<TuryStackContext.Provider value={props}>
			<ColorSchemeProvider defaultColorScheme={defaultColorScheme}>
				{children}
			</ColorSchemeProvider>
		</TuryStackContext.Provider>
	)
}
