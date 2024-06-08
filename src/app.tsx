// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { ErrorBoundary, Suspense } from "solid-js";

import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";
import "sanitize.css/assets.css";
import "sanitize.css/system-ui.css";
import "sanitize.css/ui-monospace.css";

import ErrorPage from "./components/ErrorPage";
import Favicons from "./components/Favicons";
import MenuRegion from "./components/menu/MenuRegion";
import Providers from "./components/Providers/Providers";

export default function App() {
	return (
		<Router
			root={(props) => (
				<Providers>
					<ErrorBoundary fallback={() => <ErrorPage />}>
						<Favicons />
						<MenuRegion />
						<Suspense>{props.children}</Suspense>
					</ErrorBoundary>
				</Providers>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
