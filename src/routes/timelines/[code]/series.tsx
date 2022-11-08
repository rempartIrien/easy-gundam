import { For } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { A, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";

import { getLocale } from "~/cookies/i18n.cookie";
import { listSeries } from "~/graphql/series.server";

export function routeData({ params }: RouteDataArgs) {
  const series = createServerData$(
    async ([, code]: string[], { request }) => {
      const locale = await getLocale(request);
      return listSeries(code, locale);
    },
    { key: () => ["timelines", params.code] },
  );
  return series;
}

export default function Timelines() {
  const series = useRouteData<typeof routeData>();
  return (
    <ol>
      <For each={series()}>
        {(s) => (
          <li>
            <A href={`/series/${s.code}`}>{s.title}</A>
          </li>
        )}
      </For>
    </ol>
  );
}
