'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/support/utils'

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Trigger
		className={cn(
			't:flex t:h-10 t:w-full t:items-center t:justify-between t:rounded-md t:border t:border-input t:bg-background t:px-3 t:py-2 t:text-sm t:ring-offset-background t:focus:outline-none t:focus:ring-2 t:focus:ring-ring t:focus:ring-offset-2 t:disabled:cursor-not-allowed t:disabled:opacity-50 t:data-[placeholder]:text-muted-foreground t:[&>span]:line-clamp-1',
			className,
		)}
		ref={ref}
		{...props}
	>
		{children}
		<SelectPrimitive.Icon asChild>
			<ChevronDown className="t:h-4 t:w-4 t:opacity-50" />
		</SelectPrimitive.Icon>
	</SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.ScrollUpButton
		className={cn(
			't:flex t:cursor-default t:items-center t:justify-center t:py-1',
			className,
		)}
		ref={ref}
		{...props}
	>
		<ChevronUp className="t:h-4 t:w-4" />
	</SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.ScrollDownButton
		className={cn(
			't:flex t:cursor-default t:items-center t:justify-center t:py-1',
			className,
		)}
		ref={ref}
		{...props}
	>
		<ChevronDown className="t:h-4 t:w-4" />
	</SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName =
	SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
	<SelectPrimitive.Portal>
		<SelectPrimitive.Content
			className={cn(
				't:data-[state=closed]:fade-out-0 t:data-[state=open]:fade-in-0 t:data-[state=closed]:zoom-out-95 t:data-[state=open]:zoom-in-95 t:data-[side=bottom]:slide-in-from-top-2 t:data-[side=left]:slide-in-from-right-2 t:data-[side=right]:slide-in-from-left-2 t:data-[side=top]:slide-in-from-bottom-2 t:relative t:z-50 t:max-h-[--radix-select-content-available-height] t:min-w-[8rem] t:origin-[--radix-select-content-transform-origin] t:overflow-y-auto t:overflow-x-hidden t:rounded-md t:border t:bg-popover t:text-popover-foreground t:shadow-md t:data-[state=closed]:animate-out t:data-[state=open]:animate-in',
				position === 'popper' &&
					't:data-[side=left]:-t-translate-x-1 t:data-[side=top]:-t-translate-y-1 t:data-[side=right]:translate-x-1 t:data-[side=bottom]:translate-y-1',
				className,
			)}
			position={position}
			ref={ref}
			{...props}
		>
			<SelectScrollUpButton />
			<SelectPrimitive.Viewport
				className={cn(
					't:p-1',
					position === 'popper' &&
						't:h-[var(--radix-select-trigger-height)] t:w-full t:min-w-[var(--radix-select-trigger-width)]',
				)}
			>
				{children}
			</SelectPrimitive.Viewport>
			<SelectScrollDownButton />
		</SelectPrimitive.Content>
	</SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Label
		className={cn(
			't:py-1.5 t:pr-2 t:pl-8 t:font-semibold t:text-sm',
			className,
		)}
		ref={ref}
		{...props}
	/>
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Item
		className={cn(
			't:relative t:flex t:w-full t:cursor-default t:select-none t:items-center t:rounded-sm t:py-1.5 t:pr-2 t:pl-8 t:text-sm t:outline-none t:focus:bg-accent t:focus:text-accent-foreground t:data-[disabled]:pointer-events-none t:data-[disabled]:opacity-50',
			className,
		)}
		ref={ref}
		{...props}
	>
		<span className="t:absolute t:left-2 t:flex t:h-3.5 t:w-3.5 t:items-center t:justify-center">
			<SelectPrimitive.ItemIndicator>
				<Check className="t:h-4 t:w-4" />
			</SelectPrimitive.ItemIndicator>
		</span>

		<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
	</SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Separator
		className={cn('t:-t-mx-1 t:my-1 t:h-px t:bg-muted', className)}
		ref={ref}
		{...props}
	/>
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
	Select,
	SelectGroup,
	SelectValue,
	SelectTrigger,
	SelectContent,
	SelectLabel,
	SelectItem,
	SelectSeparator,
	SelectScrollUpButton,
	SelectScrollDownButton,
}
