import type { Params, RouteDefinition } from "@solidjs/router";
import { createAsync, useParams } from "@solidjs/router";
import type { JSX } from "solid-js";
import { Show, createMemo } from "solid-js";
import invariant from "tiny-invariant";

import Breadcrumb from "~/components/Breadcrumb";
import type { BreadcrumbItem } from "~/components/Breadcrumb/Breadcrumb";
import Heading from "~/components/Heading";
import Nav from "~/components/Nav";
import NavItem from "~/components/NavItem";
import useRootPath from "~/hooks/useRootPath";
import useTranslation from "~/hooks/useTranslation";
import { isLanguage } from "~/i18n/i18n.config";

import { contentStyle, navStyle } from "./(ltimelineLayout).css";
import { getTimeline } from "./timeline.server";

function loadFunction(params: Params) {
	invariant(isLanguage(params.lang), "Expected params.lang");

	invariant(params.timelineCode, "Expected params.timelineCode");
	return getTimeline(params.timelineCode, params.lang);
}

export const route = {
	load: ({ params }) => loadFunction(params),
} satisfies RouteDefinition;

interface TimelineProps {
	children: JSX.Element;
}

export default function Timeline(props: TimelineProps) {
	const t = useTranslation();
	const params = useParams();
	const timeline = createAsync(() => loadFunction(params));
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
			<section class={contentStyle}>{props.children}</section>
		</Show>
	);
}
