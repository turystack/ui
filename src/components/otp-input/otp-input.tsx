import { OTPInput as OTPInputBase, OTPInputContext } from 'input-otp'
import { Dot } from 'lucide-react'
import { useContext } from 'react'
import { tv } from 'tailwind-variants'

import type { OTPInputProps } from './otp-input.types'

import { useInternalState } from '@/components/provider/provider.context'
import { cn } from '@/support/utils'

const styles = tv({
	slots: {
		root: 't:flex t:items-center t:gap-2 t:has-[:disabled]:opacity-50',
		cell: 't:relative t:flex t:h-10 t:w-10 t:items-center t:justify-center t:border-input t:border-y t:border-r t:text-sm t:transition-all t:first:rounded-l-md t:first:border-l t:last:rounded-r-md',
	},
})

function OTPSlot({ index }: { index: number }) {
	const inputOTPContext = useContext(OTPInputContext)
	const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

	const state = useInternalState()
	const config = state?.components?.otpInput
	const { cell } = styles()

	return (
		<div
			className={cn(
				cell(),
				isActive && 't:z-10 t:ring-2 t:ring-ring t:ring-offset-background',
				config?.classNames?.cell,
			)}
		>
			{char}
			{hasFakeCaret && (
				<div className="t:pointer-events-none t:absolute t:inset-0 t:flex t:items-center t:justify-center">
					<div className="t:h-4 t:w-px t:animate-caret-blink t:bg-foreground t:duration-1000" />
				</div>
			)}
		</div>
	)
}

export function OTPInput({ pattern = [], value, defaultValue, onChange }: OTPInputProps) {
	const state = useInternalState()
	const config = state?.components?.otpInput

	const resolvedPattern = pattern ?? config?.defaultProps?.pattern ?? []
	const maxLength = resolvedPattern.reduce((total, curr) => total + curr, 0)

	const { root } = styles()

	const handleChange = (val: string) => {
		onChange?.(val === '' ? null : val)
	}

	return (
		<OTPInputBase
			containerClassName={cn(root(), config?.classNames?.root)}
			defaultValue={defaultValue ?? undefined}
			maxLength={maxLength}
			onChange={handleChange}
			value={value ?? undefined}
		>
			{resolvedPattern.map((length, index) => {
				const baseIndex = resolvedPattern
					.slice(0, index)
					.reduce((a, b) => a + b, 0)

				return (
					<div
						className="t:flex t:items-center"
						key={index}
					>
						<div className="t:flex t:items-center">
							{Array.from({ length }).map((_, i) => (
								<OTPSlot
									index={baseIndex + i}
									key={i}
								/>
							))}
						</div>

						{index < resolvedPattern.length - 1 && (
							<div>
								<Dot />
							</div>
						)}
					</div>
				)
			})}
		</OTPInputBase>
	)
}
