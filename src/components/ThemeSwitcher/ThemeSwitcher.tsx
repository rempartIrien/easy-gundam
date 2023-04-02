import { useI18n } from "@solid-primitives/i18n";
import { Show, createSignal, useContext } from "solid-js";
import { createServerAction$ } from "solid-start/server";

import { ThemeContext } from "~/contexts/ThemeContext";
import useCookieToaster from "~/hooks/useCookieToast";
import useIsDarkMode from "~/hooks/useIsDarkMode";
import { colorSchemeCookie } from "~/theme/theme.cookie";
import { ThemeName } from "~/theme/ThemeName";

import Icon from "../Icon";
import Menu from "../menu/Menu";
import MenuContent from "../menu/MenuContent";
import MenuItem from "../menu/MenuItem";
import MenuTrigger from "../menu/MenuTrigger";

interface ThemePayload {
	themeName?: ThemeName;
}

/**
 * Because Kobalte cannot handle progressively nehanced form in DropdownMenu,
 * we need to hack a little and trigger the server action by ourselves.
 */
export default function ThemeSwitcher() {
	const [, act] = createServerAction$(async (form: ThemePayload) => {
		const { themeName } = form;

		return new Response(null, {
			status: 200, // 204 status triggers some redirection
			headers: {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				"Set-Cookie": await colorSchemeCookie.serialize(
					themeName,
					!themeName ? { maxAge: -1 } : {},
				),
			},
		});
	});

	const [t] = useI18n();

	const [currentTheme, setCurrentTheme] = useContext(ThemeContext);
	const isDarkMode = useIsDarkMode();
	const showCookieToast = useCookieToaster();

	const switchTheme = (themeName?: ThemeName) => {
		setCurrentTheme(themeName);
		showCookieToast({ onSave: () => act({ themeName }) });
	};

	const [open, setOpen] = createSignal(false);
	return (
		<Show when={isDarkMode() !== undefined}>
			<Menu isOpen={open()} onOpenChange={setOpen}>
				<MenuTrigger aria-label={t("header.actions.switchTheme")}>
					<Show when={isDarkMode()} fallback={<Icon name="sun" />}>
						<Icon name="moon" />
					</Show>
				</MenuTrigger>
				<MenuContent>
					<MenuItem isActive={!currentTheme()} onSelect={() => switchTheme()}>
						{t("header.themes.system")}
					</MenuItem>
					<MenuItem
						isActive={currentTheme() === ThemeName.Light}
						onSelect={() => switchTheme(ThemeName.Light)}
					>
						{t("header.themes.light")}
					</MenuItem>
					<MenuItem
						isActive={currentTheme() === ThemeName.Dark}
						onSelect={() => switchTheme(ThemeName.Dark)}
					>
						{t("header.themes.dark")}
					</MenuItem>
				</MenuContent>
			</Menu>
		</Show>
	);
}
