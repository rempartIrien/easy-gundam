import useRootPath from "~/hooks/useRootPath";
import useTranslation from "~/hooks/useTranslation";

import Button from "../Button";
import Link from "../Link";
import Text from "../Text";

type CookieToasterContentProps = {
	onSave: () => void;
	onCancel: () => void;
};

export default function CookieToasterContent(props: CookieToasterContentProps) {
	const t = useTranslation();
	const rootPath = useRootPath();
	return (
		<div>
			<p class="m-0 mb-2r">
				<Text>{t("header.cookies.more")}</Text>
			</p>
			<p class="m-0 mb-2r">
				<Text>
					<Link href={`${rootPath()}cookies`}>{t("header.cookies.link")}</Link>
				</Text>
			</p>
			<div class="flex gap-2f [&>*]:flex-1">
				<Button onClick={props.onSave}>
					{t("header.cookies.actions.save")}
				</Button>
				<Button onClick={props.onCancel}>
					{t("header.cookies.actions.cancel")}
				</Button>
			</div>
		</div>
	);
}
