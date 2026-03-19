import type { ButtonProps } from '@/components/button/button.types'

export type ConfirmSlots =
	| 'root'
	| 'overlay'
	| 'content'
	| 'title'
	| 'description'
	| 'actions'

export type ConfirmProps = {
	open?: boolean
	title: string
	description: string
	confirmText?: string
	cancelText?: string
	confirmProps?: Omit<ButtonProps, 'loading' | 'onClick'>
	cancelProps?: Omit<ButtonProps, 'loading' | 'onClick'>
	onConfirm?: () => void
	onCancel?: () => void
	onClose?: () => void
}
