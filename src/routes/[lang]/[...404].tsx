import { useI18n } from "@solid-primitives/i18n";
import { useContext } from "solid-js";
import { A } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

import Title from "~/components/Title";
import { LocaleContext } from "~/contexts/LocaleContext";

export default function NotFound() {
  const [t] = useI18n();
  const locale = useContext(LocaleContext);

  return (
    <main>
      <HttpStatusCode code={404} />
      <Title>{t("notFound.title")}</Title>
      <p>
        <A href={locale ? `/${locale}` : "/"}>
          {t("notFound.links.backToHome")}
        </A>
      </p>
    </main>
  );
}
