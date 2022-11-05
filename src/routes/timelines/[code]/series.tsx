import { For } from "solid-js";
import { A, RouteDataArgs, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";

import { listSeries } from "~/graphql/series.server";
import { Language } from "~/i18n/i18n.config";

export function routeData({ params }: RouteDataArgs) {
  const series = createServerData$(
    ([, code]: string[]) => listSeries(code, Language.English),
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
