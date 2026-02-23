export type PopoverSlots = 'root' | 'trigger' | 'content'

export type PopoverSide = 'top' | 'right' | 'bottom' | 'left'

export type PopoverProps = {
	content: string
	side?: PopoverSide
	sideOffset?: number
}
