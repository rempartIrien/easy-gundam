import { clsx } from "clsx";
import { Show, splitProps } from "solid-js";
import type { JSX } from "solid-js";

import Heading from "../Heading";
import Section from "../Section/Section";

import { pageContentStyle } from "./PageContent.css";

type PageContentProps = JSX.IntrinsicElements["main"] & { title?: string };

export default function PageContent(props: PageContentProps) {
	const [local, others] = splitProps(props, ["class", "title", "children"]);
	return (
		<main class={clsx(pageContentStyle, local.class)} {...others}>
			<Show when={local.title}>
				<Heading variant="title">{local.title}</Heading>
			</Show>
			<Section>{local.children}</Section>
		</main>
	);
}
