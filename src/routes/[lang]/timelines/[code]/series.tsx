import type { RouteDataArgs } from "solid-start";
import { useParams } from "solid-start";
import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";

import Chronology from "~/components/Chronology";
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
	const params = useParams<{ code: string }>();
	const series = useRouteData<typeof routeData>();
	return <Chronology timelineCode={params.code} items={series()} />;
}
