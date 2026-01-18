export const DOMAIN_BASE_URL = "https://www.pixeui.com" as const;

export const NAVBAR_LINKS = [
	{ name: "Home", href: "/" },
	{ name: "Components", href: "/docs/components" },
	{ name: "Icons", href: "https://www.nexticons.com" },
	{ name: "GitHub", href: "https://github.com/Pixe-UI" },
] as const;

export const SIDEBAR_SECTIONS = [
	{
		title: "Product",
		icon: "Layout",
		items: [
			{ name: "Introduction", href: "/docs" },
			{ name: "Installation", href: "/docs/installation" },
			{ name: "Changelog", href: "#", badge: "Soon" },
		],
	},
	{
		title: "Menu",
		icon: "Grid",
		items: [
			{ name: "Components", href: "/docs/components" },
			{ name: "Templates", href: "#", badge: "Soon" },
			{ name: "Icons", href: "https://www.nexticons.com", external: true },
		],
	},
] as const;

export const COMPONENTS_SIDEBAR_SECTIONS = [
	{
		title: "Buttons",
		icon: "PlusSquare",
		items: [
			{ name: "Hold Button", href: "/docs/components/buttons/hold-button" },
			{ name: "Copy Button", href: "/docs/components/buttons/copy-button" },
			{ name: "GitHub Stars Button", href: "/docs/components/buttons/github-stars-button" },
			{ name: "Command Button", href: "/docs/components/buttons/command-button" },
		],
	},
	{
		title: "Text Fields",
		icon: "Type",
		items: [{ name: "OTP", href: "/docs/components/text-fields/opt" }],
	},
] as const;

export const COMPONENTS_COLLECTION_LIST = [
	{
		title: "Buttons",
		href: "/docs/components/buttons/hold-button",
		disabled: false,
		icon: "PlusSquare",
	},
	{
		title: "Text Fields",
		href: "/docs/components/text-fields/opt",
		disabled: false,
		icon: "Type",
	},
	{
		title: "Dialogs",
		href: "#",
		disabled: true,
		icon: "MessageSquare",
	},
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
			{ name: "Discord", href: "https://discord.gg/gNAHhRaCJD", external: true },
			{ name: "X (Twitter)", href: "https://x.com/pixe_ui", external: true },
			{ name: "Changelog", href: "#", badge: "Soon" },
		],
	},
] as const;
