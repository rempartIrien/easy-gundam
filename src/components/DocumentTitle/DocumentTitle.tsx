import { Title } from "@solidjs/meta";
import type { JSX } from "solid-js";
import { createMemo } from "solid-js";
import { splitProps } from "solid-js";

import useAppName from "~/hooks/useAppName";

type TitleProps = Omit<JSX.IntrinsicElements["title"], "children"> & {
	content?: string | string[] | (string | undefined)[];
};

const delimiter = " ･ ";

function getContentArray(content: TitleProps["content"]): string[] {
	if (!content) {
		return [];
	}
	if (!Array.isArray(content)) {
		return [content];
	}
	return content.filter((v) => v) as string[];
}

export default function DocumentTitle(props: TitleProps) {
	const appName = useAppName();
	const [local, others] = splitProps(props, ["content"]);

	// For some reasons, Solid dislikes nodes with several children.
	// Compute a single string to make it happy.
	const title = createMemo(() =>
		getContentArray(local.content).concat(String(appName)).join(delimiter),
	);

	return <Title {...others}>{title()}</Title>;
}
