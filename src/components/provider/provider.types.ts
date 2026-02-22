import type { TButtonProps, TButtonSlots } from '@/components/button'
import type { TLoaderProps, TLoaderSlots } from '@/components/loader'
import type {
	ComponentClassNameSlots,
	ComponentDefaultProps,
} from '@/support/types'

export type ComponentConfig<T extends object, S extends string> = {
	classNames?: ComponentClassNameSlots<S>
	defaultProps?: ComponentDefaultProps<T>
}

export type TuryStackProviderProps = {
	components?: {
		button?: ComponentConfig<TButtonProps, TButtonSlots>
		loader?: ComponentConfig<TLoaderProps, TLoaderSlots>
	}
}
