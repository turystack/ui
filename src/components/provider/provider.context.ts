import { createContext, useContext } from 'react'

import type { TuryStackProviderProps } from './provider.types'

export const TuryStackContext = createContext<
	TuryStackProviderProps | undefined
>(undefined)

export function useInternalState() {
	const state = useContext(TuryStackContext)

	return {
		components: state?.components,
		translations: state?.translations,
	}
}
