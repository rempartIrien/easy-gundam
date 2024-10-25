import { getRequestEvent } from "solid-js/web";
import type { HTTPEvent } from "vinxi/http";
import { deleteCookie, parseCookies, setCookie } from "vinxi/http";

import type { ThemeName } from "./ThemeName";

const ONE_YEAR = 365 * 24 * 60 * 60;

// Helper function to get the value of the color scheme cookie
export function getColorSchemeToken(event: HTTPEvent): ThemeName | null {
	"use server";

	const cookies = parseCookies(event);
	return (cookies["color-scheme"] as ThemeName) ?? null;
}

export function setColorScheme(event: HTTPEvent, value: ThemeName) {
	"use server";

	setCookie(event, "color-scheme", value, {
		httpOnly: true,
		maxAge: ONE_YEAR, // in seconds
		path: "/",
		sameSite: "strict",
		secure: import.meta.env.PROD,
	});
}

export function deleteColorScheme(event: HTTPEvent) {
	"use server";
	deleteCookie(event, "color-scheme");
}

export function getColorScheme(): ThemeName | null {
	"use server";

	const event = getRequestEvent();
	if (!event) {
		throw new Error("Cannot retieve request context");
	}
	const { request, nativeEvent } = event;

	// Manually selected theme
	const userSelectedColorScheme = getColorSchemeToken(nativeEvent);

	// System preferred color scheme header
	const systemPreferredColorScheme = request.headers.get(
		"Sec-CH-Prefers-Color-Scheme",
	) as ThemeName | null;
	// Return the manually selected theme
	// or system preferred theme or default theme
	return userSelectedColorScheme ?? systemPreferredColorScheme;
}
