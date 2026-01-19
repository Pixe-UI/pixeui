"use client";

import { InstallationStepsExport, Step } from "@/components/docs/components/InstallationStepsExport";
import { ApiReference, PropsTable } from "@/components/docs/components/ApiReferenceExport";
import { ComponentPreview } from "@/components/docs/components/ComponentPreview";
import GradientSeparator from "@/components/ui/separators/gradient-separator";
import { OutfitMedium, OutfitRegular, OutfitSemiBold } from "@/lib/fonts";
import { CodeBlock } from "@/components/docs/components/CodeBlock";
import { contributors } from "@/lib/contributors";
import { DOMAIN_BASE_URL } from "@/lib/constants";

import Link from "next/link";

const gradientSeparatorCode = `/**
 * @version: 1.0.0
 * @author: Alexandr Virgovič
 * @description: Gradient Separator
 * @website: https://www.pixeui.com
 */
import * as React from "react";

function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(" ");
}

interface GradientSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
    label?: string;
    gradient?: string;
    width?: string | number;
    orientation?: "horizontal" | "vertical";
}

export default function GradientSeparator({
    label,
    gradient = "from-transparent via-[#fafafa] to-transparent",
    width,
    orientation = "horizontal",
    className,
    style,
    ...props
}: GradientSeparatorProps) {
    const isHorizontal = orientation === "horizontal";

    return (
        <div
            className={cn("flex items-center justify-center", isHorizontal ? "w-full flex-row" : "h-full flex-col", className)}
            style={{ width: isHorizontal ? width : undefined, ...style }}
            {...props}
        >
            <div
                className={cn("bg-linear-to-r", isHorizontal ? "h-px w-full" : "h-full w-px", !isHorizontal && "bg-linear-to-b", gradient)}
            />

            {label && (
                <span
                    className={cn(
                        "shrink-0 text-xs font-medium tracking-wider text-[#fafafa]/60 uppercase",
                        isHorizontal ? "mx-3" : "my-3 py-1 [writing-mode:vertical-rl]",
                    )}
                >
                    {label}
                </span>
            )}

            {label && (
                <div
                    className={cn(
                        "bg-linear-to-r",
                        isHorizontal ? "h-px w-full" : "h-full w-px",
                        !isHorizontal && "bg-linear-to-b",
                        gradient,
                    )}
                />
            )}
        </div>
    );
}
`;

export default function GradientSeparatorComponent() {
	const usageCode = `<GradientSeparator />`;

	return (
		<div className="flex w-full flex-col pt-2 pb-16">
			<div>
				<h1 className={`mb-3 text-start text-3xl text-[#fafafa] lg:text-5xl ${OutfitSemiBold.className}`}>Gradient Separator</h1>

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
				<ComponentPreview code={gradientSeparatorCode} name="components/ui/gradient-separator.tsx">
					<GradientSeparator width="80%" />
				</ComponentPreview>

				<InstallationStepsExport>
					<Step step={1} title="Copy the code" description="Copy and paste the following code into your project.">
						<CodeBlock code={gradientSeparatorCode} fileName="components/ui/gradient-separator.tsx" expandable />
					</Step>
				</InstallationStepsExport>

				<div className="pt-10">
					<h3 className={`mb-4 text-2xl text-[#fafafa] ${OutfitMedium.className}`}>Usage</h3>

					<CodeBlock code={usageCode} fileName="components/ui/gradient-separator.tsx" />
				</div>

				<ApiReference>
					<PropsTable
						title="GradientSeparator"
						props={[
							{
								prop: "label?",
								type: "string",
								defaultValue: "-",
							},
							{
								prop: "gradient?",
								type: "string",
								defaultValue: "from-transparent via-[#fafafa] to-transparent",
							},
							{
								prop: "width?",
								type: "string | number",
								defaultValue: "100%",
							},
							{
								prop: "orientation?",
								type: "horizontal | vertical",
								defaultValue: "horizontal",
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
