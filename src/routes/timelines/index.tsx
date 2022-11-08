import { For } from "solid-js";
import { A, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";

import { getLocale } from "~/cookies/i18n.cookie";
import { listTimelines } from "~/graphql/timeline.server";

export function routeData() {
  const timelines = createServerData$(async (_, { request }) => {
    const locale = await getLocale(request);
    return listTimelines(locale);
  });
  return timelines;
}

export default function Timelines() {
  const timelines = useRouteData<typeof routeData>();

  return (
    <>
      <ul>
        <For each={timelines()}>
          {(timeline) => (
            <li>
              <A href={`/timelines/${timeline.code}`}>{timeline.name}</A>
            </li>
          )}
        </For>
      </ul>
    </>
  );
}
