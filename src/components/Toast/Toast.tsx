import { Toast as KobalteToast } from "@kobalte/core/toast";
import { Show } from "solid-js";
import type { JSX } from "solid-js";

import Icon from "../Icon";
import Text from "../Text";

import { contentStyle, titleStyle, toastStyle } from "./Toast.css";

export interface ToastProps {
	toastId: number;
	type: "error" | "info" | "success" | "warning";
	duration: number;
	title: JSX.Element | string;
	content?: JSX.Element | string;
}

export default function Toast(props: ToastProps) {
	return (
		<KobalteToast
			toastId={props.toastId}
			class={toastStyle[props.type]}
			duration={props.duration}
		>
			<KobalteToast.CloseButton class="absolute right-1f top-1f block cursor-pointer border-none text-lg leading-none">
				<Icon name="close" />
			</KobalteToast.CloseButton>
			<div class="flex shrink-0 items-center text-[calc(theme(fontSize.base.0)*theme(fontSize.base.1))]">
				<Icon name={props.type} />
			</div>
			<div class={contentStyle}>
				<KobalteToast.Title class={titleStyle} as={Text}>
					{props.title}
				</KobalteToast.Title>
				<Show when={!!props.content}>
					<KobalteToast.Description>{props.content}</KobalteToast.Description>
				</Show>
			</div>
		</KobalteToast>
	);
}
