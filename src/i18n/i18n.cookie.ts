import { getRequestEvent } from "solid-js/web";
import type { HTTPEvent } from "vinxi/http";
import { deleteCookie, parseCookies, setCookie } from "vinxi/http";

import { Language, LanguageNames } from "~/i18n/i18n.config";

const ONE_YEAR = 365 * 24 * 60 * 60;
export const DEFAULT_LOCALE: Language = Language.French;

// Create a cookie to track locale
export function createLocaleCookie(event: HTTPEvent, value: Language) {
	"use server";

	setCookie(event, "locale", value, {
		httpOnly: true,
		maxAge: ONE_YEAR, // in seconds
		path: "/",
		sameSite: "strict",
		secure: import.meta.env.PROD,
	});
}

// Helper function to get the value of the locale cookie
export function getLocaleToken(event: HTTPEvent): Language | null {
	"use server";

	const cookies = parseCookies(event);
	return (cookies["locale"] as Language) ?? null;
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
		.find((value) => Object.keys(LanguageNames).includes(value)) as Language;
}

export function setLocale(event: HTTPEvent, value: Language) {
	setCookie(event, "locale", value);
}

export function deleteLocale(event: HTTPEvent) {
	deleteCookie(event, "locale");
}

export function getLocale(): Language {
	"use server";

	const event = getRequestEvent();
	if (!event) {
		throw new Error("Cannot retrieve request context");
	}
	const { request, nativeEvent } = event;
	// Locale set by given URL
	const urlBasedLocale = Object.keys(LanguageNames).find((lang) =>
		request.url.match(`/${lang}/`),
	) as Language | undefined;

	// Locale set by referer header
	const referrerBasedLocale = Object.keys(LanguageNames).find((lang) =>
		request.headers.get("Referer")?.match(`/${lang}/`),
	) as Language | undefined;

	// Manually selected locale
	const userSelectedLocale = getLocaleToken(nativeEvent);

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
