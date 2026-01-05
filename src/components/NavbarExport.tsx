"use client";

import { OutfitMedium, OutfitRegular, OutfitSemiBold } from "@/lib/fonts";
import { useLoading } from "@/utils/LoadingContext";
import { NAVBAR_LINKS } from "@/lib/constants";

import { ExternalLink, ArrowRight, Menu, X } from "@deemlol/next-icons";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function NavbarExport() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
	const [isButtonHovered, setIsButtonHovered] = React.useState(false);
	const [activeTab, setActiveTab] = React.useState("Home");
	const buttonRef = React.useRef<HTMLButtonElement>(null);
	const menuRef = React.useRef<HTMLDivElement>(null);
	const { isLoading } = useLoading();

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				isMobileMenuOpen &&
				menuRef.current &&
				!menuRef.current.contains(event?.target as Node) &&
				buttonRef.current &&
				!buttonRef.current.contains(event?.target as Node)
			) {
				setIsMobileMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMobileMenuOpen]);

	React.useEffect(() => {
		const handleResizeScreen = () => {
			if (window?.innerWidth >= 768) setIsMobileMenuOpen(false);
		};

		window.addEventListener("resize", handleResizeScreen);
		return () => {
			window.removeEventListener("resize", handleResizeScreen);
		};
	}, []);

	return (
		<AnimatePresence>
			{!isLoading && (
				<div className="pointer-events-none fixed top-0 right-0 left-0 z-40 flex w-full justify-center px-4 pt-6 md:px-0">
					<div className="relative flex w-full max-w-4xl justify-center">
						<motion.nav
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -100, opacity: 0 }}
							transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
							className="pointer-events-auto flex w-full items-center justify-between rounded-3xl border border-[#fafafa]/10 bg-transparent py-2 backdrop-blur-lg md:p-1.5"
						>
							<div className="flex items-center gap-2 pl-4">
								<Image src="/PixeUIWhite.svg" alt="PixeUI" width={22} height={22} draggable={false} priority={true} />

								<span className={`text-start text-xl text-[#fafafa] ${OutfitSemiBold.className} tracking-tight`}>
									PixeUI
								</span>
							</div>

							<div className="hidden items-center gap-1 md:flex">
								{NAVBAR_LINKS.map((link) => {
									const isExternal = link?.name === "Icons" || link?.name === "GitHub";

									return (
										<Link
											key={link?.name}
											href={link?.href}
											target={isExternal ? "_blank" : undefined}
											rel={isExternal ? "noopener noreferrer" : undefined}
											onClick={() => {
												if (!isExternal) setActiveTab(link?.name);
											}}
											className={`relative px-6 py-2 text-sm text-[#fafafa]/80 transition-colors duration-300 hover:text-[#fafafa] ${OutfitRegular.className}`}
										>
											{activeTab === link.name && (
												<motion.div
													layoutId="active-pill"
													className="absolute inset-0 rounded-xl bg-[#fafafa]/10"
													transition={{ type: "spring", stiffness: 300, damping: 30 }}
												/>
											)}

											<span className="relative z-10 flex items-center gap-1">
												{link?.name}
												{isExternal && <ExternalLink size={14} color="#71717b" />}
											</span>
										</Link>
									);
								})}
							</div>

							<div className="hidden pr-2 md:block">
								<Link href="/docs">
									<motion.div
										className={`flex cursor-pointer items-center rounded-3xl bg-[#fafafa] px-5 py-2 text-sm ${OutfitMedium.className} text-[#000000] transition-transform active:scale-95`}
										onMouseEnter={() => setIsButtonHovered(true)}
										onMouseLeave={() => setIsButtonHovered(false)}
									>
										<span>Get Started</span>

										<AnimatePresence>
											{isButtonHovered && (
												<motion.span
													initial={{ opacity: 0, width: 0, marginLeft: 0 }}
													animate={{ opacity: 1, width: "auto", marginLeft: 8 }}
													exit={{ opacity: 0, width: 0, marginLeft: 0 }}
													transition={{ duration: 0.15, ease: "easeOut" }}
													className="flex items-center overflow-hidden"
												>
													<ArrowRight size={18} color="#000000" />
												</motion.span>
											)}
										</AnimatePresence>
									</motion.div>
								</Link>
							</div>

							<div className="flex pr-4 md:hidden">
								<button
									ref={buttonRef}
									onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
									className="relative flex cursor-pointer items-center justify-center"
								>
									<AnimatePresence mode="wait">
										{isMobileMenuOpen ? (
											<motion.div
												key="close"
												initial={{ opacity: 0, rotate: -90 }}
												animate={{ opacity: 1, rotate: 0 }}
												exit={{ opacity: 0, rotate: 90 }}
												transition={{ duration: 0.2 }}
											>
												<X size={26} color="#fafafa" />
											</motion.div>
										) : (
											<motion.div
												key="menu"
												initial={{ opacity: 0, rotate: 90 }}
												animate={{ opacity: 1, rotate: 0 }}
												exit={{ opacity: 0, rotate: -90 }}
												transition={{ duration: 0.2 }}
											>
												<Menu size={26} color="#fafafa" />
											</motion.div>
										)}
									</AnimatePresence>
								</button>
							</div>
						</motion.nav>

						<AnimatePresence>
							{isMobileMenuOpen && (
								<motion.div
									ref={menuRef}
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: "auto" }}
									exit={{ opacity: 0, height: 0 }}
									transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
									className="pointer-events-auto absolute top-[calc(100%+6px)] right-0 left-0 w-full overflow-hidden rounded-3xl border border-[#fafafa]/10 bg-[#000000]/30 backdrop-blur-lg md:hidden"
								>
									<div className="flex flex-col gap-1 p-2">
										{NAVBAR_LINKS.map((link, index) => {
											const isExternal = link?.name === "Icons" || link?.name === "GitHub";

											return (
												<motion.div
													key={link?.name}
													initial={{ opacity: 0, x: -20, filter: "blur(5px)" }}
													animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
													transition={{
														delay: index * 0.1,
														duration: 0.3,
														ease: "easeOut",
													}}
												>
													<Link
														href={link?.href}
														target={isExternal ? "_blank" : undefined}
														rel={isExternal ? "noopener noreferrer" : undefined}
														onClick={() => {
															if (!isExternal) setActiveTab(link?.name);
															setIsMobileMenuOpen(false);
														}}
														className={`flex items-center justify-between rounded-3xl px-5 py-2.5 text-sm ${
															activeTab === link?.name ? "bg-[#fafafa]/5 text-[#fafafa]" : "text-[#fafafa]/70"
														} ${OutfitRegular.className}`}
													>
														<span className="flex items-center">{link?.name}</span>
														{isExternal && <ExternalLink size={16} color="#71717b" />}
													</Link>
												</motion.div>
											);
										})}

										<motion.div
											initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
											animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
											transition={{ delay: NAVBAR_LINKS.length * 0.1 + 0.1, duration: 0.3 }}
											className="mt-4"
										>
											<Link
												href="/docs"
												onClick={() => setIsMobileMenuOpen(false)}
												className={`flex w-full items-center justify-center gap-3 rounded-xl bg-[#fafafa] py-2.5 text-base text-[#000000] ${OutfitMedium.className}`}
											>
												<span>Get Started</span>
												<ArrowRight size={18} />
											</Link>
										</motion.div>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			)}
		</AnimatePresence>
	);
}
