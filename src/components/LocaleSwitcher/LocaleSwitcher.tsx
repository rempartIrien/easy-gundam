import { useI18n } from "@solid-primitives/i18n";
import { For, createSignal, useContext } from "solid-js";
import { createServerAction$, redirect } from "solid-start/server";

import { LocaleContext } from "~/contexts/LocaleContext";
import type { Language } from "~/i18n/i18n.config";
import { LanguageNmes } from "~/i18n/i18n.config";
import { localeCookie } from "~/i18n/i18n.cookie";

import Icon from "../Icon";
import Menu from "../menu/Menu";
import MenuContent from "../menu/MenuContent";
import MenuItem from "../menu/MenuItem";
import MenuTrigger from "../menu/MenuTrigger";

interface LocalePayload {
	currentLocale?: Language;
	newLocale?: Language;
}

/**
 * Because Kobalte cannot handle progressively nehanced form in DropdownMenu,
 * we need to hack a little and trigger the server action by ourselves.
 */
export default function LocaleSwitcher() {
	const [, act] = createServerAction$(
		async (form: LocalePayload, { request }) => {
			const { currentLocale, newLocale } = form;
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

	const [t] = useI18n();

	const currentLocale = useContext(LocaleContext);

	const [open, setOpen] = createSignal(false);
	return (
		<Menu isOpen={open()} onOpenChange={setOpen}>
			<MenuTrigger aria-label={t("header.actions.switchLocale")}>
				<Icon name="languages" />
			</MenuTrigger>
			<MenuContent>
				<For each={Object.entries(LanguageNmes)}>
					{([locale, name]) => (
						<MenuItem
							isActive={currentLocale === locale}
							onSelect={() =>
								void act({ currentLocale, newLocale: locale as Language })
							}
						>
							{name}
						</MenuItem>
					)}
				</For>
			</MenuContent>
		</Menu>
	);
}
