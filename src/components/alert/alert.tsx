import type { PropsWithChildren } from 'react'
import { createContext, useContext } from 'react'
import { tv } from 'tailwind-variants'

import type {
	AlertActionProps,
	AlertDescriptionProps,
	AlertIconProps,
	AlertProps,
	AlertTitleProps,
} from './alert.types'

import { useInternalState } from '@/components/provider/provider.context'
import { cn } from '@/support/utils'

type AlertContextValue = {
	variant: 'default' | 'destructive'
}
const AlertContext = createContext<AlertContextValue>({
	variant: 'default',
})

const styles = tv({
	defaultVariants: {
		variant: 'default',
	},
	slots: {
		action: 't:mt-2',
		description: 't:text-sm t:[&_p]:leading-relaxed',
		icon: 't:absolute t:top-4 t:left-4 t:h-4 t:w-4',
		root: 't:relative t:w-full t:rounded-lg t:border t:p-4',
		title: 't:mb-1 t:font-medium t:leading-none t:tracking-tight',
	},
	variants: {
		variant: {
			default: {
				icon: 't:text-foreground',
				root: 't:bg-background t:text-foreground',
			},
			destructive: {
				icon: 't:text-destructive',
				root: 't:border-destructive/50 t:text-destructive dark:t:border-destructive',
			},
		},
	},
})

function Root({ variant, children }: PropsWithChildren<AlertProps>) {
	const state = useInternalState()
	const config = state?.components?.alert?.default

	const resolvedVariant = variant ?? config?.defaultProps?.variant ?? 'default'

	const { root } = styles({
		variant: resolvedVariant,
	})

	return (
		<AlertContext.Provider
			value={{
				variant: resolvedVariant,
			}}
		>
			<div
				className={cn(root(), config?.classNames?.root)}
				role="alert"
			>
				{children}
			</div>
		</AlertContext.Provider>
	)
}

function Icon({ children }: PropsWithChildren<AlertIconProps>) {
	const { variant } = useContext(AlertContext)
	const state = useInternalState()
	const config = state?.components?.alert?.icon

	const { icon } = styles({
		variant,
	})

	return (
		<span className={cn(icon(), config?.classNames?.root)}>{children}</span>
	)
}

function Title({ children }: PropsWithChildren<AlertTitleProps>) {
	const { title } = styles()

	const state = useInternalState()
	const config = state?.components?.alert?.title

	return <h5 className={cn(title(), config?.classNames?.root)}>{children}</h5>
}

function Description({ children }: PropsWithChildren<AlertDescriptionProps>) {
	const { description } = styles()

	const state = useInternalState()
	const config = state?.components?.alert?.description

	return (
		<div className={cn(description(), config?.classNames?.root)}>
			{children}
		</div>
	)
}

function Action({ children }: PropsWithChildren<AlertActionProps>) {
	const { action } = styles()

	const state = useInternalState()
	const config = state?.components?.alert?.action

	return (
		<div className={cn(action(), config?.classNames?.root)}>{children}</div>
	)
}

export const Alert = Object.assign(Root, {
	Action,
	Description,
	Icon,
	Title,
})
