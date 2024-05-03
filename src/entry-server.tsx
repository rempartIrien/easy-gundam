// @refresh reload
import { StartServer, createHandler } from "@solidjs/start/server";

import Favicons from "./components/Favicons";
import HtmlRoot from "./components/HtmlRoot";
import { bodyStyle } from "./root.css";

export default createHandler(
	() => (
		<StartServer
			document={({ assets, children, scripts }) => (
				<HtmlRoot>
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
				</HtmlRoot>
			)}
		/>
	),
	{ mode: "async" },
);
