import { type JSX, createEffect } from "solid-js";

import useIsDarkMode from "~/hooks/useIsDarkMode";

export default function MetaThemeColorSwitcher(props: {
	children: JSX.Element;
}) {
	const isDarkMode = useIsDarkMode();

	// I tried to use SolidMeta Meta tag but it got removed after dark => light => dark => light changes
	// So change existing meta tag(s) instead.
	// We override everything here.
	createEffect(() => {
		if (typeof isDarkMode() !== "undefined" && window) {
			setTimeout(() => {
				// As the theme change runs at the same time, we need to delay the CSS variable computation to get its new value.
				const color = getComputedStyle(window.document.documentElement)
					.getPropertyValue("--color-background-main")
					.trim();
				[
					...window.document.querySelectorAll('meta[name="theme-color"]'),
				].forEach((el) => el.setAttribute("content", color));
			});
		}
	});

	return <>{props.children}</>;
}
