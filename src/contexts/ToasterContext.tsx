import { toaster } from "@kobalte/core/toast";
import type { JSX } from "solid-js";
import type { Owner } from "solid-js";
import { getOwner } from "solid-js";
import { runWithOwner } from "solid-js";
import { useContext } from "solid-js";
import { createContext } from "solid-js";

import type { ToastProps } from "~/components/Toast";
import Toast from "~/components/Toast";
import Toaster from "~/components/Toaster";

const DEFAULT_DURATION = 400000;
let owner: Owner | null;

function displayToast(
	type: "error" | "info" | "success" | "warning",
	title: string,
	content?: (() => JSX.Element) | string,
	duration: number = DEFAULT_DURATION,
) {
	const element = runWithOwner(owner, () => (props: { toastId: number }) => (
		<Toast
			toastId={props.toastId}
			duration={duration}
			type={type}
			title={title as JSX.Element | string}
			content={content as JSX.Element | string}
		/>
	));
	return element ? toaster.show((props) => element(props)) : -1;
}

const toasterService = {
	toastError: (
		title: string,
		content?: (() => JSX.Element) | string,
		duration?: number,
	) => {
		return displayToast("error", title, content, duration);
	},
	toastInfo: (
		title: string,
		content?: (() => JSX.Element) | string,
		duration?: number,
	) => {
		return displayToast("info", title, content, duration);
	},
	toastSuccess: (
		title: string,
		content?: (() => JSX.Element) | string,
		duration?: number,
	) => {
		return displayToast("success", title, content, duration);
	},
	toastWarning: (
		title: string,
		content?: (() => JSX.Element) | string,
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
	owner = getOwner();
	return (
		<ToasterContext.Provider value={toasterService}>
			{props.children}
			<Toaster />
		</ToasterContext.Provider>
	);
}
