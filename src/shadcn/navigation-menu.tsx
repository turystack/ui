import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'
import { ChevronDown } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/support/utils'

const NavigationMenu = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Root
		className={cn(
			't:relative t:z-10 t:flex t:max-w-max t:flex-1 t:items-center t:justify-center',
			className,
		)}
		ref={ref}
		{...props}
	>
		{children}
		<NavigationMenuViewport />
	</NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

const NavigationMenuList = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.List
		className={cn(
			't:group t:flex t:flex-1 t:list-none t:items-center t:justify-center t:space-x-1',
			className,
		)}
		ref={ref}
		{...props}
	/>
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

const NavigationMenuItem = NavigationMenuPrimitive.Item

const navigationMenuTriggerStyle = cva(
	't:group t:inline-flex t:h-10 t:w-max t:items-center t:justify-center t:rounded-md t:bg-background t:px-4 t:py-2 t:text-sm t:font-medium t:transition-colors t:hover:bg-accent t:hover:text-accent-foreground t:focus:bg-accent t:focus:text-accent-foreground t:focus:outline-none t:disabled:pointer-events-none t:disabled:opacity-50 t:data-[state=open]:text-accent-foreground t:data-[state=open]:bg-accent/50 t:data-[state=open]:hover:bg-accent t:data-[state=open]:focus:bg-accent',
)

const NavigationMenuTrigger = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Trigger
		className={cn(navigationMenuTriggerStyle(), 'group', className)}
		ref={ref}
		{...props}
	>
		{children}{' '}
		<ChevronDown
			aria-hidden="true"
			className="t:relative t:top-[1px] t:ml-1 t:h-3 t:w-3 t:transition t:duration-200 t:group-data-[state=open]:rotate-180"
		/>
	</NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

const NavigationMenuContent = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Content
		className={cn(
			't:data-[motion^=from-]:fade-in t:data-[motion^=to-]:fade-out t:data-[motion=from-end]:slide-in-from-right-52 t:data-[motion=from-start]:slide-in-from-left-52 t:data-[motion=to-end]:slide-out-to-right-52 t:data-[motion=to-start]:slide-out-to-left-52 t:top-0 t:left-0 t:w-full t:data-[motion^=from-]:animate-in t:data-[motion^=to-]:animate-out t:md:absolute t:md:w-auto',
			className,
		)}
		ref={ref}
		{...props}
	/>
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuViewport = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
	<div className={cn('t:absolute t:top-full t:left-0 t:flex t:justify-center')}>
		<NavigationMenuPrimitive.Viewport
			className={cn(
				't:data-[state=closed]:zoom-out-95 t:data-[state=open]:zoom-in-90 t:relative t:mt-1.5 t:h-[var(--radix-navigation-menu-viewport-height)] t:w-full t:origin-top-center t:overflow-hidden t:rounded-md t:border t:bg-popover t:text-popover-foreground t:shadow-lg t:data-[state=closed]:animate-out t:data-[state=open]:animate-in t:md:w-[var(--radix-navigation-menu-viewport-width)]',
				className,
			)}
			ref={ref}
			{...props}
		/>
	</div>
))
NavigationMenuViewport.displayName =
	NavigationMenuPrimitive.Viewport.displayName

const NavigationMenuIndicator = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Indicator
		className={cn(
			't:data-[state=hidden]:fade-out t:data-[state=visible]:fade-in t:top-full t:z-[1] t:flex t:h-1.5 t:items-end t:justify-center t:overflow-hidden t:data-[state=hidden]:animate-out t:data-[state=visible]:animate-in',
			className,
		)}
		ref={ref}
		{...props}
	>
		<div className="t:relative t:top-[60%] t:h-2 t:w-2 t:rotate-45 t:rounded-tl-sm t:bg-border t:shadow-md" />
	</NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
	NavigationMenuPrimitive.Indicator.displayName

export {
	navigationMenuTriggerStyle,
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuContent,
	NavigationMenuTrigger,
	NavigationMenuLink,
	NavigationMenuIndicator,
	NavigationMenuViewport,
}
