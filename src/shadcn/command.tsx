import { Command as CommandPrimitive } from 'cmdk'
import { Search } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/support/utils'

const Command = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
	<CommandPrimitive
		className={cn(
			't:flex t:h-full t:w-full t:flex-col t:overflow-hidden t:rounded-md t:bg-popover t:text-popover-foreground',
			className,
		)}
		ref={ref}
		{...props}
	/>
))
Command.displayName = CommandPrimitive.displayName


const CommandInput = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Input>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
	<div
		className="t:flex t:items-center t:border-b t:px-3"
		cmdk-input-wrapper=""
	>
		<Search className="t:mr-2 t:h-4 t:w-4 t:shrink-0 t:opacity-50" />
		<CommandPrimitive.Input
			className={cn(
				't:flex t:h-11 t:w-full t:rounded-md t:bg-transparent t:py-3 t:text-sm t:outline-none t:placeholder:text-muted-foreground t:disabled:cursor-not-allowed t:disabled:opacity-50',
				className,
			)}
			ref={ref}
			{...props}
		/>
	</div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.List
		className={cn(
			't:max-h-[300px] t:overflow-y-auto t:overflow-x-hidden',
			className,
		)}
		ref={ref}
		{...props}
	/>
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Empty>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
	<CommandPrimitive.Empty
		className="t:py-6 t:text-center t:text-sm"
		ref={ref}
		{...props}
	/>
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Group>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Group
		className={cn(
			't:overflow-hidden t:p-1 t:text-foreground t:[&_[cmdk-group-heading]]:px-2 t:[&_[cmdk-group-heading]]:py-1.5 t:[&_[cmdk-group-heading]]:font-medium t:[&_[cmdk-group-heading]]:text-muted-foreground t:[&_[cmdk-group-heading]]:text-xs',
			className,
		)}
		ref={ref}
		{...props}
	/>
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Separator
		className={cn('t:-t-mx-1 t:h-px t:bg-border', className)}
		ref={ref}
		{...props}
	/>
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Item
		className={cn(
			"t:relative t:flex t:cursor-default t:select-none t:items-center t:gap-2 t:rounded-sm t:px-2 t:py-1.5 t:text-sm t:outline-none data-[disabled=true]:t:pointer-events-none data-[selected='true']:t:bg-accent data-[selected=true]:t:text-accent-foreground data-[disabled=true]:t:opacity-50 [&_svg]:t:pointer-events-none [&_svg]:t:size-4 [&_svg]:t:shrink-0",
			className,
		)}
		ref={ref}
		{...props}
	/>
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
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
CommandShortcut.displayName = 'CommandShortcut'

export {
	Command,
	CommandInput,
	CommandList,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandShortcut,
	CommandSeparator,
}
