import type { InputProps } from '@/components/input/input.types'

export type MaskInputSlots = 'root' | 'input' | 'leftSection' | 'rightSection' | 'loader'

export type MaskInputProps = Omit<InputProps, 'type' | 'onChange' | 'debounce'> & {
	mask: string | string[]
	onChange?: (value: string | null) => void
}
