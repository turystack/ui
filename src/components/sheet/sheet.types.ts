import type { ComponentConfig } from '@/support/types'

export type SheetSlots = 'root' | 'overlay' | 'content' | 'close'

export type SheetSide = 'top' | 'right' | 'bottom' | 'left'

export type SheetProps = {
	open?: boolean
	side?: SheetSide
	onChange?: (open: boolean) => void
}

export type SheetHeaderSlots = 'root'

export type SheetHeaderProps = {
	closable?: boolean
	bordered?: boolean
}

export type SheetTitleSlots = 'root'

export type SheetTitleProps = {}

export type SheetDescriptionSlots = 'root'

export type SheetDescriptionProps = {}

export type SheetBodySlots = 'root'

export type SheetBodyProps = {}

export type SheetFooterSlots = 'root'

export type SheetFooterProps = {
	bordered?: boolean
}

export type SheetConfig = {
	default?: ComponentConfig<SheetProps, SheetSlots>
	header?: ComponentConfig<SheetHeaderProps, SheetHeaderSlots>
	body?: ComponentConfig<SheetBodyProps, SheetBodySlots>
	footer?: ComponentConfig<SheetFooterProps, SheetFooterSlots>
	title?: ComponentConfig<SheetTitleProps, SheetTitleSlots>
	description?: ComponentConfig<SheetDescriptionProps, SheetDescriptionSlots>
}
