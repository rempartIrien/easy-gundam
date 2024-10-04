import type { Params, RouteDefinition } from "@solidjs/router";
import type { JSX } from "solid-js";
import { Show, createMemo } from "solid-js";
import invariant from "tiny-invariant";

import Breadcrumb from "~/components/Breadcrumb";
import type { BreadcrumbItem } from "~/components/Breadcrumb/Breadcrumb";
import Heading from "~/components/Heading";
import Nav from "~/components/Nav";
import NavItem from "~/components/NavItem";
import useLocalizedRouteData from "~/hooks/useLocalizedRouteData";
import useRootPath from "~/hooks/useRootPath";
import useTranslation from "~/hooks/useTranslation";
import { isLanguage } from "~/i18n/i18n.config";

import { contentStyle, navStyle } from "./[seriesCode].css";
import { getSeries } from "./series.server";

function routeData(params: Params) {
	"use server";
	invariant(isLanguage(params.lang), "Expected params.lang");
	invariant(params.seriesCode, "Expected params.seriesCode");

	return getSeries(params.seriesCode, params.lang);
}

export const route = {
	preload: ({ params }) => routeData(params),
} satisfies RouteDefinition;

interface SeriesProps {
	children: JSX.Element;
}

export default function Series(props: SeriesProps) {
	const t = useTranslation();
	const rootPath = useRootPath();
	const series = useLocalizedRouteData(routeData);
	const breadcrumbItems = createMemo<BreadcrumbItem[] | undefined>(() => {
		const nonNullSeries = series();
		if (nonNullSeries && nonNullSeries.timeline) {
			return [
				{
					text: t("navigation.timelines"),
					href: `${rootPath()}timelines`,
				},
				{
					text: nonNullSeries.timeline.name,
					href: `${rootPath()}timelines/${nonNullSeries.timeline.code}/series`,
				},
				{ text: nonNullSeries.title },
			];
		}
	});

	return (
		<Show when={series()}>
			<Breadcrumb items={breadcrumbItems()} />
			<Heading variant="title">{series()?.title}</Heading>
			<Show when={series()?.insights || series()?.analysis}>
				<Nav
					class={navStyle}
					items={[
						<NavItem href="" end>
							{t("series.nav.overview")}
						</NavItem>,
						series()?.insights && (
							<NavItem href="insights">{t("series.nav.insights")}</NavItem>
						),
						series()?.analysis && (
							<NavItem href="analysis">{t("series.nav.analysis")}</NavItem>
						),
					]}
				/>
			</Show>
			<section class={contentStyle}>{props.children}</section>
		</Show>
	);
}
