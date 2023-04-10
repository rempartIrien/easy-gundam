import clsx from "clsx";
import type { ComponentProps } from "solid-js";
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
	return (
		<SolidMarkdown
			class={clsx([viewerStyles, props.class])}
			components={componentMap}
		>
			{props.content}
		</SolidMarkdown>
	);
}
