import { For } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { A, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";

import { listSeries } from "~/graphql/series.server";
import { getLocale } from "~/i18n/i18n.cookie";

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
