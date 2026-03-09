export type SliderSlots = 'root'

export type SliderOrientation = 'horizontal' | 'vertical'

export type SliderSize = 'sm' | 'md' | 'lg'

type BaseSliderProps = {
	orientation: SliderOrientation
	size?: SliderSize
}

type SliderSingleProps = {
	mode: 'single'
	value?: number
	defaultValue?: number
	onValueChange?: (value: number) => void
}

type SliderRangeProps = {
	mode: 'range'
	value?: [
		number,
		number,
	]
	defaultValue?: [
		number,
		number,
	]
	onValueChange?: (
		value: [
			number,
			number,
		],
	) => void
}

export type SliderProps = BaseSliderProps &
	(SliderSingleProps | SliderRangeProps)
