import { forwardRef, useState } from 'react'
import { tv } from 'tailwind-variants'

import type { TextareaProps } from './textarea.types'

import { styles as inputStyles } from '@/components/input/input.shared'
import { cn } from '@/support/utils'

const styles = tv({
	slots: {
		counter: 't:pointer-events-none t:absolute t:bottom-2 t:right-3 t:text-xs t:text-muted-foreground t:select-none',
	},
})

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	(
		{
			className,
			rootClassName,
			value,
			defaultValue,
			placeholder,
			size,
			leftSection,
			rightSection,
			block,
			disabled,
			maxLength,
			onChange,
		},
		ref,
	) => {
		const resolvedSize = size ?? 'md'
		const resolvedBlock = block ?? false
		const hasLeft = !!leftSection
		const hasRight = !!rightSection

		const { root, input, leftSection: leftClass, rightSection: rightClass } = inputStyles({
			block: resolvedBlock,
			hasLeft,
			hasRight,
			size: resolvedSize,
		})

		const { counter } = styles()
		const [internalValue, setInternalValue] = useState(defaultValue ?? '')
		const isControlled = value !== undefined
		const currentLength = isControlled ? (value ?? '').length : internalValue.length

		function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
			const val = e.target.value
			if (!isControlled) setInternalValue(val)
			onChange?.(val === '' ? null : val)
			e.target.style.height = 'auto'
			e.target.style.height = `${e.target.scrollHeight}px`
		}

		return (
			<div className={cn('t:relative', root(), rootClassName)}>
				{hasLeft && <div className={leftClass()}>{leftSection}</div>}
				<textarea
					className={cn(
						input(),
						't:h-auto t:resize-none t:overflow-hidden t:py-2',
						maxLength && 't:pb-5',
						className,
					)}
					defaultValue={!isControlled ? (defaultValue ?? undefined) : undefined}
					disabled={disabled}
					maxLength={maxLength}
					placeholder={placeholder}
					ref={ref}
					value={isControlled ? (value ?? undefined) : undefined}
					onChange={handleChange}
				/>
				{hasRight && <div className={rightClass()}>{rightSection}</div>}
				{maxLength && (
					<span className={counter()}>
						{currentLength} / {maxLength}
					</span>
				)}
			</div>
		)
	},
)
