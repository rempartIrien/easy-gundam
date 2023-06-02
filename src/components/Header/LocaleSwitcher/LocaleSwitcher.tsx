import { For, createSignal, useContext } from "solid-js";
import { useLocation, useNavigate } from "solid-start";
import { createServerAction$ } from "solid-start/server";

import { LocaleContext } from "~/contexts/LocaleContext";
import useCookieToaster from "~/hooks/useCookieToast";
import useTranslation from "~/hooks/useTranslation";
import type { Language } from "~/i18n/i18n.config";
import { LanguageNmes } from "~/i18n/i18n.config";
import { localeCookie } from "~/i18n/i18n.cookie";

import Menu from "../../menu/Menu";
import MenuContent from "../../menu/MenuContent";
import MenuItem from "../../menu/MenuItem";
import MenuTrigger from "../../menu/MenuTrigger";
import HeaderIcon from "../HeaderIcon";
import { menuTriggerStyle } from "../MenuTrigger.css";

interface LocalePayload {
	newLocale?: Language;
}

/**
 * Because Kobalte cannot handle progressively nehanced form in DropdownMenu,
 * we need to hack a little and trigger the server action by ourselves.
 */
export default function LocaleSwitcher() {
	const [, act] = createServerAction$(async (form: LocalePayload) => {
		const { newLocale } = form;

		return new Response(null, {
			status: 200, // 204 status triggers some redirection
			headers: {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				"Set-Cookie": await localeCookie.serialize(newLocale),
			},
		});
	});

	const navigate = useNavigate();
	const location = useLocation();
	const [t] = useTranslation();
	const [open, setOpen] = createSignal(false);
	const showCookieToast = useCookieToaster("locale");
	const [dismissToast, setDismissToast] = createSignal<() => void>();

	const [currentLocale, setCurrentlocale] = useContext(LocaleContext);

	const switchLanguage = (newLocale: Language) => {
		// Dismiss extsing toast if any.
		dismissToast()?.();

		// Save the current locale
		const oldLocale = currentLocale();
		// Update the current locale
		setCurrentlocale(newLocale);
		// Navigate to reflect the new locale in url
		navigate(
			location.pathname.replace(oldLocale as Language, newLocale) ??
				`/${newLocale}`,
			{ scroll: false },
		);
		const removeToast = showCookieToast({ onSave: () => act({ newLocale }) });
		setDismissToast(() => removeToast);
	};

	return (
		<Menu open={open()} onOpenChange={setOpen}>
			<MenuTrigger
				class={menuTriggerStyle}
				aria-label={t("header.actions.switchLocale")}
			>
				<HeaderIcon name="languages" />
			</MenuTrigger>
			<MenuContent>
				<For each={Object.entries(LanguageNmes)}>
					{([locale, name]) => (
						<MenuItem
							isActive={currentLocale() === locale}
							onSelect={() => switchLanguage(locale as Language)}
						>
							{name}
						</MenuItem>
					)}
				</For>
			</MenuContent>
		</Menu>
	);
}
