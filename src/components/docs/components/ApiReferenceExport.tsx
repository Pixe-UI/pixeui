"use client";

import { OutfitMedium, OutfitRegular, OutfitSemiBold } from "@/lib/fonts";

import { motion } from "framer-motion";
import * as React from "react";

export interface PropDef {
	prop: string;
	type: string;
	defaultValue?: string;
}

export function ApiReference({
	children,
	description,
	title = "API Reference",
}: {
	title?: string;
	description?: string;
	children: React.ReactNode;
}) {
	return (
		<div className="flex w-full flex-col pt-10">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				<h3 className={`mb-6 text-start text-3xl text-[#fafafa] ${OutfitSemiBold.className}`}>{title}</h3>

				{description && <p className={`mb-8 text-start text-[#fafafa]/70 ${OutfitRegular.className}`}>{description}</p>}
			</motion.div>

			<div className="flex flex-col gap-10">{children}</div>
		</div>
	);
}

export function PropsTable({ title, props }: { title?: string; props: PropDef[] }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
			className="flex flex-col"
		>
			{title && <h4 className={`mb-4 text-xl text-[#fafafa] ${OutfitMedium.className}`}>{title}</h4>}

			<div className="w-full overflow-hidden rounded-xl border border-[#fafafa]/10 bg-[#fafafa]/3">
				<div className="overflow-x-auto">
					<table className="w-full border-collapse text-left">
						<thead>
							<tr className="border-b border-[#fafafa]/10 bg-[#fafafa]/5">
								<th className={`px-6 py-3 text-sm text-[#fafafa]/70 ${OutfitMedium.className}`}>Prop</th>
								<th className={`px-6 py-3 text-sm text-[#fafafa]/70 ${OutfitMedium.className}`}>Type</th>
								<th className={`px-6 py-3 text-sm text-[#fafafa]/70 ${OutfitMedium.className}`}>Default</th>
							</tr>
						</thead>

						<tbody>
							{props.map((prop, index) => (
								<tr key={index} className={`border-b border-[#fafafa]/5 last:border-0`}>
									<td className="px-6 py-4 align-top">
										<code
											className={`rounded-md bg-[#fafafa]/10 px-2 py-1 text-xs whitespace-nowrap text-[#fafafa] ${OutfitRegular.className}`}
										>
											{prop.prop}
										</code>
									</td>

									<td className="px-6 py-4 align-top">
										<code
											className={`rounded-md bg-[#fafafa]/10 px-2 py-1 text-xs whitespace-nowrap text-[#fafafa] ${OutfitRegular.className}`}
										>
											{prop.type}
										</code>
									</td>

									<td className="px-6 py-4 align-top">
										{prop.defaultValue ? (
											<code
												className={`rounded-md bg-[#fafafa]/5 px-2 py-1 text-xs whitespace-nowrap text-[#fafafa]/50 ${OutfitRegular.className}`}
											>
												{prop.defaultValue}
											</code>
										) : (
											<span className={`text-sm text-[#fafafa]/30 ${OutfitRegular.className}`}>-</span>
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</motion.div>
	);
}
