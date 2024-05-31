// @refresh reload
import { StartServer, createHandler } from "@solidjs/start/server";
import { clsx } from "clsx";

import Favicons from "./components/Favicons";
import { getLocale } from "./i18n/i18n.cookie";
import { bodyStyle, htmlRootStyle } from "./root.css";
import { darkTheme } from "./theme/dark-theme.css";
import { defaultTheme } from "./theme/default-theme.css";
import { lightTheme } from "./theme/light-theme.css";
import { getColorScheme } from "./theme/theme.cookie";
import { ThemeName } from "./theme/ThemeName";

export default createHandler(
	() => {
		const locale = getLocale();
		const themeName = getColorScheme();
		return (
			<StartServer
				document={({ assets, children, scripts }) => (
					<html
						lang={locale}
						class={clsx([
							htmlRootStyle,
							themeName === ThemeName.Dark && darkTheme,
							themeName === ThemeName.Light && lightTheme,
							!themeName && defaultTheme,
						])}
					>
						<head>
							<meta charset="utf-8" />
							<meta
								name="viewport"
								content="width=device-width, initial-scale=1"
							/>
							<meta name="color-scheme" content="dark light" />
							<Favicons />
							{assets}
						</head>
						<body class={bodyStyle}>
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
