import type { Params, RouteDefinition } from "@solidjs/router";
import { createAsync, useParams } from "@solidjs/router";
import { Show } from "solid-js";
import invariant from "tiny-invariant";

import DocumentTitle from "~/components/DocumentTitle";
import MarkdownViewer from "~/components/MarkdownViewer";
import Section from "~/components/Section";
import useTranslation from "~/hooks/useTranslation";
import type { Language } from "~/i18n/i18n.config";

import { getTimeline } from "../timeline.server";

async function loadFunction(params: Params) {
	invariant(params.lang, "Expected params.lang");
	invariant(params.timelineCode, "Expected params.timelineCode");
	return getTimeline(params.timelineCode, params.lang as Language);
}

export const route = {
	load: ({ params }) => loadFunction(params),
} as RouteDefinition;

export default function TimelineDescription() {
	const params = useParams();
	const timeline = createAsync(() => loadFunction(params));
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
