import { fixedSpace, relativeSpace } from "./utils";
import vars from "./variables.css";

export const glassEffectStyles = {
	backgroundColor: vars.color.background.emphasis,
	backdropFilter: `blur(${fixedSpace(4)})`,
	WebkitBackdropFilter: `blur(${fixedSpace(4)})`,
	border: vars.border.base,
	boxShadow: vars.boxShadow.base,
};

export const textBlockStyles = {
	padding: 0,
	margin: 0,
	width: `min(${relativeSpace(88)}, 100%)`,
};
