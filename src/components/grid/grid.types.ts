export type GridSlots = 'root'

export type GridItemSlots = 'root'

export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type GridProps = {
	cols?: GridCols
	gap?: GridGap
}

export type GridItemSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full'

export type GridItemProps = {
	span?: GridItemSpan
}
