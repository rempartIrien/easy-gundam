import { createServerAction$, redirect } from "solid-start/server";

import Button from "../Button";

import {
  ThemeName,
  colorSchemeCookie,
  getColorScheme,
} from "~/theme/theme.cookie";

export default function ThemeSwitcher() {
  const [, { Form: ThemeForm }] = createServerAction$(
    async (_: FormData, { request }) => {
      const currentColorScheme = await getColorScheme(request);
      const newColorScheme =
        currentColorScheme === ThemeName.Light
          ? ThemeName.Dark
          : ThemeName.Light;

      const redirectTo: string = request.headers.get("Referer") ?? "/";
      return redirect(redirectTo, {
        headers: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "Set-Cookie": await colorSchemeCookie.serialize(newColorScheme),
        },
      });
    },
  );

  return (
    <ThemeForm>
      <Button type="submit" name="switchTheme">
        Switch Theme
      </Button>
    </ThemeForm>
  );
}
