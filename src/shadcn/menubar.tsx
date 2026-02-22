import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { Check, ChevronRight, Circle } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/support/utils'

function MenubarMenu({
	...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
	return <MenubarPrimitive.Menu {...props} />
}

function MenubarGroup({
	...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
	return <MenubarPrimitive.Group {...props} />
}

function MenubarPortal({
	...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
	return <MenubarPrimitive.Portal {...props} />
}

function MenubarRadioGroup({
	...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
	return <MenubarPrimitive.RadioGroup {...props} />
}

function MenubarSub({
	...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
	return (
		<MenubarPrimitive.Sub
			data-slot="menubar-sub"
			{...props}
		/>
	)
}

const Menubar = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
	<MenubarPrimitive.Root
		className={cn(
			't:flex t:h-10 t:items-center t:space-x-1 t:rounded-md t:border t:bg-background t:p-1',
			className,
		)}
		ref={ref}
		{...props}
	/>
))
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
	<MenubarPrimitive.Trigger
		className={cn(
			't:flex t:cursor-default t:select-none t:items-center t:rounded-sm t:px-3 t:py-1.5 t:font-medium t:text-sm t:outline-none t:focus:bg-accent t:focus:text-accent-foreground t:data-[state=open]:bg-accent t:data-[state=open]:text-accent-foreground',
			className,
		)}
		ref={ref}
		{...props}
	/>
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
	React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
		inset?: boolean
	}
>(({ className, inset, children, ...props }, ref) => (
	<MenubarPrimitive.SubTrigger
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
	</MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.SubContent>,
	React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
	<MenubarPrimitive.SubContent
		className={cn(
			't:data-[state=closed]:fade-out-0 t:data-[state=open]:fade-in-0 t:data-[state=closed]:zoom-out-95 t:data-[state=open]:zoom-in-95 t:data-[side=bottom]:slide-in-from-top-2 t:data-[side=left]:slide-in-from-right-2 t:data-[side=right]:slide-in-from-left-2 t:data-[side=top]:slide-in-from-bottom-2 t:z-50 t:min-w-[8rem] t:origin-[--radix-menubar-content-transform-origin] t:overflow-hidden t:rounded-md t:border t:bg-popover t:p-1 t:text-popover-foreground t:data-[state=closed]:animate-out t:data-[state=open]:animate-in',
			className,
		)}
		ref={ref}
		{...props}
	/>
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
	(
		{ className, align = 'start', alignOffset = -4, sideOffset = 8, ...props },
		ref,
	) => (
		<MenubarPrimitive.Portal>
			<MenubarPrimitive.Content
				align={align}
				alignOffset={alignOffset}
				className={cn(
					't:data-[state=closed]:fade-out-0 t:data-[state=open]:fade-in-0 t:data-[state=closed]:zoom-out-95 t:data-[state=open]:zoom-in-95 t:data-[side=bottom]:slide-in-from-top-2 t:data-[side=left]:slide-in-from-right-2 t:data-[side=right]:slide-in-from-left-2 t:data-[side=top]:slide-in-from-bottom-2 t:z-50 t:min-w-[12rem] t:origin-[--radix-menubar-content-transform-origin] t:overflow-hidden t:rounded-md t:border t:bg-popover t:p-1 t:text-popover-foreground t:shadow-md t:data-[state=open]:animate-in',
					className,
				)}
				ref={ref}
				sideOffset={sideOffset}
				{...props}
			/>
		</MenubarPrimitive.Portal>
	),
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
		inset?: boolean
	}
>(({ className, inset, ...props }, ref) => (
	<MenubarPrimitive.Item
		className={cn(
			't:relative t:flex t:cursor-default t:select-none t:items-center t:rounded-sm t:px-2 t:py-1.5 t:text-sm t:outline-none t:focus:bg-accent t:focus:text-accent-foreground t:data-[disabled]:pointer-events-none t:data-[disabled]:opacity-50',
			inset && 't:pl-8',
			className,
		)}
		ref={ref}
		{...props}
	/>
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
	React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
	<MenubarPrimitive.CheckboxItem
		checked={checked}
		className={cn(
			't:relative t:flex t:cursor-default t:select-none t:items-center t:rounded-sm t:py-1.5 t:pr-2 t:pl-8 t:text-sm t:outline-none t:focus:bg-accent t:focus:text-accent-foreground t:data-[disabled]:pointer-events-none t:data-[disabled]:opacity-50',
			className,
		)}
		ref={ref}
		{...props}
	>
		<span className="t:absolute t:left-2 t:flex t:h-3.5 t:w-3.5 t:items-center t:justify-center">
			<MenubarPrimitive.ItemIndicator>
				<Check className="t:h-4 t:w-4" />
			</MenubarPrimitive.ItemIndicator>
		</span>
		{children}
	</MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.RadioItem>,
	React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
	<MenubarPrimitive.RadioItem
		className={cn(
			't:relative t:flex t:cursor-default t:select-none t:items-center t:rounded-sm t:py-1.5 t:pr-2 t:pl-8 t:text-sm t:outline-none t:focus:bg-accent t:focus:text-accent-foreground t:data-[disabled]:pointer-events-none t:data-[disabled]:opacity-50',
			className,
		)}
		ref={ref}
		{...props}
	>
		<span className="t:absolute t:left-2 t:flex t:h-3.5 t:w-3.5 t:items-center t:justify-center">
			<MenubarPrimitive.ItemIndicator>
				<Circle className="t:h-2 t:w-2 t:fill-current" />
			</MenubarPrimitive.ItemIndicator>
		</span>
		{children}
	</MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
		inset?: boolean
	}
>(({ className, inset, ...props }, ref) => (
	<MenubarPrimitive.Label
		className={cn(
			't:px-2 t:py-1.5 t:font-semibold t:text-sm',
			inset && 't:pl-8',
			className,
		)}
		ref={ref}
		{...props}
	/>
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<MenubarPrimitive.Separator
		className={cn('t:-t-mx-1 t:my-1 t:h-px t:bg-muted', className)}
		ref={ref}
		{...props}
	/>
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
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
MenubarShortcut.displayname = 'MenubarShortcut'

export {
	Menubar,
	MenubarMenu,
	MenubarTrigger,
	MenubarContent,
	MenubarItem,
	MenubarSeparator,
	MenubarLabel,
	MenubarCheckboxItem,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarPortal,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarGroup,
	MenubarSub,
	MenubarShortcut,
}
