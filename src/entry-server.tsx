// @refresh reload
import { StartServer, createHandler } from "@solidjs/start/server";

import Favicons from "./components/Favicons";
import { getLocale } from "./i18n/i18n.cookie";
import { bodyStyle } from "./root.css";
import getHtmlTagClasses from "./theme/getHtmlTagClasses";
import { getColorScheme } from "./theme/theme.cookie";

export default createHandler(
	() => {
		const locale = getLocale();
		const themeName = getColorScheme();
		return (
			<StartServer
				document={({ assets, children, scripts }) => (
					<html lang={locale} class={getHtmlTagClasses(themeName)}>
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
