import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

import Text from "../Text";
import type { TextProps } from "../Text/Text";

type ParagraphProps = Omit<JSX.IntrinsicElements["p"], "class"> &
	Partial<Pick<TextProps, "variant" | "color">>;

export default function Paragraph(props: ParagraphProps) {
	const [local, otherProps] = splitProps(props, ["children"]);
	return (
		<Text block {...otherProps}>
			{local.children}
		</Text>
	);
}
