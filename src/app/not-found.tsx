import NotFoundExport from "@/components/NotFoundExport";
import { siteConfig } from "@/lib/siteConfig";

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
	applicationName: siteConfig.applicationName,
	title: "PixeUI.com ~ Requested page was not found",
	description: "The page you are looking for does not exist, or has been moved. Please check the requested URL and try again.",
	generator: "Next.js",
	twitter: {
		card: "summary",
		title: "PixeUI.com ~ Requested page was not found",
		description: "The page you are looking for does not exist, or has been moved. Please check the requested URL and try again.",
		images: `${siteConfig.metadata_base_url}/MetadataWhiteLogo.png`,
	},
	appleWebApp: {
		title: "PixeUI.com ~ Requested page was not found",
		statusBarStyle: "black-translucent",
	},
	openGraph: {
		siteName: siteConfig.applicationName,
		title: "PixeUI.com ~ Requested page was not found",
		description: "The page you are looking for does not exist, or has been moved. Please check the requested URL and try again.",
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

export default function NotFound() {
	return <NotFoundExport />;
}
