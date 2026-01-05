"use client";

import { OutfitMedium, OutfitRegular, OutfitSemiBold } from "@/lib/fonts";
import { useLoading } from "@/utils/LoadingContext";
import { FOOTER_LINKS } from "@/lib/constants";

import { ExternalLink } from "@deemlol/next-icons";
import Image from "next/image";
import Link from "next/link";

export function FooterExport() {
	const currentYear = new Date().getFullYear();
	const { isLoading } = useLoading();

	if (isLoading) return null;

	return (
		<footer className="w-full border-t border-[#fafafa]/10 bg-[#080808] pt-10 pb-10">
			<div className="mx-auto max-w-6xl px-4 2xl:px-0">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
					<div className="flex flex-col">
						<Link href="/" className="flex items-center gap-3">
							<Image src="/PixeUIWhite.svg" alt="PixeUI" width={26} height={26} draggable={false} priority={true} />

							<span
								className={`text-start text-2xl tracking-tight text-[#fafafa] ${OutfitSemiBold.className} tracking-tight`}
							>
								PixeUI
							</span>
						</Link>

						<p className={`mt-3 max-w-xs text-xs text-[#fafafa]/70 ${OutfitRegular.className}`}>
							Modern TailwindCSS components that save time and make your projects look amazing.
						</p>
					</div>

					{FOOTER_LINKS.map((section) => (
						<div key={section?.title} className="flex flex-col gap-4">
							<h3 className={`text-start text-base text-[#fafafa] ${OutfitMedium.className}`}>{section?.title}</h3>

							<ul className="flex flex-col gap-2">
								{section?.links?.map((link) => (
									<li key={link?.name}>
										{(link as any).badge ? (
											<div
												className={`flex w-fit cursor-not-allowed items-center gap-2 text-sm text-[#fafafa]/40 ${OutfitRegular.className}`}
											>
												<span>{link?.name}</span>

												<span
													className={`rounded-full bg-[#fafafa]/10 px-2 py-0.5 text-[10px] ${OutfitRegular.className} text-[#fafafa]/70`}
												>
													{(link as any).badge}
												</span>
											</div>
										) : (
											<Link
												href={link?.href}
												target={(link as any).external ? "_blank" : undefined}
												rel={(link as any).external ? "noopener noreferrer" : undefined}
												className={`group flex w-fit items-center gap-2 text-sm text-[#fafafa]/70 transition-colors duration-300 hover:text-[#fafafa] ${OutfitRegular.className}`}
											>
												<span>{link?.name}</span>

												{(link as any).external && (
													<ExternalLink
														size={14}
														className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
													/>
												)}
											</Link>
										)}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="mt-14 flex flex-col items-center border-t border-[#fafafa]/10 pt-6 md:flex-row">
					<p className={`text-sm text-[#fafafa]/40 ${OutfitRegular.className}`}>© {currentYear} PixeUI. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
