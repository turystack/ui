import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Check, ChevronRight, Circle } from 'lucide-react'
import type { PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants'

import type {
	DropdownMenuCheckboxItemProps,
	DropdownMenuContentProps,
	DropdownMenuItemProps,
	DropdownMenuLabelProps,
	DropdownMenuProps,
	DropdownMenuRadioGroupProps,
	DropdownMenuRadioItemProps,
	DropdownMenuSubTriggerProps,
} from './dropdown-menu.types'

const styles = tv({
	slots: {
		checkboxItem:
			't:relative t:flex t:cursor-pointer t:select-none t:items-center t:rounded-sm t:py-1.5 t:pl-8 t:pr-2 t:text-sm t:outline-none t:transition-colors t:focus:bg-accent t:focus:text-accent-foreground t:data-[disabled]:pointer-events-none t:data-[disabled]:opacity-50 t:[&_svg]:size-4 t:[&_svg]:shrink-0',
		checkboxItemIndicator:
			't:absolute t:left-2 t:flex t:h-3.5 t:w-3.5 t:items-center t:justify-center',
		content:
			't:z-50 t:min-w-[8rem] t:overflow-hidden t:rounded-md t:border t:bg-popover t:p-1 t:text-popover-foreground t:shadow-md t:data-[state=open]:animate-in t:data-[state=closed]:animate-out t:data-[state=closed]:fade-out-0 t:data-[state=open]:fade-in-0 t:data-[state=closed]:zoom-out-95 t:data-[state=open]:zoom-in-95 t:data-[side=bottom]:slide-in-from-top-2 t:data-[side=left]:slide-in-from-right-2 t:data-[side=right]:slide-in-from-left-2 t:data-[side=top]:slide-in-from-bottom-2',
		item: 't:relative t:flex t:cursor-pointer t:select-none t:items-center t:gap-2 t:rounded-sm t:px-2 t:py-1.5 t:text-sm t:outline-none t:transition-colors t:focus:bg-accent t:focus:text-accent-foreground t:data-[disabled]:pointer-events-none t:data-[disabled]:opacity-50 t:[&_svg]:size-4 t:[&_svg]:shrink-0 t:[&_svg]:pointer-events-none',
		itemIcon: '',
		label: 't:px-2 t:py-1.5 t:text-sm t:font-semibold',
		radioItem:
			't:relative t:flex t:cursor-pointer t:select-none t:items-center t:rounded-sm t:py-1.5 t:pl-8 t:pr-2 t:text-sm t:outline-none t:transition-colors t:focus:bg-accent t:focus:text-accent-foreground t:data-[disabled]:pointer-events-none t:data-[disabled]:opacity-50 t:[&_svg]:size-4 t:[&_svg]:shrink-0',
		radioItemIndicator:
			't:absolute t:left-2 t:flex t:h-3.5 t:w-3.5 t:items-center t:justify-center',
		separator: 't:-mx-1 t:my-1 t:h-px t:bg-muted',
		shortcut: 't:ml-auto t:text-xs t:tracking-widest t:opacity-60',
		subContent:
			't:z-50 t:min-w-[8rem] t:overflow-hidden t:rounded-md t:border t:bg-popover t:p-1 t:text-popover-foreground t:shadow-lg t:data-[state=open]:animate-in t:data-[state=closed]:animate-out t:data-[state=closed]:fade-out-0 t:data-[state=open]:fade-in-0 t:data-[state=closed]:zoom-out-95 t:data-[state=open]:zoom-in-95 t:data-[side=bottom]:slide-in-from-top-2 t:data-[side=left]:slide-in-from-right-2 t:data-[side=right]:slide-in-from-left-2 t:data-[side=top]:slide-in-from-bottom-2',
		subTrigger:
			't:flex t:cursor-pointer t:select-none t:items-center t:gap-2 t:rounded-sm t:px-2 t:py-1.5 t:text-sm t:outline-none t:focus:bg-accent t:data-[state=open]:bg-accent t:[&_svg]:size-4 t:[&_svg]:shrink-0 t:[&_svg]:pointer-events-none',
		subTriggerIcon: 't:ml-auto t:h-4 t:w-4',
	},
	variants: {
		destructive: {
			true: {
				item: 't:text-destructive t:focus:text-destructive',
			},
		},
		inset: {
			true: {
				label: 't:pl-8',
				subTrigger: 't:pl-8',
			},
		},
	},
})

function Root({ open, onOpenChange, children }: PropsWithChildren<DropdownMenuProps>) {
	return (
		<DropdownMenuPrimitive.Root open={open} onOpenChange={onOpenChange}>
			{children}
		</DropdownMenuPrimitive.Root>
	)
}

function Trigger({
	asChild,
	children,
}: PropsWithChildren<{ asChild?: boolean }>) {
	return (
		<DropdownMenuPrimitive.Trigger asChild={asChild}>
			{children}
		</DropdownMenuPrimitive.Trigger>
	)
}

function Content({
	side,
	align,
	sideOffset = 4,
	children,
}: PropsWithChildren<DropdownMenuContentProps>) {
	const { content } = styles()

	return (
		<DropdownMenuPrimitive.Portal>
			<DropdownMenuPrimitive.Content
				align={align}
				className={content()}
				side={side}
				sideOffset={sideOffset}
			>
				{children}
			</DropdownMenuPrimitive.Content>
		</DropdownMenuPrimitive.Portal>
	)
}

function Item({
	variant,
	disabled,
	asChild,
	onClick,
	children,
}: PropsWithChildren<DropdownMenuItemProps>) {
	const { item } = styles({ destructive: variant === 'destructive' })

	return (
		<DropdownMenuPrimitive.Item
			asChild={asChild}
			className={item()}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</DropdownMenuPrimitive.Item>
	)
}

function CheckboxItem({
	checked,
	disabled,
	onCheckedChange,
	children,
}: PropsWithChildren<DropdownMenuCheckboxItemProps>) {
	const { checkboxItem, checkboxItemIndicator } = styles()

	return (
		<DropdownMenuPrimitive.CheckboxItem
			checked={checked}
			className={checkboxItem()}
			disabled={disabled}
			onCheckedChange={onCheckedChange}
		>
			<span className={checkboxItemIndicator()}>
				<DropdownMenuPrimitive.ItemIndicator>
					<Check className="t:h-4 t:w-4" />
				</DropdownMenuPrimitive.ItemIndicator>
			</span>
			{children}
		</DropdownMenuPrimitive.CheckboxItem>
	)
}

function RadioGroup({
	value,
	onValueChange,
	children,
}: PropsWithChildren<DropdownMenuRadioGroupProps>) {
	return (
		<DropdownMenuPrimitive.RadioGroup onValueChange={onValueChange} value={value}>
			{children}
		</DropdownMenuPrimitive.RadioGroup>
	)
}

function RadioItem({
	value,
	disabled,
	children,
}: PropsWithChildren<DropdownMenuRadioItemProps>) {
	const { radioItem, radioItemIndicator } = styles()

	return (
		<DropdownMenuPrimitive.RadioItem
			className={radioItem()}
			disabled={disabled}
			value={value}
		>
			<span className={radioItemIndicator()}>
				<DropdownMenuPrimitive.ItemIndicator>
					<Circle className="t:h-2 t:w-2 t:fill-current" />
				</DropdownMenuPrimitive.ItemIndicator>
			</span>
			{children}
		</DropdownMenuPrimitive.RadioItem>
	)
}

function MenuLabel({ inset, children }: PropsWithChildren<DropdownMenuLabelProps>) {
	const { label } = styles({ inset })

	return (
		<DropdownMenuPrimitive.Label className={label()}>
			{children}
		</DropdownMenuPrimitive.Label>
	)
}

function Separator() {
	const { separator } = styles()
	return <DropdownMenuPrimitive.Separator className={separator()} />
}

function Shortcut({ children }: PropsWithChildren) {
	const { shortcut } = styles()
	return <span className={shortcut()}>{children}</span>
}

function Group({ children }: PropsWithChildren) {
	return <DropdownMenuPrimitive.Group>{children}</DropdownMenuPrimitive.Group>
}

function Sub({ children }: PropsWithChildren) {
	return <DropdownMenuPrimitive.Sub>{children}</DropdownMenuPrimitive.Sub>
}

function SubTrigger({ inset, children }: PropsWithChildren<DropdownMenuSubTriggerProps>) {
	const { subTrigger, subTriggerIcon } = styles({ inset })

	return (
		<DropdownMenuPrimitive.SubTrigger className={subTrigger()}>
			{children}
			<ChevronRight className={subTriggerIcon()} />
		</DropdownMenuPrimitive.SubTrigger>
	)
}

function SubContent({ children }: PropsWithChildren) {
	const { subContent } = styles()

	return (
		<DropdownMenuPrimitive.Portal>
			<DropdownMenuPrimitive.SubContent className={subContent()}>
				{children}
			</DropdownMenuPrimitive.SubContent>
		</DropdownMenuPrimitive.Portal>
	)
}

export const DropdownMenu = Object.assign(Root, {
	CheckboxItem,
	Content,
	Group,
	Item,
	Label: MenuLabel,
	RadioGroup,
	RadioItem,
	Separator,
	Shortcut,
	Sub,
	SubContent,
	SubTrigger,
	Trigger,
})
