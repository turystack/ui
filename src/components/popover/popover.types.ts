export type PopoverSlots = 'root' | 'trigger' | 'content'

export type PopoverSide = 'top' | 'right' | 'bottom' | 'left'

export type PopoverProps = {
	content: React.ReactNode
	side?: PopoverSide
	sideOffset?: number
}
