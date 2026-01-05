export const DOMAIN_BASE_URL = "https://www.pixeui.com" as const;

export const NAVBAR_LINKS = [
	{ name: "Home", href: "/" },
	{ name: "Components", href: "/docs/components" },
	{ name: "Icons", href: "https://www.nexticons.com" },
	{ name: "GitHub", href: "https://github.com/Pixe-UI" },
] as const;

export const FOOTER_LINKS = [
	{
		title: "Product",
		links: [
			{ name: "Templates", href: "#", badge: "Soon" },
			{ name: "Components", href: "/docs/components" },
			{ name: "Icons", href: "https://www.nexticons.com", external: true },
		],
	},
	{
		title: "Resources",
		links: [
			{ name: "Documentation", href: "/docs" },
			{ name: "GitHub", href: "https://github.com/Pixe-UI", external: true },
			{ name: "Blog", href: "#", badge: "Soon" },
		],
	},
	{
		title: "Community",
		links: [
			{ name: "Discord", href: "https://discord.gg/gNAHhRaCJD", external: true }, // TODO: FINISH & SETUP DISCORD SERVER BEFORE PUBLISHING TO PRODUCTION
			{ name: "Twitter", href: "#", badge: "Soon" },
			{ name: "Changelog", href: "#", badge: "Soon" },
		],
	},
] as const;
