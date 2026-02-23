export type TypographySlots = 'root'

export type TypographySize =
	| 'xs'
	| 'sm'
	| 'base'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl'
	| '6xl'
	| '7xl'
	| '8xl'
	| '9xl'

export type TypographyVariant = 'default' | 'muted'

export type TypographyWeight =
	| 'thin'
	| 'extralight'
	| 'light'
	| 'normal'
	| 'medium'
	| 'semibold'
	| 'bold'
	| 'extrabold'
	| 'black'

export type TypographyComponent = 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'

export type TypographyProps = {
	component?: TypographyComponent
	size?: TypographySize
	variant?: TypographyVariant
	weight?: TypographyWeight
	truncate?: boolean
}
