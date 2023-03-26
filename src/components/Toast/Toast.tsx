import { Toast as KobalteToast } from "@kobalte/core";
import type { JSX } from "solid-js";

import Icon from "../Icon";

import {
	closeButtonStyle,
	contentStyle,
	iconStyle,
	titleStyle,
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
				<Icon name="close" />
			</KobalteToast.CloseButton>
			<Icon class={iconStyle} name={props.type} />
			<div class={contentStyle}>
				<KobalteToast.Title class={titleStyle}>
					{props.title}
				</KobalteToast.Title>
				<KobalteToast.Description>{props.content}</KobalteToast.Description>
			</div>
		</KobalteToast.Root>
	);
}
