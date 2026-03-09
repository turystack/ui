export type ComponentClassNameSlots<T extends string> = Partial<
	Record<T, string>
>

export type ComponentDefaultProps<T extends object> = Partial<T>

export type ComponentConfig<T extends object, S extends string> = {
	classNames?: ComponentClassNameSlots<S>
	defaultProps?: ComponentDefaultProps<T>
}
