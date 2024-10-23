import { action, useAction, useLocation, useNavigate } from "@solidjs/router";
import { For, createSignal, useContext } from "solid-js";
import { getRequestEvent } from "solid-js/web";

import { LocaleContext } from "~/contexts/LocaleContext";
import useCookieToaster from "~/hooks/useCookieToast";
import useTranslation from "~/hooks/useTranslation";
import type { Language } from "~/i18n/i18n.config";
import { LanguageNames } from "~/i18n/i18n.config";
import { setLocale } from "~/i18n/i18n.cookie";

import Menu from "../../menu/Menu";
import MenuContent from "../../menu/MenuContent";
import MenuItem from "../../menu/MenuItem";
import MenuTrigger from "../../menu/MenuTrigger";

const localeAction = action(async (newLocale: Language) => {
	"use server";

	const event = await Promise.resolve(getRequestEvent());
	if (!event) {
		return new Error("No event"); // TODO: oops do something
	}
	const { nativeEvent } = event;

	setLocale(nativeEvent, newLocale);
});

/**
 * Because Kobalte cannot handle progressively enhanced form in DropdownMenu,
 * we need to hack a little and trigger the server action by ourselves.
 */
export default function LocaleSwitcher() {
	const act = useAction(localeAction);
	const navigate = useNavigate();
	const location = useLocation();
	const t = useTranslation();
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

		const removeToast = showCookieToast({ onSave: () => act(newLocale) });
		setDismissToast(() => removeToast);
	};

	return (
		<Menu open={open()} onOpenChange={setOpen}>
			<MenuTrigger
				iconName="languages"
				aria-label={t("header.actions.switchLocale")}
			/>
			<MenuContent>
				<For each={Object.entries(LanguageNames)}>
					{([locale, name]) => (
						<MenuItem
							isActive={currentLocale() === (locale as Language)}
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
