import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { PanelLeft } from 'lucide-react'
import * as React from 'react'

import { useIsMobile } from '@/hooks/use-mobile'
import { Button } from '@/components/button'
import { Input } from '@/shadcn/input'
import { Separator } from '@/shadcn/separator'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from '@/shadcn/sheet'
import { Skeleton } from '@/shadcn/skeleton'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/shadcn/tooltip'
import { cn } from '@/support/utils'

const SIDEBAR_COOKIE_NAME = 'sidebar_state'
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = '16rem'
const SIDEBAR_WIDTH_MOBILE = '18rem'
const SIDEBAR_WIDTH_ICON = '3rem'
const SIDEBAR_KEYBOARD_SHORTCUT = 'b'

type SidebarContextProps = {
	state: 'expanded' | 'collapsed'
	open: boolean
	setOpen: (open: boolean) => void
	openMobile: boolean
	setOpenMobile: (open: boolean) => void
	isMobile: boolean
	toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
	const context = React.useContext(SidebarContext)
	if (!context) {
		throw new Error('useSidebar must be used within a SidebarProvider.')
	}

	return context
}

const SidebarProvider = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<'div'> & {
		defaultOpen?: boolean
		open?: boolean
		onOpenChange?: (open: boolean) => void
	}
>(
	(
		{
			defaultOpen = true,
			open: openProp,
			onOpenChange: setOpenProp,
			className,
			style,
			children,
			...props
		},
		ref,
	) => {
		const isMobile = useIsMobile()
		const [openMobile, setOpenMobile] = React.useState(false)

		// This is the internal state of the sidebar.
		// We use openProp and setOpenProp for control from outside the component.
		const [_open, _setOpen] = React.useState(defaultOpen)
		const open = openProp ?? _open
		const setOpen = React.useCallback(
			(value: boolean | ((value: boolean) => boolean)) => {
				const openState = typeof value === 'function' ? value(open) : value
				if (setOpenProp) {
					setOpenProp(openState)
				} else {
					_setOpen(openState)
				}

				// This sets the cookie to keep the sidebar state.
				document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
			},
			[
				setOpenProp,
				open,
			],
		)

		// Helper to toggle the sidebar.
		const toggleSidebar = React.useCallback(() => {
			return isMobile
				? setOpenMobile((open) => !open)
				: setOpen((open) => !open)
		}, [
			isMobile,
			setOpen,
			setOpenMobile,
		])

		// Adds a keyboard shortcut to toggle the sidebar.
		React.useEffect(() => {
			const handleKeyDown = (event: KeyboardEvent) => {
				if (
					event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
					(event.metaKey || event.ctrlKey)
				) {
					event.preventDefault()
					toggleSidebar()
				}
			}

			window.addEventListener('keydown', handleKeyDown)
			return () => window.removeEventListener('keydown', handleKeyDown)
		}, [
			toggleSidebar,
		])

		// We add a state so that we can do data-state="expanded" or "collapsed".
		// This makes it easier to style the sidebar with Tailwind classes.
		const state = open ? 'expanded' : 'collapsed'

		const contextValue = React.useMemo<SidebarContextProps>(
			() => ({
				isMobile,
				open,
				openMobile,
				setOpen,
				setOpenMobile,
				state,
				toggleSidebar,
			}),
			[
				state,
				open,
				setOpen,
				isMobile,
				openMobile,
				setOpenMobile,
				toggleSidebar,
			],
		)

		return (
			<SidebarContext.Provider value={contextValue}>
				<TooltipProvider delayDuration={0}>
					<div
						className={cn(
							't-group/sidebar-wrapper t-flex t-min-h-svh t-w-full has-[[data-variant=inset]]:t-bg-sidebar',
							className,
						)}
						ref={ref}
						style={
							{
								'--sidebar-width': SIDEBAR_WIDTH,
								'--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
								...style,
							} as React.CSSProperties
						}
						{...props}
					>
						{children}
					</div>
				</TooltipProvider>
			</SidebarContext.Provider>
		)
	},
)
SidebarProvider.displayName = 'SidebarProvider'

