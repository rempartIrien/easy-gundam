import { useI18n } from "@solid-primitives/i18n";
import { marked } from "marked";
import { Show } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { Outlet, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import invariant from "tiny-invariant";

import Heading from "~/components/Heading";
import Nav from "~/components/Nav";
import NavItem from "~/components/NavItem";
import { getSeriesByCode } from "~/graphql/series.server";
import type { Language } from "~/i18n/i18n.config";

import { contentStyle, navStyle } from "./[code].css";

export function routeData({ params }: RouteDataArgs) {
	invariant(params.lang, "Expected params.lang");
	invariant(params.code, "Expected params.code");
	const series = createServerData$(
		async ([locale, , code]: string[]) => {
			const t = await getSeriesByCode(code, locale as Language);
			return {
				...t,
				description: marked(t.description || ""),
			};
		},
		{ key: () => [params.lang, "series", params.code] },
	);
	return series;
}

export default function Series() {
	const [t] = useI18n();
	const series = useRouteData<typeof routeData>();
	return (
		<Show when={series()}>
			<Heading variant="title">{series()?.title}</Heading>
			<Nav
				class={navStyle}
				items={[
					<NavItem href="" end>
						{t("series.nav.description")}
					</NavItem>,
					<NavItem href="adaptations">{t("series.nav.adaptations")}</NavItem>,
				]}
			/>
			<section class={contentStyle}>
				<Outlet />
			</section>
		</Show>
	);
}
