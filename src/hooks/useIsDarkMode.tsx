import type { Accessor } from "solid-js";
import { createEffect, createSignal, onMount, useContext } from "solid-js";

import { ThemeContext } from "~/contexts/ThemeContext";
import { ThemeName } from "~/theme/ThemeName";

export default function useIsDarkMode(): Accessor<boolean | undefined> {
	const [currentTheme] = useContext(ThemeContext);
	const [prefersDarkMode, setPrefersDarkMode] = createSignal(false);
	const [isDarkMode, setIsDarkMode] = createSignal<boolean>();

	onMount(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		// Set value at init
		setPrefersDarkMode(mediaQuery.matches);
		// Detect changes to update the icon
		mediaQuery.addEventListener("change", (e) => setPrefersDarkMode(e.matches));
	});

	createEffect(() => {
		setIsDarkMode(
			currentTheme() === ThemeName.Dark ||
				(!currentTheme() && prefersDarkMode()),
		);
	});

	return isDarkMode;
}
