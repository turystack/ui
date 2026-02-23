export type SheetSlots = 'root' | 'overlay' | 'content' | 'close'

export type SheetSide = 'top' | 'right' | 'bottom' | 'left'

export type SheetProps = {
	open?: boolean
	side?: SheetSide
	onOpenChange?: (open: boolean) => void
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
