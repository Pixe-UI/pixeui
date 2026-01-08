import IntroductionExport from "@/components/docs/IntroductionExport";
import { DOMAIN_BASE_URL } from "@/lib/constants";
import { siteConfig } from "@/lib/siteConfig";

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
	applicationName: siteConfig.applicationName,
	title: "PixeUI.com ~ Introduction to PixeUI documentation",
	description: "Welcome to PixeUI documentation. We offer a collection of modern, accessible, and fully customizable UI components.",
	generator: "Next.js",
	twitter: {
		card: "summary",
		title: "PixeUI.com ~ Introduction to PixeUI documentation",
		description: "Welcome to PixeUI documentation. We offer a collection of modern, accessible, and fully customizable UI components.",
		images: `${siteConfig.metadata_base_url}/MetadataWhiteLogo.png`,
	},
	appleWebApp: {
		title: "PixeUI.com ~ Introduction to PixeUI documentation",
		statusBarStyle: "black-translucent",
	},
	openGraph: {
		siteName: siteConfig.applicationName,
		title: "PixeUI.com ~ Introduction to PixeUI documentation",
		description: "Welcome to PixeUI documentation. We offer a collection of modern, accessible, and fully customizable UI components.",
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
		canonical: `${DOMAIN_BASE_URL}/docs`,
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

export default function DocsIntroduction() {
	return <IntroductionExport />;
}
