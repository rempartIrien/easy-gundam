import type { Params, RouteDefinition } from "@solidjs/router";
import { Show } from "solid-js";
import invariant from "tiny-invariant";

import DocumentTitle from "~/components/DocumentTitle";
import MarkdownViewer from "~/components/MarkdownViewer";
import Section from "~/components/Section";
import useLocalizedRouteData from "~/hooks/useLocalizedRouteData";
import useTranslation from "~/hooks/useTranslation";
import { isLanguage } from "~/i18n/i18n.config";

import { getTimeline } from "../timeline.server";

async function routeData(params: Params) {
	"use server";
	invariant(isLanguage(params.lang), "Expected params.lang");
	invariant(params.timelineCode, "Expected params.timelineCode");

	return getTimeline(params.timelineCode, params.lang);
}

export const route = {
	load: ({ params }) => routeData(params),
} as RouteDefinition;

export default function TimelineDescription() {
	const timeline = useLocalizedRouteData(routeData);
	const t = useTranslation();
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
