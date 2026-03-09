import * as SwitchPrimitive from '@radix-ui/react-switch'
import { useId } from 'react'
import { tv } from 'tailwind-variants'

import type { SwitchProps } from './switch.types'

import { Label } from '@/components/label'

const styles = tv({
	defaultVariants: {
		size: 'md',
	},
	slots: {
		description: 't:text-sm t:text-muted-foreground',
		root: 't:peer t:inline-flex t:shrink-0 t:cursor-pointer t:items-center t:rounded-full t:border-2 t:border-transparent t:transition-colors t:focus-visible:outline-none t:focus-visible:ring-2 t:focus-visible:ring-ring t:focus-visible:ring-offset-2 t:focus-visible:ring-offset-background t:disabled:cursor-not-allowed t:disabled:opacity-50 t:data-[state=checked]:bg-primary t:data-[state=unchecked]:bg-input',
		thumb: 't:pointer-events-none t:block t:rounded-full t:bg-background t:shadow-lg t:ring-0 t:transition-transform t:data-[state=unchecked]:translate-x-0',
		wrapper: 't:flex t:items-center t:gap-3',
	},
	variants: {
		bordered: {
			true: {
				wrapper: 't:border t:rounded-md t:p-3 t:justify-between t:cursor-pointer',
			},
		},
		size: {
			lg: {
				root: 't:h-6 t:w-11',
				thumb: 't:h-5 t:w-5 t:data-[state=checked]:translate-x-5',
			},
			md: {
				root: 't:h-5 t:w-9',
				thumb: 't:h-4 t:w-4 t:data-[state=checked]:translate-x-4',
			},
			sm: {
				root: 't:h-4 t:w-7',
				thumb: 't:h-3 t:w-3 t:data-[state=checked]:translate-x-3',
			},
		},
	},
})

export function Switch({
	label,
	value,
	size,
	description,
	checked,
	defaultChecked,
	disabled,
	bordered,
	onCheckedChange,
}: SwitchProps) {
	const id = useId()
	const { root, thumb, wrapper, description: descriptionClass } = styles({ bordered, size })

	const resolvedLabel = typeof label === 'string' ? label : label?.content
	const labelRequired = typeof label === 'object' && label !== null ? label.required : false
	const labelOptional = typeof label === 'object' && label !== null ? label.optional : false

	const content = (
		<>
			{resolvedLabel && (
				<div className={bordered ? 't:pointer-events-none' : undefined}>
					<Label
						htmlFor={bordered ? undefined : id}
						disabled={disabled}
						required={labelRequired}
						optional={labelOptional}
					>
						{resolvedLabel}
					</Label>
					{description && <p className={descriptionClass()}>{description}</p>}
				</div>
			)}
			<SwitchPrimitive.Root
				checked={checked}
				className={root()}
				defaultChecked={defaultChecked}
				disabled={disabled}
				id={id}
				onCheckedChange={onCheckedChange}
				value={value}
			>
				<SwitchPrimitive.Thumb className={thumb()} />
			</SwitchPrimitive.Root>
		</>
	)

	if (bordered) {
		return <label className={wrapper()} htmlFor={id}>{content}</label>
	}

	return <div className={wrapper()}>{content}</div>
}
