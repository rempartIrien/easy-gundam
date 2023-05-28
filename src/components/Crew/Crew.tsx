import { useI18n } from "@solid-primitives/i18n";
import clsx from "clsx";

import Heading from "../Heading";
import MarkdownViewer from "../MarkdownViewer";

import { crewStyle } from "./Crew.css";

interface CrewProps {
	crew: string;
	class?: string;
}

export default function Crew(props: CrewProps) {
	const [t] = useI18n();
	return (
		<section class={clsx(props.class)}>
			<Heading variant="subtitle">
				{t("series.details.overview.subtitles.crew")}
			</Heading>
			<MarkdownViewer class={crewStyle} content={props.crew} />
		</section>
	);
}
