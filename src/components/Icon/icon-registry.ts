import Close from "../../../assets/icons/close.svg";
import Error from "../../../assets/icons/error.svg";
import ExternalLink from "../../../assets/icons/external-link.svg";
import Info from "../../../assets/icons/info.svg";
import Languages from "../../../assets/icons/languages.svg";
import Menu from "../../../assets/icons/menu.svg";
import Moon from "../../../assets/icons/moon.svg";
import Success from "../../../assets/icons/success.svg";
import Sun from "../../../assets/icons/sun.svg";
import Warning from "../../../assets/icons/warning.svg";

const ICON_REGISTRY = {
	close: Close,
	error: Error,
	externalLink: ExternalLink,
	info: Info,
	languages: Languages,
	menu: Menu,
	moon: Moon,
	success: Success,
	sun: Sun,
	warning: Warning,
} as const;

export default ICON_REGISTRY;
