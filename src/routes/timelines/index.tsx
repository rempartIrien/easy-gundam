import { useI18n } from "@solid-primitives/i18n";
import { For, createSignal } from "solid-js";
import { A, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";

import { listTimelines } from "~/graphql/timeline.server";
import { Language } from "~/i18n/i18n.config";

export function routeData() {
  const timelines = createServerData$(() => listTimelines(Language.English));
  return timelines;
}

export default function Timelines() {
  const timelines = useRouteData<typeof routeData>();
  const [name, setName] = createSignal("John");
  const [t] = useI18n();

  setInterval(() => {
    setName(name() === "John" ? "Jean" : "John");
  }, 1000);

  return (
    <>
      <p>{t("hello", { name: name() })}</p>
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
