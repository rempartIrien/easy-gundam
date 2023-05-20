import { apricot, candyApple, cerulean, emerald } from "./colors";
import { hexToRgba } from "./utils";

const toasts = {
	error: hexToRgba(candyApple, 0.5),
	info: hexToRgba(cerulean, 0.5),
	success: hexToRgba(emerald, 0.5),
	warning: hexToRgba(apricot, 0.5),
};

export default toasts;
