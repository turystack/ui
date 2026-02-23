export type TooltipSlots = 'root' | 'content'

export type TooltipSide = 'top' | 'right' | 'bottom' | 'left'

export type TooltipProps = {
	content: string
	side?: TooltipSide
	sideOffset?: number
}
