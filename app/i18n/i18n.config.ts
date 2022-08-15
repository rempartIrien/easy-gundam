export enum Language {
  French = "fr-FR",
  English = "en-US",
}

export const supportedLanguages: string[] = [Language.French, Language.English];

export const fallbackLanguage: Language = Language.French;

export const defaultNamespace = "translations";

export const namespaceLoadPath = "locales/{{lng}}/{{ns}}.json";
