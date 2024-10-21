import { Show, createMemo, useContext } from "solid-js";

import Paragraph from "~/components/Paragraph";
import Text from "~/components/Text";
import { LocaleContext } from "~/contexts/LocaleContext";
import useTranslation from "~/hooks/useTranslation";

export interface Adaptation {
	title: string;
	description?: string | null;
	parutionDate: Date;
	format: string;
	episodeNumber: number;
}

interface AdaptationProps {
	adaptation: Adaptation;
	noTitle?: boolean;
}

export default function Adaptation(props: AdaptationProps) {
	const t = useTranslation();
	const [currentLocale] = useContext(LocaleContext);

	const dateString = createMemo(() => {
		const date = new Date(props.adaptation.parutionDate);
		return new Intl.DateTimeFormat(currentLocale(), {
			dateStyle: "long",
		}).format(date);
	});

	return (
		<div>
			<Show when={!props.noTitle}>
				<Text variant="big" color="primary">
					{props.adaptation.title}
				</Text>
			</Show>
			<Text component="div" class="[&:not(:last-child)]:mb-midSectionBottom">
				{t(`series.details.overview.releasedOn.${props.adaptation.format}`, {
					count: props.adaptation.episodeNumber,
					date: dateString(),
				})}
			</Text>
			<Show when={props.adaptation.description}>
				<Paragraph>{props.adaptation.description}</Paragraph>
			</Show>
		</div>
	);
}
