import { NavbarExport } from "@/components/NavbarExport";
import { LoadingProvider } from "@/utils/LoadingContext";
import { FooterExport } from "@/components/FooterExport";
import { ConsoleLogger } from "@/utils/ConsoleLogger";
import { siteConfig } from "@/lib/siteConfig";
import "@/styles/globals.css";

import {
	OutfitThin,
	OutfitExtraLight,
	OutfitLight,
	OutfitRegular,
	OutfitMedium,
	OutfitSemiBold,
	OutfitBold,
	OutfitExtraBold,
	OutfitBlack,
} from "@/lib/fonts";

import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.metadata_base_url),
	applicationName: siteConfig.applicationName,
	title: siteConfig.title,
	description: siteConfig.description,
	keywords: [
		"tailwind css components",
		"react ui blocks",
		"next.js components",
		"copy paste components",
		"open source ui blocks",
		"accessible components",
		"react components library",
		"ui blocks for developers",
		"ui components react",
		"free react ui kit",
		"react component library",
		"tailwind ui components",
		"ui components",
		"react",
		"next.js",
		"react design",
	],
	generator: "Next.js",
	twitter: {
		card: "summary",
		title: siteConfig.title,
		description: siteConfig.description,
		images: `${siteConfig.metadata_base_url}/MetadataWhiteLogo.png`,
	},
	appleWebApp: {
		title: siteConfig.title,
		statusBarStyle: "black-translucent",
	},
	openGraph: {
		siteName: siteConfig.applicationName,
		title: siteConfig.title,
		description: siteConfig.description,
		type: "website",
		url: new URL(siteConfig.metadata_base_url),
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
		canonical: "/",
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
	icons: [
		{
			rel: "icon",
			type: "image/png",
			sizes: "36x36",
			url: "/favicons/android-icon-36x36.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "48x48",
			url: "/favicons/android-icon-48x48.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "72x72",
			url: "/favicons/android-icon-72x72.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "96x96",
			url: "/favicons/android-icon-96x96.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "144x144",
			url: "/favicons/android-icon-144x144.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "192x192",
			url: "/favicons/android-icon-192x192.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "57x57",
			url: "/favicons/apple-icon-57x57.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "60x60",
			url: "/favicons/apple-icon-60x60.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "72x72",
			url: "/favicons/apple-icon-72x72.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "76x76",
			url: "/favicons/apple-icon-76x76.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "114x114",
			url: "/favicons/apple-icon-114x114.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "120x120",
			url: "/favicons/apple-icon-120x120.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "144x144",
			url: "/favicons/apple-icon-144x144.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "152x152",
			url: "/favicons/apple-icon-152x152.png",
		},
		{
			rel: "apple-touch-icon",
			type: "image/png",
			sizes: "180x180",
			url: "/favicons/apple-icon-180x180.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicons/favicon-16x16.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/favicons/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "96x96",
			url: "/favicons/favicon-96x96.png",
		},
		{
			rel: "shortcut icon",
			type: "images/x-icon",
			url: "/favicons/favicon.ico",
		},
	],
};

export const viewport: Viewport = {
	initialScale: 1,
	minimumScale: 1,
	width: "device-width",
	themeColor: "#fafafa",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				suppressHydrationWarning
				className={`bg-[#0a0a0a] ${OutfitThin.className} ${OutfitExtraLight.className} ${OutfitLight.className} ${OutfitRegular.className} ${OutfitMedium.className} ${OutfitSemiBold.className} ${OutfitBold.className} ${OutfitExtraBold.className} ${OutfitBlack.className} antialiased`}
			>
				<LoadingProvider>
					<ConsoleLogger />
					<NavbarExport />

					<main>{children}</main>

					<FooterExport />
				</LoadingProvider>
			</body>
		</html>
	);
}
