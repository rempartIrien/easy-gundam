import { useI18n } from "@solid-primitives/i18n";
import { For, createSignal, useContext } from "solid-js";
import { useLocation, useNavigate } from "solid-start";
import { createServerAction$ } from "solid-start/server";

import { LocaleContext } from "~/contexts/LocaleContext";
import { useToaster } from "~/contexts/ToasterContext";
import type { Language } from "~/i18n/i18n.config";
import { LanguageNmes } from "~/i18n/i18n.config";
import { localeCookie } from "~/i18n/i18n.cookie";

import CookieToasterContent from "../CookieToasterContent";
import Icon from "../Icon";
import Menu from "../menu/Menu";
import MenuContent from "../menu/MenuContent";
import MenuItem from "../menu/MenuItem";
import MenuTrigger from "../menu/MenuTrigger";
import Text from "../Text";

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
	const [t] = useI18n();
	const { toastSuccess, toastInfo, toastError, dimissToast } = useToaster();

	const [currentLocale, setCurrentlocale] = useContext(LocaleContext);
	const [toastId, setToastId] = createSignal<number>();

	const switchLanguage = (newLocale: Language) => {
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
		const id = toastInfo(
			() => <Text>{t("header.cookies.question")}</Text>,
			() => (
				<CookieToasterContent
					onSave={() => saveAsCookie(newLocale)}
					onCancel={() => dimissToast(id)}
				/>
			),
		);
		setToastId(id);
	};

	const saveAsCookie = async (newLocale: Language) => {
		const id = toastId();
		if (id !== undefined) {
			dimissToast(id);
			try {
				await act({ newLocale });
				toastSuccess(() => <Text>{t("header.cookies.results.success")}</Text>);
			} catch (e) {
				toastError(() => <Text>{t("header.cookies.results.error")}</Text>);
			}
		}
	};

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
