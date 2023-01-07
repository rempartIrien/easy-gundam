import { useI18n } from "@solid-primitives/i18n";
import { A } from "solid-start";
import { HttpStatusCode } from "solid-start/server";

import Title from "~/components/Title";
import useRootPath from "~/hooks/useRootPath";

export default function NotFound() {
  const [t] = useI18n();
  const rootPath = useRootPath();

  return (
    <main>
      <HttpStatusCode code={404} />
      <Title>{t("notFound.title")}</Title>
      <p>
        <A href={rootPath}>{t("notFound.links.backToHome")}</A>
      </p>
    </main>
  );
}
