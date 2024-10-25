import { Show, createMemo, useContext } from "solid-js";

import Paragraph from "~/components/Paragraph";
import Text from "~/components/Text";
import { LocaleContext } from "~/contexts/LocaleContext";
import useTranslation from "~/hooks/useTranslation";

export type Adaptation = {
	title: string;
	description?: string | null;
	parutionDate: Date;
	format: string;
	episodeNumber: number;
};

type AdaptationProps = {
	adaptation: Adaptation;
	noTitle?: boolean;
};

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
				<Text variant="big" color="primary-text">
					{props.adaptation.title}
				</Text>
			</Show>
			<div class="[&:not(:last-child)]:mb-midSectionBottom">
				<Text>
					{t(`series.details.overview.releasedOn.${props.adaptation.format}`, {
						count: props.adaptation.episodeNumber,
						date: dateString(),
					})}
				</Text>
			</div>
			<Show when={props.adaptation.description}>
				<Paragraph>{props.adaptation.description}</Paragraph>
			</Show>
		</div>
	);
}
