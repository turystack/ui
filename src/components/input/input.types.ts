import type { ComponentConfig } from '@/support/types'

export type InputType = 'text' | 'password'

export type InputSlots = 'root' | 'input' | 'leftSection' | 'rightSection' | 'loader'

export type InputSize = 'sm' | 'md' | 'lg'

export type InputProps = {
	className?: string
	rootClassName?: string
	style?: React.CSSProperties
	type?: InputType
	value?: string | null
	defaultValue?: string | null
	placeholder?: string
	size?: InputSize
	leftSection?: React.ReactNode
	rightSection?: React.ReactNode
	readOnly?: boolean
	debounce?: boolean
	block?: boolean
	disabled?: boolean
	loading?: boolean
	onChange?: (value: string | null) => void
	onClick?: React.MouseEventHandler<HTMLDivElement>
}

export type InputConfig = ComponentConfig<InputProps, InputSlots>
