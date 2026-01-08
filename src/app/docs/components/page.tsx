import ComponentsExport from "@/components/docs/ComponentsExport";
import { DOMAIN_BASE_URL } from "@/lib/constants";
import { siteConfig } from "@/lib/siteConfig";

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
	applicationName: siteConfig.applicationName,
	title: "PixeUI.com ~ Collection of PixeUI components",
	description: "Browse our collection of modern, and accessible copy-and-paste components.",
	generator: "Next.js",
	twitter: {
		card: "summary",
		title: "PixeUI.com ~ Collection of PixeUI components",
		description: "Browse our collection of modern, and accessible copy-and-paste components.",
		images: `${siteConfig.metadata_base_url}/MetadataWhiteLogo.png`,
	},
	appleWebApp: {
		title: "PixeUI.com ~ Collection of PixeUI components",
		statusBarStyle: "black-translucent",
	},
	openGraph: {
		siteName: siteConfig.applicationName,
		title: "PixeUI.com ~ Collection of PixeUI components",
		description: "Browse our collection of modern, and accessible copy-and-paste components.",
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
		canonical: `${DOMAIN_BASE_URL}/docs/components`,
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

export default function DocsComponents() {
	return <ComponentsExport />;
}
