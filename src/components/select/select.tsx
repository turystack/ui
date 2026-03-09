import { Check, ChevronDown, Loader2, X } from 'lucide-react'
import { type PropsWithChildren, useEffect, useMemo, useState } from 'react'
import { tv } from 'tailwind-variants'

import type {
	BaseSelectProps,
	SelectMultipleProps,
	SelectProps,
	SelectSingleProps,
} from './select.types'

import { Badge } from '@/components/badge'
import { Checkbox } from '@/components/checkbox'
import { useInternalState } from '@/components/provider/provider.context'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/shadcn/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/shadcn/popover'
import { cn } from '@/support/utils'

const MAX_VISIBLE_BADGES = 2

const styles = tv({
	slots: {
		root: 't:relative',
		content: 't:w-full t:min-w-[180px] t:p-0',
		option: 't:cursor-pointer t:flex t:items-center t:gap-4',
		value: 't:truncate',
		search: '',
		empty: '',
		loader: 't:size-4 t:shrink-0 t:animate-spin t:opacity-50',
		leftSection:
			't:pointer-events-none t:absolute t:inset-y-0 t:left-0 t:flex t:items-center t:pl-3',
		rightSection:
			't:pointer-events-none t:absolute t:inset-y-0 t:right-0 t:flex t:items-center t:gap-2 t:pr-3',
	},
})

const triggerStyles = tv({
	base: [
		't:flex t:w-full t:items-center t:justify-between t:rounded-md t:border t:border-input t:gap-2',
		't:bg-transparent t:px-3 t:text-sm t:shadow-sm t:ring-offset-background',
		't:placeholder:text-muted-foreground',
		't:focus:outline-none t:focus:ring-1 t:focus:ring-ring',
		't:disabled:cursor-not-allowed t:disabled:opacity-50',
		't:cursor-pointer',
	],
	compoundVariants: [
		{ class: 't:h-9', mode: 'single', size: 'sm' },
		{ class: 't:h-10', mode: 'single', size: 'md' },
		{ class: 't:h-11', mode: 'single', size: 'lg' },
		{ class: 't:min-h-9', mode: 'multiple', size: 'sm' },
		{ class: 't:min-h-10', mode: 'multiple', size: 'md' },
		{ class: 't:min-h-11', mode: 'multiple', size: 'lg' },
	],
	defaultVariants: {
		mode: 'single' as const,
		size: 'md' as const,
	},
	variants: {
		mode: {
			multiple: 't:py-1.5',
			single: 't:py-2',
		},
		size: {
			lg: '',
			md: '',
			sm: '',
		},
	},
})

// biome-ignore lint/suspicious/noExplicitAny: generic helper
const getOptionValue = (option: any, key: any): any => {
	if (typeof key === 'function') {
		return key(option)
	}
	return option[key]
}

const getOptionLabel = <T,>(
	option: T,
	key: keyof T | ((option: T) => string),
): string => {
	if (typeof key === 'function') {
		return key(option)
	}
	return String((option as Record<string, unknown>)[key as string] ?? '')
}

const InfiniteLoadingIndicator = ({
	children,
}: PropsWithChildren) => (
	<div className="t:flex t:items-center t:justify-center t:py-2">
		<Loader2 className="t:size-4 t:animate-spin" />
		<span className="t:ml-2 t:text-muted-foreground t:text-sm">
			{children}
		</span>
	</div>
)

type OptionGroup<T> = { group: string | undefined; options: T[] }

const groupOptions = <T,>(
	options: T[],
	optionGroup: BaseSelectProps<T, unknown>['optionGroup'],
): OptionGroup<T>[] => {
	if (!optionGroup) {
		return [{ group: undefined, options }]
	}

	const map = new Map<string, T[]>()
	const order: string[] = []

	for (const option of options) {
		const key =
			typeof optionGroup === 'function'
				? optionGroup(option)
				: String(
						(option as Record<string, unknown>)[
							optionGroup as string
						] ?? '',
					)

		if (!map.has(key)) {
			map.set(key, [])
			order.push(key)
		}
		map.get(key)!.push(option)
	}

	return order.map((key) => ({ group: key, options: map.get(key)! }))
}

type OptionsListProps<T> = {
	groups: OptionGroup<T>[]
	optionValue: BaseSelectProps<T, unknown>['optionValue']
	optionLabel: BaseSelectProps<T, unknown>['optionLabel']
	renderItem: (option: T, optVal: unknown, optLabel: string) => React.ReactNode
	infinite: BaseSelectProps<T, unknown>['infinite']
	infiniteLoadingText: string
}

