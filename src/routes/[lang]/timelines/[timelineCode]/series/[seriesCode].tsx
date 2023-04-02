import { useI18n } from "@solid-primitives/i18n";
import { Show } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { Outlet, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import invariant from "tiny-invariant";

import { getSeriesByCode } from "~/api/series.server";
import Heading from "~/components/Heading";
import Nav from "~/components/Nav";
import NavItem from "~/components/NavItem";
import type { Language } from "~/i18n/i18n.config";

import { contentStyle, navStyle } from "./[seriesCode].css";

export function routeData({ params }: RouteDataArgs) {
	invariant(params.lang, "Expected params.lang");
	invariant(params.seriesCode, "Expected params.seriesCode");
	const series = createServerData$(
		async ([locale, , code]: string[]) =>
			getSeriesByCode(code, locale as Language),
		{ key: () => [params.lang, "series", params.seriesCode] },
	);
	return series;
}

export default function Series() {
	const [t] = useI18n();
	const series = useRouteData<typeof routeData>();
	return (
		<Show when={series()}>
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
