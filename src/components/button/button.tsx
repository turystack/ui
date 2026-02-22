import { Slot } from '@radix-ui/react-slot'
import { Loader2 } from 'lucide-react'
import type * as React from 'react'
import { tv } from 'tailwind-variants'

import type { ButtonProps } from './button.types'

const button = tv({
	base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	defaultVariants: {
		size: 'md',
		variant: 'default',
	},
	variants: {
		block: {
			true: 'w-full',
		},
		size: {
			icon: 'h-10 w-10',
			lg: 'h-11 rounded-md px-8',
			md: 'h-10 px-4 py-2',
			sm: 'h-9 rounded-md px-3',
		},
		variant: {
			dashed:
				'border-2 border-input border-dashed bg-background hover:bg-accent hover:text-accent-foreground',
			default: 'bg-primary text-primary-foreground hover:bg-primary/90',
			destructive:
				'bg-destructive text-destructive-foreground hover:bg-destructive/90',
			ghost: 'hover:bg-accent hover:text-accent-foreground',
			link: 'text-primary underline-offset-4 hover:underline',
			outline:
				'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
			secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
		},
	},
})

export function Button({
	form,
	type = 'button',
	size = 'md',
	variant = 'default',
	leftSection,
	rightSection,
	block = false,
	loading = false,
	disabled = false,
	asChild = false,
	onClick,
	children,
}: ButtonProps & {
	children?: React.ReactNode
}) {
	const Comp = asChild ? Slot : 'button'
	const isDisabled = disabled || loading

	return (
		<Comp
			className={button({
				block,
				size,
				variant,
			})}
			disabled={isDisabled}
			form={asChild ? undefined : form}
			onClick={onClick}
			type={asChild ? undefined : type}
		>
			{loading ? <Loader2 className="animate-spin" /> : leftSection}

			{children}

			{!loading && rightSection}
		</Comp>
	)
}
