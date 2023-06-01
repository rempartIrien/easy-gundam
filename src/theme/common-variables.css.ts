import { relativeSpace } from "./utils";

const commonVars = {
	space: {
		fixed: "8px",
		relative: "0.5rem",
		sectionBottom: relativeSpace(8),
		midSectionBottom: relativeSpace(4),
	},
	borderRadius: {
		base: "4px",
		round: "50%",
	},
};

export default commonVars;