const Sidebar = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<'div'> & {
		side?: 'left' | 'right'
		variant?: 'sidebar' | 'floating' | 'inset'
		collapsible?: 'offcanvas' | 'icon' | 'none'
	}
>(
	(
		{
			side = 'left',
			variant = 'sidebar',
			collapsible = 'offcanvas',
			className,
			children,
			...props
		},
		ref,
	) => {
		const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

		if (collapsible === 'none') {
			return (
				<div
					className={cn(
						't:flex t:h-full t:w-[--sidebar-width] t:flex-col t:bg-sidebar t:text-sidebar-foreground',
						className,
					)}
					ref={ref}
					{...props}
				>
					{children}
				</div>
			)
		}

		if (isMobile) {
			return (
				<Sheet
					onOpenChange={setOpenMobile}
					open={openMobile}
					{...props}
				>
					<SheetContent
						className="t:w-[--sidebar-width] t:bg-sidebar t:p-0 t:text-sidebar-foreground t:[&>button]:hidden"
						data-mobile="true"
						data-sidebar="sidebar"
						side={side}
						style={
							{
								'--sidebar-width': SIDEBAR_WIDTH_MOBILE,
							} as React.CSSProperties
						}
					>
						<SheetHeader className="t:sr-only">
							<SheetTitle>Sidebar</SheetTitle>
							<SheetDescription>Displays the mobile sidebar.</SheetDescription>
						</SheetHeader>
						<div className="t:flex t:h-full t:w-full t:flex-col">
							{children}
						</div>
					</SheetContent>
				</Sheet>
			)
		}

		return (
			<div
				className="t:group t:peer t:hidden t:text-sidebar-foreground t:md:block"
				data-collapsible={state === 'collapsed' ? collapsible : ''}
				data-side={side}
				data-state={state}
				data-variant={variant}
				ref={ref}
			>
				{/* This is what handles the sidebar gap on desktop */}
				<div
					className={cn(
						't:relative t:w-[--sidebar-width] t:bg-transparent t:transition-[width] t:duration-200 t:ease-linear',
						't:group-data-[collapsible=offcanvas]:w-0',
						't:group-data-[side=right]:rotate-180',
						variant === 'floating' || variant === 'inset'
							? 't:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
							: 't:group-data-[collapsible=icon]:w-[--sidebar-width-icon]',
					)}
				/>
				<div
					className={cn(
						't:fixed t:inset-y-0 t:z-10 t:hidden t:h-svh t:w-[--sidebar-width] t:transition-[left,right,width] t:duration-200 t:ease-linear t:md:flex',
						side === 'left'
							? 't:left-0 t:group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
							: 't:right-0 t:group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
						// Adjust the padding for floating and inset variants.
						variant === 'floating' || variant === 'inset'
							? 't:p-2 t:group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
							: 't:group-data-[collapsible=icon]:w-[--sidebar-width-icon] t:group-data-[side=left]:border-r t:group-data-[side=right]:border-l',
						className,
					)}
					{...props}
				>
					<div
						className="t:flex t:h-full t:w-full t:flex-col t:bg-sidebar t:group-data-[variant=floating]:rounded-lg t:group-data-[variant=floating]:border t:group-data-[variant=floating]:border-sidebar-border t:group-data-[variant=floating]:shadow"
						data-sidebar="sidebar"
					>
						{children}
					</div>
				</div>
			</div>
		)
	},
)
Sidebar.displayName = 'Sidebar'

const SidebarTrigger = React.forwardRef<
	React.ElementRef<typeof Button>,
	React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
	const { toggleSidebar } = useSidebar()

	return (
		<Button
			className={cn('t:h-7 t:w-7', className)}
			data-sidebar="trigger"
			onClick={(event) => {
				onClick?.(event)
				toggleSidebar()
			}}
			ref={ref}
			size="icon"
			variant="ghost"
			{...props}
		>
			<PanelLeft />
			<span className="t:sr-only">Toggle Sidebar</span>
		</Button>
	)
})
SidebarTrigger.displayName = 'SidebarTrigger'

