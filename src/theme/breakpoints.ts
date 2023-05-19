const breakpoints = {
	xs: "20rem", // Mobile devices (320) -- default case, shouldn't be used
	sm: "30rem", // iPads, Tablets (480)
	md: "48rem", // Small screens, laptops (768)
	lg: "64rem", // Desktops, large screens (1024)
	xl: "75rem", // Extra large screens, TV (1200)
} as const;

export type Breakpoint = keyof typeof breakpoints;

export default breakpoints;
