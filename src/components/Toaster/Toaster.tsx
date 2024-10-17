import { Toast } from "@kobalte/core/toast";
import { Portal } from "solid-js/web";

import { listStyle, regionStyle } from "./Toaster.css";

export default function Toaster() {
	return (
		<Portal>
			<Toast.Region class={regionStyle}>
				<Toast.List class={listStyle} />
			</Toast.Region>
		</Portal>
	);
}
