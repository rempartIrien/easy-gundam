import clsx from "clsx";
import { For, Show } from "solid-js";

import useTranslation from "~/hooks/useTranslation";

import Heading from "../Heading";
import List from "../List";

import Adaptation from "./Adaptation";

type Adaptation = {
	title: string;
	description?: string | null;
	parutionDate: Date;
	format: string;
	episodeNumber: number;
};

type AdaptationsProps = {
	adaptations: Adaptation[];
	class?: string;
};

export default function Adaptations(props: AdaptationsProps) {
	const t = useTranslation();

	return (
		<Show when={props.adaptations.length}>
			<section class={clsx(props.class)}>
				<Show
					when={props.adaptations.length !== 1}
					fallback={
						<>
							<Heading variant="subtitle">
								{t("series.details.overview.subtitles.information")}
							</Heading>
							<Adaptation adaptation={props.adaptations[0]} noTitle />
						</>
					}
				>
					<Heading variant="subtitle">
						{t("series.details.overview.subtitles.adaptations")}
					</Heading>
					<List component="ol" class="flex flex-col gap-midSectionBottom">
						<For each={props.adaptations}>
							{(adaptation) => (
								<li>
									<Adaptation adaptation={adaptation} />
								</li>
							)}
						</For>
					</List>
				</Show>
			</section>
		</Show>
	);
}
