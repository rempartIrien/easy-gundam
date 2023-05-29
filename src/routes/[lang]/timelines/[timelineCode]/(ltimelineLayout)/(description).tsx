import { Show } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { useRouteData } from "solid-start";

import DocumentTitle from "~/components/DocumentTitle";
import MarkdownViewer from "~/components/MarkdownViewer";
import Section from "~/components/Section";
import useTranslation from "~/hooks/useTranslation";

import type { routeData as parentRouteData } from "../(ltimelineLayout)";

export function routeData({ data }: RouteDataArgs<typeof parentRouteData>) {
	return data;
}

export default function TimelineDescription() {
	const timeline = useRouteData<typeof routeData>();
	const [t] = useTranslation();
	return (
		<Show when={timeline()}>
			{(nonNullTimeline) => (
				<>
					<DocumentTitle
						content={[
							nonNullTimeline().name,
							t("timelines.details.description.documentTitle"),
						]}
					/>
					<Section>
						<MarkdownViewer content={nonNullTimeline().description} />
					</Section>
				</>
			)}
		</Show>
	);
}
