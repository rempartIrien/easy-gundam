import { type Params, type RouteDefinition, cache } from "@solidjs/router";
import { Show, createMemo } from "solid-js";
import invariant from "tiny-invariant";

import { listSeries } from "~/api/series.server";
import { getTimelineByCode } from "~/api/timeline.server";
import Breadcrumb from "~/components/Breadcrumb";
import type { BreadcrumbItem } from "~/components/Breadcrumb/Breadcrumb";
import Chronology from "~/components/Chronology";
import DocumentTitle from "~/components/DocumentTitle";
import Heading from "~/components/Heading";
import MarkdownViewer from "~/components/MarkdownViewer";
import Section from "~/components/Section";
import useLocalizedRouteData from "~/hooks/useLocalizedRouteData";
import useRootPath from "~/hooks/useRootPath";
import useTranslation from "~/hooks/useTranslation";
import { isLanguage } from "~/i18n/i18n.config";

const routeData = cache(async (params: Params) => {
	"use server";
	invariant(isLanguage(params.lang), "Expected params.lang");
	invariant(params.timelineCode, "Expected params.timelineCode");

	const timeline = await getTimelineByCode(params.timelineCode, params.lang);
	const series = await listSeries(params.timelineCode, params.lang);
	return { timeline, series };
}, "timeline");

export const route = {
	preload: ({ params }) => routeData(params),
} satisfies RouteDefinition;

export default function Timeline() {
	const t = useTranslation();
	const timeline = useLocalizedRouteData(routeData);
	const rootPath = useRootPath();

	const breadcrumbItems = createMemo<BreadcrumbItem[] | undefined>(() => {
		const nonNullTimeline = timeline();
		if (nonNullTimeline) {
			return [
				{
					text: t("navigation.timelines"),
					href: `${rootPath()}timelines`,
				},
				{ text: nonNullTimeline.timeline.name },
			];
		}
	});

	return (
		<Show when={timeline()}>
			<Breadcrumb items={breadcrumbItems()} />
			<Heading variant="title">{timeline()?.timeline.name}</Heading>
			<Show when={timeline()}>
				{(data) => (
					<>
						<DocumentTitle
							content={[
								data().timeline.name,
								t("timelines.details.series.documentTitle"),
							]}
						/>
						<section class="py-4r">
							<Section>
								<MarkdownViewer content={data().timeline.description} />
							</Section>
							<Chronology
								timelineCode={data().timeline.code}
								items={data()?.series}
							/>
						</section>
					</>
				)}
			</Show>
		</Show>
	);
}
