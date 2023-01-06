import { useI18n } from "@solid-primitives/i18n";
import { Title } from "solid-start";
import { Outlet } from "solid-start";

import Header from "~/components/Header";

export default function I18nLayout() {
  const [t] = useI18n();

  return (
    <>
      <Title>{t("appName")}</Title>
      <Header />
      <Outlet />
    </>
  );
}
