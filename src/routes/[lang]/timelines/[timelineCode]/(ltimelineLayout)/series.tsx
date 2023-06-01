import { Show } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import invariant from "tiny-invariant";

import { listSeries } from "~/api/series.server";
import Chronology from "~/components/Chronology";
import DocumentTitle from "~/components/DocumentTitle";
import useTranslation from "~/hooks/useTranslation";
import type { Language } from "~/i18n/i18n.config";

import type { routeData as parentRouteData } from "../(ltimelineLayout)";

export function routeData({
	params,
	data: timeline,
}: RouteDataArgs<typeof parentRouteData>) {
	invariant(params.lang, "Expected params.lang");
	invariant(params.timelineCode, "Expected params.timelineCode");
	const series = createServerData$(
		async ([locale, , code]: string[]) => listSeries(code, locale as Language),
		{ key: () => [params.lang, "timelines", params.timelineCode, "series"] },
	);
	return { timeline, series };
}

export default function TimelineSeries() {
	const { timeline, series } = useRouteData<typeof routeData>();
	const [t] = useTranslation();
	return (
		<Show when={timeline()}>
			{(nonNullTimeline) => (
				<>
					<DocumentTitle
						content={[
							nonNullTimeline().name,
							t("timelines.details.series.documentTitle"),
						]}
					/>
					<Chronology timelineCode={nonNullTimeline().code} items={series()} />
				</>
			)}
		</Show>
	);
}
