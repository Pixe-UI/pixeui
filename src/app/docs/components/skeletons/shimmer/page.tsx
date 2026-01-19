"use client";

import { CommandBlock, InstallationStepsExport, Step } from "@/components/docs/components/InstallationStepsExport";
import { ApiReference, PropsTable } from "@/components/docs/components/ApiReferenceExport";
import { ComponentPreview } from "@/components/docs/components/ComponentPreview";
import { OutfitMedium, OutfitRegular, OutfitSemiBold } from "@/lib/fonts";
import ShimmerSkeleton from "@/components/ui/skeletons/shimmer-skeleton";
import { CodeBlock } from "@/components/docs/components/CodeBlock";
import { contributors } from "@/lib/contributors";
import { DOMAIN_BASE_URL } from "@/lib/constants";

import Link from "next/link";

const shimmerSkeletonCode = `/**
 * @version: 1.0.0
 * @author: Alexandr Virgovič
 * @description: Shimmer Skeleton
 * @website: https://www.pixeui.com
 */
import { motion } from "framer-motion";
import * as React from "react";

function cn(...classes: (string | undefined | null | false)[]) {
	return classes.filter(Boolean).join(" ");
}

interface ShimmerSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
	rounded?: boolean;
	width?: string | number;
	height?: string | number;
}

export default function ShimmerSkeleton({
	width = "100%",
	height = 20,
	rounded = false,
	className,
	style,
	...props
}: ShimmerSkeletonProps) {
	return (
		<div
			className={cn("relative overflow-hidden bg-[#fafafa]/7 backdrop-blur-sm", rounded ? "rounded-full" : "rounded-none", className)}
			style={{ width, height, ...style }}
			{...props}
		>
			<motion.div
				className="absolute inset-0 h-full w-full"
				initial={{ x: "-100%" }}
				animate={{ x: "100%" }}
				transition={{
					repeat: Infinity,
					duration: 2,
					ease: [0.4, 0, 0.2, 1],
				}}
				style={{
					background: "linear-gradient(90deg, transparent 0%, rgba(250, 250, 250, 0.1) 50%, transparent 100%)",
				}}
			/>
		</div>
	);
}
`;

export default function ShimmerSkeletonComponent() {
	const usageCode = `<ShimmerSkeleton />`;

	return (
		<div className="flex w-full flex-col pt-2 pb-16">
			<div>
				<h1 className={`mb-3 text-start text-3xl text-[#fafafa] lg:text-5xl ${OutfitSemiBold.className}`}>Shimmer Skeleton</h1>

				<p className={`${OutfitRegular.className} text-start text-sm text-[#fafafa]/60`}>
					Made by{" "}
					<Link
						href={contributors?.find((c) => c?.name === "Alexandr Virgovič")?.link || DOMAIN_BASE_URL}
						target="_blank"
						rel="noopener noreferrer"
						className={`text-[#fafafa] underline underline-offset-4 transition-colors duration-300 ${OutfitMedium.className}`}
					>
						{contributors?.find((c) => c?.name === "Alexandr Virgovič")?.name || "Unknown"}
					</Link>
				</p>
			</div>

			<section className="flex flex-col pt-10">
				<ComponentPreview code={shimmerSkeletonCode} name="components/ui/shimmer-skeleton.tsx">
					<ShimmerSkeleton width="80%" />
				</ComponentPreview>

				<InstallationStepsExport>
					<Step step={1} title="Install dependencies">
						<CommandBlock command="npm install framer-motion" />
					</Step>

					<Step step={2} title="Copy the code" description="Copy and paste the following code into your project.">
						<CodeBlock code={shimmerSkeletonCode} fileName="components/ui/shimmer-skeleton.tsx" expandable />
					</Step>
				</InstallationStepsExport>

				<div className="pt-10">
					<h3 className={`mb-4 text-2xl text-[#fafafa] ${OutfitMedium.className}`}>Usage</h3>

					<CodeBlock code={usageCode} fileName="components/ui/shimmer-skeleton.tsx" />
				</div>

				<ApiReference>
					<PropsTable
						title="ShimmerSkeleton"
						props={[
							{
								prop: "rounded?",
								type: "boolean",
								defaultValue: "false",
							},
							{
								prop: "width?",
								type: "string | number",
								defaultValue: "100%",
							},
							{
								prop: "height?",
								type: "string | number",
								defaultValue: "20",
							},
							{
								prop: "className?",
								type: "string",
								defaultValue: "-",
							},
							{
								prop: "...props?",
								type: "React.ButtonHTMLAttributes<HTMLButtonElement>",
								defaultValue: "-",
							},
							{
								prop: "style?",
								type: "React.CSSProperties",
								defaultValue: "-",
							},
						]}
					/>
				</ApiReference>
			</section>
		</div>
	);
}
