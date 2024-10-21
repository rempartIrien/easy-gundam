import useRootPath from "~/hooks/useRootPath";
import useTranslation from "~/hooks/useTranslation";

import Button from "../Button";
import Link from "../Link";
import Text from "../Text";

import { contentStyle, textStyle } from "./CookieToasterContent.css";

interface CookieToasterContentProps {
	onSave: () => void;
	onCancel: () => void;
}

export default function CookieToasterContent(props: CookieToasterContentProps) {
	const t = useTranslation();
	const rootPath = useRootPath();
	return (
		<div class={contentStyle}>
			<Text component="p" class={textStyle}>
				{t("header.cookies.more")}
			</Text>
			<Text component="p" class={textStyle}>
				<Link href={`${rootPath()}cookies`}>{t("header.cookies.link")}</Link>
			</Text>
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
