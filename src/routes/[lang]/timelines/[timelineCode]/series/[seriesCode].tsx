import { Show, createMemo } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { Outlet, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
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

export function routeData({ params }: RouteDataArgs) {
	invariant(params.lang, "Expected params.lang");
	invariant(params.seriesCode, "Expected params.seriesCode");
	const series = createServerData$(
		([locale, , code]: string[]) => getSeriesByCode(code, locale as Language),
		{ key: () => [params.lang, "series", params.seriesCode] },
	);
	return series;
}

export default function Series() {
	const [t] = useTranslation();
	const rootPath = useRootPath();
	const series = useRouteData<typeof routeData>();
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
			<section class={contentStyle}>
				<Outlet />
			</section>
		</Show>
	);
}
