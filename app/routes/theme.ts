import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { ThemeName, colorSchemeCookie, getColorScheme } from "~/cookies";

export const action: ActionFunction = async ({ request }) => {
  const currentColorScheme = await getColorScheme(request);
  const newColorScheme =
    currentColorScheme === ThemeName.Light ? ThemeName.Dark : ThemeName.Light;

  const redirectTo: string = request.headers.get("Referer") ?? "/";
  return redirect(redirectTo, {
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      "Set-Cookie": await colorSchemeCookie.serialize(newColorScheme),
    },
  });
};
