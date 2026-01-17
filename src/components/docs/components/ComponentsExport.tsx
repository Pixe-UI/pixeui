"use client";

import { OutfitMedium, OutfitRegular, OutfitSemiBold } from "@/lib/fonts";
import { COMPONENTS_COLLECTION_LIST } from "@/lib/constants";

import { MoreHorizontal, MessageSquare, PlusSquare } from "@deemlol/next-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const ICON_MAP = {
	PlusSquare: <PlusSquare size={24} className="text-[#fafafa]/20" />,
	MoreHorizontal: <MoreHorizontal size={24} className="text-[#fafafa]/10" />,
	MessageSquare: <MessageSquare size={24} className="text-[#fafafa]/10" />,
};

export default function ComponentsExport() {
	return (
		<div className="flex w-full flex-col pt-2 pb-16">
			<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
				<h1 className={`mb-6 text-start text-4xl text-[#fafafa] md:text-5xl ${OutfitSemiBold.className}`}>Components</h1>

				<p className={`mb-12 text-base text-[#fafafa]/60 md:text-lg ${OutfitRegular.className}`}>
					Browse our collection of modern, and accessible copy-and-paste components.
				</p>

				<div className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
					{COMPONENTS_COLLECTION_LIST.map((component, index) => {
						const CardContent = (
							<>
								<div
									className={`relative flex aspect-4/3 w-full items-center justify-center overflow-hidden rounded-xl bg-[#171717] transition-all duration-300 ${
										component?.disabled ? "opacity-50" : "group-hover:bg-[#1f1f1f]"
									}`}
								>
									<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.05),transparent_60%)]" />

									<div
										className={`relative z-10 flex h-18 w-28 items-center justify-center rounded-lg bg-[#262626] shadow-xl transition-transform duration-300 ${
											component?.disabled ? "" : "group-hover:scale-105"
										}`}
									>
										{ICON_MAP[component?.icon as keyof typeof ICON_MAP]}

										<div className={`absolute top-2 left-2 h-1 w-6 rounded-full bg-[#fafafa]/10`} />
										<div className={`absolute top-2 right-2 h-1 w-1 rounded-full bg-[#fafafa]/10`} />
										<div className={`absolute right-2 bottom-2 left-2 h-1 rounded-full bg-[#fafafa]/10`} />
									</div>
								</div>

								<div className="flex flex-col items-center">
									<h3
										className={`text-base text-[#fafafa] md:text-xl ${component?.disabled ? "text-[#fafafa]/40" : ""} ${OutfitMedium.className}`}
									>
										{component?.title}
									</h3>
								</div>
							</>
						);

						if (component?.disabled) {
							return (
								<div key={index} className="flex cursor-not-allowed flex-col items-center gap-3 select-none">
									{CardContent}
								</div>
							);
						}

						return (
							<Link key={index} href={component?.href} className="group flex flex-col items-center gap-3">
								{CardContent}
							</Link>
						);
					})}
				</div>
			</motion.div>
		</div>
	);
}
