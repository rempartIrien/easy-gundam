// @refresh reload
import { MetaProvider } from "@solidjs/meta";
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
import MenuRegion from "./components/menu/MenuRegion";
import { ToasterProvider } from "./contexts/ToasterContext";

export default function App() {
	return (
		<Router
			root={(props) => (
				<MetaProvider>
					<ToasterProvider>
						<ErrorBoundary fallback={() => <ErrorPage />}>
							<MenuRegion />
							<Suspense>{props.children}</Suspense>
						</ErrorBoundary>
					</ToasterProvider>
				</MetaProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
