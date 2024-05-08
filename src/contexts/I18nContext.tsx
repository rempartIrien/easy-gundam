import type { Accessor, JSX } from "solid-js";
import { createContext, createMemo, createSignal, useContext } from "solid-js";

import type { Language } from "~/i18n/i18n.config";
import type { I18nDictionary } from "~/i18n/i18n.server";

import { LocaleContext } from "./LocaleContext";

const [dummy] = createSignal<I18nDictionary[Language]>({});

export const I18nContext =
	createContext<Accessor<I18nDictionary[Language]>>(dummy);

export function I18nProvider(props: {
	value?: I18nDictionary;
	children: JSX.Element;
}) {
	const [initialLocale] = useContext(LocaleContext);

	const dict = createMemo(() => {
		const locale = initialLocale();
		if (locale && props.value) {
			return props.value[locale];
		}
		return {};
	});

	return (
		<I18nContext.Provider value={dict}>{props.children}</I18nContext.Provider>
	);
}
