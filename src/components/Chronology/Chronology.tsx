import clsx from "clsx";
import type { JSX } from "solid-js";
import { Show, createMemo } from "solid-js";
import { For, splitProps } from "solid-js";
import { A } from "solid-start";

import useRootPath from "~/hooks/useRootPath";

import {
	chronologyItemStyle,
	chronologyStyle,
	seriesListStyle,
	yearStyle,
} from "./Chronology.css";

interface BaseSeries {
	code: string;
	title: string;
	year: number;
}

interface ChronologyProps extends JSX.OlHTMLAttributes<HTMLOListElement> {
	timelineCode: string;
	items: BaseSeries[] | undefined;
}

export default function Chronology(props: ChronologyProps) {
	const [local, others] = splitProps(props, ["timelineCode", "items", "class"]);
	const rootPath = useRootPath();

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
											<A href={`${rootPath}series/${item.code}`}>
												{item.title}
											</A>
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
