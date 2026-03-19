import type { PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants'

import type { GridItemProps, GridProps } from './grid.types'

const styles = tv({
	base: 't:grid',
	defaultVariants: {
		cols: 1,
		gap: 'none',
	},
	variants: {
		cols: {
			1: 't:grid-cols-1',
			2: 't:grid-cols-2',
			3: 't:grid-cols-3',
			4: 't:grid-cols-4',
			5: 't:grid-cols-5',
			6: 't:grid-cols-6',
			7: 't:grid-cols-7',
			8: 't:grid-cols-8',
			9: 't:grid-cols-9',
			10: 't:grid-cols-10',
			11: 't:grid-cols-11',
			12: 't:grid-cols-12',
		},
		gap: {
			lg: 't:gap-6',
			md: 't:gap-4',
			none: 't:gap-0',
			sm: 't:gap-2',
			xl: 't:gap-8',
			xs: 't:gap-1',
		},
	},
})

const itemStyles = tv({
	base: '',
	variants: {
		span: {
			1: 't:col-span-1',
			2: 't:col-span-2',
			3: 't:col-span-3',
			4: 't:col-span-4',
			5: 't:col-span-5',
			6: 't:col-span-6',
			7: 't:col-span-7',
			8: 't:col-span-8',
			9: 't:col-span-9',
			10: 't:col-span-10',
			11: 't:col-span-11',
			12: 't:col-span-12',
			full: 't:col-span-full',
		},
	},
})

function Root({ cols, gap, children }: PropsWithChildren<GridProps>) {
	return (
		<div
			className={styles({
				cols,
				gap,
			})}
		>
			{children}
		</div>
	)
}

function Item({ span, children }: PropsWithChildren<GridItemProps>) {
	return (
		<div
			className={itemStyles({
				span,
			})}
		>
			{children}
		</div>
	)
}

export const Grid = Object.assign(Root, {
	Item,
})
