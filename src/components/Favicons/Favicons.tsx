import { Suspense, createMemo } from "solid-js";

import useIsDarkMode from "~/hooks/useIsDarkMode";

export default function Favicons() {
	const isDarkMode = useIsDarkMode();

	const baseUrl = createMemo(() => {
		const themePart = isDarkMode() ? "dark" : "light";
		return `/favicons/${themePart}`;
	});
	return (
		<Suspense>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href={`${baseUrl()}/apple-touch-icon.png`}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href={`${baseUrl()}/favicon-32x32.png`}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href={`${baseUrl()}/favicon-16x16.png`}
			/>
			<link rel="manifest" href={`${baseUrl()}/site.webmanifest`} />
		</Suspense>
	);
}
