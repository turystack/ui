import type { ComponentConfig } from '@/support/types'

export type OTPInputSlots = 'root' | 'cell'

export type OTPInputSize = 'sm' | 'md' | 'lg'

export type OTPInputProps = {
	pattern?: number[]
	size?: OTPInputSize
	value?: string | null
	defaultValue?: string | null
	onChange?: (value: string | null) => void
}

export type OTPInputConfig = ComponentConfig<OTPInputProps, OTPInputSlots>
