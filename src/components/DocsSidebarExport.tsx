"use client";

import { SIDEBAR_SECTIONS, COMPONENTS_SIDEBAR_SECTIONS } from "@/lib/constants";
import { OutfitMedium, OutfitRegular, OutfitSemiBold } from "@/lib/fonts";

import { Grid, PlusSquare, Layout, ExternalLink, ChevronRight, ChevronDown, X, Type, Loader } from "@deemlol/next-icons";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import * as React from "react";
import Link from "next/link";

const ICON_MAP = {
	Layout: <Layout color="#fafafa" size={16} />,
	Grid: <Grid color="#fafafa" size={16} />,
	PlusSquare: <PlusSquare color="#fafafa" size={16} />,
	Type: <Type color="#fafafa" size={16} />,
	Loader: <Loader color="#fafafa" size={16} />,
};

type SidebarItem = {
	name: string;
	href: string;
	badge?: string;
	external?: boolean;
};

type SidebarSection = {
	title: string;
	icon: keyof typeof ICON_MAP;
	items: readonly SidebarItem[];
};

const getSections = (pathname: string): readonly SidebarSection[] => {
	if (pathname.startsWith("/docs/components")) {
		return [
			...(SIDEBAR_SECTIONS as unknown as readonly SidebarSection[]),
			...(COMPONENTS_SIDEBAR_SECTIONS as unknown as readonly SidebarSection[]),
		];
	}

	return SIDEBAR_SECTIONS as unknown as readonly SidebarSection[];
};

export function DocsSidebarExport() {
	const pathname = usePathname();

	return (
		<aside className="sticky top-36 hidden h-fit max-h-[calc(100vh-10rem)] w-80 flex-col overflow-y-auto py-4 2xl:flex">
			<SidebarContent pathname={pathname} />
		</aside>
	);
}

export function MobileDocsNav() {
	const [isMobileOpen, setMobileIsOpen] = React.useState(false);
	const pathname = usePathname();
	const sections = getSections(pathname);

	React.useEffect(() => {
		setMobileIsOpen(false);
	}, [pathname]);

	React.useEffect(() => {
		if (isMobileOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMobileOpen]);

	const currentPageName = sections.flatMap((s) => s?.items).find((i) => i?.href === pathname)?.name || "Menu";

	return (
		<div className="mb-6 flex flex-col 2xl:hidden">
			<motion.div
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3, delay: 0.1 }}
				className="flex items-center gap-2"
			>
				<Link href="/docs" className={`cursor-pointer text-sm text-[#fafafa]/70 ${OutfitRegular.className}`}>
					Docs
				</Link>

				<ChevronRight size={12} color="#fafafa" />

				<button
					type="button"
					onClick={() => setMobileIsOpen(true)}
					className={`flex cursor-pointer items-center gap-2 rounded-full bg-[#262626] px-4 py-1 text-sm text-[#FFFFFF] ${OutfitRegular.className}`}
				>
					<span>{currentPageName}</span>
					<ChevronDown size={14} className="text-[#FFFFFF]" />
				</button>
			</motion.div>

			<AnimatePresence>
				{isMobileOpen && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setMobileIsOpen(false)}
							className="fixed inset-0 z-40 bg-[#000000]/60 backdrop-blur-sm"
						/>

						<motion.div
							initial={{ x: "-100%" }}
							animate={{ x: 0 }}
							exit={{ x: "-100%" }}
							transition={{ type: "spring", damping: 25, stiffness: 200 }}
							className="fixed top-0 bottom-0 left-0 z-50 w-4/5 max-w-xs overflow-y-auto border-r border-[#fafafa]/5 bg-[#0a0a0a] p-4"
						>
							<div className="mb-8 flex items-center justify-between">
								<span className={`text-start text-lg text-[#FFFFFF] ${OutfitMedium.className}`}>Documentation</span>

								<button type="button" onClick={() => setMobileIsOpen(false)} className="rounded-lg p-2">
									<X size={20} color="#fafafa" />
								</button>
							</div>

							<SidebarContent pathname={pathname} />
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	);
}

function SidebarContent({ pathname }: { pathname: string }) {
	const sections = getSections(pathname);

	return (
		<div className="flex flex-col gap-6">
			{sections.map((section) => (
				<div key={section?.title} className="flex flex-col gap-3">
					<div className="flex items-center gap-2 px-2">
						<div className="grid h-6 w-6 place-items-center">{ICON_MAP[section.icon]}</div>

						<span className={`text-xs tracking-widest text-[#fafafa] uppercase ${OutfitSemiBold.className}`}>
							{section?.title}
						</span>
					</div>

					<div className="relative flex flex-col pl-4">
						<div className="absolute top-0 bottom-0 left-[19px] w-px bg-linear-to-b from-[#fafafa]/10 via-[#fafafa]/5 to-transparent" />

						{section?.items?.map((item) => {
							const isActive = pathname === item?.href;
							const isExternal = item?.external;
							const badge = item?.badge;

							if (badge) {
								return (
									<div
										key={item?.name}
										className={`group relative flex items-center py-2 pl-8 text-sm text-[#fafafa]/40 ${OutfitRegular.className} cursor-not-allowed`}
									>
										<span className="relative z-10 mr-2">{item?.name}</span>

										<span className="rounded-full bg-[#fafafa]/10 px-2 py-0.5 text-[10px] text-[#fafafa]/70">
											{badge}
										</span>
									</div>
								);
							}

							return (
								<Link
									key={item?.href}
									href={item?.href}
									target={isExternal ? "_blank" : undefined}
									rel={isExternal ? "noopener noreferrer" : undefined}
									className={`group relative flex items-center py-2 pl-8 text-sm transition-all duration-300 ${
										isActive
											? `text-[#fafafa] ${OutfitRegular.className}`
											: `text-[#fafafa]/80 hover:text-[#fafafa] ${OutfitRegular.className}`
									}`}
								>
									{isActive && (
										<motion.div
											layoutId="active-bg"
											className="absolute inset-0 -z-10 rounded-r-xl bg-linear-to-r from-[#fafafa]/10 to-transparent opacity-50 blur-sm"
											transition={{ duration: 0.3 }}
										/>
									)}

									{isActive && (
										<motion.div
											layoutId="sidebar-active-indicator"
											className="absolute left-[19px] h-8 w-[2px] rounded-full bg-[#fafafa] shadow-[0_0_10px_2px_rgba(255,255,255,0.3)]"
											transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 30 }}
										/>
									)}

									<span className="relative z-10 flex items-center gap-2">
										{item?.name}
										{isExternal && <ExternalLink size={14} />}
									</span>
								</Link>
							);
						})}
					</div>
				</div>
			))}
		</div>
	);
}
