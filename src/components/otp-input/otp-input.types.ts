export type OTPInputSlots = 'root' | 'cell'

export type OTPInputProps = {
	pattern?: number[]
	value?: string | null
	defaultValue?: string | null
	onChange?: (value: string | null) => void
}
