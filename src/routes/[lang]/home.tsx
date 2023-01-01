import { useI18n } from "@solid-primitives/i18n";

import { paragraphStyle, titleStyle } from "./home.css";

export default function Home() {
  const [t] = useI18n();
  return (
    <main>
      <h1 class={titleStyle}>{t("home.title")}</h1>
      <p class={paragraphStyle}>{t("home.subtitle")}</p>
    </main>
  );
}
