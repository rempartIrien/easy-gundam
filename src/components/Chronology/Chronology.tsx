import clsx from "clsx";
import type { JSX } from "solid-js";
import { Show, createMemo } from "solid-js";
import { For, splitProps } from "solid-js";

import {
	chronologyItemStyle,
	chronologyStyle,
	seriesListStyle,
	yearStyle,
} from "./Chronology.css";
import type { BaseSeries } from "./SeriesItem";
import SeriesItem from "./SeriesItem";

interface ChronologyProps extends JSX.OlHTMLAttributes<HTMLOListElement> {
	timelineCode: string;
	items: BaseSeries[] | undefined;
}

export default function Chronology(props: ChronologyProps) {
	const [local, others] = splitProps(props, ["timelineCode", "items", "class"]);

	const seriesByYear = createMemo(() => {
		return Object.entries(
			(local.items || []).reduce((acc, cur) => {
				return { ...acc, [cur.year]: (acc[cur.year] || []).concat(cur) };
			}, {} as Record<BaseSeries["year"], BaseSeries[]>),
		);
	});

	return (
		<Show when={seriesByYear()?.length}>
			<ol {...others} class={clsx(chronologyStyle, local.class)}>
				<For each={seriesByYear()}>
					{([year, items]) => (
						<li class={chronologyItemStyle}>
							<div class={yearStyle}>
								{local.timelineCode}&nbsp;{year}
							</div>
							<ol class={seriesListStyle}>
								<For each={items}>
									{(item) => (
										<li>
											<SeriesItem series={item} />
										</li>
									)}
								</For>
							</ol>
						</li>
					)}
				</For>
			</ol>
		</Show>
	);
}
