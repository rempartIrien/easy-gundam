import useRootPath from "~/hooks/useRootPath";

import Link from "../Link";

import { seriesItemStyle } from "./SeriesItem.css";

export interface BaseSeries {
	code: string;
	title: string;
	year: number;
}

interface SeriesItemProps {
	series: BaseSeries;
}

export default function SeriesItem(props: SeriesItemProps) {
	const rootPath = useRootPath();
	return (
		<Link
			class={seriesItemStyle}
			href={`${rootPath}series/${props.series.code}`}
		>
			{props.series.title}
		</Link>
	);
}
