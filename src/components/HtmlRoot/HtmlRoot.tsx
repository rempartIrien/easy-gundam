import { I18nContext, createI18nContext } from "@solid-primitives/i18n";
import type { JSX } from "solid-js";
import { Show, Suspense } from "solid-js";
import { Html } from "solid-start";
import { createServerData$ } from "solid-start/server";

import { LocaleContext } from "../../contexts/LocaleContext";

import { getLocale } from "~/i18n/i18n.cookie";
import { retrieveTranslsations } from "~/i18n/i18n.server";

interface RootProps {
	children: JSX.Element;
}

export default function HtmlRoot(props: RootProps) {
	const dict = createServerData$(async () => {
		return retrieveTranslsations();
	});

	const locale = createServerData$((_, { request }) => getLocale(request), {
		key: "locale",
	});

	return (
		<Suspense>
			<Show when={locale()}>
				<Show when={dict()}>
					<LocaleContext.Provider value={locale()}>
						<I18nContext.Provider value={createI18nContext(dict(), locale())}>
							<Html lang={locale()}>{props.children}</Html>
						</I18nContext.Provider>
					</LocaleContext.Provider>
				</Show>
			</Show>
		</Suspense>
	);
}
