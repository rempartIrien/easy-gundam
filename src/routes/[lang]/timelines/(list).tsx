import { useI18n } from "@solid-primitives/i18n";
import { For } from "solid-js";
import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";

import Heading from "~/components/Heading";
import Link from "~/components/Link";
import List from "~/components/List";
import Section from "~/components/Section";
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
			<Heading variant="title">{t("timelines.title")}</Heading>
			<Section>
				<List>
					<For each={timelines()}>
						{(timeline) => (
							<li>
								<Link href={timeline.code}>{timeline.name}</Link>
							</li>
						)}
					</For>
				</List>
			</Section>
		</>
	);
}
