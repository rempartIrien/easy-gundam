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

type ImageProps = {
	imageId?: string | null;
	alt: string;
	size: ImageSizeName;
	class?: string;
};

export default function Image(props: ImageProps) {
	const size2x = createMemo(() => getSize2x(props.size));
	const [fallback, setFallback] = createSignal(false);
	const isDarkMode = useIsDarkMode();
	// See https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#aa-dark-mode-images
	const darkModeStyle = createMemo(
		() => isDarkMode() && "brightness-90 contrast-110",
	);

	onMount(() => setFallback(!props.imageId));
	createEffect(() => setFallback(!props.imageId));

	return (
		<Show
			when={!fallback()}
			fallback={
				<img
					class={clsx([
						isDarkMode() === undefined && "invisible",
						isDarkMode() && darkModeStyle,
						props.class,
					])}
					width={imageSizeMap[props.size]}
					src={`/assets/images/no-image-${isDarkMode() ? "dark" : "light"}.svg`}
				/>
			}
		>
			<img
				class={clsx([isDarkMode() && darkModeStyle, props.class])}
				src={`/api/images/${props.imageId as string}/${props.size}`}
				alt={props.alt}
				srcset={`/api/images/${props.imageId as string}/${size2x()} 2x`}
				onError={() => setFallback(true)}
			/>
		</Show>
	);
}
