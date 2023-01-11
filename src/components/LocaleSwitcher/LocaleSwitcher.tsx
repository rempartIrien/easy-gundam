import { For, useContext } from "solid-js";
import { createServerAction$, redirect } from "solid-start/server";

import Button from "../Button";

import { LocaleContext } from "~/contexts/LocaleContext";
import type { Language } from "~/i18n/i18n.config";
import { LanguageNmes } from "~/i18n/i18n.config";
import { localeCookie } from "~/i18n/i18n.cookie";

export default function LocaleSwitcher() {
	const [, { Form: LocaleForm }] = createServerAction$(
		async (form: FormData, { request }) => {
			const currentLocale = form.get("currentLocale");
			const newLocale = form.get("newLocale");
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
			<input type="hidden" name="currentLocale" value={currentLocale} />
			<For each={Object.entries(LanguageNmes)}>
				{([locale, name]) => (
					<Button name="newLocale" value={locale}>
						{name}
					</Button>
				)}
			</For>
		</LocaleForm>
	);
}