const SidebarRail = React.forwardRef<
	HTMLButtonElement,
	React.ComponentProps<'button'>
>(({ className, ...props }, ref) => {
	const { toggleSidebar } = useSidebar()

	return (
		<button
			aria-label="Toggle Sidebar"
			className={cn(
				't:-t-translate-x-1/2 t:group-data-[side=left]:-t-right-4 t:absolute t:inset-y-0 t:z-20 t:hidden t:w-4 t:transition-all t:ease-linear t:after:absolute t:after:inset-y-0 t:after:left-1/2 t:after:w-[2px] t:hover:after:bg-sidebar-border t:group-data-[side=right]:left-0 t:sm:flex',
				't:[[data-side=left]_&]:cursor-w-resize t:[[data-side=right]_&]:cursor-e-resize',
				't:[[data-side=left][data-state=collapsed]_&]:cursor-e-resize t:[[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
				't:group-data-[collapsible=offcanvas]:translate-x-0 t:group-data-[collapsible=offcanvas]:hover:bg-sidebar t:group-data-[collapsible=offcanvas]:after:left-full',
				't:[[data-side=left][data-collapsible=offcanvas]_&]:-t-right-2',
				't:[[data-side=right][data-collapsible=offcanvas]_&]:-t-left-2',
				className,
			)}
			data-sidebar="rail"
			onClick={toggleSidebar}
			ref={ref}
			tabIndex={-1}
			title="Toggle Sidebar"
			{...props}
		/>
	)
})
SidebarRail.displayName = 'SidebarRail'

const SidebarInset = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<'main'>
>(({ className, ...props }, ref) => {
	return (
		<main
			className={cn(
				't:relative t:flex t:w-full t:flex-1 t:flex-col t:bg-background',
				't:md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 t:md:peer-data-[variant=inset]:m-2 t:md:peer-data-[variant=inset]:ml-0 t:md:peer-data-[variant=inset]:rounded-xl t:md:peer-data-[variant=inset]:shadow',
				className,
			)}
			ref={ref}
			{...props}
		/>
	)
})
SidebarInset.displayName = 'SidebarInset'

const SidebarInput = React.forwardRef<
	React.ElementRef<typeof Input>,
	React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
	return (
		<Input
			className={cn(
				't:h-8 t:w-full t:bg-background t:shadow-none t:focus-visible:ring-2 t:focus-visible:ring-sidebar-ring',
				className,
			)}
			data-sidebar="input"
			ref={ref}
			{...props}
		/>
	)
})
SidebarInput.displayName = 'SidebarInput'

const SidebarHeader = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
	return (
		<div
			className={cn('t:flex t:flex-col t:gap-2 t:p-2', className)}
			data-sidebar="header"
			ref={ref}
			{...props}
		/>
	)
})
SidebarHeader.displayName = 'SidebarHeader'

const SidebarFooter = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
	return (
		<div
			className={cn('t:flex t:flex-col t:gap-2 t:p-2', className)}
			data-sidebar="footer"
			ref={ref}
			{...props}
		/>
	)
})
SidebarFooter.displayName = 'SidebarFooter'

const SidebarSeparator = React.forwardRef<
	React.ElementRef<typeof Separator>,
	React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
	return (
		<Separator
			className={cn('t:mx-2 t:w-auto t:bg-sidebar-border', className)}
			data-sidebar="separator"
			ref={ref}
			{...props}
		/>
	)
})
SidebarSeparator.displayName = 'SidebarSeparator'

const SidebarContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
	return (
		<div
			className={cn(
				't:flex t:min-h-0 t:flex-1 t:flex-col t:gap-2 t:overflow-auto t:group-data-[collapsible=icon]:overflow-hidden',
				className,
			)}
			data-sidebar="content"
			ref={ref}
			{...props}
		/>
	)
})
SidebarContent.displayName = 'SidebarContent'

const SidebarGroup = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
	return (
		<div
			className={cn(
				't:relative t:flex t:w-full t:min-w-0 t:flex-col t:p-2',
				className,
			)}
			data-sidebar="group"
			ref={ref}
			{...props}
		/>
	)
})
SidebarGroup.displayName = 'SidebarGroup'

