import { Language } from "./i18n.config";

interface RecursiveString {
	[key: string]: string | RecursiveString;
}

export type I18nDictionary = Record<Language, RecursiveString>;

export async function retrieveTranslsations(): Promise<I18nDictionary> {
	"use server";
	try {
		// Retrieve all locale files
		const locales = Object.values(Language);
		const contents = await Promise.all(
			locales.map((locale) => {
				return import(`../../public/locales/${locale}.json`);
			}),
		);
		return locales.reduce((acc, cur, index) => {
			return { ...acc, [cur]: contents[index] };
		}, {} as I18nDictionary);
	} catch (err) {
		// FIXME: logger
		const message = err instanceof Error ? `: ${err.message}` : "";
		throw new Error(`Can't retrieve translation files${message}`);
	}
}
