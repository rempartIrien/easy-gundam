import { toaster } from "@kobalte/core";
import type { JSX } from "solid-js";
import { useContext } from "solid-js";
import { createContext } from "solid-js";

import type { ToastProps } from "~/components/Toast";
import Toast from "~/components/Toast";
import Toaster from "~/components/Toaster";

const DEFAULT_DURATION = 4000;

function displayToast(
	type: "error" | "info" | "success" | "warning",
	title: JSX.Element | string,
	content?: JSX.Element | string,
	duration: number = DEFAULT_DURATION,
) {
	return toaster.show((props) => (
		<Toast
			toastId={props.toastId}
			duration={duration}
			type={type}
			title={title}
			content={content}
		/>
	));
}

const toasterService = {
	toastError: (
		title: JSX.Element | string,
		content?: JSX.Element | string,
		duration?: number,
	) => {
		return displayToast("error", title, content, duration);
	},
	toastInfo: (
		title: JSX.Element | string,
		content?: JSX.Element | string,
		duration?: number,
	) => {
		return displayToast("info", title, content, duration);
	},
	toastSuccess: (
		title: JSX.Element | string,
		content?: JSX.Element | string,
		duration?: number,
	) => {
		return displayToast("success", title, content, duration);
	},
	toastWarning: (
		title: JSX.Element | string,
		content?: JSX.Element | string,
		duration?: number,
	) => {
		return displayToast("warning", title, content, duration);
	},
	dimissToast: (toastId: ToastProps["toastId"]) => {
		toaster.dismiss(toastId);
	},
} as const;

const ToasterContext = createContext(toasterService);

export function useToaster() {
	return useContext(ToasterContext);
}

export function ToasterProvider(props: { children: JSX.Element }) {
	return (
		<ToasterContext.Provider value={toasterService}>
			{props.children}
			<Toaster />
		</ToasterContext.Provider>
	);
}
