import { Toast } from "@kobalte/core";

import { listStyle, regionStyle } from "./Toaster.css";

export default function Toaster() {
	return (
		<Toast.Region class={regionStyle}>
			<Toast.List class={listStyle} />
		</Toast.Region>
	);
}
