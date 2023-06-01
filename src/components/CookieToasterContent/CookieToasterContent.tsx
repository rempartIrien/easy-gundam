import useRootPath from "~/hooks/useRootPath";
import useTranslation from "~/hooks/useTranslation";

import Button from "../Button";
import Link from "../Link";
import Paragraph from "../Paragraph/Paragraph";

import {
	actionListStyle,
	actionStyle,
	contentStyle,
	textStyle,
} from "./CookieToasterContent.css";

interface CookieToasterContentProps {
	onSave: () => void;
	onCancel: () => void;
}

export default function CookieToasterContent(props: CookieToasterContentProps) {
	const [t] = useTranslation();
	const rootPath = useRootPath();
	return (
		<div class={contentStyle}>
			<Paragraph class={textStyle}>{t("header.cookies.more")}</Paragraph>
			<Paragraph class={textStyle}>
				<Link href={`${rootPath()}cookies`}>{t("header.cookies.link")}</Link>
			</Paragraph>
			<div class={actionListStyle}>
				<Button class={actionStyle} onClick={props.onSave}>
					{t("header.cookies.actions.save")}
				</Button>
				<Button class={actionStyle} onClick={props.onCancel}>
					{t("header.cookies.actions.cancel")}
				</Button>
			</div>
		</div>
	);
}
