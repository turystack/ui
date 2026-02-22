import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/support/utils'

const alertVariants = cva(
	't:relative t:w-full t:rounded-lg t:border t:p-4 t:[&>svg~*]:pl-7 t:[&>svg+div]:translate-y-[-3px] t:[&>svg]:absolute t:[&>svg]:left-4 t:[&>svg]:top-4 t:[&>svg]:text-foreground',
	{
		defaultVariants: {
			variant: 'default',
		},
		variants: {
			variant: {
				default: 't:bg-background t:text-foreground',
				destructive:
					't-border-destructive/50 t-text-destructive dark:t-border-destructive [&>svg]:t-text-destructive',
			},
		},
	},
)

const Alert = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
	<div
		className={cn(
			alertVariants({
				variant,
			}),
			className,
		)}
		ref={ref}
		role="alert"
		{...props}
	/>
))
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h5
		className={cn(
			't:mb-1 t:font-medium t:leading-none t:tracking-tight',
			className,
		)}
		ref={ref}
		{...props}
	/>
))
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<div
		className={cn('t:text-sm t:[&_p]:leading-relaxed', className)}
		ref={ref}
		{...props}
	/>
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription }
