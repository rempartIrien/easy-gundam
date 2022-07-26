import { For } from "solid-js";
import { A } from "solid-start";
import { createServerAction$, redirect } from "solid-start/server";

import Button from "./Button";

import { LanguageNmes } from "~/i18n/i18n.config";
import { localeCookie } from "~/i18n/i18n.cookie";
import {
  ThemeName,
  colorSchemeCookie,
  getColorScheme,
} from "~/theme/theme.cookie";

export default function Header() {
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

  const [, { Form: LocaleForm }] = createServerAction$(
    async (form: FormData, { request }) => {
      const newLocale = form.get("locale");

      const redirectTo: string = request.headers.get("Referer") ?? "/";
      return redirect(redirectTo, {
        headers: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "Set-Cookie": await localeCookie.serialize(newLocale),
        },
      });
    },
  );

  return (
    <nav>
      <A href="/timelines">Timelines</A>
      <A href="/about">About</A>
      <ThemeForm>
        <Button type="submit" name="switchTheme">
          Switch Theme
        </Button>
      </ThemeForm>
      <LocaleForm>
        <For each={Object.entries(LanguageNmes)}>
          {([locale, name]) => (
            <Button name="locale" value={locale}>
              {name}
            </Button>
          )}
        </For>
      </LocaleForm>
    </nav>
  );
}
