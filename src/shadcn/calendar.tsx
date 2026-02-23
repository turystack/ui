import {
	ChevronDownIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from 'lucide-react'
import * as React from 'react'
import {
	type DayButton,
	DayPicker,
	getDefaultClassNames,
} from 'react-day-picker'

import { Button, buttonVariants } from '@/components/button'
import { cn } from '@/support/utils'

function Calendar({
	className,
	classNames,
	showOutsideDays = true,
	captionLayout = 'label',
	buttonVariant = 'ghost',
	formatters,
	components,
	...props
}: React.ComponentProps<typeof DayPicker> & {
	buttonVariant?: React.ComponentProps<typeof Button>['variant']
}) {
	const defaultClassNames = getDefaultClassNames()

	return (
		<DayPicker
			captionLayout={captionLayout}
			className={cn(
				't-group/calendar t-bg-background t-p-3 t-[--cell-size:2rem] [[data-slot=card-content]_&]:t-bg-transparent [[data-slot=popover-content]_&]:t-bg-transparent',
				String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
				String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
				className,
			)}
			classNames={{
				button_next: cn(
					buttonVariants({
						variant: buttonVariant,
					}),
					't:h-[--cell-size] t:w-[--cell-size] t:select-none t:p-0 t:aria-disabled:opacity-50',
					defaultClassNames.button_next,
				),
				button_previous: cn(
					buttonVariants({
						variant: buttonVariant,
					}),
					't:h-[--cell-size] t:w-[--cell-size] t:select-none t:p-0 t:aria-disabled:opacity-50',
					defaultClassNames.button_previous,
				),
				caption_label: cn(
					't:select-none t:font-medium',
					captionLayout === 'label'
						? 't:text-sm'
						: 't:[&>svg]:text-muted-foreground t:flex t:h-8 t:items-center t:gap-1 t:rounded-md t:pl-2 t:pr-1 t:text-sm t:[&>svg]:size-3.5',
					defaultClassNames.caption_label,
				),
				day: cn(
					't-group/day t-relative t-aspect-square t-h-full t-w-full t-select-none t-p-0 t-text-center [&:first-child[data-selected=true]_button]:t-rounded-l-md [&:last-child[data-selected=true]_button]:t-rounded-r-md',
					defaultClassNames.day,
				),
				disabled: cn(
					't:text-muted-foreground t:opacity-50',
					defaultClassNames.disabled,
				),
				dropdown: cn(
					't:bg-popover t:absolute t:inset-0 t:opacity-0',
					defaultClassNames.dropdown,
				),
				dropdown_root: cn(
					't:has-focus:border-ring t:border-input t:shadow-xs t:has-focus:ring-ring/50 t:has-focus:ring-[3px] t:relative t:rounded-md t:border',
					defaultClassNames.dropdown_root,
				),
				dropdowns: cn(
					't:flex t:h-[--cell-size] t:w-full t:items-center t:justify-center t:gap-1.5 t:text-sm t:font-medium',
					defaultClassNames.dropdowns,
				),
				hidden: cn('invisible', defaultClassNames.hidden),
				month: cn(
					't:flex t:w-full t:flex-col t:gap-4',
					defaultClassNames.month,
				),
				month_caption: cn(
					't:flex t:h-[--cell-size] t:w-full t:items-center t:justify-center t:px-[--cell-size]',
					defaultClassNames.month_caption,
				),
				months: cn(
					't:relative t:flex t:flex-col t:gap-4 t:md:flex-row',
					defaultClassNames.months,
				),
				nav: cn(
					't:absolute t:inset-x-0 t:top-0 t:flex t:w-full t:items-center t:justify-between t:gap-1',
					defaultClassNames.nav,
				),
				outside: cn(
					't:text-muted-foreground t:aria-selected:text-muted-foreground',
					defaultClassNames.outside,
				),
				range_end: cn(
					't:bg-accent t:rounded-r-md',
					defaultClassNames.range_end,
				),
				range_middle: cn('t:rounded-none', defaultClassNames.range_middle),
				range_start: cn(
					't:bg-accent t:rounded-l-md',
					defaultClassNames.range_start,
				),
				root: cn('t:w-fit', defaultClassNames.root),
				table: 't:w-full t:border-collapse',
				today: cn(
					't:bg-accent t:text-accent-foreground t:rounded-md t:data-[selected=true]:rounded-none',
					defaultClassNames.today,
				),
				week: cn('t:mt-2 t:flex t:w-full', defaultClassNames.week),
				week_number: cn(
					't:text-muted-foreground t:select-none t:text-[0.8rem]',
					defaultClassNames.week_number,
				),
				week_number_header: cn(
					't:w-[--cell-size] t:select-none',
					defaultClassNames.week_number_header,
				),
				weekday: cn(
					't:text-muted-foreground t:flex-1 t:select-none t:rounded-md t:text-[0.8rem] t:font-normal',
					defaultClassNames.weekday,
				),
				weekdays: cn('flex', defaultClassNames.weekdays),
				...classNames,
			}}
			components={{
				// biome-ignore lint/correctness/noNestedComponentDefinitions: we need to define the Chevron component here
				Chevron: ({ className, orientation, ...props }) => {
					if (orientation === 'left') {
						return (
							<ChevronLeftIcon
								className={cn('t:size-4', className)}
								{...props}
							/>
						)
					}

					if (orientation === 'right') {
						return (
							<ChevronRightIcon
								className={cn('t:size-4', className)}
								{...props}
							/>
						)
					}

					return (
						<ChevronDownIcon
							className={cn('t:size-4', className)}
							{...props}
						/>
					)
				},
				DayButton: CalendarDayButton,
				// biome-ignore lint/correctness/noNestedComponentDefinitions: we need to define the Root component here
				Root: ({ className, rootRef, ...props }) => {
					return (
						<div
							className={cn(className)}
							data-slot="calendar"
							ref={rootRef}
							{...props}
						/>
					)
				},
				// biome-ignore lint/correctness/noNestedComponentDefinitions: we need to define the WeekNumber component here
				WeekNumber: ({ children, ...props }) => {
					return (
						<td {...props}>
							<div className="t:flex t:size-[--cell-size] t:items-center t:justify-center t:text-center">
								{children}
							</div>
						</td>
					)
				},
				...components,
			}}
			formatters={{
				formatMonthDropdown: (date) =>
					date.toLocaleString('default', {
						month: 'short',
					}),
				...formatters,
			}}
			showOutsideDays={showOutsideDays}
			{...props}
		/>
	)
}

function CalendarDayButton({
	className,
	day,
	modifiers,
	...props
}: React.ComponentProps<typeof DayButton>) {
	const defaultClassNames = getDefaultClassNames()

	const ref = React.useRef<HTMLButtonElement>(null)
	React.useEffect(() => {
		if (modifiers.focused) {
			ref.current?.focus()
		}
	}, [
		modifiers.focused,
	])

	return (
		<Button
			className={cn(
				't:flex t:aspect-square t:h-auto t:w-full t:min-w-[--cell-size] t:flex-col t:gap-1 t:font-normal t:leading-none t:data-[range-end=true]:rounded-md t:data-[range-middle=true]:rounded-none t:data-[range-start=true]:rounded-md t:data-[range-end=true]:bg-primary t:data-[range-middle=true]:bg-accent t:data-[range-start=true]:bg-primary t:data-[selected-single=true]:bg-primary t:data-[range-end=true]:text-primary-foreground t:data-[range-middle=true]:text-accent-foreground t:data-[range-start=true]:text-primary-foreground t:data-[selected-single=true]:text-primary-foreground t:group-data-[focused=true]/day:relative t:group-data-[focused=true]/day:z-10 t:group-data-[focused=true]/day:border-ring t:group-data-[focused=true]/day:ring-[3px] t:group-data-[focused=true]/day:ring-ring/50 t:[&>span]:text-xs t:[&>span]:opacity-70',
				defaultClassNames.day,
				className,
			)}
			data-day={day.date.toLocaleDateString()}
			data-range-end={modifiers.range_end}
			data-range-middle={modifiers.range_middle}
			data-range-start={modifiers.range_start}
			data-selected-single={
				modifiers.selected &&
				!modifiers.range_start &&
				!modifiers.range_end &&
				!modifiers.range_middle
			}
			ref={ref}
			size="icon"
			variant="ghost"
			{...props}
		/>
	)
}

export { Calendar, CalendarDayButton }
