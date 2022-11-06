import { marked } from "marked";
import { Show } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { A, Outlet, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";

import { getTimelineByCode } from "~/graphql/timeline.server";
import { Language } from "~/i18n/i18n.config";

export function routeData({ params }: RouteDataArgs) {
  const timeline = createServerData$(
    async ([, code]: string[]) => {
      const t = await getTimelineByCode(code, Language.English);
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
        <h2>{timeline()?.name}</h2>
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
