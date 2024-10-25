import useRootPath from "~/hooks/useRootPath";

import Card from "../Card";
import Image from "../Image";
import Link from "../Link";
import Text from "../Text";

export interface BaseSeries {
	code: string;
	title: string;
	description: string | null;
	year: number;
	image: { id: string | null; description: string | null } | null;
}

interface SeriesItemProps {
	series: BaseSeries;
	timelineCode: string;
}

// TODO: fallback when image is null
// TODO: fix image size accordin to size
export default function SeriesItem(props: SeriesItemProps) {
	const rootPath = useRootPath();
	return (
		<Link
			noStyle
			block
			href={`${rootPath()}timelines/${props.timelineCode}/series/${
				props.series.code
			}`}
		>
			<Card>
				<div class="group flex gap-2f">
					<Image
						imageId={props.series.image?.id}
						alt={props.series.image?.description || props.series.title}
						size="extraSmall"
					/>
					<div class="flex-1 self-stretch">
						<div class="text-primary-text group-hover:text-primary-main">
							<Text variant="big">{props.series.title}</Text>
						</div>
						<Text block>{props.series.description}</Text>
					</div>
				</div>
			</Card>
		</Link>
	);
}
