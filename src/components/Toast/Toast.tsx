import { Toast as KobalteToast } from "@kobalte/core";
import type { JSX } from "solid-js";

import Icon from "../Icon";

import { iconStyle, toastStyle } from "./Toast.css";

export interface ToastProps {
	toastId: number;
	type: "error" | "info" | "success" | "warning";
	duration: number;
	title: JSX.Element | string;
	content?: JSX.Element | string;
}

export default function Toast(props: ToastProps) {
	return (
		<KobalteToast.Root toastId={props.toastId} class={toastStyle[props.type]}>
			<KobalteToast.CloseButton />
			<Icon class={iconStyle} name={props.type} />
			<div>
				<KobalteToast.Title>{props.title}</KobalteToast.Title>
				<KobalteToast.Description>{props.content}</KobalteToast.Description>
			</div>
		</KobalteToast.Root>
	);
}
