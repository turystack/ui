import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'

import { cn } from '@/support/utils'

const badgeVariants = cva(
	't:inline-flex t:items-center t:rounded-full t:border t:px-2.5 t:py-0.5 t:text-xs t:font-semibold t:transition-colors t:focus:outline-none t:focus:ring-2 t:focus:ring-ring t:focus:ring-offset-2',
	{
		defaultVariants: {
			variant: 'default',
		},
		variants: {
			variant: {
				default:
					't:border-transparent t:bg-primary t:text-primary-foreground t:hover:bg-primary/80',
				destructive:
					't:border-transparent t:bg-destructive t:text-destructive-foreground t:hover:bg-destructive/80',
				outline: 't:text-foreground',
				secondary:
					't:border-transparent t:bg-secondary t:text-secondary-foreground t:hover:bg-secondary/80',
			},
		},
	},
)

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div
			className={cn(
				badgeVariants({
					variant,
				}),
				className,
			)}
			{...props}
		/>
	)
}

export { Badge, badgeVariants }
