'use client'

import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/support/utils'

const toggleVariants = cva(
	't:inline-flex t:items-center t:justify-center t:rounded-md t:text-sm t:font-medium t:ring-offset-background t:transition-colors t:hover:bg-muted t:hover:text-muted-foreground t:focus-visible:outline-none t:focus-visible:ring-2 t:focus-visible:ring-ring t:focus-visible:ring-offset-2 t:disabled:pointer-events-none t:disabled:opacity-50 t:data-[state=on]:bg-accent t:data-[state=on]:text-accent-foreground t:[&_svg]:pointer-events-none t:[&_svg]:size-4 t:[&_svg]:shrink-0 t:gap-2',
	{
		defaultVariants: {
			size: 'default',
			variant: 'default',
		},
		variants: {
			size: {
				default: 't:h-10 t:px-3 t:min-w-10',
				lg: 't:h-11 t:px-5 t:min-w-11',
				sm: 't:h-9 t:px-2.5 t:min-w-9',
			},
			variant: {
				default: 't:bg-transparent',
				outline:
					't:border t:border-input t:bg-transparent t:hover:bg-accent t:hover:text-accent-foreground',
			},
		},
	},
)

const Toggle = React.forwardRef<
	React.ElementRef<typeof TogglePrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
		VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
	<TogglePrimitive.Root
		className={cn(
			toggleVariants({
				className,
				size,
				variant,
			}),
		)}
		ref={ref}
		{...props}
	/>
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
