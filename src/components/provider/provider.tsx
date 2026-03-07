import type { PropsWithChildren } from 'react'

import { TuryStackContext } from './provider.context'
import type { TuryStackProviderProps } from './provider.types'

import { ColorSchemeProvider } from '@/components/color-scheme/color-scheme'

export function TuryStackProvider({
	children,
	defaultColorScheme = 'system',
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
