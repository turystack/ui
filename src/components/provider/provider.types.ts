import type { ButtonProps, ButtonSlots } from '@/components/button'
import type { LoaderProps, LoaderSlots } from '@/components/loader'
import type {
	ComponentClassNameSlots,
	ComponentDefaultProps,
} from '@/support/types'

export type TuryStackProviderProps = {
	components?: {
		button?: {
			classNames?: ComponentClassNameSlots<ButtonSlots>
			defaultProps?: ComponentDefaultProps<ButtonProps>
		}
		loader?: {
			classNames?: ComponentClassNameSlots<LoaderSlots>
			defaultProps?: ComponentDefaultProps<LoaderProps>
		}
	}
}
