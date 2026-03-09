import type { PropsWithChildren } from 'react'

import { TuryStackContext } from './provider.context'
import type { ProviderProps } from './provider.types'

import { ColorSchemeProvider } from '@/components/color-scheme/color-scheme'
import { ToastContainer } from '@/components/toast'

export function Provider({
	children,
	defaultColorScheme = 'system',
	...props
}: PropsWithChildren<ProviderProps>) {
	return (
		<TuryStackContext.Provider value={props}>
			<ColorSchemeProvider defaultColorScheme={defaultColorScheme}>
				<ToastContainer />
				{children}
			</ColorSchemeProvider>
		</TuryStackContext.Provider>
	)
}
