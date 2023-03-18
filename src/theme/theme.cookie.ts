// See https://rossmoody.com/writing/remix-stitches
import { createCookie } from "solid-start";

import type { ThemeName } from "./ThemeName";

const ONE_YEAR = 365 * 24 * 60 * 60;

// Create a cookie to track color scheme state
export const colorSchemeCookie = createCookie("color-scheme", {
	httpOnly: true,
	maxAge: ONE_YEAR, // in seconds
	path: "/",
	sameSite: "strict",
	secrets: [import.meta.env.VITE_SECRETS],
	secure: import.meta.env.PROD,
});

// Helper function to get the value of the color scheme cookie
export function getColorSchemeToken(
	request: Request,
): Promise<ThemeName | null> {
	return colorSchemeCookie.parse(
		request.headers.get("Cookie"),
	) as Promise<ThemeName | null>;
}

export async function getColorScheme(
	request: Request,
): Promise<ThemeName | null> {
	// Manually selected theme
	const userSelectedColorScheme = await getColorSchemeToken(request);

	// System preferred color scheme header
	const systemPreferredColorScheme = request.headers.get(
		"Sec-CH-Prefers-Color-Scheme",
	) as ThemeName | null;
	// Return the manually selected theme
	// or system preferred theme or default theme
	return userSelectedColorScheme ?? systemPreferredColorScheme;
}
