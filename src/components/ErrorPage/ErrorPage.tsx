import { useI18n } from "@solid-primitives/i18n";
import { useContext } from "solid-js";
import { A } from "solid-start";

import { LocaleContext } from "~/contexts/LocaleContext";

export default function ErrorPage() {
  const [t] = useI18n();
  const locale = useContext(LocaleContext);

  // TODO: HttpStatus according to kind of error (make two Error classes)
  return (
    <main>
      <h1>{t("error.title")}</h1>
      <p>
        <A href={locale ? `/${locale}` : "/"}>{t("error.links.backToHome")}</A>
      </p>
    </main>
  );
}
