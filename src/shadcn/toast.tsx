import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/support/utils'

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Viewport>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Viewport
		className={cn(
			't:fixed t:top-0 t:z-[100] t:flex t:max-h-screen t:w-full t:flex-col-reverse t:p-4 t:sm:top-auto t:sm:right-0 t:sm:bottom-0 t:sm:flex-col t:md:max-w-[420px]',
			className,
		)}
		ref={ref}
		{...props}
	/>
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
	't:group t:pointer-events-auto t:relative t:flex t:w-full t:items-center t:justify-between t:space-x-4 t:overflow-hidden t:rounded-md t:border t:p-6 t:pr-8 t:shadow-lg t:transition-all t:data-[swipe=cancel]:translate-x-0 t:data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] t:data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] t:data-[swipe=move]:transition-none t:data-[state=open]:animate-in t:data-[state=closed]:animate-out t:data-[swipe=end]:animate-out t:data-[state=closed]:fade-out-80 t:data-[state=closed]:slide-out-to-right-full t:data-[state=open]:slide-in-from-top-full t:data-[state=open]:sm:slide-in-from-bottom-full',
	{
		defaultVariants: {
			variant: 'default',
		},
		variants: {
			variant: {
				default: 't:border t:bg-background t:text-foreground',
				destructive:
					't:destructive t:group t:border-destructive t:bg-destructive t:text-destructive-foreground',
			},
		},
	},
)

const Toast = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
		VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
	return (
		<ToastPrimitives.Root
			className={cn(
				toastVariants({
					variant,
				}),
				className,
			)}
			ref={ref}
			{...props}
		/>
	)
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Action>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Action
		className={cn(
			't:inline-flex t:h-8 t:shrink-0 t:items-center t:justify-center t:rounded-md t:border t:bg-transparent t:px-3 t:font-medium t:text-sm t:ring-offset-background t:transition-colors t:hover:bg-secondary t:focus:outline-none t:focus:ring-2 t:focus:ring-ring t:focus:ring-offset-2 t:disabled:pointer-events-none t:disabled:opacity-50 t:group-[.destructive]:border-muted/40 t:group-[.destructive]:focus:ring-destructive t:group-[.destructive]:hover:border-destructive/30 t:group-[.destructive]:hover:bg-destructive t:group-[.destructive]:hover:text-destructive-foreground',
			className,
		)}
		ref={ref}
		{...props}
	/>
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Close>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Close
		className={cn(
			't:absolute t:top-2 t:right-2 t:rounded-md t:p-1 t:text-foreground/50 t:opacity-0 t:transition-opacity t:hover:text-foreground t:focus:opacity-100 t:focus:outline-none t:focus:ring-2 t:group-hover:opacity-100 t:group-[.destructive]:text-red-300 t:group-[.destructive]:focus:ring-red-400 t:group-[.destructive]:focus:ring-offset-red-600 t:group-[.destructive]:hover:text-red-50',
			className,
		)}
		ref={ref}
		toast-close=""
		{...props}
	>
		<X className="t:h-4 t:w-4" />
	</ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Title>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Title
		className={cn('t:font-semibold t:text-sm', className)}
		ref={ref}
		{...props}
	/>
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Description>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Description
		className={cn('t:text-sm t:opacity-90', className)}
		ref={ref}
		{...props}
	/>
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
	type ToastProps,
	type ToastActionElement,
	ToastProvider,
	ToastViewport,
	Toast,
	ToastTitle,
	ToastDescription,
	ToastClose,
	ToastAction,
}
