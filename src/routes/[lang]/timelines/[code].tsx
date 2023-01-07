import { useI18n } from "@solid-primitives/i18n";
import { marked } from "marked";
import { Show } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { Outlet, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import invariant from "tiny-invariant";

import Nav from "~/components/Nav";
import NavItem from "~/components/NavItem";
import Title from "~/components/Title";
import { getTimelineByCode } from "~/graphql/timeline.server";
import { getLocale } from "~/i18n/i18n.cookie";

export function routeData({ params }: RouteDataArgs) {
  invariant(params.code, "Expected params.code");
  const timeline = createServerData$(
    async ([, code]: string[], { request }) => {
      const locale = await getLocale(request);
      const t = await getTimelineByCode(code, locale);
      return {
        ...t,
        description: marked(t.description || ""),
      };
    },
    { key: () => ["timelines", params.code] },
  );
  return timeline;
}

export default function Timelines() {
  const [t] = useI18n();
  const timeline = useRouteData<typeof routeData>();
  return (
    <Show when={timeline()}>
      <section>
        <Title>{timeline()?.name}</Title>
        <Nav
          items={[
            <NavItem href="" end>
              {t("timelines.nav.description")}
            </NavItem>,
            <NavItem href="series">{t("timelines.nav.series")}</NavItem>,
          ]}
        />
        <Outlet />
      </section>
    </Show>
  );
}
