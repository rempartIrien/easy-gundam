import { Link, Outlet, useFetcher } from "@remix-run/react";
import type { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export default function Header(): ReactElement {
  const { t } = useTranslation();
  // Use fetcher.Form not to navigate to /theme route
  const fetcher = useFetcher();
  return (
    <>
      <header>
        <ol>
          <li>
            <Link to="/next">{t("header.menu.what_next")}</Link>
          </li>
          <li>
            <Link to="/timelines">{t("header.menu.timelines")}</Link>
          </li>
        </ol>
        <fetcher.Form method="post" action="/theme">
          <button type="submit">Change Theme</button>
        </fetcher.Form>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
