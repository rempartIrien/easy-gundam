import clsx from "clsx";
import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

import Text from "../Text";
import type { TextProps } from "../Text/Text";

type ParagraphProps = JSX.IntrinsicElements["p"] &
	Partial<Pick<TextProps, "variant">>;

export default function Paragraph(props: ParagraphProps) {
	const [local, otherProps] = splitProps(props, ["class", "children"]);
	return (
		<Text
			component="p"
			class={clsx(["text-block", local.class])}
			{...otherProps}
		>
			{local.children}
		</Text>
	);
}
