import { Show } from "solid-js";
import { useRouteData } from "solid-start";
import { createServerData$, redirect } from "solid-start/server";

import { getLocale } from "~/i18n/i18n.cookie";

export function routeData() {
  return createServerData$(async (_, { request }) => {
    const locale = await getLocale(request);
    throw redirect(`/${locale}/home`);
  });
}

export default function Index() {
  // Need to call data in JSX. See https://github.com/solidjs/solid-start/issues/577
  const data = useRouteData<typeof routeData>();
  return (
    <Show when={data()}>
      <div>Redirecting...</div>
    </Show>
  );
}
