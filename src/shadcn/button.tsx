import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/support/utils'

const buttonVariants = cva(
	't:inline-flex t:items-center t:justify-center t:gap-2 t:whitespace-nowrap t:rounded-md t:text-sm t:font-medium t:ring-offset-background t:transition-colors t:focus-visible:outline-none t:focus-visible:ring-2 t:focus-visible:ring-ring t:focus-visible:ring-offset-2 t:disabled:pointer-events-none t:disabled:opacity-50 t:[&_svg]:pointer-events-none t:[&_svg]:size-4 t:[&_svg]:shrink-0',
	{
		defaultVariants: {
			size: 'default',
			variant: 'default',
		},
		variants: {
			size: {
				default: 't:h-10 t:px-4 t:py-2',
				icon: 't:h-10 t:w-10',
				lg: 't:h-11 t:rounded-md t:px-8',
				sm: 't:h-9 t:rounded-md t:px-3',
			},
			variant: {
				default: 't:bg-primary t:text-primary-foreground t:hover:bg-primary/90',
				destructive:
					't:bg-destructive t:text-destructive-foreground t:hover:bg-destructive/90',
				ghost: 't:hover:bg-accent t:hover:text-accent-foreground',
				link: 't:text-primary t:underline-offset-4 t:hover:underline',
				outline:
					't:border t:border-input t:bg-background t:hover:bg-accent t:hover:text-accent-foreground',
				secondary:
					't:bg-secondary t:text-secondary-foreground t:hover:bg-secondary/80',
			},
		},
	},
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={cn(
					buttonVariants({
						className,
						size,
						variant,
					}),
				)}
				ref={ref}
				{...props}
			/>
		)
	},
)
Button.displayName = 'Button'

export { Button, buttonVariants }
