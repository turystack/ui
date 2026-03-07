import { ChevronDown, Search } from 'lucide-react'
import { forwardRef, useMemo, useState } from 'react'
import { tv } from 'tailwind-variants'

import type { PhoneInputProps } from './phone-input.types'
import { COUNTRIES, type Country } from './phone-input.data'

import { MaskInput, type MaskInputProps } from '@/components/mask-input'
import { useInternalState } from '@/components/provider/provider.context'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/shadcn/dropdown-menu'
import { cn } from '@/support/utils'

const DEFAULT_COUNTRY_CODE = 'BR'

const styles = tv({
	slots: {
		root: 't:relative t:flex t:w-full',
		input: '',
		countrySelector:
			't:flex t:h-10 t:items-center t:gap-1 t:rounded-l-md t:border t:border-input t:border-r-0 t:bg-transparent t:px-3 t:text-sm t:transition-colors t:hover:bg-accent t:disabled:pointer-events-none t:disabled:opacity-50',
		rightSection: '',
		loader: '',
	},
})

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
	({ value, defaultValue, onChange, disabled, ...props }, ref) => {
		const state = useInternalState()
		const config = state?.components?.phoneInput
		const translations = state?.translations?.phoneInput

		const countries: Country[] = useMemo(() => {
			const displayNames = new Intl.DisplayNames(['en'], { type: 'region' })

			return COUNTRIES.map((country) => ({
				...country,
				name: displayNames.of(country.code) ?? country.code,
			})).sort((a, b) => a.name.localeCompare(b.name))
		}, [])

		const initialValue = value ?? defaultValue
		const [selectedCountry, setSelectedCountry] = useState<Country | null>(
			initialValue
				? (countries.find((c) => c.code === initialValue.iso) ?? null)
				: null,
		)
		const [searchQuery, setSearchQuery] = useState('')

		const currentCountry =
			selectedCountry ??
			countries.find((c) => c.code === DEFAULT_COUNTRY_CODE) ??
			countries[0]

		const filteredCountries = countries.filter(
			(country) =>
				country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				country.dialCode.includes(searchQuery) ||
				country.code.toLowerCase().includes(searchQuery.toLowerCase()),
		)

		const handleCountryChange = (country: Country) => {
			setSelectedCountry(country)
			setSearchQuery('')
			onChange?.(null)
		}

		const handleNumberChange: MaskInputProps['onChange'] = (number) => {
			onChange?.(
				number
					? {
							ddi: currentCountry.dialCode,
							iso: currentCountry.code,
							number,
						}
					: null,
			)
		}

		const {
			root,
			countrySelector,
		} = styles()

		return (
			<div className={cn(root(), config?.classNames?.root)}>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<button
							className={cn(
								countrySelector(),
								config?.classNames?.countrySelector,
							)}
							disabled={disabled}
							type="button"
						>
							<span className="t:text-lg">{currentCountry.flag}</span>
							<span className="t:text-muted-foreground">
								{currentCountry.dialCode}
							</span>
							<ChevronDown className="t:size-4 t:text-muted-foreground" />
						</button>
					</DropdownMenuTrigger>

					<DropdownMenuContent
						align="start"
						className="t:w-[300px] t:p-0"
					>
						<div className="t:sticky t:top-0 t:border-b t:bg-popover">
							<div className="t:relative">
								<Search className="t:-translate-y-1/2 t:pointer-events-none t:absolute t:top-1/2 t:left-3 t:size-4 t:text-muted-foreground" />

								<input
									className="t:h-10 t:w-full t:bg-transparent t:py-2 t:pr-3 t:pl-9 t:text-sm t:outline-none t:placeholder:text-muted-foreground"
									onChange={(e) => setSearchQuery(e.target.value)}
									placeholder={translations?.searchCountry ?? 'Search country...'}
									type="text"
									value={searchQuery}
								/>
							</div>
						</div>

						<div className="t:max-h-[200px] t:overflow-y-auto t:p-1">
							{filteredCountries.length > 0 ? (
								filteredCountries.map((country) => (
									<DropdownMenuItem
										key={country.code}
										onClick={() => handleCountryChange(country)}
									>
										<span className="t:mr-2 t:text-lg">{country.flag}</span>
										<span className="t:flex-1">{country.name}</span>
										<span className="t:text-muted-foreground t:text-sm">
											{country.dialCode}
										</span>
									</DropdownMenuItem>
								))
							) : (
								<div className="t:p-2 t:text-center t:text-muted-foreground t:text-sm">
									{translations?.noCountriesFound ?? 'No countries found'}
								</div>
							)}
						</div>
					</DropdownMenuContent>
				</DropdownMenu>

				<div className="t:flex-1">
					<MaskInput
						{...props}
						block
						className="t:rounded-l-none"
						disabled={disabled}
						key={currentCountry.code}
						mask={currentCountry.mask}
						onChange={handleNumberChange}
						ref={ref}
						value={value?.number}
					/>
				</div>
			</div>
		)
	},
)
