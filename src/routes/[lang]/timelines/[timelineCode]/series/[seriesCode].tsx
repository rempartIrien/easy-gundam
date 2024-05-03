import type { Params, RouteDefinition } from "@solidjs/router";
import { cache, createAsync, useParams } from "@solidjs/router";
import type { JSX } from "solid-js";
import { Show, createMemo } from "solid-js";
import invariant from "tiny-invariant";

import { getSeriesByCode } from "~/api/series.server";
import Breadcrumb from "~/components/Breadcrumb";
import type { BreadcrumbItem } from "~/components/Breadcrumb/Breadcrumb";
import Heading from "~/components/Heading";
import Nav from "~/components/Nav";
import NavItem from "~/components/NavItem";
import useRootPath from "~/hooks/useRootPath";
import useTranslation from "~/hooks/useTranslation";
import type { Language } from "~/i18n/i18n.config";

import { contentStyle, navStyle } from "./[seriesCode].css";

const routeData = cache((code: string, locale: Language) => {
	"use server";
	return getSeriesByCode(code, locale as Language);
}, "series");

function loadFunction(params: Params) {
	invariant(params.lang, "Expected params.lang");
	invariant(params.seriesCode, "Expected params.seriesCode");
	return routeData(params.seriesCode, params.lang as Language);
}

export const route = {
	load: ({ params }) => loadFunction(params),
} satisfies RouteDefinition;

interface SeriesProps {
	children: JSX.Element;
}

export default function Series(props: SeriesProps) {
	const [t] = useTranslation();
	const rootPath = useRootPath();
	const params = useParams();
	const series = createAsync(() => loadFunction(params));
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
