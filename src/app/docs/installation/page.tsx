import InstallationExport from "@/components/docs/InstallationExport";
import { DOMAIN_BASE_URL } from "@/lib/constants";
import { siteConfig } from "@/lib/siteConfig";

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
	applicationName: siteConfig.applicationName,
	title: "PixeUI.com ~ Installation process for PixeUI",
	//prettier-ignore
	description: "Get started with PixeUI by installing the necessary packages and dependencies. Follow the steps in the documentation to set up PixeUI in your project.",
	generator: "Next.js",
	twitter: {
		card: "summary",
		title: "PixeUI.com ~ Installation process for PixeUI",
		//prettier-ignore
		description: "Get started with PixeUI by installing the necessary packages and dependencies. Follow the steps in the documentation to set up PixeUI in your project.",
		images: `${siteConfig.metadata_base_url}/MetadataWhiteLogo.png`,
	},
	appleWebApp: {
		title: "PixeUI.com ~ Installation process for PixeUI",
		statusBarStyle: "black-translucent",
	},
	openGraph: {
		siteName: siteConfig.applicationName,
		title: "PixeUI.com ~ Installation process for PixeUI",
		//prettier-ignore
		description: "Get started with PixeUI by installing the necessary packages and dependencies. Follow the steps in the documentation to set up PixeUI in your project.",
		type: "website",
		locale: "en",
		images: [
			{
				url: `${siteConfig.metadata_base_url}/MetadataWhiteLogo.png`,
				width: 512,
				height: 512,
				alt: "PixeUI",
				type: "image/png",
			},
		],
	},
	alternates: {
		canonical: `${DOMAIN_BASE_URL}/docs/installation`,
	},
	publisher: "PixeUI.com",
	category: "Developer Tools",
	authors: [
		{
			name: "Alexandr Virgovič",
			url: "https://www.deemdev.com",
		},
	],
	creator: "PixeUI.com",
};

export const viewport: Viewport = {
	initialScale: 1,
	minimumScale: 1,
	width: "device-width",
	themeColor: "#fafafa",
};

export default function DocsInstallation() {
	return <InstallationExport />;
}
