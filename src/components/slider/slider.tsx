import * as SliderPrimitive from '@radix-ui/react-slider'
import { tv } from 'tailwind-variants'

import type { SliderProps } from './slider.types'

const styles = tv({
	defaultVariants: {
		orientation: 'horizontal',
		size: 'md',
	},
	slots: {
		range: 't:absolute t:bg-primary t:rounded-full',
		root: 't:relative t:flex t:touch-none t:select-none t:items-center',
		thumb:
			't:block t:rounded-full t:border-2 t:border-primary t:bg-background t:ring-offset-background t:transition-colors t:focus-visible:outline-none t:focus-visible:ring-2 t:focus-visible:ring-ring t:focus-visible:ring-offset-2 t:disabled:pointer-events-none t:disabled:opacity-50',
		track: 't:relative t:grow t:overflow-hidden t:rounded-full t:bg-secondary',
	},
	variants: {
		orientation: {
			horizontal: {
				range: 't:h-full',
				root: 't:w-full t:flex-row',
				track: 't:w-full',
			},
			vertical: {
				range: 't:w-full',
				root: 't:h-full t:flex-col',
				track: 't:h-full',
			},
		},
		size: {
			lg: {
				thumb: 't:h-6 t:w-6',
			},
			md: {
				thumb: 't:h-5 t:w-5',
			},
			sm: {
				thumb: 't:h-4 t:w-4',
			},
		},
	},
	compoundVariants: [
		{ orientation: 'horizontal', size: 'sm', class: { track: 't:h-1' } },
		{ orientation: 'horizontal', size: 'md', class: { track: 't:h-2' } },
		{ orientation: 'horizontal', size: 'lg', class: { track: 't:h-3' } },
		{ orientation: 'vertical', size: 'sm', class: { track: 't:w-1' } },
		{ orientation: 'vertical', size: 'md', class: { track: 't:w-2' } },
		{ orientation: 'vertical', size: 'lg', class: { track: 't:w-3' } },
	],
})

export function Slider(props: SliderProps) {
	const { orientation, size } = props
	const { root, track, range, thumb } = styles({ orientation, size })

	if (props.mode === 'single') {
		const { value, defaultValue, onValueChange } = props
		return (
			<SliderPrimitive.Root
				className={root()}
				defaultValue={defaultValue !== undefined ? [defaultValue] : undefined}
				onValueChange={([v]) => onValueChange?.(v)}
				orientation={orientation}
				value={value !== undefined ? [value] : undefined}
			>
				<SliderPrimitive.Track className={track()}>
					<SliderPrimitive.Range className={range()} />
				</SliderPrimitive.Track>
				<SliderPrimitive.Thumb className={thumb()} />
			</SliderPrimitive.Root>
		)
	}

	const { value, defaultValue, onValueChange } = props
	return (
		<SliderPrimitive.Root
			className={root()}
			defaultValue={defaultValue}
			onValueChange={(v) => onValueChange?.(v as [number, number])}
			orientation={orientation}
			value={value}
		>
			<SliderPrimitive.Track className={track()}>
				<SliderPrimitive.Range className={range()} />
			</SliderPrimitive.Track>
			<SliderPrimitive.Thumb className={thumb()} />
			<SliderPrimitive.Thumb className={thumb()} />
		</SliderPrimitive.Root>
	)
}
