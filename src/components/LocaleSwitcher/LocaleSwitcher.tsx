import { DropdownMenu } from "@kobalte/core";
import { useI18n } from "@solid-primitives/i18n";
import clsx from "clsx";
import { For, createSignal, useContext } from "solid-js";
import { createServerAction$, redirect } from "solid-start/server";

import { LocaleContext } from "~/contexts/LocaleContext";
import type { Language } from "~/i18n/i18n.config";
import { LanguageNmes } from "~/i18n/i18n.config";
import { localeCookie } from "~/i18n/i18n.cookie";

import Button from "../Button";
import Icon from "../Icon";

import {
	activeButtonStyle,
	buttonStyle,
	iconButtonStyle,
	menuContentStyle,
} from "./LocaleSwitcher.css";

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
		<DropdownMenu.Root isOpen={open()} onOpenChange={setOpen}>
			<DropdownMenu.Trigger
				as={Button}
				class={iconButtonStyle}
				aria-label={t("header.actions.switchLocale")}
			>
				<Icon name="languages" />
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content class={menuContentStyle}>
					<For each={Object.entries(LanguageNmes)}>
						{([locale, name]) => (
							<DropdownMenu.Item
								as={Button}
								class={clsx([
									buttonStyle,
									currentLocale === locale && activeButtonStyle,
								])}
								onSelect={() =>
									void act({ currentLocale, newLocale: locale as Language })
								}
							>
								{name}
							</DropdownMenu.Item>
						)}
					</For>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
}
