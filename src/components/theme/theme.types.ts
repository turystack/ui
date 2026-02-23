export type ThemeStyle = 'vega' | 'nova' | 'maia' | 'lyra' | 'mira'

export type ThemeBaseColor = 'neutral' | 'stone' | 'zinc' | 'gray'

export type ThemePrimaryColor = 'cyan' | 'green' | 'orange' | 'pink' | 'yellow' | 'purple' | 'red' | 'blue' | 'indigo' | 'violet' | 'fuchsia' | 'pink' | 'rose'

export type ThemeFont = 'sans' | 'serif' | 'mono'

export type ThemeRadius = 'none' | 'lg' | 'md' | 'sm'

export type ThemeProps = {
	style?: ThemeStyle
	baseColor?: ThemeBaseColor
	primaryColor?: ThemePrimaryColor
	font?: ThemeFont
	radius?: ThemeRadius
}
