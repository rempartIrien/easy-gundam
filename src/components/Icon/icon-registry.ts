import ExternalLink from "../../../assets/icons/external-link.svg";
import Languages from "../../../assets/icons/languages.svg";
import Moon from "../../../assets/icons/moon.svg";
import Sun from "../../../assets/icons/sun.svg";

const ICON_REGISTRY = {
	externalLink: ExternalLink,
	languages: Languages,
	moon: Moon,
	sun: Sun,
} as const;

export default ICON_REGISTRY;
