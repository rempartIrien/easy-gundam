import clsx from "clsx";

import useRootPath from "~/hooks/useRootPath";

import Card from "../Card";
import Image from "../Image";
import Link from "../Link";
import Text from "../Text";

import { seriesItemStyle, textBlockStyle, titleStyle } from "./SeriesItem.css";

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
	class?: string;
}

// TODO: fallback when image is null
// TODO: fix image size accordin to size
export default function SeriesItem(props: SeriesItemProps) {
	const rootPath = useRootPath();
	return (
		<Card
			component={Link}
			noStyle
			class={clsx([seriesItemStyle, props.class])}
			href={`${rootPath()}timelines/${props.timelineCode}/series/${
				props.series.code
			}`}
		>
			<Image
				imageId={props.series.image?.id}
				alt={props.series.image?.description || props.series.title}
				size="extraSmall"
			/>
			<div class={textBlockStyle}>
				<Text component="div" variant="big" class={titleStyle}>
					{props.series.title}
				</Text>
				<Text component="div">{props.series.description}</Text>
			</div>
		</Card>
	);
}
