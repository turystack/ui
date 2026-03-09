import { ChevronLeft, ChevronRight } from 'lucide-react'
import { tv } from 'tailwind-variants'

import type { PaginationProps } from './pagination.types'

import { Button } from '@/components/button'

const styles = tv({
	slots: {
		root: 't:flex t:items-center t:justify-between t:gap-4',
		rowsPerPage: 't:flex t:items-center t:gap-2 t:text-sm t:text-muted-foreground',
		rowsSelect:
			't:h-8 t:rounded-md t:border t:border-input t:bg-background t:pl-2 t:pr-6 t:text-sm t:focus:outline-none t:focus:ring-2 t:focus:ring-ring t:cursor-pointer',
	},
})

const PAGE_SIZE_OPTIONS = [10, 20, 50, 100]

export function Pagination(props: PaginationProps) {
	const { root, rowsPerPage, rowsSelect } = styles()

	if (props.mode === 'offset') {
		const { page, rowsPerPage: rpp, total, onPageChange, onRowsPerPageChange } = props
		const totalPages = Math.ceil(total / rpp)
		const hasPrev = page > 1
		const hasNext = page < totalPages

		return (
			<div className={root()}>
				<div className={rowsPerPage()}>
					<span>Rows per page:</span>
					<select
						className={rowsSelect()}
						onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
						value={rpp}
					>
						{PAGE_SIZE_OPTIONS.map((opt) => (
							<option key={opt} value={opt}>
								{opt}
							</option>
						))}
					</select>
					<span>
						{(page - 1) * rpp + 1}–{Math.min(page * rpp, total)} of {total}
					</span>
				</div>
				<div className="t:flex t:items-center t:gap-1">
					<Button
						disabled={!hasPrev}
						size="icon-sm"
						variant="ghost"
						onClick={() => onPageChange(page - 1)}
					>
						<ChevronLeft />
					</Button>
					<Button
						disabled={!hasNext}
						size="icon-sm"
						variant="ghost"
						onClick={() => onPageChange(page + 1)}
					>
						<ChevronRight />
					</Button>
				</div>
			</div>
		)
	}

	const {
		rowsPerPage: rpp,
		hasPreviousPage,
		hasNextPage,
		onPreviousPage,
		onNextPage,
		onRowsPerPageChange,
	} = props

	return (
		<div className={root()}>
			<div className={rowsPerPage()}>
				<span>Rows per page:</span>
				<select
					className={rowsSelect()}
					onChange={(e) => onRowsPerPageChange?.(Number(e.target.value))}
					value={rpp}
				>
					{PAGE_SIZE_OPTIONS.map((opt) => (
						<option key={opt} value={opt}>
							{opt}
						</option>
					))}
				</select>
			</div>
			<div className="t:flex t:items-center t:gap-1">
				<Button
					disabled={!hasPreviousPage}
					size="icon-sm"
					variant="ghost"
					onClick={onPreviousPage}
				>
					<ChevronLeft />
				</Button>
				<Button
					disabled={!hasNextPage}
					size="icon-sm"
					variant="ghost"
					onClick={onNextPage}
				>
					<ChevronRight />
				</Button>
			</div>
		</div>
	)
}
