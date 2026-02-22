'use client'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/support/utils'

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay
		className={cn(
			't:data-[state=closed]:fade-out-0 t:data-[state=open]:fade-in-0 t:fixed t:inset-0 t:z-50 t:bg-black/80 t:data-[state=closed]:animate-out t:data-[state=open]:animate-in',
			className,
		)}
		ref={ref}
		{...props}
	/>
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<DialogPortal>
		<DialogOverlay />
		<DialogPrimitive.Content
			className={cn(
				't:data-[state=closed]:fade-out-0 t:data-[state=open]:fade-in-0 t:data-[state=closed]:zoom-out-95 t:data-[state=open]:zoom-in-95 t:data-[state=closed]:slide-out-to-left-1/2 t:data-[state=closed]:slide-out-to-top-[48%] t:data-[state=open]:slide-in-from-left-1/2 t:data-[state=open]:slide-in-from-top-[48%] t:fixed t:top-[50%] t:left-[50%] t:z-50 t:grid t:w-full t:max-w-lg t:translate-x-[-50%] t:translate-y-[-50%] t:gap-4 t:border t:bg-background t:p-6 t:shadow-lg t:duration-200 t:data-[state=closed]:animate-out t:data-[state=open]:animate-in t:sm:rounded-lg',
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
			<DialogPrimitive.Close className="t:absolute t:top-4 t:right-4 t:rounded-sm t:opacity-70 t:ring-offset-background t:transition-opacity t:hover:opacity-100 t:focus:outline-none t:focus:ring-2 t:focus:ring-ring t:focus:ring-offset-2 t:disabled:pointer-events-none t:data-[state=open]:bg-accent t:data-[state=open]:text-muted-foreground">
				<X className="t:h-4 t:w-4" />
				<span className="t:sr-only">Close</span>
			</DialogPrimitive.Close>
		</DialogPrimitive.Content>
	</DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			't:flex t:flex-col t:space-y-1.5 t:text-center t:sm:text-left',
			className,
		)}
		{...props}
	/>
)
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			't:flex t:flex-col-reverse t:sm:flex-row t:sm:justify-end t:sm:space-x-2',
			className,
		)}
		{...props}
	/>
)
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title
		className={cn(
			't:font-semibold t:text-lg t:leading-none t:tracking-tight',
			className,
		)}
		ref={ref}
		{...props}
	/>
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description
		className={cn('t:text-muted-foreground t:text-sm', className)}
		ref={ref}
		{...props}
	/>
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
	Dialog,
	DialogPortal,
	DialogOverlay,
	DialogClose,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogDescription,
}
