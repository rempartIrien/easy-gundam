import { useI18n } from "@solid-primitives/i18n";
import { Show } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { useRouteData } from "solid-start";

import DocumentTitle from "~/components/DocumentTitle";
import MarkdownViewer from "~/components/MarkdownViewer";
import Section from "~/components/Section";

import type { routeData as parentRouteData } from "../(ltimelineLayout)";

export function routeData({ data }: RouteDataArgs<typeof parentRouteData>) {
	return data;
}

export default function TimelineDescription() {
	const timeline = useRouteData<typeof routeData>();
	const [t] = useI18n();
	return (
		<Show when={timeline()}>
			{(nonNullTimeline) => (
				<>
					<DocumentTitle>
						{`${nonNullTimeline().name} - ${String(
							t("timelines.details.description.documentTitle"),
						)}`}
					</DocumentTitle>
					<Section>
						<MarkdownViewer content={nonNullTimeline().description} />
					</Section>
				</>
			)}
		</Show>
	);
}
