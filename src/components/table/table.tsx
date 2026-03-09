import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react'
import { useState } from 'react'
import { tv } from 'tailwind-variants'

import type { TableProps } from './table.types'

import { Checkbox } from '@/components/checkbox'
import { LoadingOverlay } from '@/components/loading-overlay'
import { Pagination } from '@/components/pagination'
import { cn } from '@/support/utils'

const styles = tv({
	slots: {
		body: '',
		cell: 't:px-4 t:py-3 t:text-sm',
		empty: 't:py-12 t:text-center t:text-muted-foreground t:text-sm',
		header: '',
		headerCell:
			't:px-4 t:py-3 t:text-left t:text-xs t:font-medium t:text-muted-foreground t:uppercase t:tracking-wide',
		root: 't:relative t:w-full t:overflow-auto t:rounded-md t:border',
		row: 't:border-b t:transition-colors t:hover:bg-muted/50',
		selection: '',
		table: 't:w-full t:caption-bottom t:text-sm',
	},
	variants: {
		clickable: {
			true: {
				row: 't:cursor-pointer',
			},
		},
		sorter: {
			true: {
				headerCell: 't:cursor-pointer t:select-none t:hover:text-foreground',
			},
		},
	},
})

function SortIcon({ columnKey, sort }: { columnKey: string; sort?: string }) {
	if (!sort || (sort !== columnKey && sort !== `-${columnKey}`)) {
		return <ArrowUpDown className="t:ml-1 t:inline-block t:h-3 t:w-3" />
	}
	if (sort === columnKey) return <ArrowUp className="t:ml-1 t:inline-block t:h-3 t:w-3" />
	return <ArrowDown className="t:ml-1 t:inline-block t:h-3 t:w-3" />
}

export function Table<T extends object>({
	columns,
	items = [],
	itemKey,
	selection = 'none',
	pagination,
	sort,
	hidePagination = false,
	loading = false,
	emptySection,
	onRowClick,
	onSelectionChange,
	onSortChange,
}: TableProps<T>) {
	const [selectedKeys, setSelectedKeys] = useState<string[]>([])

	const {
		root,
		table,
		header,
		headerCell,
		body,
		row,
		cell,
		empty,
	} = styles({ clickable: !!onRowClick })

	const visibleColumns = columns.filter((col) => !col.hide)
	const hasSelection = selection === 'multiple'

	const allKeys = items.map((item) => String(item[itemKey]))
	const allSelected = allKeys.length > 0 && allKeys.every((k) => selectedKeys.includes(k))

	function handleSelectAll(checked: boolean) {
		const next = checked ? allKeys : []
		setSelectedKeys(next)
		onSelectionChange?.(next)
	}

	function handleSelectRow(key: string, checked: boolean) {
		const next = checked
			? [...selectedKeys, key]
			: selectedKeys.filter((k) => k !== key)
		setSelectedKeys(next)
		onSelectionChange?.(next)
	}

	function handleSort(columnKey: string) {
		if (!sort || sort === `-${columnKey}`) {
			onSortChange?.(columnKey)
		} else if (sort === columnKey) {
			onSortChange?.(`-${columnKey}`)
		} else {
			onSortChange?.(columnKey)
		}
	}

	return (
		<div className="t:space-y-2">
			<div className={root()}>
				<LoadingOverlay visible={loading} />
				<table className={table()}>
					<thead className={header()}>
						<tr>
							{hasSelection && (
								<th className={cn(headerCell(), 't:w-10')}>
									<Checkbox
										checked={allSelected}
										onChange={handleSelectAll}
									/>
								</th>
							)}
							{visibleColumns.map((col) => (
								<th
									className={cn(
										headerCell(),
										styles({ sorter: col.sorter }).headerCell(),
										col.align === 'center' && 't:text-center',
										col.align === 'right' && 't:text-right',
									)}
									key={col.key}
									style={col.width ? { width: col.width } : undefined}
									onClick={col.sorter ? () => handleSort(col.key) : undefined}
								>
									{col.label}
									{col.sorter && <SortIcon columnKey={col.key} sort={sort} />}
								</th>
							))}
						</tr>
					</thead>
					<tbody className={body()}>
						{items.length === 0 ? (
							<tr>
								<td
									className={empty()}
									colSpan={visibleColumns.length + (hasSelection ? 1 : 0)}
								>
									{emptySection ?? 'No data'}
								</td>
							</tr>
						) : (
							items.map((item, index) => {
								const key = String(item[itemKey])
								const isSelected = selectedKeys.includes(key)

								return (
									<tr
										className={cn(
											row(),
											isSelected && 't:bg-muted/30',
										)}
										key={key}
										onClick={() => onRowClick?.(item)}
									>
										{hasSelection && (
											<td className={cn(cell(), 't:w-10')}>
												<Checkbox
													checked={isSelected}
													onChange={(c) => handleSelectRow(key, c)}
												/>
											</td>
										)}
										{visibleColumns.map((col) => (
											<td
												className={cn(
													cell(),
													col.align === 'center' && 't:text-center',
													col.align === 'right' && 't:text-right',
												)}
												key={col.key}
											>
												{col.selector
													? col.selector(item, index)
													: String((item as Record<string, unknown>)[col.key] ?? '')}
											</td>
										))}
									</tr>
								)
							})
						)}
					</tbody>
				</table>
			</div>
			{!hidePagination && pagination && <Pagination {...pagination} />}
		</div>
	)
}