const SidebarGroupLabel = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<'div'> & {
		asChild?: boolean
	}
>(({ className, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : 'div'

	return (
		<Comp
			className={cn(
				't:flex t:h-8 t:shrink-0 t:items-center t:rounded-md t:px-2 t:font-medium t:text-sidebar-foreground/70 t:text-xs t:outline-none t:ring-sidebar-ring t:transition-[margin,opacity] t:duration-200 t:ease-linear t:focus-visible:ring-2 t:[&>svg]:size-4 t:[&>svg]:shrink-0',
				't:group-data-[collapsible=icon]:-t-mt-8 t:group-data-[collapsible=icon]:opacity-0',
				className,
			)}
			data-sidebar="group-label"
			ref={ref}
			{...props}
		/>
	)
})
SidebarGroupLabel.displayName = 'SidebarGroupLabel'

const SidebarGroupAction = React.forwardRef<
	HTMLButtonElement,
	React.ComponentProps<'button'> & {
		asChild?: boolean
	}
>(({ className, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button'

	return (
		<Comp
			className={cn(
				't:absolute t:top-3.5 t:right-3 t:flex t:aspect-square t:w-5 t:items-center t:justify-center t:rounded-md t:p-0 t:text-sidebar-foreground t:outline-none t:ring-sidebar-ring t:transition-transform t:hover:bg-sidebar-accent t:hover:text-sidebar-accent-foreground t:focus-visible:ring-2 t:[&>svg]:size-4 t:[&>svg]:shrink-0',
				// Increases the hit area of the button on mobile.
				't:after:-t-inset-2 t:after:absolute t:after:md:hidden',
				't:group-data-[collapsible=icon]:hidden',
				className,
			)}
			data-sidebar="group-action"
			ref={ref}
			{...props}
		/>
	)
})
SidebarGroupAction.displayName = 'SidebarGroupAction'

const SidebarGroupContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<'div'>
>(({ className, ...props }, ref) => (
	<div
		className={cn('t:w-full t:text-sm', className)}
		data-sidebar="group-content"
		ref={ref}
		{...props}
	/>
))
SidebarGroupContent.displayName = 'SidebarGroupContent'

const SidebarMenu = React.forwardRef<
	HTMLUListElement,
	React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
	<ul
		className={cn('t:flex t:w-full t:min-w-0 t:flex-col t:gap-1', className)}
		data-sidebar="menu"
		ref={ref}
		{...props}
	/>
))
SidebarMenu.displayName = 'SidebarMenu'

const SidebarMenuItem = React.forwardRef<
	HTMLLIElement,
	React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
	<li
		className={cn('t-group/menu-item t-relative', className)}
		data-sidebar="menu-item"
		ref={ref}
		{...props}
	/>
))
SidebarMenuItem.displayName = 'SidebarMenuItem'

const sidebarMenuButtonVariants = cva(
	't-peer/menu-button t-flex t-w-full t-items-center t-gap-2 t-overflow-hidden t-rounded-md t-p-2 t-text-left t-text-sm t-outline-none t-ring-sidebar-ring t-transition-[width,height,padding] hover:t-bg-sidebar-accent hover:t-text-sidebar-accent-foreground focus-visible:t-ring-2 active:t-bg-sidebar-accent active:t-text-sidebar-accent-foreground disabled:t-pointer-events-none disabled:t-opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:t-pr-8 aria-disabled:t-pointer-events-none aria-disabled:t-opacity-50 data-[active=true]:t-bg-sidebar-accent data-[active=true]:t-font-medium data-[active=true]:t-text-sidebar-accent-foreground data-[state=open]:hover:t-bg-sidebar-accent data-[state=open]:hover:t-text-sidebar-accent-foreground group-data-[collapsible=icon]:!t-size-8 group-data-[collapsible=icon]:!t-p-2 [&>span:last-child]:t-truncate [&>svg]:t-size-4 [&>svg]:t-shrink-0',
	{
		defaultVariants: {
			size: 'default',
			variant: 'default',
		},
		variants: {
			size: {
				default: 't:h-8 t:text-sm',
				lg: 't:h-12 t:text-sm t:group-data-[collapsible=icon]:!p-0',
				sm: 't:h-7 t:text-xs',
			},
			variant: {
				default:
					't:hover:bg-sidebar-accent t:hover:text-sidebar-accent-foreground',
				outline:
					't:bg-background t:shadow-[0_0_0_1px_hsl(var(--sidebar-border))] t:hover:bg-sidebar-accent t:hover:text-sidebar-accent-foreground t:hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
			},
		},
	},
)

