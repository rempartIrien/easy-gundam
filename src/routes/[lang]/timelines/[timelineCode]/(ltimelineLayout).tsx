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
import { getTimelineByCode } from "~/graphql/timeline.server";
import type { Language } from "~/i18n/i18n.config";

import { contentStyle, navStyle } from "./(ltimelineLayout).css";

export function routeData({ params }: RouteDataArgs) {
	invariant(params.lang, "Expected params.lang");
	invariant(params.timelineCode, "Expected params.timelineCode");
	const timeline = createServerData$(
		async ([locale, , code]: string[]) => {
			const t = await getTimelineByCode(code, locale as Language);
			return {
				...t,
				description: marked(t.description || ""),
			};
		},
		{ key: () => [params.lang, "timelines", params.timelineCode] },
	);
	return timeline;
}

export default function Timeline() {
	const [t] = useI18n();
	const timeline = useRouteData<typeof routeData>();
	return (
		<Show when={timeline()}>
			<Heading variant="title">{timeline()?.name}</Heading>
			<Nav
				class={navStyle}
				items={[
					<NavItem href="" end>
						{t("timelines.nav.description")}
					</NavItem>,
					<NavItem href="series">{t("timelines.nav.series")}</NavItem>,
				]}
			/>
			<section class={contentStyle}>
				<Outlet />
			</section>
		</Show>
	);
}
