import { Toast as KobalteToast } from "@kobalte/core/toast";
import clsx from "clsx";
import { Show } from "solid-js";
import type { JSX } from "solid-js";

import Icon from "../Icon";
import Text from "../Text";

export type ToastProps = {
	toastId: number;
	type: "error" | "info" | "success" | "warning";
	duration: number;
	title: JSX.Element | string;
	content?: JSX.Element | string;
};

export default function Toast(props: ToastProps) {
	return (
		<KobalteToast
			toastId={props.toastId}
			class={clsx([
				"glass-effect relative flex max-w-[min(theme(spacing.50r),100%)] items-start gap-1f rounded px-2f py-2r text-text-main",
				props.type === "info" && "!bg-toaster-info",
				props.type === "success" && "!bg-toaster-success",
				props.type === "warning" && "!bg-toaster-warning",
				props.type === "error" && "!bg-toaster-error",
			])}
			duration={props.duration}
		>
			<KobalteToast.CloseButton class="absolute right-1f top-1f block cursor-pointer border-none text-lg leading-none">
				<Icon name="close" />
			</KobalteToast.CloseButton>
			<div class="flex shrink-0 items-center text-[calc(theme(fontSize.base.0)*theme(fontSize.base.1))]">
				<Icon name={props.type} />
			</div>
			<div class="flex flex-col gap-2r">
				<KobalteToast.Title class="pr-3f font-bold">
					<Text>{props.title}</Text>
				</KobalteToast.Title>
				<Show when={!!props.content}>
					<KobalteToast.Description>{props.content}</KobalteToast.Description>
				</Show>
			</div>
		</KobalteToast>
	);
}
