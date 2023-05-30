import clsx from "clsx";
import { Show, createMemo, useContext } from "solid-js";

import Text from "~/components/Text";
import { LocaleContext } from "~/contexts/LocaleContext";
import useTranslation from "~/hooks/useTranslation";

import { adaptationStyle, textStyle } from "./Adaptation.css";

export interface Adaptation {
	title: string;
	description?: string | null;
	parutionDate: Date;
	format: string;
	episodeNumber: number;
}

interface AdaptationProps {
	adaptation: Adaptation;
	class?: string;
	noTitle?: boolean;
}

export default function Adaptation(props: AdaptationProps) {
	const [t] = useTranslation();
	const [currentLocale] = useContext(LocaleContext);

	const dateString = createMemo(() => {
		const date = new Date(props.adaptation.parutionDate);
		return new Intl.DateTimeFormat(currentLocale(), {
			dateStyle: "long",
		}).format(date);
	});

	return (
		<div class={clsx([adaptationStyle, props.class])}>
			<Show when={!props.noTitle}>
				<Text variant="big" class={textStyle}>
					{props.adaptation.title}
				</Text>
			</Show>
			<Text class={textStyle}>
				{t(`series.details.overview.releasedOn.${props.adaptation.format}`, {
					count: props.adaptation.episodeNumber,
					date: dateString(),
				})}
			</Text>
			<Show when={props.adaptation.description}>
				<Text class={textStyle}>{props.adaptation.description}</Text>
			</Show>
		</div>
	);
}
