import { Outlet } from "solid-start";

import CenterContent from "~/components/CenterContent";
import DocumentTitle from "~/components/DocumentTitle";
import Header from "~/components/Header";

import { contentStyle, headerStyle } from "./[lang].css";

export default function I18nLayout() {
	return (
		<>
			<DocumentTitle />
			<Header class={headerStyle} />
			<CenterContent class={contentStyle}>
				<Outlet />
			</CenterContent>
		</>
	);
}
