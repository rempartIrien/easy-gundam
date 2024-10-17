import type { Config } from "tailwindcss";
import type { KeyValuePair, ResolvableTo } from "tailwindcss/types/config";

// colors ✅ => see `src/index.css`
// font families ✅ => Tailwind's
// font heights ✅ => see `src/index.css`
// spaces ✅
// borderRadiuses ✅ => Tailwind's
// boxShadows ✅ => see `src/index.css`

const spaces = [...Array(20)].reduce(
	(acc: ResolvableTo<KeyValuePair>, _, index) => ({
		...acc,
		[`${index}f`]: `${index * 8}px`,
		[`${index}r`]: `${index * 0.5}rem`,
	}),
	{},
);

export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	corePlugins: {
		preflight: false, // Because we have sanitize.ccs
	},
	theme: {
		screens: {
			xs: "20rem", // Mobile devices (320) -- default case, shouldn't be used
			sm: "30rem", // iPads, Tablets (480)
			md: "var(--breakpoint-medium)", // Small screens, laptops (768)
			lg: "64rem", // Desktops, large screens (1024)
			xl: "75rem", // Extra large screens, TV (1200)
		},
		spacing: {
			...spaces,
			sectionBottom: spaces["8r"],
			midSectionBottom: spaces["4r"],
		},
		fontSize: {
			sm: ["14px", "20px"],
			base: ["16px", "24px"],
			lg: ["20px", "28px"],
			xl: ["24px", "32px"],
			// eslint-disable-next-line @typescript-eslint/naming-convention
			"2xl": ["1.563rem", "32px"],
		},
		boxShadow: {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			DEFAULT: "var(--box-shadow)",
		},
		colors: {
			background: {
				main: "var(--color-background-main)",
				emphasis: "var(--color-background-emphasis)",
				button: "var(--color-background-button)",
			},
			text: {
				main: "var(--color-text-main)",
				disabled: "var(--color-text-disabled)",
			},
			primary: {
				main: "var(--color-primary-main)",
				text: "var(--color-primary-text)",
				background: "var(--color-primary-background)",
			},
			secondary: {
				main: "var(--color-secondary-main)",
				text: "var(--color-secondary-text)",
				background: "var(--color-secondary-background)",
			},
			info: {
				main: "var(--color-info-main)",
				text: "var(--color-info-text)",
				background: "var(--color-info-background)",
			},
			success: {
				main: "var(--color-success-main)",
				text: "var(--color-success-text)",
				background: "var(--color-success-background)",
			},
			warning: {
				main: "var(--color-warning-main)",
				text: "var(--color-warning-text)",
				background: "var(--color-warning-background)",
			},
			error: {
				main: "var(--color-error-main)",
				text: "var(--color-error-text)",
				background: "var(--color-error-background)",
			},
			toaster: {
				error: "var(--color-error-toast)",
				info: "var(--color-info-toast)",
				success: "var(--color-success-toast)",
				warning: "var(--color-warning-toast)",
			},
		},
		extend: {},
	},
	plugins: [],
} satisfies Config;
