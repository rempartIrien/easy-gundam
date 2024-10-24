import clsx from "clsx";

export const MENU_REGION_CLASS = "__MENU_REGION_CLASS__";

export default function MenuRegion() {
	// Be above header that also has a z-index
	return <div class={clsx([MENU_REGION_CLASS, "relative z-20"])} />;
}
