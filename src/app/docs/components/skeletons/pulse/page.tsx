"use client";

import { CommandBlock, InstallationStepsExport, Step } from "@/components/docs/components/InstallationStepsExport";
import { ApiReference, PropsTable } from "@/components/docs/components/ApiReferenceExport";
import { ComponentPreview } from "@/components/docs/components/ComponentPreview";
import { OutfitMedium, OutfitRegular, OutfitSemiBold } from "@/lib/fonts";
import PulseSkeleton from "@/components/ui/skeletons/pulse-skeleton";
import { CodeBlock } from "@/components/docs/components/CodeBlock";
import { contributors } from "@/lib/contributors";
import { DOMAIN_BASE_URL } from "@/lib/constants";

import Link from "next/link";

const pulseSkeletonCode = `/**
 * @version: 1.0.0
 * @author: Alexandr Virgovič
 * @description: Pulse Skeleton
 * @website: https://www.pixeui.com
 */
import { motion, type HTMLMotionProps } from "framer-motion";

function cn(...classes: (string | undefined | null | false)[]) {
	return classes.filter(Boolean).join(" ");
}

interface PulseSkeletonProps extends HTMLMotionProps<"div"> {
	rounded?: boolean;
	width?: string | number;
	height?: string | number;
}

export default function PulseSkeleton({ width = "100%", height = 20, rounded = false, className, style, ...props }: PulseSkeletonProps) {
	return (
		<motion.div
			className={cn("bg-[#fafafa]/7 backdrop-blur-sm", rounded ? "rounded-full" : "rounded-none", className)}
			style={{ width, height, ...style }}
			initial={{ opacity: 0.5 }}
			animate={{ opacity: [0.5, 1, 0.5] }}
			transition={{
				duration: 1.5,
				repeat: Infinity,
				ease: "easeInOut",
			}}
			{...props}
		/>
	);
}
`;

export default function PulseSkeletonComponent() {
	const usageCode = `<PulseSkeleton />`;

	return (
		<div className="flex w-full flex-col pt-2 pb-16">
			<div>
				<h1 className={`mb-3 text-start text-3xl text-[#fafafa] lg:text-5xl ${OutfitSemiBold.className}`}>Pulse Skeleton</h1>

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
				<ComponentPreview code={pulseSkeletonCode} name="components/ui/pulse-skeleton.tsx">
					<PulseSkeleton width="80%" />
				</ComponentPreview>

				<InstallationStepsExport>
					<Step step={1} title="Install dependencies">
						<CommandBlock command="npm install framer-motion" />
					</Step>

					<Step step={2} title="Copy the code" description="Copy and paste the following code into your project.">
						<CodeBlock code={pulseSkeletonCode} fileName="components/ui/pulse-skeleton.tsx" expandable />
					</Step>
				</InstallationStepsExport>

				<div className="pt-10">
					<h3 className={`mb-4 text-2xl text-[#fafafa] ${OutfitMedium.className}`}>Usage</h3>

					<CodeBlock code={usageCode} fileName="components/ui/pulse-skeleton.tsx" />
				</div>

				<ApiReference>
					<PropsTable
						title="PulseSkeleton"
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
