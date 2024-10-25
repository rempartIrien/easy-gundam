import { action, useAction } from "@solidjs/router";
import { Show, createSignal, useContext } from "solid-js";
import { getRequestEvent } from "solid-js/web";

import { ThemeContext } from "~/contexts/ThemeContext";
import useCookieToaster from "~/hooks/useCookieToast";
import useIsDarkMode from "~/hooks/useIsDarkMode";
import useTranslation from "~/hooks/useTranslation";
import { deleteColorScheme, setColorScheme } from "~/theme/theme.cookie";
import { ThemeName } from "~/theme/ThemeName";

import Menu from "../../menu/Menu";
import MenuContent from "../../menu/MenuContent";
import MenuItem from "../../menu/MenuItem";
import MenuTrigger from "../../menu/MenuTrigger";

const themeAction = action(async (newTheme?: ThemeName) => {
	"use server";

	const event = await Promise.resolve(getRequestEvent());
	if (!event) {
		return new Error("No event"); // TODO: oops do something
	}
	const { nativeEvent } = event;
	if (newTheme) {
		setColorScheme(nativeEvent, newTheme);
	} else {
		deleteColorScheme(nativeEvent);
	}
});

/**
 * Because Kobalte cannot handle progressively nehanced form in DropdownMenu,
 * we need to hack a little and trigger the server action by ourselves.
 */
export default function ThemeSwitcher() {
	const updateTheme = useAction(themeAction);
	const t = useTranslation();

	const [currentTheme, setCurrentTheme] = useContext(ThemeContext);
	const isDarkMode = useIsDarkMode();
	const [open, setOpen] = createSignal(false);
	const showCookieToast = useCookieToaster("theme");
	const [dismissToast, setDismissToast] = createSignal<() => void>();

	const switchTheme = (themeName?: ThemeName) => {
		// Dismiss existing toast if any.
		dismissToast()?.();

		setCurrentTheme(themeName);
		const removeToast = showCookieToast({
			onSave: () => updateTheme(themeName),
		});
		setDismissToast(() => removeToast);
	};

	return (
		<Show when={isDarkMode() !== undefined}>
			<Menu open={open()} onOpenChange={setOpen}>
				<MenuTrigger
					iconName={isDarkMode() ? "moon" : "sun"}
					aria-label={t("header.actions.switchTheme")}
				/>
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
