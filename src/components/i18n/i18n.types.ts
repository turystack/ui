export type I18nTranslations = {
	select?: {
		empty?: string
		loadingMore?: string
	}
	phoneInput?: {
		searchCountry?: string
		noCountriesFound?: string
	}
}

export type I18nProviderProps = {
	translations: I18nTranslations
}