const OptionsList = <T,>({
	groups,
	optionValue,
	optionLabel,
	renderItem,
	infinite,
	infiniteLoadingText,
}: OptionsListProps<T>) => (
	<>
		{groups.map((group, groupIndex) => (
			<CommandGroup
				heading={group.group}
				key={group.group ?? groupIndex}
			>
				{group.options.map((option) => {
					const optVal = getOptionValue(option, optionValue)
					const optLabel = getOptionLabel(option, optionLabel)
					return renderItem(option, optVal, optLabel)
				})}
			</CommandGroup>
		))}

		{infinite?.loadingMore && (
			<CommandGroup>
				<InfiniteLoadingIndicator>
					{infiniteLoadingText}
				</InfiniteLoadingIndicator>
			</CommandGroup>
		)}
	</>
)

const SelectSingle = <T, I = string, O = I>({
	placeholder,
	options = [],
	optionLabel,
	optionValue,
	optionGroup,
	value,
	defaultValue,
	emptySection,
	searchable,
	searchPlaceholder,
	infinite,
	leftSection,
	rightSection,
	loading,
	disabled,
	block,
	size,
	renderOption,
	renderValue,
	onChange,
}: SelectSingleProps<T, I, O>) => {
	const state = useInternalState()
	const config = state?.components?.select
	const translations = state?.translations?.select

	const resolvedSearchable = searchable ?? true
	const resolvedDisabled = disabled ?? false
	const resolvedLoading = loading ?? false
	const resolvedBlock = block ?? false
	const resolvedSize = size ?? 'md'

	const [open, setOpen] = useState(false)
	const [searchQuery, setSearchQuery] = useState('')
	const [internalValue, setInternalValue] = useState<I | null>(
		value ?? defaultValue ?? null,
	)

	const selectedOption = useMemo(() => {
		if (internalValue === null || internalValue === undefined) {
			return null
		}
		return (
			options.find(
				(opt) => getOptionValue(opt, optionValue) === internalValue,
			) ?? null
		)
	}, [options, internalValue, optionValue])

	const displayValue = useMemo(() => {
		if (!selectedOption) return null
		if (renderValue) return renderValue(selectedOption)
		return getOptionLabel(selectedOption, optionLabel)
	}, [selectedOption, renderValue, optionLabel])

	const hasLeft = !!leftSection
	const hasRight = !!rightSection

	const filteredOptions = useMemo(() => {
		if (!resolvedSearchable || !searchQuery) return options
		return options.filter((opt) =>
			getOptionLabel(opt, optionLabel)
				.toLowerCase()
				.includes(searchQuery.toLowerCase()),
		)
	}, [options, optionLabel, resolvedSearchable, searchQuery])

	const groups = useMemo(
		() => groupOptions(filteredOptions, optionGroup),
		[filteredOptions, optionGroup],
	)

	const handleSelect = (option: T) => {
		const optionId = getOptionValue(option, optionValue)
		const newValue = optionId === internalValue ? null : optionId
		setInternalValue(newValue)
		onChange?.(newValue as O | null)
		setOpen(false)
		setSearchQuery('')
	}

	const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
		if (!infinite?.hasMore || infinite?.loadingMore) return
		const { scrollTop, scrollHeight, clientHeight } = e.currentTarget
		if (scrollHeight - scrollTop - clientHeight < 50) {
			infinite.onLoadMore?.()
		}
	}

	useEffect(() => {
		if (value !== undefined && value !== internalValue) {
			setInternalValue(value ?? null)
		}
	}, [value])

	const {
		root,
		content,
		option: optionClass,
		value: valueClass,
		loader,
		leftSection: leftSectionClass,
		rightSection: rightSectionClass,
	} = styles()

	return (
		<div
			className={cn(
				root(),
				resolvedBlock && 't:w-full',
				config?.classNames?.root,
			)}
			style={resolvedBlock ? undefined : { minWidth: 180, width: 'fit-content' }}
		>
			<Popover
				onOpenChange={setOpen}
				open={open}
			>
				<PopoverTrigger asChild>
					<button
						aria-expanded={open}
						className={cn(
							triggerStyles({ mode: 'single', size: resolvedSize }),
							hasLeft && 't:pl-10',
							hasRight && 't:pr-10',
						)}
						disabled={resolvedDisabled || resolvedLoading}
						role="combobox"
						type="button"
					>
						{hasLeft && (
							<div
								className={cn(
									leftSectionClass(),
									config?.classNames?.leftSection,
								)}
							>
								{leftSection}
							</div>
						)}

						<span
							className={cn(
								valueClass(),
								!displayValue && 't:text-muted-foreground',
								config?.classNames?.value,
							)}
						>
							{displayValue ?? placeholder ?? ''}
						</span>

						<div className="t:flex t:items-center">
							{resolvedLoading ? (
								<Loader2
									className={cn(loader(), config?.classNames?.loader)}
								/>
							) : (
								<ChevronDown className="t:size-4 t:shrink-0 t:opacity-50" />
							)}
						</div>

						{hasRight && (
							<div
								className={cn(
									rightSectionClass(),
									config?.classNames?.rightSection,
								)}
							>
								{rightSection}
							</div>
						)}
					</button>
				</PopoverTrigger>

				<PopoverContent
					align="start"
					className={cn(content(), config?.classNames?.content)}
					sideOffset={4}
					style={{ width: 'var(--radix-popover-trigger-width)' }}
				>
					<Command shouldFilter={false}>
						{resolvedSearchable && (
							<CommandInput
								className={cn(config?.classNames?.search)}
								onValueChange={setSearchQuery}
								placeholder={searchPlaceholder}
								value={searchQuery}
							/>
						)}
						<CommandList onScroll={handleScroll}>
							<CommandEmpty
								className={cn(config?.classNames?.empty)}
							>
								{emptySection ?? translations?.empty ?? 'No results found'}
							</CommandEmpty>
							<OptionsList
								groups={groups}
								infinite={infinite}
								infiniteLoadingText={
									infinite?.loadingMoreText ??
									translations?.loadingMore ??
									'Loading more...'
								}
								optionLabel={optionLabel}
								optionValue={optionValue}
								renderItem={(option, optVal, optLabel) => {
									const isSelected = internalValue === optVal
									return (
										<CommandItem
											className={cn(
												optionClass(),
												't:justify-between',
												config?.classNames?.option,
											)}
											key={String(optVal)}
											onSelect={() => handleSelect(option)}
											value={String(optVal)}
										>
											<span className="t:truncate">
												{renderOption
													? renderOption(option)
													: optLabel}
											</span>

											<Check
												className={cn(
													't:ml-2 t:size-4 t:shrink-0',
													isSelected
														? 't:opacity-100'
														: 't:opacity-0',
												)}
											/>
										</CommandItem>
									)
								}}
							/>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</div>
	)
}

