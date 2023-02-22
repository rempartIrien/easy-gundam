import { ToggleButton } from "@kobalte/core";
import { useI18n } from "@solid-primitives/i18n";
import {
	Show,
	createEffect,
	createSignal,
	onMount,
	useContext,
} from "solid-js";
import { createServerAction$, redirect } from "solid-start/server";

import { ThemeContext } from "~/contexts/ThemeContext";
import { colorSchemeCookie, getColorScheme } from "~/theme/theme.cookie";
import { ThemeName, getNewColorScheme } from "~/theme/ThemeName";

import Button from "../Button";
import Icon from "../Icon";

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

	const currentTheme = useContext(ThemeContext);
	const [prefersDarkMode, setPrefersDarkMode] = createSignal(false);
	const [pressed, setPressed] = createSignal(currentTheme === ThemeName.Dark);
	const [ready, setReady] = createSignal(false);

	onMount(() => {
		setPrefersDarkMode(
			window.matchMedia("(prefers-color-scheme: dark)").matches,
		);
	});

	createEffect(() => {
		setPressed(
			currentTheme === ThemeName.Dark || (!currentTheme && prefersDarkMode()),
		);
		setReady(true);
	});

	return (
		<Show when={ready()}>
			<ThemeForm>
				<input
					type="hidden"
					name={prefersDarkModeInputName}
					value={String(prefersDarkMode())}
				/>

				<ToggleButton.Root
					aria-label={t("header.actions.switchTheme")}
					isPressed={pressed()}
					onPressedChange={setPressed}
					as={Button}
					type="submit"
					name="switchTheme"
				>
					{() => (
						<Show when={pressed()} fallback={<Icon name="sun" />}>
							<Icon name="moon" />
						</Show>
					)}
				</ToggleButton.Root>
			</ThemeForm>
		</Show>
	);
}
