import * as PopoverPrimitive from '@radix-ui/react-popover'
import { ChevronDown } from 'lucide-react'
import { forwardRef, useState } from 'react'
import { tv } from 'tailwind-variants'

import type { Currency, CurrencyInputProps, CurrencyInputRangeValue } from './currency-input.types'

import { Button } from '@/components/button'
import { Input, type InputProps } from '@/components/input'
import { useInternalState } from '@/components/provider/provider.context'
import { cn } from '@/support/utils'

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

const rangeStyles = tv({
	slots: {
		content:
			't:z-50 t:w-72 t:rounded-md t:border t:bg-popover t:p-4 t:shadow-md t:outline-none t:data-[state=open]:animate-in t:data-[state=closed]:animate-out t:data-[state=closed]:fade-out-0 t:data-[state=open]:fade-in-0 t:data-[state=closed]:zoom-out-95 t:data-[state=open]:zoom-in-95',
		footer: 't:flex t:justify-end t:gap-2 t:pt-1',
		inputLabel: 't:text-xs t:text-muted-foreground',
		inputSection: 't:flex t:flex-col t:gap-1',
		inputsWrapper: 't:flex t:flex-col t:gap-3',
		trigger:
			't:flex t:h-10 t:items-center t:justify-between t:gap-2 t:rounded-md t:border t:border-input t:bg-background t:px-3 t:text-sm t:text-left t:ring-offset-background t:focus-visible:outline-none t:focus-visible:ring-2 t:focus-visible:ring-ring t:focus-visible:ring-offset-2 t:cursor-pointer t:disabled:cursor-not-allowed t:disabled:opacity-50',
	},
})

export const CurrencyInput = forwardRef<HTMLInputElement, CurrencyInputProps>(
	(props, ref) => {
		const state = useInternalState()
		const config = state?.components?.currencyInput

		const { currency, ...rest } = props
		const mode = (rest as any).mode ?? 'single'

		const resolvedCurrency = currency ?? (config?.defaultProps?.currency as Currency | undefined) ?? 'brl'

		if (mode === 'range') {
			const {
				value: rangeValue,
				defaultValue: rangeDefaultValue,
				onChange: rangeOnChange,
				placeholder,
				disabled,
				block,
			} = rest as any

			return (
				<RangeCurrencyInput
					currency={resolvedCurrency}
					defaultValue={rangeDefaultValue}
					disabled={disabled}
					block={block}
					placeholder={placeholder}
					value={rangeValue}
					onChange={rangeOnChange}
				/>
			)
		}

		// Single mode
		const { value, defaultValue, onChange } = rest as any

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
				{...(rest as any)}
				onChange={handleChange}
				ref={ref}
				value={formatCurrency(internalValue, resolvedCurrency)}
			/>
		)
	},
)

function RangeCurrencyInput({
	currency,
	value,
	defaultValue,
	onChange,
	placeholder,
	disabled,
	block,
}: {
	currency: Currency
	value?: CurrencyInputRangeValue
	defaultValue?: CurrencyInputRangeValue
	onChange?: (v: CurrencyInputRangeValue) => void
	placeholder?: string
	disabled?: boolean
	block?: boolean
}) {
	const [open, setOpen] = useState(false)
	const [committed, setCommitted] = useState<CurrencyInputRangeValue>(
		value ?? defaultValue ?? {},
	)
	const [draft, setDraft] = useState<CurrencyInputRangeValue>(committed)

	const isControlled = value !== undefined
	const displayValue = isControlled ? (value ?? {}) : committed

	const { content, footer, inputLabel, inputSection, inputsWrapper, trigger } = rangeStyles()

	function handleOpen(next: boolean) {
		if (next) setDraft(displayValue)
		setOpen(next)
	}

	function handleConfirm() {
		if (!isControlled) setCommitted(draft)
		onChange?.(draft)
		setOpen(false)
	}

	const triggerLabel =
		displayValue.from != null || displayValue.to != null
			? `${formatCurrency(displayValue.from ?? null, currency) ?? '–'} – ${formatCurrency(displayValue.to ?? null, currency) ?? '–'}`
			: (placeholder ?? 'Select range')

	return (
		<PopoverPrimitive.Root open={open} onOpenChange={handleOpen}>
			<PopoverPrimitive.Trigger asChild>
				<button
					className={cn(trigger(), block && 't:w-full')}
					disabled={disabled}
					type="button"
				>
					<span>{triggerLabel}</span>
					<ChevronDown className="t:h-4 t:w-4 t:text-muted-foreground t:shrink-0" />
				</button>
			</PopoverPrimitive.Trigger>
			<PopoverPrimitive.Portal>
				<PopoverPrimitive.Content className={content()} sideOffset={4}>
					<div className={inputsWrapper()}>
						<div className={inputSection()}>
							<span className={inputLabel()}>From</span>
							<Input
								block
								value={formatCurrency(draft.from ?? null, currency)}
								placeholder={formatCurrency(0, currency)}
								onChange={(val) => setDraft((d) => ({ ...d, from: parseCurrency(val) }))}
							/>
						</div>
						<div className={inputSection()}>
							<span className={inputLabel()}>To</span>
							<Input
								block
								value={formatCurrency(draft.to ?? null, currency)}
								placeholder={formatCurrency(0, currency)}
								onChange={(val) => setDraft((d) => ({ ...d, to: parseCurrency(val) }))}
							/>
						</div>
						<div className={footer()}>
							<Button size="sm" variant="outline" onClick={() => setOpen(false)}>
								Cancel
							</Button>
							<Button size="sm" onClick={handleConfirm}>
								Confirm
							</Button>
						</div>
					</div>
				</PopoverPrimitive.Content>
			</PopoverPrimitive.Portal>
		</PopoverPrimitive.Root>
	)
}
