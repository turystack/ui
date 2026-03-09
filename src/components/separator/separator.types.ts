import type { ComponentConfig } from '@/support/types'

export type SeparatorSlots = 'root'

export type SeparatorOrientation = 'horizontal' | 'vertical'

export type SeparatorProps = {
	orientation?: SeparatorOrientation
	decorative?: boolean
}

export type SeparatorConfig = ComponentConfig<SeparatorProps, SeparatorSlots>
