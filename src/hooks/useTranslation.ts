// import { useI18n } from "@solid-primitives/i18n";
// import { useContext } from "solid-js";

// import { LocaleContext } from "~/contexts/LocaleContext";
// import { Language } from "~/i18n/i18n.config";

// type TranslateFunction = ReturnType<typeof useI18n>[0];
// type TranslateFunctionParams = Parameters<TranslateFunction>;
// type NewtranslateFunctionParams = [
// 	key: TranslateFunctionParams[0],
// 	params?: Record<string, string | number>,
// 	defaultvalue?: TranslateFunctionParams[2],
// ];
// type NewTranslateHook = [
// 	(...args: NewtranslateFunctionParams) => ReturnType<TranslateFunction>,
// 	ReturnType<typeof useI18n>[1],
// ];

export default function useTranslation() {
	// FIXME: rework this. Upgrade dep?
	return [(s: string) => s];
	// const [t, actions] = useI18n();
	// const [currentLocale] = useContext(LocaleContext);

	// const newwT = (...args: NewtranslateFunctionParams): ReturnType<typeof t> => {
	// 	const [key, params, defaultValue] = args;
	// 	const count = Number(params?.count);
	// 	const locale = Language.French; // currentLocale();

	// 	if ((count === 0 || count) && locale) {
	// 		const suffix = new Intl.PluralRules(locale).select(count);
	// 		return t(
	// 			`${key}_${suffix}`,
	// 			params as TranslateFunctionParams[1],
	// 			defaultValue,
	// 		);
	// 	}
	// 	return t(key, params as TranslateFunctionParams[1], defaultValue);
	// };

	// return useI18n();
}
