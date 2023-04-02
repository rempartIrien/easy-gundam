export const imageSizeMap = {
	extraSmall: "100",
	small: "200",
	medium: "400",
	large: "800",
} as const;

export type ImageSizeName = keyof typeof imageSizeMap;
