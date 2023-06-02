import { Show, createSignal, useContext } from "solid-js";
import { createServerAction$ } from "solid-start/server";

import { ThemeContext } from "~/contexts/ThemeContext";
import useCookieToaster from "~/hooks/useCookieToast";
import useIsDarkMode from "~/hooks/useIsDarkMode";
import useTranslation from "~/hooks/useTranslation";
import { colorSchemeCookie } from "~/theme/theme.cookie";
import { ThemeName } from "~/theme/ThemeName";

import Menu from "../../menu/Menu";
import MenuContent from "../../menu/MenuContent";
import MenuItem from "../../menu/MenuItem";
import MenuTrigger from "../../menu/MenuTrigger";
import HeaderIcon from "../HeaderIcon";
import { menuTriggerStyle } from "../MenuTrigger.css";

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

	const [t] = useTranslation();

	const [currentTheme, setCurrentTheme] = useContext(ThemeContext);
	const isDarkMode = useIsDarkMode();
	const [open, setOpen] = createSignal(false);
	const showCookieToast = useCookieToaster("theme");
	const [dismissToast, setDismissToast] = createSignal<() => void>();

	const switchTheme = (themeName?: ThemeName) => {
		// Dismiss extsing toast if any.
		dismissToast()?.();

		setCurrentTheme(themeName);
		const removeToast = showCookieToast({ onSave: () => act({ themeName }) });
		setDismissToast(() => removeToast);
	};

	return (
		<Show when={isDarkMode() !== undefined}>
			<Menu open={open()} onOpenChange={setOpen}>
				<MenuTrigger
					class={menuTriggerStyle}
					aria-label={t("header.actions.switchTheme")}
				>
					<Show when={isDarkMode()} fallback={<HeaderIcon name="sun" />}>
						<HeaderIcon name="moon" />
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
