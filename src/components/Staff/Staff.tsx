import clsx from "clsx";

import useTranslation from "~/hooks/useTranslation";

import Heading from "../Heading";
import MarkdownViewer from "../MarkdownViewer";

import { staffStyle } from "./Staff.css";

interface StaffProps {
	staff: string;
	class?: string;
}

export default function Staff(props: StaffProps) {
	const [t] = useTranslation();
	return (
		<section class={clsx(props.class)}>
			<Heading variant="subtitle">
				{t("series.details.overview.subtitles.staff")}
			</Heading>
			<MarkdownViewer class={staffStyle} content={props.staff} />
		</section>
	);
}
