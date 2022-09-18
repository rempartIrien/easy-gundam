// See https://rossmoody.com/writing/remix-stitches
import { createCookie } from "@remix-run/node";

export enum ThemeName {
  Dark = "dark",
  Light = "light",
}

const ONE_YEAR = 365 * 24 * 60 * 60;

// Create a cookie to track color scheme state
export const colorSchemeCookie = createCookie("color-scheme", {
  httpOnly: true,
  maxAge: ONE_YEAR, // in seconds
  path: "/",
  sameSite: "strict",
  secrets: ["s3cret1"], // TODO: use a real secret
  secure: true,
});

// Helper function to get the value of the color scheme cookie
function getColorSchemeToken(request: Request): Promise<ThemeName> {
  return colorSchemeCookie.parse(
    request.headers.get("Cookie"),
  ) as Promise<ThemeName>;
}

export async function getColorScheme(request: Request): Promise<ThemeName> {
  // Manually selected theme
  const userSelectedColorScheme = await getColorSchemeToken(request);

  // System preferred color scheme header
  const systemPreferredColorScheme = request.headers.get(
    "Sec-CH-Prefers-Color-Scheme",
  );

  // Return the manually selected theme
  // or system preferred theme or default theme
  return (
    userSelectedColorScheme ?? systemPreferredColorScheme ?? ThemeName.Light
  );
}
