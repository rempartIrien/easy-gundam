import { Show } from "solid-js";

import useRootPath from "~/hooks/useRootPath";

import Link from "../Link";
import Text from "../Text";

import { contentStyle, seriesItemStyle, titleStyle } from "./SeriesItem.css";

export interface BaseSeries {
	code: string;
	title: string;
	description: string | null;
	year: number;
	image: { id: string | null; description: string | null } | null;
}

interface SeriesItemProps {
	series: BaseSeries;
}

export default function SeriesItem(props: SeriesItemProps) {
	const rootPath = useRootPath();
	return (
		<Link
			noStyle
			class={seriesItemStyle}
			href={`${rootPath}series/${props.series.code}`}
		>
			<Show when={props.series.image?.id}>
				<div>
					<img
						src={`/api/images/${props.series.image?.id as string}/extraSmall`}
						alt={props.series.image?.description || props.series.title}
						srcset={`/api/images/${props.series.image?.id as string}/small 2x`}
					/>
				</div>
			</Show>
			<div class={contentStyle}>
				<Text variant="big" class={titleStyle}>
					{props.series.title}
				</Text>
				<Text variant="normal">{props.series.description}</Text>
			</div>
		</Link>
	);
}
