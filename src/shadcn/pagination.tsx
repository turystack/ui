import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import * as React from 'react'

import { type ButtonProps, styles as buttonVariants } from '@/components/button'
import { cn } from '@/support/utils'

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
	<nav
		aria-label="pagination"
		className={cn('t:mx-auto t:flex t:w-full t:justify-center', className)}
		{...props}
	/>
)
Pagination.displayName = 'Pagination'

const PaginationContent = React.forwardRef<
	HTMLUListElement,
	React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
	<ul
		className={cn('t:flex t:flex-row t:items-center t:gap-1', className)}
		ref={ref}
		{...props}
	/>
))
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.forwardRef<
	HTMLLIElement,
	React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
	<li
		className={cn('', className)}
		ref={ref}
		{...props}
	/>
))
PaginationItem.displayName = 'PaginationItem'

type PaginationLinkProps = {
	isActive?: boolean
} & Pick<ButtonProps, 'size'> &
	React.ComponentProps<'a'>

const PaginationLink = ({
	className,
	isActive,
	size = 'icon-md',
	...props
}: PaginationLinkProps) => (
	<a
		aria-current={isActive ? 'page' : undefined}
		className={cn(
			buttonVariants({
				size,
				variant: isActive ? 'outline' : 'ghost',
			}),
			className,
		)}
		{...props}
	/>
)
PaginationLink.displayName = 'PaginationLink'

const PaginationPrevious = ({
	className,
	...props
}: React.ComponentProps<typeof PaginationLink>) => (
	<PaginationLink
		aria-label="Go to previous page"
		className={cn('t:gap-1 t:pl-2.5', className)}
		size="md"
		{...props}
	>
		<ChevronLeft className="t:h-4 t:w-4" />
		<span>Previous</span>
	</PaginationLink>
)
PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = ({
	className,
	...props
}: React.ComponentProps<typeof PaginationLink>) => (
	<PaginationLink
		aria-label="Go to next page"
		className={cn('t:gap-1 t:pr-2.5', className)}
		size="md"
		{...props}
	>
		<span>Next</span>
		<ChevronRight className="t:h-4 t:w-4" />
	</PaginationLink>
)
PaginationNext.displayName = 'PaginationNext'

const PaginationEllipsis = ({
	className,
	...props
}: React.ComponentProps<'span'>) => (
	<span
		aria-hidden
		className={cn(
			't:flex t:h-9 t:w-9 t:items-center t:justify-center',
			className,
		)}
		{...props}
	>
		<MoreHorizontal className="t:h-4 t:w-4" />
		<span className="t:sr-only">More pages</span>
	</span>
)
PaginationEllipsis.displayName = 'PaginationEllipsis'

export {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
}
