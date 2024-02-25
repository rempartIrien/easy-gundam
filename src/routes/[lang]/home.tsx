import { Show } from "solid-js";
import { type RouteDataArgs, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import invariant from "tiny-invariant";

import DocumentTitle from "~/components/DocumentTitle";
import Heading from "~/components/Heading";
import MarkdownViewer from "~/components/MarkdownViewer";
import Paragraph from "~/components/Paragraph";
import Section from "~/components/Section";
import useTranslation from "~/hooks/useTranslation";

import { paragraphStyle, titleStyle } from "./home.css";

// FIXME: This is not intended to stay here, it's just to tell people what to
// check when landing on the site.
export function routeData({ params }: RouteDataArgs) {
	invariant(params.lang, "Expected params.lang");
	// Import Markdown file dynamically according to current locale.
	// See https://vitejs.dev/guide/assets.html#importing-asset-as-string
	const content = createServerData$(
		([locale]: string[]) =>
			import(`../../../assets/markdown/${locale}/home.md?raw`).then(
				(response: { default: string }) => response.default,
			),
		{
			key: () => [params.lang, "home"],
		},
	);
	return content;
}

export default function Home() {
	const [t] = useTranslation();
	const content = useRouteData<typeof routeData>();

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
