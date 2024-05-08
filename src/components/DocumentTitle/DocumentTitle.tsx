import { Title } from "@solidjs/meta";
import type { JSX } from "solid-js";
import { createEffect } from "solid-js";
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

	// FIXME: Remove this line when SolidStart use something else than Solid Meta
	// or when the app does not have TWO `Title` tags.
	// Currently, the first page rendered server-side has the right `Title`, but
	// it does not get updated if it contains reactive stuff.
	createEffect(() => (document.title = title()));

	return <Title {...others}>{title()}</Title>;
}
