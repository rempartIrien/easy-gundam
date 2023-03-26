import { Toast } from "@kobalte/core";
import { Portal } from "solid-js/web";

export default function Toaster() {
	return (
		<Portal>
			<Toast.Region>
				<Toast.List />
			</Toast.Region>
		</Portal>
	);
}
