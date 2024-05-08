import useTranslation from "./useTranslation";

// FIXME: get useTranslsation from component instead?
export default function useAppName(): string {
	const t = useTranslation();
	// FIXME: constant?
	return t("appName") || "Easy Gundam";
}
