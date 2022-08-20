export enum Language {
  French = "fr-FR",
  English = "en-US",
}

export const namespaceLoadPath = "locales/{{lng}}/{{ns}}.json";

export default {
  // This is the list of languages your application supports
  supportedLngs: [Language.French, Language.English],
  // This is the language you want to use in case
  // if the user language is not in the supportedLngs
  fallbackLng: Language.French,
  // The default namespace of i18next is "translation", but you can customize it here
  defaultNS: "translations",
  // Disabling suspense is recommended
  react: { useSuspense: false },
};
