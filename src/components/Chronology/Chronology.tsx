import type { JSX } from "solid-js";
import { Show, createMemo } from "solid-js";
import { For, splitProps } from "solid-js";

import Text from "../Text";

import type { BaseSeries } from "./SeriesItem";
import SeriesItem from "./SeriesItem";

type ChronologyProps = Omit<JSX.OlHTMLAttributes<HTMLOListElement>, "class"> & {
	timelineCode: string;
	items: BaseSeries[] | undefined;
};

export default function Chronology(props: ChronologyProps) {
	const [local, others] = splitProps(props, ["timelineCode", "items"]);

	const seriesByYear = createMemo(() => {
		return Object.entries(
			(local.items || []).reduce(
				(acc, cur) => {
					return { ...acc, [cur.year]: (acc[cur.year] || []).concat(cur) };
				},
				{} as Record<BaseSeries["year"], BaseSeries[]>,
			),
		);
	});

	return (
		<Show when={seriesByYear()?.length}>
			<ol
				{...others}
				class="m-0 list-none p-0 before:block before:h-5r before:w-chronologyYearWidth before:max-w-chronologyYearColumnWidth before:border-0 after:block after:h-5r after:w-chronologyYearWidth after:max-w-chronologyYearColumnWidth after:border-0 md:before:border-r-chronologyBorderWidth md:before:border-dashed md:before:border-r-primary-main md:before:content-[''] md:after:border-r-chronologyBorderWidth md:after:border-dashed md:after:border-r-primary-main md:after:content-[''] lg:before:max-w-none lg:after:max-w-none"
			>
				<For each={seriesByYear()}>
					{([year, items]) => (
						<li class="group md:flex md:items-stretch lg:even:flex-row-reverse">
							<div class="mb-midSectionBottom text-center text-primary-main md:relative md:mb-0 md:me-chronologyGap md:inline-block md:w-chronologyYearWidth md:max-w-chronologyYearColumnWidth md:border-0 md:border-r-chronologyBorderWidth md:border-solid md:border-primary-main md:pr-chronologyGap md:pt-chronologyBulletPaddingTop md:text-end md:text-primary-text md:after:absolute md:after:right-chronologyBulletRight md:after:top-chronologyBulletTop md:after:inline-block md:after:h-chronologyBulletSize md:after:w-chronologyBulletSize md:after:shrink-0 md:after:-translate-y-1/2 md:after:rounded-full md:after:bg-primary-main md:after:content-[''] lg:max-w-none lg:group-even:me-0 lg:group-even:ms-chronologyGap lg:group-even:border-l-chronologyBorderWidth lg:group-even:border-r-0 lg:group-even:pl-chronologyGap lg:group-even:pr-0 lg:group-even:text-start lg:group-even:after:left-chronologyBulletRight lg:group-even:after:right-0">
								<Text variant="big">
									{`${local.timelineCode}\u00A0${year}`}
								</Text>
							</div>
							<ol class="m-0 grid flex-1 list-none grid-cols-1 gap-4r p-0 pb-4r">
								<For each={items}>
									{(item) => (
										<li>
											<SeriesItem
												series={item}
												timelineCode={local.timelineCode}
											/>
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
