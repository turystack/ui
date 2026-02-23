import type { MaskInputProps } from '@/components/mask-input/mask-input.types'

export type DocumentInputSlots = 'root' | 'input' | 'leftSection' | 'rightSection' | 'loader'

export type DocumentType = 'cpf' | 'cnpj' | 'cpf_cnpj'

export type DocumentValue = {
	type: DocumentType
	number: string
}

export type DocumentInputProps = Omit<MaskInputProps, 'mask' | 'value' | 'defaultValue' | 'onChange'> & {
	variant: DocumentType
	value?: DocumentValue | null
	defaultValue?: DocumentValue | null
	onChange?: (value: DocumentValue | null) => void
}
