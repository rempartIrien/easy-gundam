import { Toast } from "@kobalte/core/toast";
import { Portal } from "solid-js/web";

export default function Toaster() {
	return (
		<Portal>
			<Toast.Region class="fixed bottom-0 left-0 right-0 z-20">
				<Toast.List class="flex flex-col items-end gap-2r px-2f md:px-3f" />
			</Toast.Region>
		</Portal>
	);
}
