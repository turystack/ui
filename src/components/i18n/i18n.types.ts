export type I18nTranslations = {
	select?: {
		empty?: string
		loadingMore?: string
	}
	phoneInput?: {
		searchCountry?: string
		noCountriesFound?: string
	}
	currencyInput?: {
		from?: string
		to?: string
		cancel?: string
		confirm?: string
		selectRange?: string
	}
}

export type I18nProviderProps = {
	translations: I18nTranslations
}
