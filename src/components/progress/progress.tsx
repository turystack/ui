import * as ProgressPrimitive from '@radix-ui/react-progress'
import { tv } from 'tailwind-variants'

import type { ProgressProps } from './progress.types'

import { Label } from '@/components/label'

const styles = tv({
	defaultVariants: {
		size: 'md',
	},
	slots: {
		indicator: 't:h-full t:w-full t:flex-1 t:bg-primary t:transition-all',
		label: 't:mb-1.5 t:flex t:items-center t:justify-between',
		root: 't:relative t:w-full t:overflow-hidden t:rounded-full t:bg-secondary',
	},
	variants: {
		size: {
			lg: {
				root: 't:h-6',
			},
			md: {
				root: 't:h-4',
			},
			sm: {
				root: 't:h-2',
			},
		},
	},
})

export function Progress({ label, value, defaultValue, size }: ProgressProps) {
	const {
		root,
		indicator,
		label: labelClass,
	} = styles({
		size,
	})

	const resolvedValue = value ?? defaultValue ?? 0
	const resolvedLabel = typeof label === 'string' ? label : label?.content

	return (
		<div>
			{resolvedLabel && (
				<div className={labelClass()}>
					<Label>{resolvedLabel}</Label>
					<span className="t:text-muted-foreground t:text-sm">
						{resolvedValue}%
					</span>
				</div>
			)}
			<ProgressPrimitive.Root
				className={root()}
				value={resolvedValue}
			>
				<ProgressPrimitive.Indicator
					className={indicator()}
					style={{
						transform: `translateX(-${100 - resolvedValue}%)`,
					}}
				/>
			</ProgressPrimitive.Root>
		</div>
	)
}
