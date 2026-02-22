'use client'

import * as SheetPrimitive from '@radix-ui/react-dialog'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/support/utils'

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Overlay
		className={cn(
			't:data-[state=closed]:fade-out-0 t:data-[state=open]:fade-in-0 t:fixed t:inset-0 t:z-50 t:bg-black/80 t:data-[state=closed]:animate-out t:data-[state=open]:animate-in',
			className,
		)}
		{...props}
		ref={ref}
	/>
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
	't:fixed t:z-50 t:gap-4 t:bg-background t:p-6 t:shadow-lg t:transition t:ease-in-out t:data-[state=open]:animate-in t:data-[state=closed]:animate-out t:data-[state=closed]:duration-300 t:data-[state=open]:duration-500',
	{
		defaultVariants: {
			side: 'right',
		},
		variants: {
			side: {
				bottom:
					't:inset-x-0 t:bottom-0 t:border-t t:data-[state=closed]:slide-out-to-bottom t:data-[state=open]:slide-in-from-bottom',
				left: 't:inset-y-0 t:left-0 t:h-full t:w-3/4 t:border-r t:data-[state=closed]:slide-out-to-left t:data-[state=open]:slide-in-from-left t:sm:max-w-sm',
				right:
					't:inset-y-0 t:right-0 t:h-full t:w-3/4  t:border-l t:data-[state=closed]:slide-out-to-right t:data-[state=open]:slide-in-from-right t:sm:max-w-sm',
				top: 't:inset-x-0 t:top-0 t:border-b t:data-[state=closed]:slide-out-to-top t:data-[state=open]:slide-in-from-top',
			},
		},
	},
)

interface SheetContentProps
	extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
		VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Content>,
	SheetContentProps
>(({ side = 'right', className, children, ...props }, ref) => (
	<SheetPortal>
		<SheetOverlay />
		<SheetPrimitive.Content
			className={cn(
				sheetVariants({
					side,
				}),
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
			<SheetPrimitive.Close className="t:absolute t:top-4 t:right-4 t:rounded-sm t:opacity-70 t:ring-offset-background t:transition-opacity t:hover:opacity-100 t:focus:outline-none t:focus:ring-2 t:focus:ring-ring t:focus:ring-offset-2 t:disabled:pointer-events-none t:data-[state=open]:bg-secondary">
				<X className="t:h-4 t:w-4" />
				<span className="t:sr-only">Close</span>
			</SheetPrimitive.Close>
		</SheetPrimitive.Content>
	</SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			't:flex t:flex-col t:space-y-2 t:text-center t:sm:text-left',
			className,
		)}
		{...props}
	/>
)
SheetHeader.displayName = 'SheetHeader'

const SheetFooter = ({
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
SheetFooter.displayName = 'SheetFooter'

const SheetTitle = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Title
		className={cn('t:font-semibold t:text-foreground t:text-lg', className)}
		ref={ref}
		{...props}
	/>
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef<
	React.ElementRef<typeof SheetPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
	<SheetPrimitive.Description
		className={cn('t:text-muted-foreground t:text-sm', className)}
		ref={ref}
		{...props}
	/>
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
	Sheet,
	SheetPortal,
	SheetOverlay,
	SheetTrigger,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetFooter,
	SheetTitle,
	SheetDescription,
}
