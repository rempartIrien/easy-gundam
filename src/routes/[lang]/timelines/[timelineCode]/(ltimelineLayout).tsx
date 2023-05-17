import { useI18n } from "@solid-primitives/i18n";
import { Show, createMemo } from "solid-js";
import type { RouteDataArgs } from "solid-start";
import { Outlet, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import invariant from "tiny-invariant";

import { getTimelineByCode } from "~/api/timeline.server";
import Breadcrumb from "~/components/Breadcrumb";
import type { BreadcrumbItem } from "~/components/Breadcrumb/Breadcrumb";
import Heading from "~/components/Heading";
import Nav from "~/components/Nav";
import NavItem from "~/components/NavItem";
import useRootPath from "~/hooks/useRootPath";
import type { Language } from "~/i18n/i18n.config";

import { contentStyle, navStyle } from "./(ltimelineLayout).css";

export function routeData({ params }: RouteDataArgs) {
	invariant(params.lang, "Expected params.lang");
	invariant(params.timelineCode, "Expected params.timelineCode");
	const timeline = createServerData$(
		async ([locale, , code]: string[]) =>
			getTimelineByCode(code, locale as Language),
		{ key: () => [params.lang, "timelines", params.timelineCode] },
	);
	return timeline;
}

export default function Timeline() {
	const [t] = useI18n();
	const timeline = useRouteData<typeof routeData>();
	const rootPath = useRootPath();

	const breadcrumbItems = createMemo<BreadcrumbItem[] | undefined>(() => {
		const nonNullTimeline = timeline();
		if (nonNullTimeline) {
			return [
				{
					text: t("navigation.timelines"),
					href: `${rootPath()}timelines`,
				},
				{ text: nonNullTimeline.name },
			];
		}
	});

	return (
		<Show when={timeline()}>
			<Breadcrumb items={breadcrumbItems()} />
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
