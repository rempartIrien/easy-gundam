import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

type SectionProps = Omit<JSX.IntrinsicElements["section"], "class">;

export default function Section(props: SectionProps) {
	const [local, others] = splitProps(props, ["children"]);
	return (
		<section
			class="mb-sectionBottom flex w-full flex-col items-center"
			{...others}
		>
			{local.children}
		</section>
	);
}
