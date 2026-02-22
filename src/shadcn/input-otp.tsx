import { OTPInput, OTPInputContext } from 'input-otp'
import { Dot } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/support/utils'

const InputOTP = React.forwardRef<
	React.ElementRef<typeof OTPInput>,
	React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
	<OTPInput
		className={cn('t:disabled:cursor-not-allowed', className)}
		containerClassName={cn(
			't:flex t:items-center t:gap-2 t:has-[:disabled]:opacity-50',
			containerClassName,
		)}
		ref={ref}
		{...props}
	/>
))
InputOTP.displayName = 'InputOTP'

const InputOTPGroup = React.forwardRef<
	React.ElementRef<'div'>,
	React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
	<div
		className={cn('t:flex t:items-center', className)}
		ref={ref}
		{...props}
	/>
))
InputOTPGroup.displayName = 'InputOTPGroup'

const InputOTPSlot = React.forwardRef<
	React.ElementRef<'div'>,
	React.ComponentPropsWithoutRef<'div'> & {
		index: number
	}
>(({ index, className, ...props }, ref) => {
	const inputOTPContext = React.useContext(OTPInputContext)
	const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

	return (
		<div
			className={cn(
				't:relative t:flex t:h-10 t:w-10 t:items-center t:justify-center t:border-input t:border-y t:border-r t:text-sm t:transition-all t:first:rounded-l-md t:first:border-l t:last:rounded-r-md',
				isActive && 't:z-10 t:ring-2 t:ring-ring t:ring-offset-background',
				className,
			)}
			ref={ref}
			{...props}
		>
			{char}
			{hasFakeCaret && (
				<div className="t:pointer-events-none t:absolute t:inset-0 t:flex t:items-center t:justify-center">
					<div className="t:h-4 t:w-px t:animate-caret-blink t:bg-foreground t:duration-1000" />
				</div>
			)}
		</div>
	)
})
InputOTPSlot.displayName = 'InputOTPSlot'

const InputOTPSeparator = React.forwardRef<
	React.ElementRef<'div'>,
	React.ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => (
	<div
		ref={ref}
		{...props}
	>
		<Dot />
	</div>
))
InputOTPSeparator.displayName = 'InputOTPSeparator'

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
