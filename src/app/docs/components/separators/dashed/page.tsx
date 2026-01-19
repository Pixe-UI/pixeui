"use client";

import { InstallationStepsExport, Step } from "@/components/docs/components/InstallationStepsExport";
import { ApiReference, PropsTable } from "@/components/docs/components/ApiReferenceExport";
import { ComponentPreview } from "@/components/docs/components/ComponentPreview";
import { OutfitMedium, OutfitRegular, OutfitSemiBold } from "@/lib/fonts";
import DashedSeparator from "@/components/ui/separators/dashed-separator";
import { CodeBlock } from "@/components/docs/components/CodeBlock";
import { contributors } from "@/lib/contributors";
import { DOMAIN_BASE_URL } from "@/lib/constants";

import Link from "next/link";

const dashedSeparatorCode = `/**
 * @version: 1.0.0
 * @author: Alexandr Virgovič
 * @description: Dashed Separator
 * @website: https://www.pixeui.com
 */
import * as React from "react";

function cn(...classes: (string | undefined | null | false)[]) {
	return classes.filter(Boolean).join(" ");
}

interface DashedSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
	label?: string;
	color?: string;
	width?: string | number;
	orientation?: "horizontal" | "vertical";
}

export default function DashedSeparator({
	label,
	orientation = "horizontal",
	color = "border-[#fafafa]/20",
	width,
	className,
	style,
	...props
}: DashedSeparatorProps) {
	return (
		<div
			className={cn(
				"flex items-center justify-center",
				orientation === "horizontal" ? "w-full flex-row" : "h-full flex-col",
				className,
			)}
			style={{
				width: orientation === "horizontal" ? width : undefined,
				height: orientation === "vertical" ? width : undefined,
				...style,
			}}
			{...props}
		>
			<div className={cn(color, orientation === "horizontal" ? "w-full border-t border-dashed" : "h-full border-l border-dashed")} />

			{label && (
				<span
					className={cn(
						"shrink-0 text-xs font-medium tracking-wider text-[#fafafa]/60 uppercase",
						orientation === "horizontal" ? "mx-3" : "my-2 py-1 [writing-mode:vertical-rl]",
					)}
				>
					{label}
				</span>
			)}

			{label && (
				<div
					className={cn(color, orientation === "horizontal" ? "w-full border-t border-dashed" : "h-full border-l border-dashed")}
				/>
			)}
		</div>
	);
}
`;

export default function DashedSeparatorComponent() {
	const usageCode = `<DashedSeparator />`;

	return (
		<div className="flex w-full flex-col pt-2 pb-16">
			<div>
				<h1 className={`mb-3 text-start text-3xl text-[#fafafa] lg:text-5xl ${OutfitSemiBold.className}`}>Dashed Separator</h1>

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
				<ComponentPreview code={dashedSeparatorCode} name="components/ui/dashed-separator.tsx">
					<DashedSeparator width="80%" />
				</ComponentPreview>

				<InstallationStepsExport>
					<Step step={1} title="Copy the code" description="Copy and paste the following code into your project.">
						<CodeBlock code={dashedSeparatorCode} fileName="components/ui/dashed-separator.tsx" expandable />
					</Step>
				</InstallationStepsExport>

				<div className="pt-10">
					<h3 className={`mb-4 text-2xl text-[#fafafa] ${OutfitMedium.className}`}>Usage</h3>

					<CodeBlock code={usageCode} fileName="components/ui/dashed-separator.tsx" />
				</div>

				<ApiReference>
					<PropsTable
						title="DashedSeparator"
						props={[
							{
								prop: "label?",
								type: "string",
								defaultValue: "-",
							},
							{
								prop: "orientation?",
								type: "horizontal | vertical",
								defaultValue: "horizontal",
							},
							{
								prop: "color?",
								type: "string",
								defaultValue: "border-[#fafafa]/20",
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
