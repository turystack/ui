import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { forwardRef, useState } from 'react'
import { tv } from 'tailwind-variants'

import type { DateRange, DateRangeInputProps } from './date-range-input.types'

import { Input } from '@/components/input'
import { useInternalState } from '@/components/provider/provider.context'
import { Calendar } from '@/shadcn/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/shadcn/popover'
import { cn } from '@/support/utils'

const styles = tv({
	slots: {
		content: 't:w-auto t:p-2',
		calendar: '',
	},
})

export const DateRangeInput = forwardRef<HTMLButtonElement, DateRangeInputProps>(
	(
		{
			value,
			defaultValue,
			placeholder,
			size,
			block,
			disabled,
			loading,
			onChange,
		},
		_ref,
	) => {
		const state = useInternalState()
		const config = state?.components?.dateRangeInput

		const resolvedBlock = block ?? config?.defaultProps?.block ?? false
		const resolvedDisabled = disabled ?? config?.defaultProps?.disabled ?? false

		const [open, setOpen] = useState(false)
		const [internalValue, setInternalValue] = useState<DateRange | null>(
			value ?? defaultValue ?? null,
		)

		const currentValue = value !== undefined ? value : internalValue

		const handleSelect = (range?: DateRange) => {
			const newValue = range ?? null
			setInternalValue(newValue)
			onChange?.(newValue)
		}

		const formatDateRange = (range: DateRange | null | undefined) => {
			if (!range?.from) {
				return placeholder ?? ''
			}

			if (!range.to) {
				return format(range.from, 'dd/MM/yyyy')
			}

			return `${format(range.from, 'dd/MM/yyyy')} ~ ${format(range.to, 'dd/MM/yyyy')}`
		}

		const { content, calendar } = styles()

		return (
			<Popover
				onOpenChange={setOpen}
				open={open}
			>
				<PopoverTrigger asChild>
					<Input
						block={resolvedBlock}
						className="t:cursor-pointer t:text-left"
						rootClassName="t:min-w-[235px]"
						disabled={resolvedDisabled}
						leftSection={<CalendarIcon className="t:h-4 t:w-4" />}
						loading={loading}
						readOnly
						size={size}
						value={formatDateRange(currentValue)}
					/>
				</PopoverTrigger>

				<PopoverContent
					align="start"
					className={cn(content(), config?.classNames?.content)}
				>
					<Calendar
						className={cn(calendar(), config?.classNames?.calendar)}
						disabled={resolvedDisabled}
						mode="range"
						numberOfMonths={2}
						onSelect={handleSelect}
						selected={
							currentValue
								? { from: currentValue.from, to: currentValue.to }
								: undefined
						}
					/>
				</PopoverContent>
			</Popover>
		)
	},
)
