import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

type CenterContentProps = Omit<JSX.IntrinsicElements["div"], "class">;

export default function CenterContent(props: CenterContentProps) {
	const [local, other] = splitProps(props, ["children"]);
	return (
		<div class="mx-auto my-0 w-min-100-xl px-2f md:px-3f" {...other}>
			{local.children}
		</div>
	);
}
