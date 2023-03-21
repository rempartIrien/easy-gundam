import type { RouteDataArgs } from "solid-start";
import { useParams } from "solid-start";
import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import invariant from "tiny-invariant";

import Chronology from "~/components/Chronology";
import { listSeries } from "~/graphql/series.server";
import type { Language } from "~/i18n/i18n.config";

export function routeData({ params }: RouteDataArgs) {
	invariant(params.lang, "Expected params.lang");
	invariant(params.code, "Expected params.code");
	const series = createServerData$(
		async ([locale, , code]: string[]) => {
			return listSeries(code, locale as Language);
		},
		{ key: () => [params.lang, "timelines", params.code, "series"] },
	);
	return series;
}

export default function Timelines() {
	const params = useParams<{ code: string }>();
	const series = useRouteData<typeof routeData>();
	return <Chronology timelineCode={params.code} items={series()} />;
}
