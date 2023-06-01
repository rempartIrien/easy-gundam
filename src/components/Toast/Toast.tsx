import { Toast as KobalteToast } from "@kobalte/core";
import { Show } from "solid-js";
import type { JSX } from "solid-js";

import Icon from "../Icon";
import Text from "../Text";

import {
	closeButtonStyle,
	closeIconStyle,
	contentStyle,
	titleStyle,
	toastIconStyle,
	toastStyle,
} from "./Toast.css";

export interface ToastProps {
	toastId: number;
	type: "error" | "info" | "success" | "warning";
	duration: number;
	title: JSX.Element | string;
	content?: JSX.Element | string;
}

export default function Toast(props: ToastProps) {
	return (
		<KobalteToast.Root
			toastId={props.toastId}
			class={toastStyle[props.type]}
			duration={props.duration}
		>
			<KobalteToast.CloseButton class={closeButtonStyle}>
				<Icon class={closeIconStyle} name="close" />
			</KobalteToast.CloseButton>
			<div>
				<Icon class={toastIconStyle} name={props.type} />
			</div>
			<div class={contentStyle}>
				<KobalteToast.Title class={titleStyle} as={Text}>
					{props.title}
				</KobalteToast.Title>
				<Show when={!!props.content}>
					<KobalteToast.Description>{props.content}</KobalteToast.Description>
				</Show>
			</div>
		</KobalteToast.Root>
	);
}
