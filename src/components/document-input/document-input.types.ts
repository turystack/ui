import type { ComponentConfig } from '@/support/types'
import type { MaskInputProps } from '@/components/mask-input/mask-input.types'

export type DocumentInputSlots = 'root' | 'input' | 'typeSelector' | 'loader'

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

export type DocumentInputConfig = ComponentConfig<object, DocumentInputSlots>
