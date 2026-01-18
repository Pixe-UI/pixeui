"use client";

import { CommandBlock, InstallationStepsExport, Step } from "@/components/docs/components/InstallationStepsExport";
import { ApiReference, PropsTable } from "@/components/docs/components/ApiReferenceExport";
import { ComponentPreview } from "@/components/docs/components/ComponentPreview";
import { OutfitMedium, OutfitRegular, OutfitSemiBold } from "@/lib/fonts";
import { CodeBlock } from "@/components/docs/components/CodeBlock";
import CopyButton from "@/components/ui/button/copy-button";
import { contributors } from "@/lib/contributors";
import { DOMAIN_BASE_URL } from "@/lib/constants";

import Link from "next/link";

const copyButtonCode = `/**
 * @version: 1.0.0
 * @author: Alexandr Virgovič
 * @description: Copy Button
 * @website: https://www.pixeui.com
 */
import { AnimatePresence, motion, type HTMLMotionProps } from "framer-motion";
import { Check, Copy } from "@deemlol/next-icons";
import * as React from "react";

function cn(...classes: (string | undefined | null | false)[]) {
	return classes.filter(Boolean).join(" ");
}

interface CopyButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
	textToCopy: string;
	size?: "sm" | "md" | "lg" | "xl";
}

const sizeConfig = {
	sm: { button: "h-8 w-8", icon: 15 },
	md: { button: "h-9 w-9", icon: 17 },
	lg: { button: "h-11 w-11", icon: 20 },
	xl: { button: "h-14 w-14", icon: 26 },
};

export default function CopyButton({ textToCopy, size = "md", className, ...props }: CopyButtonProps) {
	const [isCopied, setIsCopied] = React.useState(false);
	const config = sizeConfig[size];

	const handleCopy = () => {
		navigator.clipboard.writeText(textToCopy);

		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 2500);
	};

	return (
		<motion.button
			whileTap={{ scale: 0.9 }}
			onClick={handleCopy}
			className={cn(
				"relative flex cursor-pointer items-center justify-center rounded-md border border-[#fafafa]/10 bg-[#fafafa]/7 text-[#fafafa] transition-colors duration-300 hover:border-[#fafafa]/20 hover:bg-[#fafafa]/10",
				config.button,
				className,
			)}
			{...props}
		>
			<AnimatePresence mode="wait" initial={false}>
				{isCopied ? (
					<motion.div
						key="copied"
						initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
						animate={{ opacity: 1, scale: 1, rotate: 0 }}
						exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
						transition={{ type: "spring", stiffness: 300, damping: 15 }}
						className="absolute flex items-center justify-center"
					>
						<Check size={config.icon} />
					</motion.div>
				) : (
					<motion.div
						key="copy"
						initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
						animate={{ opacity: 1, scale: 1, rotate: 0 }}
						exit={{ opacity: 0, scale: 0.5, rotate: -90 }}
						transition={{ type: "spring", stiffness: 300, damping: 15 }}
						className="absolute flex items-center justify-center"
					>
						<Copy size={config.icon} />
					</motion.div>
				)}
			</AnimatePresence>
		</motion.button>
	);
}
`;

export default function CopyButtonComponent() {
	const usageCode = `<CopyButton />`;

	return (
		<div className="flex w-full flex-col pt-2 pb-16">
			<div>
				<h1 className={`mb-3 text-start text-5xl text-[#fafafa] ${OutfitSemiBold.className}`}>Copy Button</h1>

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
				<ComponentPreview code={copyButtonCode} name="components/ui/copy-button.tsx">
					<CopyButton textToCopy="Copy me" />
				</ComponentPreview>

				<InstallationStepsExport>
					<Step step={1} title="Install dependencies">
						<CommandBlock command="npm install framer-motion @deemlol/next-icons" />
					</Step>

					<Step step={2} title="Copy the code" description="Copy and paste the following code into your project.">
						<CodeBlock code={copyButtonCode} fileName="components/ui/copy-button.tsx" expandable />
					</Step>
				</InstallationStepsExport>

				<div className="pt-10">
					<h3 className={`mb-4 text-2xl text-[#fafafa] ${OutfitMedium.className}`}>Usage</h3>

					<CodeBlock code={usageCode} fileName="components/ui/copy-button.tsx" />
				</div>

				<ApiReference>
					<PropsTable
						title="CopyButton"
						props={[
							{
								prop: "textToCopy",
								type: "string",
								defaultValue: "-",
							},
							{
								prop: "size?",
								type: '"sm" | "md" | "lg" | "xl"',
								defaultValue: "md",
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
						]}
					/>
				</ApiReference>
			</section>
		</div>
	);
}
