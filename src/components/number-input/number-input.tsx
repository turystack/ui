import * as PopoverPrimitive from '@radix-ui/react-popover'
import { ChevronDown, Minus, Plus } from 'lucide-react'
import { forwardRef, useState } from 'react'
import { tv } from 'tailwind-variants'

import type {
	NumberInputProps,
	NumberInputRangeValue,
} from './number-input.types'

import { Button } from '@/components/button/button'
import { styles as inputStyles } from '@/components/input/input.shared'
import { cn } from '@/support/utils'

const stepperStyles = tv({
	slots: {
		button:
			't:flex t:self-stretch t:items-center t:justify-center t:px-2 t:text-muted-foreground t:hover:text-foreground t:transition-colors t:cursor-pointer t:disabled:opacity-50 t:disabled:pointer-events-none',
		divider: 't:w-px t:bg-border t:self-stretch',
		input: '',
		root: 't:flex t:items-stretch t:rounded-md t:border t:border-input t:bg-background t:overflow-hidden',
	},
})

const rangeStyles = tv({
	slots: {
		cancel: '',
		confirm: '',
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

function StepperInput({
	value,
	disabled,
	placeholder,
	step,
	inputClass,
	onChange,
}: {
	value: number | undefined
	disabled?: boolean
	placeholder?: string
	step: number
	inputClass: string
	onChange: (next: number) => void
}) {
	const { root: stepRoot, button, divider } = stepperStyles()
	const current = value ?? 0

	return (
		<div className={stepRoot()}>
			<button
				className={button()}
				disabled={disabled}
				type="button"
				onClick={() => onChange(current - step)}
			>
				<Minus className="t:h-3 t:w-3" />
			</button>
			<span className={divider()} />
			<input
				className={inputClass}
				disabled={disabled}
				inputMode="numeric"
				placeholder={placeholder}
				type="text"
				value={value ?? ''}
				onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
			/>
			<span className={divider()} />
			<button
				className={button()}
				disabled={disabled}
				type="button"
				onClick={() => onChange(current + step)}
			>
				<Plus className="t:h-3 t:w-3" />
			</button>
		</div>
	)
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
	({ step = 1, size, block, disabled, placeholder, ...props }, ref) => {
		const resolvedSize = size ?? 'md'
		const resolvedBlock = block ?? false

		const { input } = inputStyles({ block: resolvedBlock, hasLeft: false, hasRight: false, size: resolvedSize })
		const inputClass = cn(input(), 't:flex-1 t:border-0 t:rounded-none t:text-center t:focus-visible:ring-0 t:focus-visible:ring-offset-0')

		if (props.mode === 'single') {
			const { value, defaultValue, onChange } = props
			const [internal, setInternal] = useState<number>(defaultValue ?? 0)
			const isControlled = value !== undefined
			const current = isControlled ? (value ?? 0) : internal

			function update(next: number) {
				if (!isControlled) setInternal(next)
				onChange?.(next)
			}

			const { root: stepRoot, button, divider } = stepperStyles()

			return (
				<div className={cn(stepRoot(), resolvedBlock && 't:w-full')}>
					<button
						className={button()}
						disabled={disabled}
						type="button"
						onClick={() => update(current - step)}
					>
						<Minus className="t:h-3 t:w-3" />
					</button>
					<span className={divider()} />
					<input
						className={inputClass}
						disabled={disabled}
						inputMode="numeric"
						placeholder={placeholder}
						ref={ref}
						type="text"
						value={current}
						onChange={(e) => update(parseFloat(e.target.value) || 0)}
					/>
					<span className={divider()} />
					<button
						className={button()}
						disabled={disabled}
						type="button"
						onClick={() => update(current + step)}
					>
						<Plus className="t:h-3 t:w-3" />
					</button>
				</div>
			)
		}

		const { value, defaultValue, onChange } = props
		const [open, setOpen] = useState(false)
		const [committed, setCommitted] = useState<NumberInputRangeValue>(defaultValue ?? {})
		const [draft, setDraft] = useState<NumberInputRangeValue>(committed)

		const isControlled = value !== undefined
		const displayValue = isControlled ? (value ?? {}) : committed

		const {
			content,
			footer,
			inputLabel,
			inputSection,
			inputsWrapper,
			trigger,
		} = rangeStyles()

		function handleOpen(nextOpen: boolean) {
			if (nextOpen) setDraft(displayValue)
			setOpen(nextOpen)
		}

		function handleConfirm() {
			if (!isControlled) setCommitted(draft)
			onChange?.(draft)
			setOpen(false)
		}

		const triggerLabel =
			displayValue.from != null || displayValue.to != null
				? `${displayValue.from ?? '–'} até ${displayValue.to ?? '–'}`
				: (placeholder ?? 'Selecionar intervalo')

		return (
			<PopoverPrimitive.Root open={open} onOpenChange={handleOpen}>
				<PopoverPrimitive.Trigger asChild>
					<button
						className={cn(trigger(), resolvedBlock && 't:w-full')}
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
								<span className={inputLabel()}>De</span>
								<StepperInput
									disabled={disabled}
									inputClass={inputClass}
									step={step}
									value={draft.from}
									onChange={(v) => setDraft((d) => ({ ...d, from: v }))}
								/>
							</div>
							<div className={inputSection()}>
								<span className={inputLabel()}>Até</span>
								<StepperInput
									disabled={disabled}
									inputClass={inputClass}
									step={step}
									value={draft.to}
									onChange={(v) => setDraft((d) => ({ ...d, to: v }))}
								/>
							</div>
							<div className={footer()}>
								<Button
									size="sm"
									variant="outline"
									onClick={() => setOpen(false)}
								>
									Cancelar
								</Button>
								<Button
									size="sm"
									onClick={handleConfirm}
								>
									Confirmar
								</Button>
							</div>
						</div>
					</PopoverPrimitive.Content>
				</PopoverPrimitive.Portal>
			</PopoverPrimitive.Root>
		)
	},
)

NumberInput.displayName = 'NumberInput'
