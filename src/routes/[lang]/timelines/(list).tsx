import { useI18n } from "@solid-primitives/i18n";
import { For } from "solid-js";
import { A, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";

import Title from "~/components/Title";
import { listTimelines } from "~/graphql/timeline.server";
import { getLocale } from "~/i18n/i18n.cookie";

export function routeData() {
	const timelines = createServerData$(async (_, { request }) => {
		const locale = await getLocale(request);
		return listTimelines(locale);
	});
	return timelines;
}

export default function Timelines() {
	const [t] = useI18n();
	const timelines = useRouteData<typeof routeData>();

	return (
		<>
			<Title>{t("timelines.title")}</Title>
			<ul>
				<For each={timelines()}>
					{(timeline) => (
						<li>
							<A href={timeline.code}>{timeline.name}</A>
						</li>
					)}
				</For>
			</ul>
		</>
	);
}
