import * as i18n from "@solid-primitives/i18n";
import { useContext } from "solid-js";

import { I18nContext } from "~/contexts/I18nContext";
import { LocaleContext } from "~/contexts/LocaleContext";
import type { Language } from "~/i18n/i18n.config";
import type { I18nDictionary } from "~/i18n/i18n.server";

type TranslateFunction = i18n.Translator<I18nDictionary[Language]>;

export default function useTranslation(): (
	...args: Parameters<TranslateFunction>
) => string | undefined {
	const [currentLocale] = useContext(LocaleContext);
	const dict = useContext(I18nContext);
	const translate = i18n.translator(
		() => i18n.flatten(dict()),
		i18n.resolveTemplate,
	);

	const newT = (...args: Parameters<TranslateFunction>): string | undefined => {
		const [key, params] = args;
		const count = Number(params?.count);
		const locale = currentLocale();

		const newKey = addSuffix(key, count, locale);
		return stringify(translate(newKey, params), key);
	};

	return newT;
}

function addSuffix(
	key: string | number,
	count: number,
	locale?: Language,
): string | number {
	if ((count === 0 || count) && locale) {
		const suffix = new Intl.PluralRules(locale).select(count);
		return `${key}_${suffix}`;
	}
	return key;
}

function stringify(value: unknown, key: string | number): string | undefined {
	if (typeof value === "undefined" || typeof value === "string") {
		return value;
	}
	throw new Error(`Translation did not returned a string for key '${key}')`);
}
