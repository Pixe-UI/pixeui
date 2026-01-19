"use client";

import { InstallationStepsExport, Step, CommandBlock } from "@/components/docs/components/InstallationStepsExport";
import { ApiReference, PropsTable } from "@/components/docs/components/ApiReferenceExport";
import { ComponentPreview } from "@/components/docs/components/ComponentPreview";
import ShimmerSeparator from "@/components/ui/separators/shimmer-separator";
import { OutfitMedium, OutfitRegular, OutfitSemiBold } from "@/lib/fonts";
import { CodeBlock } from "@/components/docs/components/CodeBlock";
import { contributors } from "@/lib/contributors";
import { DOMAIN_BASE_URL } from "@/lib/constants";

import Link from "next/link";

const shimmerSeparatorCode = `/**
 * @version: 1.0.0
 * @author: Alexandr Virgovič
 * @description: Shimmer Separator
 * @website: https://www.pixeui.com
 */
import { motion, type HTMLMotionProps } from "framer-motion";

function cn(...classes: (string | undefined | null | false)[]) {
	return classes.filter(Boolean).join(" ");
}

interface ShimmerSeparatorProps extends HTMLMotionProps<"div"> {
	duration?: number;
	baseColor?: string;
	shimmerColor?: string;
	width?: string | number;
}

export default function ShimmerSeparator({
	baseColor = "rgba(250, 250, 250, 0.1)",
	shimmerColor = "rgba(250, 250, 250, 0.5)",
	width = "100%",
	duration = 5,
	className,
	style,
	...props
}: ShimmerSeparatorProps) {
	return (
		<motion.div className={cn("flex w-full flex-col items-center justify-center", className)} style={{ width, ...style }} {...props}>
			<div className="relative w-full overflow-hidden rounded-full">
				<div
					className="h-px w-full"
					style={{
						backgroundColor: baseColor,
						borderRadius: "9999px",
					}}
				/>

				<motion.div
					key={duration}
					className="absolute inset-0 h-px w-full"
					style={{
						background: \`linear-gradient(90deg, transparent 0%, \${shimmerColor} 50%, transparent 100%)\`,
						backgroundSize: "200% 100%",
					}}
					animate={{
						backgroundPosition: ["200% 0", "-200% 0"],
					}}
					transition={{
						duration: duration,
						ease: "linear",
						repeat: Infinity,
					}}
				/>
			</div>
		</motion.div>
	);
}
`;

export default function ShimmerSeparatorComponent() {
	const usageCode = `<ShimmerSeparator />`;

	return (
		<div className="flex w-full flex-col pt-2 pb-16">
			<div>
				<h1 className={`mb-3 text-start text-3xl text-[#fafafa] lg:text-5xl ${OutfitSemiBold.className}`}>Shimmer Separator</h1>

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
				<ComponentPreview code={shimmerSeparatorCode} name="components/ui/shimmer-separator.tsx">
					<ShimmerSeparator width="80%" />
				</ComponentPreview>

				<InstallationStepsExport>
					<Step step={1} title="Install dependencies">
						<CommandBlock command="npm install framer-motion" />
					</Step>

					<Step step={2} title="Copy the code" description="Copy and paste the following code into your project.">
						<CodeBlock code={shimmerSeparatorCode} fileName="components/ui/shimmer-separator.tsx" expandable />
					</Step>
				</InstallationStepsExport>

				<div className="pt-10">
					<h3 className={`mb-4 text-2xl text-[#fafafa] ${OutfitMedium.className}`}>Usage</h3>

					<CodeBlock code={usageCode} fileName="components/ui/shimmer-separator.tsx" />
				</div>

				<ApiReference>
					<PropsTable
						title="ShimmerSeparator"
						props={[
							{
								prop: "baseColor?",
								type: "string",
								defaultValue: "rgba(250, 250, 250, 0.1)",
							},
							{
								prop: "shimmerColor?",
								type: "string",
								defaultValue: "rgba(250, 250, 250, 0.5)",
							},
							{
								prop: "width?",
								type: "string | number",
								defaultValue: "100%",
							},
							{
								prop: "duration?",
								type: "number",
								defaultValue: "5",
							},
							{
								prop: "className?",
								type: "string",
								defaultValue: "-",
							},
							{
								prop: "...props?",
								type: "React.HTMLAttributes<HTMLDivElement>",
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