const SidebarMenuButton = React.forwardRef<
	HTMLButtonElement,
	React.ComponentProps<'button'> & {
		asChild?: boolean
		isActive?: boolean
		tooltip?: string | React.ComponentProps<typeof TooltipContent>
	} & VariantProps<typeof sidebarMenuButtonVariants>
>(
	(
		{
			asChild = false,
			isActive = false,
			variant = 'default',
			size = 'default',
			tooltip,
			className,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : 'button'
		const { isMobile, state } = useSidebar()

		const button = (
			<Comp
				className={cn(
					sidebarMenuButtonVariants({
						size,
						variant,
					}),
					className,
				)}
				data-active={isActive}
				data-sidebar="menu-button"
				data-size={size}
				ref={ref}
				{...props}
			/>
		)

		if (!tooltip) {
			return button
		}

		if (typeof tooltip === 'string') {
			tooltip = {
				children: tooltip,
			}
		}

		return (
			<Tooltip>
				<TooltipTrigger asChild>{button}</TooltipTrigger>
				<TooltipContent
					align="center"
					hidden={state !== 'collapsed' || isMobile}
					side="right"
					{...tooltip}
				/>
			</Tooltip>
		)
	},
)
SidebarMenuButton.displayName = 'SidebarMenuButton'

const SidebarMenuAction = React.forwardRef<
	HTMLButtonElement,
	React.ComponentProps<'button'> & {
		asChild?: boolean
		showOnHover?: boolean
	}
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button'

	return (
		<Comp
			className={cn(
				't:absolute t:top-1.5 t:right-1 t:flex t:aspect-square t:w-5 t:items-center t:justify-center t:rounded-md t:p-0 t:text-sidebar-foreground t:outline-none t:ring-sidebar-ring t:transition-transform t:hover:bg-sidebar-accent t:hover:text-sidebar-accent-foreground t:focus-visible:ring-2 t:peer-hover/menu-button:text-sidebar-accent-foreground t:[&>svg]:size-4 t:[&>svg]:shrink-0',
				// Increases the hit area of the button on mobile.
				't:after:-t-inset-2 t:after:absolute t:after:md:hidden',
				't:peer-data-[size=sm]/menu-button:top-1',
				't:peer-data-[size=default]/menu-button:top-1.5',
				't:peer-data-[size=lg]/menu-button:top-2.5',
				't:group-data-[collapsible=icon]:hidden',
				showOnHover &&
					'group-focus-within/menu-item:t-opacity-100 group-hover/menu-item:t-opacity-100 data-[state=open]:t-opacity-100 peer-data-[active=true]/menu-button:t-text-sidebar-accent-foreground md:t-opacity-0',
				className,
			)}
			data-sidebar="menu-action"
			ref={ref}
			{...props}
		/>
	)
})
SidebarMenuAction.displayName = 'SidebarMenuAction'

const SidebarMenuBadge = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<'div'>
>(({ className, ...props }, ref) => (
	<div
		className={cn(
			't:pointer-events-none t:absolute t:right-1 t:flex t:h-5 t:min-w-5 t:select-none t:items-center t:justify-center t:rounded-md t:px-1 t:font-medium t:text-sidebar-foreground t:text-xs t:tabular-nums',
			'peer-hover/menu-button:t-text-sidebar-accent-foreground peer-data-[active=true]/menu-button:t-text-sidebar-accent-foreground',
			't:peer-data-[size=sm]/menu-button:top-1',
			't:peer-data-[size=default]/menu-button:top-1.5',
			't:peer-data-[size=lg]/menu-button:top-2.5',
			't:group-data-[collapsible=icon]:hidden',
			className,
		)}
		data-sidebar="menu-badge"
		ref={ref}
		{...props}
	/>
))
SidebarMenuBadge.displayName = 'SidebarMenuBadge'

