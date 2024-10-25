import useTranslation from "~/hooks/useTranslation";

import Heading from "../Heading";
import MarkdownViewer from "../MarkdownViewer";

interface StaffProps {
	staff: string;
	class?: string;
}

export default function Staff(props: StaffProps) {
	const t = useTranslation();
	return (
		<>
			<Heading variant="subtitle">
				{t("series.details.overview.subtitles.staff")}
			</Heading>
			<div class="glass-effect !px-2f !py-2r">
				<MarkdownViewer content={props.staff} />
			</div>
		</>
	);
}
