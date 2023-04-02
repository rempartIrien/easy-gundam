import type { ImageSizeName } from "~/types/ImageSize";

export default function getSize2x(size: ImageSizeName): ImageSizeName {
	switch (size) {
		case "extraSmall":
			return "small";
		case "small":
			return "medium";
		case "medium":
			return "large";
		case "large":
			return "large";
		default:
			throw new Error("");
	}
}
