// See https://rossmoody.com/writing/remix-stitches
import { createCookie } from "solid-start";

import { Language } from "~/i18n/i18n.config";

const ONE_YEAR = 365 * 24 * 60 * 60;

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
function getLocaleToken(request: Request): Promise<Language> {
  return localeCookie.parse(request.headers.get("Cookie")) as Promise<Language>;
}

export async function getLocale(request: Request): Promise<Language> {
  // Manually selected theme
  const userSelectedLocale = await getLocaleToken(request);

  // System preferred locale header
  const systemPreferredLocale = request.headers.get("Accept-Language");
  // Return the manually selected locale
  // or system preferred locale or default locale
  return userSelectedLocale ?? systemPreferredLocale ?? Language.French;
}
