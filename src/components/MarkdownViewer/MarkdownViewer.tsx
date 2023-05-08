import clsx from "clsx";
import type { ComponentProps } from "solid-js";
import { Show } from "solid-js";
import { createSignal } from "solid-js";
import { children, createEffect } from "solid-js";
import { splitProps } from "solid-js";
import SolidMarkdown from "solid-markdown";

import Heading from "../Heading";
import Link from "../Link";
import List from "../List";
import Paragraph from "../Paragraph/Paragraph";
import Text from "../Text";

import { viewerStyles } from "./MarkdownViewer.css";

interface MarkdownViewerProps {
	class?: string;
	content?: string;
}

const componentMap: ComponentProps<typeof SolidMarkdown>["components"] = {
	h1: (props) => {
		const [, others] = splitProps(props, ["node"]);
		return <Heading variant="subtitle" {...others} />;
	},
	p: (props) => {
		const [, others] = splitProps(props, ["node"]);
		return <Paragraph {...others} />;
	},
	a: (props) => {
		const [local, others] = splitProps(props, ["node", "href"]);
		return (
			<>
				{local.href ? (
					<Link href={local.href} {...others} />
				) : (
					<Text {...others} />
				)}
			</>
		);
	},
	ul: (props) => {
		const [, others] = splitProps(props, ["node"]);
		return <List {...others} />;
	},
};

export default function MarkdownViewer(props: MarkdownViewerProps) {
	// FIXME: Workaround for https://github.com/andi23rosca/solid-markdown/issues/7
	// and https://github.com/andi23rosca/solid-markdown/pull/10
	// Also do not access `props.content` twice https://github.com/solidjs/solid/issues/1485
	const content = children(() => props.content);
	const [updating, setUpdating] = createSignal(0);
	const [updated, setUpdated] = createSignal(0);

	createEffect(() => {
		if (content()) {
			setUpdating((prev) => prev + 1);
		}
	});

	createEffect(() => {
		if (updating()) {
			setTimeout(() => setUpdated((prev) => prev + 1));
		}
	});

	return (
		<Show when={updating() === updated()}>
			<SolidMarkdown
				class={clsx([viewerStyles, props.class])}
				components={componentMap}
			>
				{content() as string}
			</SolidMarkdown>
		</Show>
	);
}
