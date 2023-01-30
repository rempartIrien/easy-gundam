import { For, useContext } from "solid-js";
import { createServerAction$, redirect } from "solid-start/server";

import { LocaleContext } from "~/contexts/LocaleContext";
import type { Language } from "~/i18n/i18n.config";
import { LanguageNmes } from "~/i18n/i18n.config";
import { localeCookie } from "~/i18n/i18n.cookie";

import Button from "../Button";

const currentLocaleInputName = "currentLocale";
const newLocaleInputName = "newLocale";

export default function LocaleSwitcher() {
	const [, { Form: LocaleForm }] = createServerAction$(
		async (form: FormData, { request }) => {
			const currentLocale = form.get(currentLocaleInputName);
			const newLocale = form.get(newLocaleInputName);
			const redirectTo: string =
				request.headers
					.get("Referer")
					?.replace(currentLocale as Language, newLocale as Language) ??
				`/${newLocale as Language}`;

			return redirect(redirectTo, {
				headers: {
					// eslint-disable-next-line @typescript-eslint/naming-convention
					"Set-Cookie": await localeCookie.serialize(newLocale),
				},
			});
		},
	);

	const currentLocale = useContext(LocaleContext);

	return (
		<LocaleForm>
			<input
				type="hidden"
				name={currentLocaleInputName}
				value={currentLocale}
			/>
			<For each={Object.entries(LanguageNmes)}>
				{([locale, name]) => (
					<Button name={newLocaleInputName} value={locale}>
						{name}
					</Button>
				)}
			</For>
		</LocaleForm>
	);
}
