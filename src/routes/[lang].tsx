import { Outlet } from "solid-start";

import CenterContent from "~/components/CenterContent";
import DocumentTitle from "~/components/DocumentTitle";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

import {
	containerStyle,
	contentStyle,
	footerStyle,
	headerStyle,
} from "./[lang].css";

export default function I18nLayout() {
	return (
		<section class={containerStyle}>
			<DocumentTitle />
			<Header class={headerStyle} />
			<CenterContent class={contentStyle}>
				<Outlet />
			</CenterContent>
			<Footer class={footerStyle} />
		</section>
	);
}
