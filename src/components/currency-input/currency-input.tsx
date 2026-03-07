import { forwardRef, useState } from 'react'

import type { Currency, CurrencyInputProps } from './currency-input.types'

import { Input, type InputProps } from '@/components/input'
import { useInternalState } from '@/components/provider/provider.context'

const CURRENCY_LOCALE_MAP: Record<Currency, { locale: string; code: string }> = {
	brl: { locale: 'pt-BR', code: 'BRL' },
	usd: { locale: 'en-US', code: 'USD' },
	eur: { locale: 'de-DE', code: 'EUR' },
}

const formatCurrency = (
	value: number | null | undefined,
	currency: Currency,
) => {
	if (value === null || value === undefined) {
		return undefined
	}

	const { locale, code } = CURRENCY_LOCALE_MAP[currency]

	return Number(value).toLocaleString(locale, {
		currency: code,
		style: 'currency',
	})
}

const parseCurrency = (value: string | null): number | null => {
	if (value === null || value === '') {
		return null
	}

	const cleaned = value.replace(/[^\d]/g, '')

	if (!cleaned) {
		return 0
	}

	return Number.parseFloat(cleaned) / 100
}

export const CurrencyInput = forwardRef<HTMLInputElement, CurrencyInputProps>(
	({ currency, value, defaultValue, onChange, ...props }, ref) => {
		const state = useInternalState()
		const config = state?.components?.currencyInput

		const resolvedCurrency = currency ?? (config?.defaultProps?.currency as Currency | undefined) ?? 'brl'

		const [internalValue, setInternalValue] = useState<number | null>(
			value ?? defaultValue ?? null,
		)

		const handleChange: InputProps['onChange'] = (val) => {
			const numericValue = parseCurrency(val)
			setInternalValue(numericValue)
			onChange?.(numericValue)
		}

		return (
			<Input
				{...props}
				onChange={handleChange}
				ref={ref}
				value={formatCurrency(internalValue, resolvedCurrency)}
			/>
		)
	},
)
