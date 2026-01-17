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
		icon: "Square",
		items: [
			{ name: "Hold Button", href: "/docs/components/buttons/hold-button" },
			{ name: "Copy Button", href: "/docs/components/buttons/copy-button" },
		],
	},
] as const;

export const INTRODUCTION_FEATURES = [
	{
		title: "Modern Design",
		description: "Clean, modern, and professional UI components designed to provide the best user experience.",
		icon: "Sparkles2",
	},
	{
		title: "Copy & Paste",
		description: "Simply copy the code and paste it into your project. No complex installation or dependencies required.",
		icon: "Copy",
	},
	{
		title: "Fully Customizable",
		description: "Built with Tailwind CSS, making it incredibly easy to fully customize and adapt to your brand identity.",
		icon: "Code",
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
		title: "Inputs",
		href: "#",
		disabled: true,
		icon: "MoreHorizontal",
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
			{ name: "Discord", href: "https://discord.gg/gNAHhRaCJD", external: true }, // TODO: FINISH & SETUP DISCORD SERVER BEFORE PUBLISHING TO PRODUCTION
			{ name: "Twitter", href: "#", badge: "Soon" },
			{ name: "Changelog", href: "#", badge: "Soon" },
		],
	},
] as const;
