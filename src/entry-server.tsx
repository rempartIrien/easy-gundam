// @refresh reload
import { StartServer, createHandler } from "@solidjs/start/server";
import { Match, Switch } from "solid-js";

import useAppName from "./hooks/useAppName";
import { getLocale } from "./i18n/i18n.cookie";
import getHtmlTagClasses from "./theme/getHtmlTagClasses";
import { getColorScheme } from "./theme/theme.cookie";
import { ThemeName } from "./theme/ThemeName";

export default createHandler(
	() => {
		const locale = getLocale();
		const themeName = getColorScheme();
		const appName = useAppName();
		const styles = getHtmlTagClasses(themeName);
		// Theme color meta tags use hard-coded CSS colors defined in `index.css`.
		const darkBackgroundColor = "#131313";
		const lightBackgroundColor = "#f1f1f1";

		return (
			<StartServer
				document={({ assets, children, scripts }) => (
					<html lang={locale} class={styles}>
						<head>
							<meta charset="utf-8" />
							<meta
								name="viewport"
								content="width=device-width, initial-scale=1"
							/>
							<meta name="color-scheme" content="dark light" />
							<meta name="apple-mobile-web-app-capable" content="yes" />
							<meta name="apple-mobile-web-app-title" content={appName} />
							<meta
								name="apple-mobile-web-app-status-bar-style"
								content="black"
							/>
							<Switch
								fallback={
									<>
										<meta
											name="theme-color"
											media="(prefers-color-scheme: light)"
											content={lightBackgroundColor}
										/>
										<meta
											name="theme-color"
											media="(prefers-color-scheme: dark)"
											content={darkBackgroundColor}
										/>
									</>
								}
							>
								<Match when={styles.includes(ThemeName.Light)}>
									<meta name="theme-color" content={lightBackgroundColor} />
								</Match>
								<Match when={styles.includes(ThemeName.Dark)}>
									<meta name="theme-color" content={darkBackgroundColor} />
								</Match>
							</Switch>
							{assets}
						</head>
						<body class="min-h-100% flex flex-col bg-background-main text-text-main">
							<div id="app">{children}</div>
							{scripts}
						</body>
					</html>
				)}
			/>
		);
	},
	{ mode: "async" },
);
