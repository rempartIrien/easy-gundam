import { useI18n } from "@solid-primitives/i18n";

export default function ErrorPage() {
  const [t] = useI18n();

  // TODO: HttpStatus according to kind of error (make two Error classes)
  return (
    <main>
      <h1>{t("error.title")}</h1>
      <p>
        <a href="/">{t("error.links.backToHome")}</a>
      </p>
    </main>
  );
}
