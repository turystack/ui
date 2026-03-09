import type { ComponentConfig } from '@/support/types'

export type ModalSlots = 'root' | 'overlay' | 'content' | 'close'

export type ModalProps = {
	open?: boolean
	onChange?: (open: boolean) => void
}

export type ModalHeaderSlots = 'root' | 'title' | 'description'

export type ModalHeaderProps = {
	closable?: boolean
	bordered?: boolean
}

export type ModalHeaderTitleSlots = 'root'

export type ModalHeaderTitleProps = {}

export type ModalHeaderDescriptionSlots = 'root'

export type ModalHeaderDescriptionProps = {}

export type ModalBodySlots = 'root'

export type ModalBodyProps = {}

export type ModalFooterSlots = 'root'

export type ModalFooterProps = {
	bordered?: boolean
}

export type ModalConfig = {
	default?: ComponentConfig<ModalProps, ModalSlots>
	header?: ComponentConfig<ModalHeaderProps, ModalHeaderSlots>
	headerTitle?: ComponentConfig<ModalHeaderTitleProps, ModalHeaderTitleSlots>
	headerDescription?: ComponentConfig<ModalHeaderDescriptionProps, ModalHeaderDescriptionSlots>
	body?: ComponentConfig<ModalBodyProps, ModalBodySlots>
	footer?: ComponentConfig<ModalFooterProps, ModalFooterSlots>
}
