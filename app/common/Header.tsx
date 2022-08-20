import { Link } from "@remix-run/react";
import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export default function Header(): ReactElement {
  const { t } = useTranslation();
  return (
    <header>
      <ol>
        <li>
          <Link to="/next">{t("header.menu.what_next")}</Link>
        </li>
        <li>
          <Link to="/timelines">{t("header.menu.timelines")}</Link>
        </li>
      </ol>
    </header>
  );
}
