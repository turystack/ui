import * as React from 'react'

import { cn } from '@/support/utils'

const Table = React.forwardRef<
	HTMLTableElement,
	React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
	<div className="t:relative t:w-full t:overflow-auto">
		<table
			className={cn('t:w-full t:caption-bottom t:text-sm', className)}
			ref={ref}
			{...props}
		/>
	</div>
))
Table.displayName = 'Table'

const TableHeader = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<thead
		className={cn('t:[&_tr]:border-b', className)}
		ref={ref}
		{...props}
	/>
))
TableHeader.displayName = 'TableHeader'

const TableBody = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tbody
		className={cn('t:[&_tr:last-child]:border-0', className)}
		ref={ref}
		{...props}
	/>
))
TableBody.displayName = 'TableBody'

const TableFooter = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tfoot
		className={cn(
			't:border-t t:bg-muted/50 t:font-medium t:[&>tr]:last:border-b-0',
			className,
		)}
		ref={ref}
		{...props}
	/>
))
TableFooter.displayName = 'TableFooter'

const TableRow = React.forwardRef<
	HTMLTableRowElement,
	React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
	<tr
		className={cn(
			't:border-b t:transition-colors t:hover:bg-muted/50 t:data-[state=selected]:bg-muted',
			className,
		)}
		ref={ref}
		{...props}
	/>
))
TableRow.displayName = 'TableRow'

const TableHead = React.forwardRef<
	HTMLTableCellElement,
	React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<th
		className={cn(
			't:h-12 t:px-4 t:text-left t:align-middle t:font-medium t:text-muted-foreground t:[&:has([role=checkbox])]:pr-0',
			className,
		)}
		ref={ref}
		{...props}
	/>
))
TableHead.displayName = 'TableHead'

const TableCell = React.forwardRef<
	HTMLTableCellElement,
	React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<td
		className={cn(
			't:p-4 t:align-middle t:[&:has([role=checkbox])]:pr-0',
			className,
		)}
		ref={ref}
		{...props}
	/>
))
TableCell.displayName = 'TableCell'

const TableCaption = React.forwardRef<
	HTMLTableCaptionElement,
	React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
	<caption
		className={cn('t:mt-4 t:text-muted-foreground t:text-sm', className)}
		ref={ref}
		{...props}
	/>
))
TableCaption.displayName = 'TableCaption'

export {
	Table,
	TableHeader,
	TableBody,
	TableFooter,
	TableHead,
	TableRow,
	TableCell,
	TableCaption,
}
