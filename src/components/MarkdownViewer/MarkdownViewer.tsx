import clsx from "clsx";

import { viewerStyles } from "./MarkdownViewer.css";

interface MarkdownViewerProps {
	class?: string;
	content?: string;
}

export default function MarkdownViewer(props: MarkdownViewerProps) {
	return (
		// eslint-disable-next-line solid/no-innerhtml
		<div class={clsx([viewerStyles, props.class])} innerHTML={props.content} />
	);
}
