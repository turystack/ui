import type { WithLabelProps } from "@/components/label"

export type SwitchSlots = 'root' | 'thumb' | 'label'

export type SwitchSize = 'sm' | 'md' | 'lg'

export type SwitchProps = WithLabelProps<{
	value?: string
	size?: SwitchSize
	description?: string
	checked?: boolean
	defaultChecked?: boolean
	disabled?: boolean
	bordered?: boolean
	onCheckedChange?: (checked: boolean) => void
}>
