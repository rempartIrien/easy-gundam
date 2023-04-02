// @refresh reload
import { Routes } from "@solidjs/router";
import { Body, FileRoutes, Head, Meta, Scripts } from "solid-start";
import { ErrorBoundary } from "solid-start/error-boundary";
import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";
import "sanitize.css/assets.css";
import "sanitize.css/system-ui.css";
import "sanitize.css/ui-monospace.css";

import ErrorPage from "./components/ErrorPage";
import HtmlRoot from "./components/HtmlRoot";
import MenuRegion from "./components/menu/MenuRegion";
import { ToasterProvider } from "./contexts/ToasterContext";
import { bodyStyle } from "./root.css";
import "./font.css";

export default function Root() {
	return (
		<HtmlRoot>
			<Head>
				<Meta charset="utf-8" />
				<Meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta name="color-scheme" content="dark light" />
			</Head>
			<Body class={bodyStyle}>
				<ToasterProvider>
					<ErrorBoundary fallback={() => <ErrorPage />}>
						<Routes>
							<FileRoutes />
						</Routes>
						<MenuRegion />
					</ErrorBoundary>
				</ToasterProvider>
				<Scripts />
			</Body>
		</HtmlRoot>
	);
}
