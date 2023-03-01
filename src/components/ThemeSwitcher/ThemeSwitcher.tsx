import { DropdownMenu } from "@kobalte/core";
import { useI18n } from "@solid-primitives/i18n";
import clsx from "clsx";
import {
	Show,
	createEffect,
	createSignal,
	onMount,
	useContext,
} from "solid-js";
import { createServerAction$, redirect } from "solid-start/server";

import { ThemeContext } from "~/contexts/ThemeContext";
import { colorSchemeCookie } from "~/theme/theme.cookie";
import { ThemeName } from "~/theme/ThemeName";

import Button from "../Button";
import Icon from "../Icon";

import {
	activeButtonStyle,
	buttonStyle,
	iconButtonStyle,
	menuContentStyle,
} from "./ThemeSwitcher.css";

interface ThemePayload {
	themeName?: ThemeName;
}

/**
 * Because Kobalte cannot handle progressively nehanced form in DropdownMenu,
 * we need to hack a little and trigger the server action by ourselves.
 */
export default function ThemeSwitcher() {
	const [, act] = createServerAction$(
		async (form: ThemePayload, { request }) => {
			const { themeName } = form;

			const redirectTo: string = request.headers.get("Referer") ?? "/";
			return redirect(redirectTo, {
				headers: {
					// eslint-disable-next-line @typescript-eslint/naming-convention
					"Set-Cookie": await colorSchemeCookie.serialize(
						themeName,
						!themeName ? { maxAge: -1 } : {},
					),
				},
			});
		},
	);

	const [t] = useI18n();

	const currentTheme = useContext(ThemeContext);
	const [prefersDarkMode, setPrefersDarkMode] = createSignal(false);
	const [isDarkMode, setIsDarkMode] = createSignal(
		currentTheme === ThemeName.Dark,
	);
	const [ready, setReady] = createSignal(false);

	onMount(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		// Set value at init
		setPrefersDarkMode(mediaQuery.matches);
		// Detect changes to update the icon
		mediaQuery.addEventListener("change", (e) => setPrefersDarkMode(e.matches));
	});

	createEffect(() => {
		setIsDarkMode(
			currentTheme === ThemeName.Dark || (!currentTheme && prefersDarkMode()),
		);
		setReady(true);
	});

	const switchTheme = (themeName?: ThemeName) => {
		void act({ themeName });
	};

	const [open, setOpen] = createSignal(false);
	return (
		<Show when={ready()}>
			<DropdownMenu.Root isOpen={open()} onOpenChange={setOpen}>
				<DropdownMenu.Trigger
					as={Button}
					class={iconButtonStyle}
					aria-label={t("header.actions.switchTheme")}
				>
					<Show when={isDarkMode()} fallback={<Icon name="sun" />}>
						<Icon name="moon" />
					</Show>
				</DropdownMenu.Trigger>
				<DropdownMenu.Portal>
					<DropdownMenu.Content class={menuContentStyle}>
						<DropdownMenu.Item
							as={Button}
							class={clsx([buttonStyle, !currentTheme && activeButtonStyle])}
							onSelect={() => switchTheme()}
						>
							{t("header.themes.system")}
						</DropdownMenu.Item>
						<DropdownMenu.Item
							as={Button}
							class={clsx([
								buttonStyle,
								currentTheme === ThemeName.Light && activeButtonStyle,
							])}
							onSelect={() => switchTheme(ThemeName.Light)}
						>
							{t("header.themes.light")}
						</DropdownMenu.Item>
						<DropdownMenu.Item
							as={Button}
							class={clsx([
								buttonStyle,
								currentTheme === ThemeName.Dark && activeButtonStyle,
							])}
							onSelect={() => switchTheme(ThemeName.Dark)}
						>
							{t("header.themes.dark")}
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Portal>
			</DropdownMenu.Root>
		</Show>
	);
}
