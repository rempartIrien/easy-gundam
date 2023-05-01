import { useI18n } from "@solid-primitives/i18n";
import { For } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import invariant from "tiny-invariant";

import DocumentTitle from "~/components/DocumentTitle";
import Heading from "~/components/Heading";
import Link from "~/components/Link";
import List from "~/components/List";
import Section from "~/components/Section";
import { listTimelines } from "~/graphql/timeline.server";
import type { Language } from "~/i18n/i18n.config";

export function routeData({ params }: RouteDataArgs) {
	invariant(params.lang, "Expected params.lang");
	const timelines = createServerData$(
		async ([locale]) => {
			return listTimelines(locale as Language);
		},
		{ key: () => [params.lang, "timlines"] },
	);
	return timelines;
}

export default function Timelines() {
	const [t] = useI18n();
	const timelines = useRouteData<typeof routeData>();

	return (
		<>
			<DocumentTitle>{t("timelines.list.documentTitle")}</DocumentTitle>
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
