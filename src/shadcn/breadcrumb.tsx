import { Slot } from '@radix-ui/react-slot'
import { ChevronRight, MoreHorizontal } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/support/utils'

const Breadcrumb = React.forwardRef<
	HTMLElement,
	React.ComponentPropsWithoutRef<'nav'> & {
		separator?: React.ReactNode
	}
>(({ ...props }, ref) => (
	<nav
		aria-label="breadcrumb"
		ref={ref}
		{...props}
	/>
))
Breadcrumb.displayName = 'Breadcrumb'

const BreadcrumbList = React.forwardRef<
	HTMLOListElement,
	React.ComponentPropsWithoutRef<'ol'>
>(({ className, ...props }, ref) => (
	<ol
		className={cn(
			't:flex t:flex-wrap t:items-center t:gap-1.5 t:break-words t:text-muted-foreground t:text-sm t:sm:gap-2.5',
			className,
		)}
		ref={ref}
		{...props}
	/>
))
BreadcrumbList.displayName = 'BreadcrumbList'

const BreadcrumbItem = React.forwardRef<
	HTMLLIElement,
	React.ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
	<li
		className={cn('t:inline-flex t:items-center t:gap-1.5', className)}
		ref={ref}
		{...props}
	/>
))
BreadcrumbItem.displayName = 'BreadcrumbItem'

const BreadcrumbLink = React.forwardRef<
	HTMLAnchorElement,
	React.ComponentPropsWithoutRef<'a'> & {
		asChild?: boolean
	}
>(({ asChild, className, ...props }, ref) => {
	const Comp = asChild ? Slot : 'a'

	return (
		<Comp
			className={cn('t:transition-colors t:hover:text-foreground', className)}
			ref={ref}
			{...props}
		/>
	)
})
BreadcrumbLink.displayName = 'BreadcrumbLink'

const BreadcrumbPage = React.forwardRef<
	HTMLSpanElement,
	React.ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => (
	<span
		aria-current="page"
		aria-disabled="true"
		className={cn('t:font-normal t:text-foreground', className)}
		ref={ref}
		{...props}
	/>
))
BreadcrumbPage.displayName = 'BreadcrumbPage'

const BreadcrumbSeparator = ({
	children,
	className,
	...props
}: React.ComponentProps<'li'>) => (
	<li
		aria-hidden="true"
		className={cn('t:[&>svg]:h-3.5 t:[&>svg]:w-3.5', className)}
		role="presentation"
		{...props}
	>
		{children ?? <ChevronRight />}
	</li>
)
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

const BreadcrumbEllipsis = ({
	className,
	...props
}: React.ComponentProps<'span'>) => (
	<span
		aria-hidden="true"
		className={cn(
			't:flex t:h-9 t:w-9 t:items-center t:justify-center',
			className,
		)}
		role="presentation"
		{...props}
	>
		<MoreHorizontal className="t:h-4 t:w-4" />
		<span className="t:sr-only">More</span>
	</span>
)
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis'

export {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbPage,
	BreadcrumbSeparator,
	BreadcrumbEllipsis,
}
