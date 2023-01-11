// @refresh reload
import { Routes } from "@solidjs/router";
import { createMemo } from "solid-js";
import { Body, FileRoutes, Head, Meta, Scripts } from "solid-start";
import { ErrorBoundary } from "solid-start/error-boundary";
import { createServerData$ } from "solid-start/server";

import ErrorPage from "./components/ErrorPage";
import HtmlRoot from "./components/HtmlRoot";
import { ThemeName, getColorScheme } from "./theme/theme.cookie";
import { darkTheme, lightTheme } from "./theme/theme.css";

import "./root.css";
import "./font.css";

export default function Root() {
	// Cannot fetch it in routeData as it is not handled by root.tsx at the moment
	// See https://discordapp.com/channels/722131463138705510/910635844119982080/1036479279019606036
	const themeName = createServerData$(
		async (_, { request }) => {
			return await getColorScheme(request);
		},
		{
			key: "themeName",
		},
	);

	const className = createMemo(() =>
		themeName() === ThemeName.Dark ? darkTheme : lightTheme,
	);

	return (
		<HtmlRoot>
			<Head>
				<Meta charset="utf-8" />
				<Meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Body class={className()}>
				<ErrorBoundary fallback={() => <ErrorPage />}>
					<Routes>
						<FileRoutes />
					</Routes>
				</ErrorBoundary>
				<Scripts />
			</Body>
		</HtmlRoot>
	);
}
