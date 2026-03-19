import type { PaginationProps } from '@/components/pagination/pagination.types'
import type { ComponentConfig } from '@/support/types'

export type TableSlots =
	| 'root'
	| 'header'
	| 'headerCell'
	| 'body'
	| 'row'
	| 'cell'
	| 'empty'
	| 'loader'
	| 'selection'

export type TableSelection = 'none' | 'multiple'

export type TableColumnAlign = 'left' | 'center' | 'right'

export type TableColumns<T> = Array<{
	key: string
	label?: string
	selector?: (row: T, index: number) => React.ReactNode
	align?: TableColumnAlign
	width?: number
	sorter?: boolean
	hide?: boolean
}>

export type TableItems<T> = Array<T>

export type TableProps<T> = {
	columns: TableColumns<T>
	items?: TableItems<T>
	itemKey: keyof T
	selection?: TableSelection
	selectedKeys?: string[]
	defaultSelectedKeys?: string[]
	pagination?: PaginationProps
	sort?: string
	hidePagination?: boolean
	loading?: boolean
	emptySection?: React.ReactNode
	onRowClick?: (row: T) => void
	onSelectionChange?: (value: string[]) => void
	onSortChange?: (sort?: string) => void
}

export type TableConfig = ComponentConfig<object, TableSlots>
