export type TButtonSlots = 'root' | 'loading' | 'leftSection' | 'rightSection'

export type TButtonType = 'button' | 'submit' | 'reset'

export type TButtonSize = 'sm' | 'md' | 'lg' | 'icon-sm' | 'icon-md' | 'icon-lg'

export type TButtonVariant =
	| 'default'
	| 'destructive'
	| 'outline'
	| 'dashed'
	| 'secondary'
	| 'ghost'
	| 'link'

export type TButtonProps = {
	form?: string
	type?: TButtonType
	size?: TButtonSize
	variant?: TButtonVariant
	leftSection?: React.ReactNode
	rightSection?: React.ReactNode
	block?: boolean
	loading?: boolean
	disabled?: boolean
	asChild?: boolean
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}
