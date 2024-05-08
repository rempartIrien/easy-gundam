export enum Language {
	English = "en-US",
	French = "fr-FR",
}

export const LanguageNames: Record<Language, string> = {
	[Language.English]: "English",
	[Language.French]: "Français",
};

export function isLanguage(value: string): value is Language {
	return Object.keys(LanguageNames).includes(value);
}
