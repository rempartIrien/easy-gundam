import { Language } from "./i18n.config";

interface RecursiveString {
  [key: string]: string | RecursiveString;
}

export type I18nDictionary = Record<Language, RecursiveString>;

export async function retrieveTranslsations(
  localeFileFetcher: (locales: Language) => Promise<RecursiveString>,
): Promise<I18nDictionary> {
  try {
    // Retrieve all locale files
    const locales = Object.values(Language);
    const contents = await Promise.all(locales.map(localeFileFetcher));
    return locales.reduce((acc, cur, index) => {
      return { ...acc, [cur]: contents[index] };
    }, {} as I18nDictionary);
  } catch (err) {
    // FIXME: logger
    const message = err instanceof Error ? `: ${err.message}` : "";
    throw new Error(`Can't retrieve translation files${message}`);
  }
}
