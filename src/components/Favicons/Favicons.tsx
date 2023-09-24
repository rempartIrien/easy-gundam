import { Suspense, createMemo } from "solid-js";
import { Link } from "solid-start";

import useIsDarkMode from "~/hooks/useIsDarkMode";

export default function Favicons() {
	const isDarkMode = useIsDarkMode();

	const baseUrl = createMemo(() => {
		const themePart = isDarkMode() ? "dark" : "light";
		return `/favicons/${themePart}`;
	});
	return (
		<Suspense>
			<Link
				rel="apple-touch-icon"
				sizes="180x180"
				href={`${baseUrl()}/apple-touch-icon.png`}
			/>
			<Link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href={`${baseUrl()}/favicon-32x32.png`}
			/>
			<Link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href={`${baseUrl()}/favicon-16x16.png`}
			/>
			<Link rel="manifest" href={`${baseUrl()}/site.webmanifest`} />
		</Suspense>
	);
}
