export type TooltipSlots = 'root' | 'content'

export type TooltipSide = 'top' | 'right' | 'bottom' | 'left'

export type TooltipProps = {
	content: React.ReactNode
	side?: TooltipSide
	sideOffset?: number
	delayDuration?: number
}

import type { ComponentConfig } from '@/support/types'

export type TooltipConfig = ComponentConfig<TooltipProps, TooltipSlots>
