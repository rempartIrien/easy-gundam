// @refresh reload
import { Routes } from "@solidjs/router";
import { Body, FileRoutes, Head, Meta, Scripts } from "solid-start";
import { ErrorBoundary } from "solid-start/error-boundary";

import ErrorPage from "./components/ErrorPage";
import HtmlRoot from "./components/HtmlRoot";
import { bodyStyle } from "./root.css";
import "./font.css";

export default function Root() {
	return (
		<HtmlRoot>
			<Head>
				<Meta charset="utf-8" />
				<Meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Body class={bodyStyle}>
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
