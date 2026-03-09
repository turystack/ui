import type { ComponentConfig } from '@/support/types'
import type { InputProps } from '@/components/input/input.types'

export type MaskInputSlots = 'root' | 'input' | 'leftSection' | 'rightSection' | 'loader'

export type MaskInputProps = Omit<InputProps, 'type' | 'onChange' | 'debounce'> & {
	mask: string | string[]
	className?: string
	onChange?: (value: string | null) => void
}

export type MaskInputConfig = ComponentConfig<MaskInputProps, MaskInputSlots>
