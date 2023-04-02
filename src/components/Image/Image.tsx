import clsx from "clsx";
import {
	Show,
	createEffect,
	createMemo,
	createSignal,
	onMount,
} from "solid-js";

import useIsDarkMode from "~/hooks/useIsDarkMode";
import type { ImageSizeName } from "~/types/ImageSize";
import { imageSizeMap } from "~/types/ImageSize";
import getSize2x from "~/utils/get-size-2x";

import { hiddenFallbackStyle } from "./Image.css";

interface ImageProps {
	imageId?: string | null;
	alt: string;
	size: ImageSizeName;
}

export default function Image(props: ImageProps) {
	const size2x = createMemo(() => getSize2x(props.size));
	const [fallback, setFallback] = createSignal(true);
	const isDarkMode = useIsDarkMode();

	onMount(() => setFallback(!props.imageId));
	createEffect(() => setFallback(!props.imageId));

	return (
		<Show
			when={!fallback()}
			fallback={
				<img
					class={clsx([isDarkMode() === undefined && hiddenFallbackStyle])}
					width={imageSizeMap[props.size]}
					src={`/assets/images/no-image-${isDarkMode() ? "dark" : "light"}.svg`}
				/>
			}
		>
			<img
				src={`/api/images/${props.imageId as string}/${props.size}`}
				alt={props.alt}
				srcset={`/api/images/${props.imageId as string}/${size2x()} 2x`}
				onError={() => setFallback(true)}
			/>
		</Show>
	);
}
