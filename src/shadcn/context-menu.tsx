import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { Check, ChevronRight, Circle } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/support/utils'

const ContextMenu = ContextMenuPrimitive.Root

const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuGroup = ContextMenuPrimitive.Group

const ContextMenuPortal = ContextMenuPrimitive.Portal

const ContextMenuSub = ContextMenuPrimitive.Sub

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

const ContextMenuSubTrigger = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
		inset?: boolean
	}
>(({ className, inset, children, ...props }, ref) => (
	<ContextMenuPrimitive.SubTrigger
		className={cn(
			't:flex t:cursor-default t:select-none t:items-center t:rounded-sm t:px-2 t:py-1.5 t:text-sm t:outline-none t:focus:bg-accent t:focus:text-accent-foreground t:data-[state=open]:bg-accent t:data-[state=open]:text-accent-foreground',
			inset && 't:pl-8',
			className,
		)}
		ref={ref}
		{...props}
	>
		{children}
		<ChevronRight className="t:ml-auto t:h-4 t:w-4" />
	</ContextMenuPrimitive.SubTrigger>
))
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName

const ContextMenuSubContent = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
	<ContextMenuPrimitive.SubContent
		className={cn(
			't:data-[state=closed]:fade-out-0 t:data-[state=open]:fade-in-0 t:data-[state=closed]:zoom-out-95 t:data-[state=open]:zoom-in-95 t:data-[side=bottom]:slide-in-from-top-2 t:data-[side=left]:slide-in-from-right-2 t:data-[side=right]:slide-in-from-left-2 t:data-[side=top]:slide-in-from-bottom-2 t:z-50 t:min-w-[8rem] t:origin-[--radix-context-menu-content-transform-origin] t:overflow-hidden t:rounded-md t:border t:bg-popover t:p-1 t:text-popover-foreground t:shadow-md t:data-[state=closed]:animate-out t:data-[state=open]:animate-in',
			className,
		)}
		ref={ref}
		{...props}
	/>
))
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName

const ContextMenuContent = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
	<ContextMenuPrimitive.Portal>
		<ContextMenuPrimitive.Content
			className={cn(
				't:fade-in-80 t:data-[state=closed]:fade-out-0 t:data-[state=open]:fade-in-0 t:data-[state=closed]:zoom-out-95 t:data-[state=open]:zoom-in-95 t:data-[side=bottom]:slide-in-from-top-2 t:data-[side=left]:slide-in-from-right-2 t:data-[side=right]:slide-in-from-left-2 t:data-[side=top]:slide-in-from-bottom-2 t:z-50 t:max-h-[--radix-context-menu-content-available-height] t:min-w-[8rem] t:origin-[--radix-context-menu-content-transform-origin] t:animate-in t:overflow-y-auto t:overflow-x-hidden t:rounded-md t:border t:bg-popover t:p-1 t:text-popover-foreground t:shadow-md t:data-[state=closed]:animate-out t:data-[state=open]:animate-in',
				className,
			)}
			ref={ref}
			{...props}
		/>
	</ContextMenuPrimitive.Portal>
))
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName

const ContextMenuItem = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
		inset?: boolean
	}
>(({ className, inset, ...props }, ref) => (
	<ContextMenuPrimitive.Item
		className={cn(
			't:relative t:flex t:cursor-default t:select-none t:items-center t:rounded-sm t:px-2 t:py-1.5 t:text-sm t:outline-none t:focus:bg-accent t:focus:text-accent-foreground t:data-[disabled]:pointer-events-none t:data-[disabled]:opacity-50',
			inset && 't:pl-8',
			className,
		)}
		ref={ref}
		{...props}
	/>
))
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName

const ContextMenuCheckboxItem = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
	<ContextMenuPrimitive.CheckboxItem
		checked={checked}
		className={cn(
			't:relative t:flex t:cursor-default t:select-none t:items-center t:rounded-sm t:py-1.5 t:pr-2 t:pl-8 t:text-sm t:outline-none t:focus:bg-accent t:focus:text-accent-foreground t:data-[disabled]:pointer-events-none t:data-[disabled]:opacity-50',
			className,
		)}
		ref={ref}
		{...props}
	>
		<span className="t:absolute t:left-2 t:flex t:h-3.5 t:w-3.5 t:items-center t:justify-center">
			<ContextMenuPrimitive.ItemIndicator>
				<Check className="t:h-4 t:w-4" />
			</ContextMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</ContextMenuPrimitive.CheckboxItem>
))
ContextMenuCheckboxItem.displayName =
	ContextMenuPrimitive.CheckboxItem.displayName

const ContextMenuRadioItem = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
	<ContextMenuPrimitive.RadioItem
		className={cn(
			't:relative t:flex t:cursor-default t:select-none t:items-center t:rounded-sm t:py-1.5 t:pr-2 t:pl-8 t:text-sm t:outline-none t:focus:bg-accent t:focus:text-accent-foreground t:data-[disabled]:pointer-events-none t:data-[disabled]:opacity-50',
			className,
		)}
		ref={ref}
		{...props}
	>
		<span className="t:absolute t:left-2 t:flex t:h-3.5 t:w-3.5 t:items-center t:justify-center">
			<ContextMenuPrimitive.ItemIndicator>
				<Circle className="t:h-2 t:w-2 t:fill-current" />
			</ContextMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</ContextMenuPrimitive.RadioItem>
))
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName

const ContextMenuLabel = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
		inset?: boolean
	}
>(({ className, inset, ...props }, ref) => (
	<ContextMenuPrimitive.Label
		className={cn(
			't:px-2 t:py-1.5 t:font-semibold t:text-foreground t:text-sm',
			inset && 't:pl-8',
			className,
		)}
		ref={ref}
		{...props}
	/>
))
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName

const ContextMenuSeparator = React.forwardRef<
	React.ElementRef<typeof ContextMenuPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<ContextMenuPrimitive.Separator
		className={cn('t:-t-mx-1 t:my-1 t:h-px t:bg-border', className)}
		ref={ref}
		{...props}
	/>
))
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName

const ContextMenuShortcut = ({
	className,
	...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
	return (
		<span
			className={cn(
				't:ml-auto t:text-muted-foreground t:text-xs t:tracking-widest',
				className,
			)}
			{...props}
		/>
	)
}
ContextMenuShortcut.displayName = 'ContextMenuShortcut'

export {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuCheckboxItem,
	ContextMenuRadioItem,
	ContextMenuLabel,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuGroup,
	ContextMenuPortal,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
	ContextMenuRadioGroup,
}
