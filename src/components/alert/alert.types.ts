import type { ComponentConfig } from '@/support/types'

export type AlertSlots = 'root' | 'close'

export type AlertVariant = 'default' | 'destructive'

export type AlertProps = {
	variant?: AlertVariant
	closable?: boolean
	onClose?: () => void
}

export type AlertIconSlots = 'root'

export type AlertIconProps = {}

export type AlertTitleSlots = 'root'

export type AlertTitleProps = {}

export type AlertDescriptionSlots = 'root'

export type AlertDescriptionProps = {}

export type AlertActionSlots = 'root'

export type AlertActionProps = {}

export type AlertConfig = {
	default?: ComponentConfig<AlertProps, AlertSlots>
	icon?: ComponentConfig<AlertIconProps, AlertIconSlots>
	title?: ComponentConfig<AlertTitleProps, AlertTitleSlots>
	description?: ComponentConfig<AlertDescriptionProps, AlertDescriptionSlots>
	action?: ComponentConfig<AlertActionProps, AlertActionSlots>
}
