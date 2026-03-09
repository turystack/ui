import { createContext, useContext } from 'react'

import type { ProviderProps } from './provider.types'

export const TuryStackContext = createContext<
	ProviderProps | undefined
>(undefined)

export function useInternalState() {
	const state = useContext(TuryStackContext)

	return {
		components: state?.components,
		translations: state?.translations,
	}
}
