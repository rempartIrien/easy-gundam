import clsx from "clsx";
import { For } from "solid-js";

import useTranslation from "~/hooks/useTranslation";

import Heading from "../Heading";
import List from "../List";

import { adaptationsStyle } from "./Adaptations.css";

interface Adaptation {
	title: string;
}

interface AdaptationsProps {
	adaptations: Adaptation[];
	class?: string;
}

export default function Adaptations(props: AdaptationsProps) {
	const [t] = useTranslation();
	return (
		<section class={clsx(props.class)}>
			<Heading variant="subtitle">
				{t("series.details.overview.subtitles.adaptations")}
			</Heading>
			<List class={adaptationsStyle}>
				<For each={props.adaptations}>
					{(adaptation) => <li>{adaptation.title}</li>}
				</For>
			</List>
		</section>
	);
}
