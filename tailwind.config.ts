/* eslint-disable @typescript-eslint/naming-convention */
import type { Config } from "tailwindcss";
import type { KeyValuePair, ResolvableTo } from "tailwindcss/types/config";

// colors ✅ => see `src/index.css`
// font families ✅ => Tailwind's
// font heights ✅ => see `src/index.css`
// spaces ✅
// borderRadiuses ✅ => Tailwind's
// boxShadows ✅ => see `src/index.css`

const spaces = [...Array(201)]
	.map((_, value) => value / 2)
	.reduce((acc: ResolvableTo<KeyValuePair>, value) => {
		if (!value) {
			return { ...acc, ["0"]: "0" };
		}
		return {
			...acc,
			[`${value}f`]: `${value * 8}px`,
			[`${value}r`]: `${value * 0.5}rem`,
		};
	}, {});

export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	corePlugins: {
		preflight: false, // Because we have sanitize.ccs
	},
	theme: {
		screens: {
			xs: "20rem", // Mobile devices (320) -- default case, shouldn't be used
			sm: "30rem", // iPads, Tablets (480)
			md: "48rem", // Small screens, laptops (768)
			lg: "64rem", // Desktops, large screens (1024)
			xl: "75rem", // Extra large screens, TV (1200)
		},
		spacing: {
			...spaces,
		},
		fontSize: {
			sm: ["var(--font-size-small)", "var(--font-line-height-small)"],
			base: ["var(--font-size-regular)", "var(--font-line-height-regular)"],
			lg: ["var(--font-size-big)", "var(--font-line-height-big)"],
			xl: ["var(--font-size-subtitle)", "var(--font-line-height-subtitle)"],
			"2xl": ["var(--font-size-title)", "var(--font-line-height-title)"],
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
		extend: {
			spacing: {
				chronologyGap: "var(--chronology-gap)",
				chronologyBulletSize: "var(--chronology-bullet-size)",
				chronologyBulletPaddingTop: "var(--chronology-bullet-paddingTop)",
				chronologyBulletRight: "var(--chronology-bullet-right)",
				chronologyBulletTop: "var(--chronology-bullet-top)",
				sectionBottom: "var(--space-margin-bottom-section)",
				midSectionBottom: "calc(var(--space-margin-bottom-section) / 2)",
			},
			borderWidth: {
				chronologyBorderWidth: "var(--chronology-border-width)",
			},
			maxWidth: {
				chronologyYearColumnWidth: "var(--chronology-year-columnWidth)",
			},
			width: {
				"min-100-xl": `min(100%, theme(screens.xl))`,
				"min-100-88r": `min(theme(spacing.88r), 100%)`,
				chronologyYearWidth: "var(--chronology-year-width)",
			},
			boxShadow: {
				DEFAULT: "var(--box-shadow)",
			},
			contrast: {
				110: "1.10",
			},
		},
	},
	plugins: [],
} satisfies Config;
