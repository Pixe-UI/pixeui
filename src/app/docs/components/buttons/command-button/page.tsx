"use client";

import { CommandBlock, InstallationStepsExport, Step } from "@/components/docs/components/InstallationStepsExport";
import { ApiReference, PropsTable } from "@/components/docs/components/ApiReferenceExport";
import { ComponentPreview } from "@/components/docs/components/ComponentPreview";
import { OutfitMedium, OutfitRegular, OutfitSemiBold } from "@/lib/fonts";
import { CodeBlock } from "@/components/docs/components/CodeBlock";
import CommandButton from "@/components/ui/button/command-button";
import { contributors } from "@/lib/contributors";
import { DOMAIN_BASE_URL } from "@/lib/constants";

import Link from "next/link";

const commandButtonCode = `/**
 * @version: 1.0.0
 * @author: Alexandr Virgovič
 * @description: Command Button
 * @website: https://www.pixeui.com
 */
import { HTMLMotionProps, motion } from "framer-motion";
import { Command } from "@deemlol/next-icons";

interface CommandButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
	shortcut?: string;
}

export default function CommandButton({ className, shortcut = "CMD + K", ...props }: CommandButtonProps) {
	return (
		<motion.button
			whileHover="hover"
			whileTap="tap"
			variants={{
				hover: { scale: 1.02 },
				tap: { scale: 0.95 },
			}}
			className={\`group/btn relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-md border border-[#fafafa]/10 bg-[#fafafa]/4 px-2 py-2 \${className || ""} \`}
			{...props}
		>
			<motion.div
				className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-[#fafafa]/8 to-transparent"
				transition={{
					duration: 1.5,
					repeat: Infinity,
					repeatDelay: 3,
					ease: "linear",
				}}
				animate={{
					translateX: ["-100%", "200%"],
				}}
			/>

			<div className="relative flex items-center justify-center">
				<motion.span
					variants={{
						hover: { rotate: [0, -10, 10, -5, 5, 0], transition: { duration: 0.5 } },
					}}
				>
					<Command size={17} className="text-[#fafafa]/80 transition-colors group-hover/btn:text-[#fafafa]" />
				</motion.span>
			</div>

			<span className="relative z-10 text-sm font-medium tracking-tight text-[#fafafa]/80 transition-colors group-hover/btn:text-[#fafafa]">
				{shortcut}
			</span>
		</motion.button>
	);
}
`;

export default function CommandButtonComponent() {
	const usageCode = `<CommandButton />`;

	return (
		<div className="flex w-full flex-col pt-2 pb-16">
			<div>
				<h1 className={`mb-3 text-start text-3xl text-[#fafafa] lg:text-5xl ${OutfitSemiBold.className}`}>Command Button</h1>

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
				<ComponentPreview code={commandButtonCode} name="components/ui/command-button.tsx">
					<CommandButton />
				</ComponentPreview>

				<InstallationStepsExport>
					<Step step={1} title="Install dependencies">
						<CommandBlock command="npm install framer-motion @deemlol/next-icons" />
					</Step>

					<Step step={2} title="Copy the code" description="Copy and paste the following code into your project.">
						<CodeBlock code={commandButtonCode} fileName="components/ui/command-button.tsx" expandable />
					</Step>
				</InstallationStepsExport>

				<div className="pt-10">
					<h3 className={`mb-4 text-2xl text-[#fafafa] ${OutfitMedium.className}`}>Usage</h3>

					<CodeBlock code={usageCode} fileName="components/ui/command-button.tsx" />
				</div>

				<ApiReference>
					<PropsTable
						title="CommandButton"
						props={[
							{
								prop: "shortcut?",
								type: "string",
								defaultValue: "CMD + K",
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
