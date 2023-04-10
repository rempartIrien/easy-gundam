import clsx from "clsx";
import SolidMarkdown from "solid-markdown";

import { viewerStyles } from "./MarkdownViewer.css";

interface MarkdownViewerProps {
	class?: string;
	content?: string;
}

export default function MarkdownViewer(props: MarkdownViewerProps) {
	return (
		<SolidMarkdown
			class={clsx([viewerStyles, props.class])}
			children={props.content}
		/>
	);
}