const SelectMultiple = <T, I = string, O = I>({
	placeholder,
	options = [],
	optionLabel,
	optionValue,
	optionGroup,
	value,
	defaultValue,
	emptySection,
	searchable,
	searchPlaceholder,
	infinite,
	leftSection,
	rightSection,
	loading,
	disabled,
	block,
	size,
	renderOption,
	renderValue,
	onChange,
}: SelectMultipleProps<T, I, O>) => {
	const state = useInternalState()
	const config = state?.components?.select
	const translations = state?.translations?.select

	const resolvedSearchable = searchable ?? true
	const resolvedDisabled = disabled ?? false
	const resolvedLoading = loading ?? false
	const resolvedBlock = block ?? false
	const resolvedSize = size ?? 'md'

	const [open, setOpen] = useState(false)
	const [searchQuery, setSearchQuery] = useState('')
	const [internalValue, setInternalValue] = useState<I[]>(
		value ?? defaultValue ?? [],
	)

	const selectedOptions = useMemo(
		() =>
			options.filter((opt) =>
				internalValue.includes(getOptionValue(opt, optionValue)),
			),
		[options, optionValue, internalValue],
	)

	const filteredOptions = useMemo(() => {
		if (!resolvedSearchable || !searchQuery) return options
		return options.filter((opt) =>
			getOptionLabel(opt, optionLabel)
				.toLowerCase()
				.includes(searchQuery.toLowerCase()),
		)
	}, [options, optionLabel, resolvedSearchable, searchQuery])

	const groups = useMemo(
		() => groupOptions(filteredOptions, optionGroup),
		[filteredOptions, optionGroup],
	)

	const visibleOptions = selectedOptions.slice(0, MAX_VISIBLE_BADGES)
	const remainingCount = selectedOptions.length - MAX_VISIBLE_BADGES

	const hasLeft = !!leftSection
	const hasRight = !!rightSection

	const handleSelect = (option: T) => {
		const optionId = getOptionValue(option, optionValue)
		const isSelected = internalValue.includes(optionId)
		const newIds = isSelected
			? internalValue.filter((v) => v !== optionId)
			: [...internalValue, optionId]

		setInternalValue(newIds)
		onChange?.(newIds as unknown as O[])
	}

	const handleRemove = (optionId: I, e: React.MouseEvent) => {
		e.stopPropagation()
		const newValue = internalValue.filter((v) => v !== optionId)
		setInternalValue(newValue)
		onChange?.(newValue as unknown as O[])
	}

	const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
		if (!infinite?.hasMore || infinite?.loadingMore) return
		const { scrollTop, scrollHeight, clientHeight } = e.currentTarget
		if (scrollHeight - scrollTop - clientHeight < 50) {
			infinite.onLoadMore?.()
		}
	}

	useEffect(() => {
		if (
			value !== undefined &&
			JSON.stringify(value) !== JSON.stringify(internalValue)
		) {
			setInternalValue(value)
		}
	}, [value])

	const {
		root,
		content,
		option: optionClass,
		value: valueClass,
		loader,
		leftSection: leftSectionClass,
		rightSection: rightSectionClass,
	} = styles()

	return (
		<div
			className={cn(
				root(),
				resolvedBlock && 't:w-full',
				config?.classNames?.root,
			)}
			style={resolvedBlock ? undefined : { minWidth: 180 }}
		>
			<Popover
				onOpenChange={setOpen}
				open={open}
			>
				<PopoverTrigger asChild>
					<button
						aria-expanded={open}
						className={cn(
							triggerStyles({ mode: 'multiple', size: resolvedSize }),
							hasLeft && 't:pl-10',
							hasRight && 't:pr-10',
						)}
						disabled={resolvedDisabled || resolvedLoading}
						role="combobox"
						type="button"
					>
						{hasLeft && (
							<div
								className={cn(
									leftSectionClass(),
									config?.classNames?.leftSection,
								)}
							>
								{leftSection}
							</div>
						)}

						<div className="t:flex t:min-w-0 t:flex-1 t:items-center t:gap-2">
							{selectedOptions.length > 0 ? (
								<>
									{visibleOptions.map((option) => {
										const optVal = getOptionValue(
											option,
											optionValue,
										)
										return (
											<Badge
												key={String(optVal)}
												variant="secondary"
											>
												<span className="t:truncate t:max-w-20">
													{renderValue
														? renderValue(option)
														: getOptionLabel(option, optionLabel)}
												</span>
												<button
													className="t:shrink-0 t:rounded-full t:p-0.5 t:hover:bg-muted-foreground/20"
													onClick={(e) => handleRemove(optVal, e)}
													type="button"
												>
													<X className="t:size-3" />
												</button>
											</Badge>
										)
									})}
									{remainingCount > 0 && (
										<Badge variant="secondary">
											+{remainingCount}
										</Badge>
									)}
								</>
							) : (
								<span
									className={cn(
										valueClass(),
										't:text-muted-foreground',
										config?.classNames?.value,
									)}
								>
									{placeholder ?? ''}
								</span>
							)}
						</div>

						{resolvedLoading ? (
							<Loader2
								className={cn(loader(), config?.classNames?.loader)}
							/>
						) : (
							<ChevronDown className="t:size-4 t:shrink-0 t:opacity-50" />
						)}

						{hasRight && (
							<div
								className={cn(
									rightSectionClass(),
									config?.classNames?.rightSection,
								)}
							>
								{rightSection}
							</div>
						)}
					</button>
				</PopoverTrigger>

				<PopoverContent
					align="start"
					className={cn(content(), config?.classNames?.content)}
					sideOffset={4}
					style={{ width: 'var(--radix-popover-trigger-width)' }}
				>
					<Command shouldFilter={false}>
						{resolvedSearchable && (
							<CommandInput
								className={cn(config?.classNames?.search)}
								onValueChange={setSearchQuery}
								placeholder={searchPlaceholder}
								value={searchQuery}
							/>
						)}
						<CommandList onScroll={handleScroll}>
							<CommandEmpty
								className={cn(config?.classNames?.empty)}
							>
								{emptySection ?? translations?.empty ?? 'No results found'}
							</CommandEmpty>
							<OptionsList
								groups={groups}
								infinite={infinite}
								infiniteLoadingText={
									infinite?.loadingMoreText ??
									translations?.loadingMore ??
									'Loading more...'
								}
								optionLabel={optionLabel}
								optionValue={optionValue}
								renderItem={(option, optVal, optLabel) => {
									const isSelected = internalValue.includes(
										optVal as I,
									)
									return (
										<CommandItem
											className={cn(
												optionClass(),
												config?.classNames?.option,
											)}
											key={String(optVal)}
											onSelect={() => handleSelect(option)}
											value={String(optVal)}
										>
											<Checkbox checked={isSelected} />

											<span className="t:truncate">
												{renderOption
													? renderOption(option)
													: optLabel}
											</span>
										</CommandItem>
									)
								}}
							/>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</div>
	)
}

export const Select = <T, I = string, O = I>(
	props: SelectProps<T, I, O, 'single'> | SelectProps<T, I, O, 'multiple'>,
) => {
	if (props.mode === 'multiple') {
		return (
			<SelectMultiple<T, I, O>
				{...(props as SelectMultipleProps<T, I, O>)}
			/>
		)
	}

	return (
		<SelectSingle<T, I, O> {...(props as SelectSingleProps<T, I, O>)} />
	)
}
