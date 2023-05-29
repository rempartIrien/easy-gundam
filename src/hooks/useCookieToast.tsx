import CookieToasterContent from "~/components/CookieToasterContent";
import Link from "~/components/Link";
import Text from "~/components/Text";
import { useToaster } from "~/contexts/ToasterContext";

import useRootPath from "./useRootPath";
import useTranslation from "./useTranslation";

interface ShowCookieToasterParams {
	onSave: (() => void) | (() => Promise<void>);
	onCancel?: (() => void) | (() => Promise<void>);
}

export default function useCookieToaster() {
	const [t] = useTranslation();
	const { dimissToast, toastSuccess, toastError, toastInfo } = useToaster();
	const rootPath = useRootPath();
	let toastId: number | undefined;

	const save = async (
		toastId: number | undefined,
		onSave: ShowCookieToasterParams["onSave"],
	) => {
		dimissCookieToast(toastId);
		try {
			await onSave();
			toastSuccess(
				() => <Text>{t("header.cookies.results.success")}</Text>,
				() => (
					<Link href={`${rootPath()}cookies`}>
						{t("header.cookies.results.link")}
					</Link>
				),
			);
		} catch (e) {
			toastError(
				() => <Text>{t("header.cookies.results.error")}</Text>,
				() => (
					<Link href={`${rootPath()}cookies`}>
						{t("header.cookies.results.link")}
					</Link>
				),
			);
		}
	};

	const cancel = (
		toastId: number | undefined,
		onCancel?: ShowCookieToasterParams["onCancel"],
	) => {
		dimissCookieToast(toastId);
		void onCancel?.();
	};

	const dimissCookieToast = (toastId?: number) =>
		toastId !== undefined && dimissToast(toastId);

	return ({ onSave, onCancel }: ShowCookieToasterParams) => {
		toastId = toastInfo(
			() => <Text>{t("header.cookies.question")}</Text>,
			() => (
				<CookieToasterContent
					onSave={() => save(toastId, onSave)}
					onCancel={() => cancel(toastId, onCancel)}
				/>
			),
		);

		return toastId;
	};
}
