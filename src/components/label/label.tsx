import * as LabelPrimitive from '@radix-ui/react-label'
import { Info } from 'lucide-react'
import type { PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants'

import type { LabelProps } from './label.types'

import { Tooltip } from '@/components/tooltip'

const styles = tv({
	slots: {
		optional: 't:ml-1 t:text-muted-foreground t:text-xs',
		required: 't:ml-0.5 t:text-destructive',
		root: 't:text-sm t:font-medium t:leading-none t:peer-disabled:cursor-not-allowed t:peer-disabled:opacity-70',
		tooltipIcon: 't:ml-1 t:h-3.5 t:w-3.5 t:text-muted-foreground t:inline-block t:cursor-help t:shrink-0',
	},
	variants: {
		disabled: {
			true: {
				root: 't:opacity-70 t:cursor-not-allowed',
			},
		},
	},
})

export function Label({
	htmlFor,
	required,
	optional,
	disabled,
	tooltip,
	children,
}: PropsWithChildren<LabelProps>) {
	const {
		root,
		required: requiredClass,
		optional: optionalClass,
		tooltipIcon,
	} = styles({ disabled: !!disabled })

	return (
		<LabelPrimitive.Root className={root()} htmlFor={htmlFor}>
			{children}
			{required && <span className={requiredClass()}> *</span>}
			{optional && <span className={optionalClass()}> (optional)</span>}
			{tooltip && (
				<Tooltip content={tooltip}>
					<Info className={tooltipIcon()} />
				</Tooltip>
			)}
		</LabelPrimitive.Root>
	)
}
