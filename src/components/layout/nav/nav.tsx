import * as PopoverPrimitive from '@radix-ui/react-popover'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ChevronDown } from 'lucide-react'
import type { ReactNode } from 'react'
import { useState } from 'react'

import { Tooltip } from '@/components/tooltip/tooltip'
import { cn } from '@/support/utils'

import { useSidebar } from '../context'
import type { NavProps, SidebarNavItem, SidebarNavSubItem } from './nav.types'

const popoverContentClass =
	't:z-50 t:min-w-[180px] t:rounded-md t:border t:border-border t:bg-popover t:p-1 t:text-popover-foreground t:shadow-md t:outline-none t:data-[state=open]:animate-in t:data-[state=closed]:animate-out t:data-[state=closed]:fade-out-0 t:data-[state=open]:fade-in-0 t:data-[state=closed]:zoom-out-95 t:data-[state=open]:zoom-in-95 t:data-[side=right]:slide-in-from-left-2'

function NavSubItem({ sub, inPopover }: { sub: SidebarNavSubItem; inPopover?: boolean }) {
	const Icon = sub.icon
	return (
		<div
			className={cn(
				't:flex t:w-full t:items-center t:text-sm t:transition-colors t:cursor-pointer',
				't:hover:bg-accent t:hover:text-accent-foreground',
				inPopover
					? cn('t:gap-2 t:rounded-sm t:px-2 t:py-1.5', sub.active ? 't:text-popover-foreground t:font-medium' : 't:text-muted-foreground')
					: cn('t:gap-3 t:rounded-md t:px-2 t:py-1.5', sub.active ? 't:text-foreground t:font-medium' : 't:text-muted-foreground'),
			)}
		>
			{Icon && <Icon className="t:h-3.5 t:w-3.5 t:shrink-0" />}
			<span className="t:truncate">{sub.label}</span>
		</div>
	)
}

const tooltipContentClass =
	't:z-50 t:overflow-hidden t:rounded-md t:border t:bg-popover t:px-3 t:py-1.5 t:text-popover-foreground t:text-sm t:shadow-md t:animate-in t:fade-in-0 t:zoom-in-95 data-[state=closed]:t:animate-out data-[state=closed]:t:fade-out-0 data-[state=closed]:t:zoom-out-95 t:data-[side=right]:slide-in-from-left-2'

function CollapsedNavItemWithChildren({
	item,
	itemClass,
	iconEl,
}: {
	item: SidebarNavItem
	itemClass: string
	iconEl: ReactNode
}) {
	const [popoverOpen, setPopoverOpen] = useState(false)

	return (
		<TooltipPrimitive.Provider delayDuration={0}>
			<TooltipPrimitive.Root open={popoverOpen ? false : undefined}>
				<TooltipPrimitive.Trigger asChild>
					<div>
						<PopoverPrimitive.Root open={popoverOpen} onOpenChange={setPopoverOpen}>
							<PopoverPrimitive.Trigger asChild>
								<div className={itemClass} role="button">
									{iconEl}
								</div>
							</PopoverPrimitive.Trigger>
							<PopoverPrimitive.Portal>
								<PopoverPrimitive.Content
									className={popoverContentClass}
									side="right"
									sideOffset={16}
								>
									<div className="t:px-2 t:py-1.5 t:text-xs t:font-semibold t:text-popover-foreground">
										{item.label}
									</div>
									<div className="t:h-px t:bg-border t:my-1" />
									{item.children!.map((sub, i) => (
										<NavSubItem key={i} sub={sub} inPopover />
									))}
								</PopoverPrimitive.Content>
							</PopoverPrimitive.Portal>
						</PopoverPrimitive.Root>
					</div>
				</TooltipPrimitive.Trigger>
				<TooltipPrimitive.Portal>
					<TooltipPrimitive.Content className={tooltipContentClass} side="right" sideOffset={8}>
						{item.label}
					</TooltipPrimitive.Content>
				</TooltipPrimitive.Portal>
			</TooltipPrimitive.Root>
		</TooltipPrimitive.Provider>
	)
}

function NavItem({ item }: { item: SidebarNavItem }) {
	const { collapsed } = useSidebar()
	const [open, setOpen] = useState(item.children?.some((c) => c.active) ?? false)
	const Icon = item.icon
	const hasChildren = !!item.children?.length

	const itemClass = cn(
		't:group t:flex t:w-full t:items-center t:rounded-md t:text-sm t:transition-colors t:cursor-pointer',
		't:hover:bg-accent t:hover:text-accent-foreground',
		item.active ? 't:bg-accent t:text-accent-foreground t:font-medium' : 't:text-muted-foreground',
	)

	const iconEl = Icon ? <Icon className="t:h-4 t:w-4 t:shrink-0" /> : null

	if (collapsed) {
		const collapsedClass = cn(itemClass, 't:justify-center t:h-9 t:w-full t:px-0')

		if (hasChildren) {
			return (
				<CollapsedNavItemWithChildren item={item} itemClass={collapsedClass} iconEl={iconEl} />
			)
		}

		return (
			<Tooltip content={item.label} side="right" sideOffset={8}>
				<div className={collapsedClass} role="button">
					{iconEl}
				</div>
			</Tooltip>
		)
	}

	return (
		<div className="t:flex t:flex-col">
			<div
				className={cn(itemClass, 't:gap-3 t:px-2 t:py-2')}
				role="button"
				onClick={() => hasChildren && setOpen((p) => !p)}
			>
				{iconEl}
				<span className="t:flex-1 t:text-left t:truncate">{item.label}</span>
				{hasChildren && (
					<ChevronDown
						className={cn(
							't:h-4 t:w-4 t:shrink-0 t:text-muted-foreground t:transition-transform t:duration-200',
							open && 't:rotate-180',
						)}
					/>
				)}
			</div>

			{hasChildren && (
				<div
					className={cn(
						't:grid t:transition-[grid-template-rows,opacity] t:duration-200',
						open ? 't:grid-rows-[1fr] t:opacity-100' : 't:grid-rows-[0fr] t:opacity-0',
					)}
				>
					<div className="t:overflow-hidden t:min-h-0">
						<div className="t:ml-3 t:border-l t:border-border t:pl-2 t:mt-0.5 t:pb-0.5 t:flex t:flex-col t:gap-0.5">
							{item.children!.map((sub, i) => (
								<NavSubItem key={i} sub={sub} />
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

function NavDivider({ collapsed }: { collapsed: boolean }) {
	return (
		<div className={cn('t:my-2', collapsed ? 't:mx-2' : 't:mx-1')}>
			<div className="t:h-px t:bg-border" />
		</div>
	)
}

export function LayoutNav({ items }: NavProps) {
	const { collapsed } = useSidebar()
	return (
		<nav className="t:flex t:flex-col t:gap-1 t:p-2">
			{items.map((entry, i) => {
				if (entry.type === 'divider') {
					return <NavDivider key={i} collapsed={collapsed} />
				}
				return <NavItem key={i} item={entry.item} />
			})}
		</nav>
	)
}
