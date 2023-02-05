import { useI18n } from "@solid-primitives/i18n";
import { createSignal, onMount } from "solid-js";
import { createServerAction$, redirect } from "solid-start/server";

import { colorSchemeCookie, getColorScheme } from "~/theme/theme.cookie";
import { getNewColorScheme } from "~/theme/ThemeName";

import Button from "../Button";

const prefersDarkModeInputName = "prefersDarkMode";

export default function ThemeSwitcher() {
	const [, { Form: ThemeForm }] = createServerAction$(
		async (form: FormData, { request }) => {
			const currentColorScheme = await getColorScheme(request);
			const prefersDarkMode = form.get(prefersDarkModeInputName) === "true";
			const newColorScheme = getNewColorScheme(
				currentColorScheme,
				prefersDarkMode,
			);

			const redirectTo: string = request.headers.get("Referer") ?? "/";
			return redirect(redirectTo, {
				headers: {
					// eslint-disable-next-line @typescript-eslint/naming-convention
					"Set-Cookie": await colorSchemeCookie.serialize(newColorScheme),
				},
			});
		},
	);

	const [t] = useI18n();

	const [prefersDarkMode, setPrefersDarkMode] = createSignal(false);

	onMount(() => {
		setPrefersDarkMode(
			window.matchMedia("(prefers-color-scheme: dark)").matches,
		);
	});

	return (
		<ThemeForm>
			<input
				type="hidden"
				name={prefersDarkModeInputName}
				value={String(prefersDarkMode())}
			/>
			<Button type="submit" name="switchTheme">
				{t("header.actions.switchTheme")}
			</Button>
		</ThemeForm>
	);
}
