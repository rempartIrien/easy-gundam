import type { Params, RouteDefinition } from "@solidjs/router";
import { cache } from "@solidjs/router";
import { Show } from "solid-js";
import invariant from "tiny-invariant";

import DocumentTitle from "~/components/DocumentTitle";
import Heading from "~/components/Heading";
import MarkdownViewer from "~/components/MarkdownViewer";
import Paragraph from "~/components/Paragraph";
import Section from "~/components/Section";
import useLocalizedRouteData from "~/hooks/useLocalizedRouteData";
import useTranslation from "~/hooks/useTranslation";
import { isLanguage } from "~/i18n/i18n.config";

import { paragraphStyle, titleStyle } from "./home.css";

// FIXME: This is not intended to stay here, it's just to tell people what to
// check when landing on the site.
const routeData = cache((params: Params) => {
	"use server";
	invariant(isLanguage(params.lang), "Expected params.lang");
	// Import Markdown file dynamically according to current locale.
	// See https://vitejs.dev/guide/assets.html#importing-asset-as-string
	return import(`../../../assets/markdown/${params.lang}/home.md?raw`).then(
		(response: { default: string }) => response.default,
	);
}, "home");

export const route = {
	preload: ({ params }) => routeData(params),
} satisfies RouteDefinition;

export default function Home() {
	const t = useTranslation();
	const content = useLocalizedRouteData(routeData);

	return (
		<main>
			<DocumentTitle content={t("home.documentTitle")} />
			<Heading variant="title" class={titleStyle}>
				{t("home.title")}
			</Heading>
			<Section>
				<Paragraph class={paragraphStyle}>{t("home.subtitle")}</Paragraph>
				<Show when={content()}>
					<MarkdownViewer content={content()} />
				</Show>
			</Section>
		</main>
	);
}
