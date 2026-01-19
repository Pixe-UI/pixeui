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
		title: "Inputs",
		icon: "Type",
		items: [{ name: "OTP", href: "/docs/components/inputs/otp" }],
	},
	{
		title: "Loaders",
		icon: "Loader",
		items: [
			{ name: "Progress", href: "/docs/components/loaders/progress" },
			{ name: "Circle", href: "/docs/components/loaders/circle" },
		],
	},
	{
		title: "Skeletons",
		icon: "Minus",
		items: [
			{ name: "Shimmer", href: "/docs/components/skeletons/shimmer" },
			{ name: "Pulse", href: "/docs/components/skeletons/pulse" },
			{ name: "Wave", href: "/docs/components/skeletons/wave" },
		],
	},
	{
		title: "Separators",
		icon: "Minimize2",
		items: [
			{ name: "Dashed", href: "/docs/components/separators/dashed" },
			{ name: "Gradient", href: "/docs/components/separators/gradient" },
			{ name: "Shimmer", href: "/docs/components/separators/shimmer" },
		],
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
		href: "/docs/components/inputs/otp",
		disabled: false,
		icon: "Type",
	},
	{
		title: "Loaders",
		href: "/docs/components/loaders/progress",
		disabled: false,
		icon: "Loader",
	},
	{
		title: "Skeletons",
		href: "/docs/components/skeletons/shimmer",
		disabled: false,
		icon: "Minus",
	},
	{
		title: "Separators",
		href: "/docs/components/separators/dashed",
		disabled: false,
		icon: "Minimize2",
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
