import { useI18n } from "@solid-primitives/i18n";
import type { JSX } from "solid-js";
import { createEffect } from "solid-js";
import { createMemo } from "solid-js";
import { splitProps } from "solid-js";
import { Title } from "solid-start";

type TitleProps = JSX.IntrinsicElements["title"];

export default function DocumentTitle(props: TitleProps) {
	const [t] = useI18n();
	const [local, others] = splitProps(props, ["children"]);

	// For some reasons, Solid dislikes nodes with several children.
	// Compute a single string to make it happy.
	const title = createMemo(() =>
		local.children
			? `${String(local.children)} - ${String(t("appName"))}`
			: String(t("appName")),
	);

	// FIXME: Remove this line when SolidStart use something else than Solid Meta
	// or when the app does not have TWO `Title` tags.
	// Currently, the first page rendered server-side has the right `Title`, but
	// it does not get updated if it contains reactive stuff.
	createEffect(() => (document.title = title()));

	return <Title {...others}>{title()}</Title>;
}
