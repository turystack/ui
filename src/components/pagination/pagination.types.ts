export type PaginationSlots = 'root' | 'actions' | 'rowsPerPage'

type OffsetPaginationProps = {
	mode: 'offset'
	page: number
	rowsPerPage: number
	total: number
	onPageChange: (page: number) => void
	onRowsPerPageChange: (rowsPerPage: number) => void
}

type CursorPaginationProps = {
	mode: 'cursor'
	rowsPerPage: number
	hasPreviousPage?: boolean
	hasNextPage?: boolean
	onPreviousPage?: () => void
	onNextPage?: () => void
	onRowsPerPageChange?: (rowsPerPage: number) => void
}

export type PaginationProps = OffsetPaginationProps | CursorPaginationProps

import type { ComponentConfig } from '@/support/types'

export type PaginationConfig = ComponentConfig<PaginationProps, PaginationSlots>
