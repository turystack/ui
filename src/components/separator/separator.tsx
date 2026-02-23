import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { tv } from 'tailwind-variants'

import type { SeparatorProps } from './separator.types'

import { useInternalState } from '@/components/provider/provider.context'
import { cn } from '@/support/utils'

const styles = tv({
	defaultVariants: {
		orientation: 'horizontal',
	},
	slots: {
		root: 't:shrink-0 t:bg-border',
	},
	variants: {
		orientation: {
			horizontal: {
				root: 't:h-[1px] t:w-full',
			},
			vertical: {
				root: 't:h-full t:w-[1px]',
			},
		},
	},
})

export function Separator({ orientation, decorative = true }: SeparatorProps) {
	const state = useInternalState()
	const config = state?.components?.separator
	const resolvedOrientation =
		orientation ?? config?.defaultProps?.orientation ?? 'horizontal'

	const { root } = styles({
		orientation: resolvedOrientation,
	})

	return (
		<SeparatorPrimitive.Root
			className={cn(root(), config?.classNames?.root)}
			decorative={decorative}
			orientation={resolvedOrientation}
		/>
	)
}
