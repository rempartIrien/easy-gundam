import CookieToasterContent from "~/components/CookieToasterContent";
import Link from "~/components/Link";
import { useToaster } from "~/contexts/ToasterContext";

import useRootPath from "./useRootPath";
import useTranslation from "./useTranslation";

type ShowCookieToasterParams = {
	onSave: (() => void) | (() => Promise<void>);
	onCancel?: (() => void) | (() => Promise<void>);
};

export default function useCookieToaster(type: "theme" | "locale") {
	const t = useTranslation();
	const { dimissToast, toastSuccess, toastError, toastInfo } = useToaster();
	const rootPath = useRootPath();

	const save = async (
		toastId: number | undefined,
		onSave: ShowCookieToasterParams["onSave"],
	) => {
		dimissCookieToast(toastId);
		try {
			await onSave();
			toastSuccess(t("header.cookies.results.success"), () => (
				<Link href={`${rootPath()}cookies`}>
					{t("header.cookies.results.link")}
				</Link>
			));
		} catch (e) {
			toastError(t("header.cookies.results.error"), () => (
				<Link href={`${rootPath()}cookies`}>
					{t("header.cookies.results.link")}
				</Link>
			));
		}
	};

	const cancel = (
		toastId: number | undefined,
		onCancel?: ShowCookieToasterParams["onCancel"],
	) => {
		dimissCookieToast(toastId);
		void onCancel?.();
	};

	const dimissCookieToast = (toastId?: number) => {
		if (toastId !== undefined) {
			dimissToast(toastId);
		}
	};

	return ({ onSave, onCancel }: ShowCookieToasterParams) => {
		const id = toastInfo(t(`header.cookies.question.${type}`), () => (
			<CookieToasterContent
				onSave={() => save(id, onSave)}
				onCancel={() => cancel(id, onCancel)}
			/>
		));

		return () => dimissCookieToast(id);
	};
}