const SidebarMenuSkeleton = React.forwardRef<
	HTMLDivElement,
	React.ComponentProps<'div'> & {
		showIcon?: boolean
	}
>(({ className, showIcon = false, ...props }, ref) => {
	// Random width between 50 to 90%.
	const width = React.useMemo(() => {
		return `${Math.floor(Math.random() * 40) + 50}%`
	}, [])

	return (
		<div
			className={cn(
				't:flex t:h-8 t:items-center t:gap-2 t:rounded-md t:px-2',
				className,
			)}
			data-sidebar="menu-skeleton"
			ref={ref}
			{...props}
		>
			{showIcon && (
				<Skeleton
					className="t:size-4 t:rounded-md"
					data-sidebar="menu-skeleton-icon"
				/>
			)}
			<Skeleton
				className="t:h-4 t:max-w-[--skeleton-width] t:flex-1"
				data-sidebar="menu-skeleton-text"
				style={
					{
						'--skeleton-width': width,
					} as React.CSSProperties
				}
			/>
		</div>
	)
})
SidebarMenuSkeleton.displayName = 'SidebarMenuSkeleton'

const SidebarMenuSub = React.forwardRef<
	HTMLUListElement,
	React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
	<ul
		className={cn(
			't:mx-3.5 t:flex t:min-w-0 t:translate-x-px t:flex-col t:gap-1 t:border-sidebar-border t:border-l t:px-2.5 t:py-0.5',
			't:group-data-[collapsible=icon]:hidden',
			className,
		)}
		data-sidebar="menu-sub"
		ref={ref}
		{...props}
	/>
))
SidebarMenuSub.displayName = 'SidebarMenuSub'

const SidebarMenuSubItem = React.forwardRef<
	HTMLLIElement,
	React.ComponentProps<'li'>
>(({ ...props }, ref) => (
	<li
		ref={ref}
		{...props}
	/>
))
SidebarMenuSubItem.displayName = 'SidebarMenuSubItem'

const SidebarMenuSubButton = React.forwardRef<
	HTMLAnchorElement,
	React.ComponentProps<'a'> & {
		asChild?: boolean
		size?: 'sm' | 'md'
		isActive?: boolean
	}
>(({ asChild = false, size = 'md', isActive, className, ...props }, ref) => {
	const Comp = asChild ? Slot : 'a'

	return (
		<Comp
			className={cn(
				't:-t-translate-x-px t:flex t:h-7 t:min-w-0 t:items-center t:gap-2 t:overflow-hidden t:rounded-md t:px-2 t:text-sidebar-foreground t:outline-none t:ring-sidebar-ring t:hover:bg-sidebar-accent t:hover:text-sidebar-accent-foreground t:focus-visible:ring-2 t:active:bg-sidebar-accent t:active:text-sidebar-accent-foreground t:disabled:pointer-events-none t:disabled:opacity-50 t:aria-disabled:pointer-events-none t:aria-disabled:opacity-50 t:[&>span:last-child]:truncate t:[&>svg]:size-4 t:[&>svg]:shrink-0 t:[&>svg]:text-sidebar-accent-foreground',
				't:data-[active=true]:bg-sidebar-accent t:data-[active=true]:text-sidebar-accent-foreground',
				size === 'sm' && 't:text-xs',
				size === 'md' && 't:text-sm',
				't:group-data-[collapsible=icon]:hidden',
				className,
			)}
			data-active={isActive}
			data-sidebar="menu-sub-button"
			data-size={size}
			ref={ref}
			{...props}
		/>
	)
})
SidebarMenuSubButton.displayName = 'SidebarMenuSubButton'

export {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupAction,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInput,
	SidebarInset,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSkeleton,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarProvider,
	SidebarRail,
	SidebarSeparator,
	SidebarTrigger,
	useSidebar,
}
