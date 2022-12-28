import { useI18n } from "@solid-primitives/i18n";
import { HttpStatusCode } from "solid-start/server";

export default function NotFound() {
  const [t] = useI18n();
  return (
    <main>
      <HttpStatusCode code={404} />
      <h1>{t("notFound.title")}</h1>
      <p>
        <a href="/">{t("notFound.links.backToHome")}</a>
      </p>
    </main>
  );
}
