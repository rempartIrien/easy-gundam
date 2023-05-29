import Breadcrumb from "~/components/Breadcrumb";
import DocumentTitle from "~/components/DocumentTitle";
import Heading from "~/components/Heading";
import Link from "~/components/Link";
import List from "~/components/List";
import Paragraph from "~/components/Paragraph";
import Section from "~/components/Section";
import Text from "~/components/Text";
import useTranslation from "~/hooks/useTranslation";

export default function About() {
	const [t] = useTranslation();
	const appName = t("appName");
	return (
		<>
			<DocumentTitle content={t("about.documentTitle")} />
			<Breadcrumb items={[{ text: t("navigation.about") }]} />
			<Heading variant="title">{t("about.title")}</Heading>
			<Section>
				<Heading variant="subtitle">{t("about.legal.title")}</Heading>
				<Paragraph>{t("about.legal.texts.website", { appName })}</Paragraph>
				<Paragraph>{t("about.legal.texts.gundam", { appName })}</Paragraph>
				<Paragraph>{t("about.legal.texts.copyright", { appName })}</Paragraph>
				<Paragraph>{t("about.legal.texts.texts", { appName })}</Paragraph>
				<Paragraph>{t("about.legal.texts.media", { appName })}</Paragraph>
				<List>
					<li>
						<Link href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037388886/2020-06-16">
							{t("about.legal.resources.fairUse")}
						</Link>
					</li>
					<li>
						<Link href="https://creativecommons.org/licenses/by-nc-nd/4.0">
							{t("about.legal.resources.license")}
						</Link>
					</li>
				</List>
			</Section>
			<Section>
				<Heading variant="subtitle">{t("about.privacy.title")}</Heading>
				<Paragraph>
					{t("about.privacy.texts.cookies.list", { appName })}
				</Paragraph>
				<List>
					<li>
						<Text>{t("about.privacy.texts.cookies.theme")}</Text>
					</li>
					<li>
						<Text>{t("about.privacy.texts.cookies.language")}</Text>
					</li>
				</List>
				<Paragraph>
					{t("about.privacy.texts.cookies.expiration", { appName })}
				</Paragraph>
				<Paragraph>
					{t("about.privacy.texts.cookies.noCookies", { appName })}
				</Paragraph>
				<Paragraph>
					{t("about.privacy.texts.dataSharing", { appName })}
				</Paragraph>
				<List>
					<li>
						<Link href="../cookies">
							{t("about.privacy.resources.cookieManagement")}
						</Link>
					</li>
					<li>
						<Link href="https://gdpr.eu">
							{t("about.privacy.resources.gdpr")}
						</Link>
					</li>
				</List>
			</Section>
			<Section>
				<Heading variant="subtitle">{t("about.purpose.title")}</Heading>
				<Paragraph>{t("about.purpose.texts.share", { appName })}</Paragraph>
				<Paragraph>
					{t("about.purpose.texts.exhaustiveness", { appName })}
				</Paragraph>
				<Paragraph>{t("about.purpose.texts.free", { appName })}</Paragraph>
				<List>
					<li>
						<Link href="http://www.aeug.fr">
							{t("about.purpose.resources.aeug")}
						</Link>
					</li>
					<li>
						<Link href="https://gundam-france.com">
							{t("about.purpose.resources.gundamFrance")}
						</Link>
					</li>
					<li>
						<Link href="https://gundam.fandom.com/wiki/The_Gundam_Wiki">
							{t("about.purpose.resources.wiki")}
						</Link>
					</li>
					<li>
						<Link href="https://www.mahq.net">
							{t("about.purpose.resources.mahq")}
						</Link>
					</li>
					<li>
						<Link href="https://tsukinomayu.com">
							{t("about.purpose.resources.tsukiNoMayu")}
						</Link>
					</li>
					<li>
						<Link href="http://www.cosmic-era.com">
							{t("about.purpose.resources.cosmicEra")}
						</Link>
					</li>
				</List>
			</Section>
		</>
	);
}
