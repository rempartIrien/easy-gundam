// See https://rossmoody.com/writing/remix-stitches
import { createCookie } from "solid-start";

import { Language, LanguageNmes } from "~/i18n/i18n.config";

const ONE_YEAR = 365 * 24 * 60 * 60;
export const DEFAULT_LOCALE: Language = Language.French;

// Create a cookie to track color scheme state
export const localeCookie = createCookie("locale", {
	httpOnly: true,
	maxAge: ONE_YEAR, // in seconds
	path: "/",
	sameSite: "strict",
	secrets: [import.meta.env.VITE_SECRETS],
	secure: import.meta.env.PROD,
});

// Helper function to get the value of the locale cookie
export function getLocaleToken(request: Request): Promise<Language | null> {
	return localeCookie.parse(
		request.headers.get("Cookie"),
	) as Promise<Language | null>;
}

function extractPreferredLocale(
	headerValue?: string | null,
): Language | undefined {
	if (!headerValue) {
		return;
	}

	// From MDN https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
	// Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
	// So we split locales (comma-separated) and then we remove weight
	// (after semicolon)
	return headerValue
		.split(",")
		.map((value) => value.split(";")[0].trim())
		.find((value) => Object.keys(LanguageNmes).includes(value)) as Language;
}

export async function getLocale(request: Request): Promise<Language> {
	// Locale set by given URL
	const urlBasedLocale = Object.keys(LanguageNmes).find((lang) =>
		request.url.match(`/${lang}/`),
	) as Language | undefined;

	// Locale set by referer header
	const referrerBasedLocale = Object.keys(LanguageNmes).find((lang) =>
		request.headers.get("Referer")?.match(`/${lang}/`),
	) as Language | undefined;

	// Manually selected locale
	const userSelectedLocale = await getLocaleToken(request);

	// System preferred locale header
	const systemPreferredLocale = extractPreferredLocale(
		request.headers.get("Accept-Language"),
	);

	// Return the manually selected locale
	// or system preferred locale or default locale
	return (
		urlBasedLocale ??
		referrerBasedLocale ??
		userSelectedLocale ??
		systemPreferredLocale ??
		DEFAULT_LOCALE
	);
}
