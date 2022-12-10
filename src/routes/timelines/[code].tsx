import { marked } from "marked";
import { Show } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { A, Outlet, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";

import Title from "~/components/Title";
import { getTimelineByCode } from "~/graphql/timeline.server";
import { getLocale } from "~/i18n/i18n.cookie";

export function routeData({ params }: RouteDataArgs) {
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
  const timeline = useRouteData<typeof routeData>();
  return (
    <Show when={timeline()}>
      <section>
        <Title>{timeline()?.name}</Title>
        <nav>
          <ol>
            <li>
              <A href={`.`}>Description</A>
            </li>
            <li>
              <A href={`series`}>Series</A>
            </li>
          </ol>
        </nav>
        <Outlet />
      </section>
    </Show>
  );
}
