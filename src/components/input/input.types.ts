export type InputSlots = 'root' | 'input' | 'leftSection' | 'rightSection' | 'loader'

export type InputSize = 'sm' | 'md' | 'lg'

export type InputProps = {
	type?: string
	value?: string | null
	defaultValue?: string | null
	placeholder?: string
	size?: InputSize
	leftSection?: React.ReactNode
	rightSection?: React.ReactNode
	debounce?: boolean
	block?: boolean
	disabled?: boolean
	loading?: boolean
	onChange?: (value: string | null) => void
}
