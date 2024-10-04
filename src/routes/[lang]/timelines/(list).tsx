import type { Params, RouteDefinition } from "@solidjs/router";
import { cache } from "@solidjs/router";
import { For } from "solid-js";
import invariant from "tiny-invariant";

import Breadcrumb from "~/components/Breadcrumb";
import DocumentTitle from "~/components/DocumentTitle";
import Heading from "~/components/Heading";
import Link from "~/components/Link";
import List from "~/components/List";
import Section from "~/components/Section";
import { listTimelines } from "~/graphql/timeline.server";
import useLocalizedRouteData from "~/hooks/useLocalizedRouteData";
import useTranslation from "~/hooks/useTranslation";
import { isLanguage } from "~/i18n/i18n.config";

const routeData = cache(async (params: Params) => {
	"use server";
	invariant(isLanguage(params.lang), "Expected params.lang");
	return listTimelines(params.lang);
}, "timelines");

export const route = {
	preload: ({ params }) => routeData(params),
} satisfies RouteDefinition;

export default function Timelines() {
	const t = useTranslation();
	const timelines = useLocalizedRouteData(routeData);

	return (
		<>
			<DocumentTitle content={t("timelines.list.documentTitle")} />
			<Breadcrumb items={[{ text: t("navigation.timelines") }]} />
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
