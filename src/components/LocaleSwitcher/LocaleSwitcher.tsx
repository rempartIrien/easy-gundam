import { For } from "solid-js";
import { createServerAction$, redirect } from "solid-start/server";

import Button from "../Button";

import { LanguageNmes } from "~/i18n/i18n.config";
import { localeCookie } from "~/i18n/i18n.cookie";

export default function LocaleSwitcher() {
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
    <LocaleForm>
      <For each={Object.entries(LanguageNmes)}>
        {([locale, name]) => (
          <Button name="locale" value={locale}>
            {name}
          </Button>
        )}
      </For>
    </LocaleForm>
  );
}
