"use client";

import { OutfitMedium, OutfitRegular } from "@/lib/fonts";

import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Check, Copy } from "@deemlol/next-icons";
import { motion } from "framer-motion";
import * as React from "react";

export function InstallationStepsExport({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex w-full flex-col pt-10">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				<h3 className={`mb-6 text-start text-3xl text-[#fafafa] ${OutfitMedium.className}`}>Installation</h3>
			</motion.div>

			<div className="flex flex-col gap-8">{children}</div>
		</div>
	);
}

export function Step({
	step,
	title,
	description,
	children,
}: {
	step: number;
	title: string;
	description?: string;
	children: React.ReactNode;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<div className="flex items-center gap-4">
				<div
					className={`flex h-7 w-7 items-center justify-center rounded-full bg-[#fafafa]/10 text-base text-[#fafafa] ${OutfitMedium.className}`}
				>
					{step}
				</div>

				<h2 className={`text-start text-xl ${OutfitMedium.className} text-[#fafafa]`}>{title}</h2>
			</div>

			<div className={`ml-4 border-l border-[#fafafa]/10 pb-4 pl-7 ${description ? "" : "pt-6"}`}>
				{description && (
					<p className={`mt-1 mb-6 text-start text-xs tracking-normal text-[#fafafa]/70 md:text-base ${OutfitRegular.className}`}>
						{description}
					</p>
				)}

				{children}
			</div>
		</motion.div>
	);
}

export function CommandBlock({ command, isMultiLine = false }: { command: string; isMultiLine?: boolean }) {
	const [activeTab, setActiveTab] = React.useState("npm");
	const [copied, setCopied] = React.useState(false);

	const getCommand = (tab: string) => {
		if (command.startsWith("npm install")) {
			const packages = command.replace("npm install ", "");

			switch (tab) {
				case "pnpm":
					return `pnpm add ${packages}`;
				case "yarn":
					return `yarn add ${packages}`;
				case "bun":
					return `bun add ${packages}`;
				default:
					return command;
			}
		}
		return command;
	};

	const currentCommand = getCommand(activeTab);

	const handleCopy = () => {
		navigator.clipboard.writeText(currentCommand);

		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const tabs = ["npm", "pnpm", "yarn", "bun"];

	return (
		<div className="group relative overflow-hidden rounded-xl border border-[#fafafa]/10 bg-[#fafafa]/3">
			<div className="flex items-center justify-between border-b border-[#fafafa]/10 bg-[#fafafa]/5 px-4 py-1.5">
				<div className="flex gap-4">
					{tabs?.map((tab) => (
						<button
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`relative cursor-pointer text-sm transition-colors duration-300 ${
								activeTab === tab ? "text-[#fafafa]" : "text-[#fafafa]/50 hover:text-[#fafafa]/80"
							} ${OutfitMedium.className}`}
						>
							{tab}

							{activeTab === tab && (
								<motion.div
									layoutId={`activeTab-${command}`}
									className="absolute right-0 -bottom-[10px] left-0 h-0.5 bg-[#fafafa]"
									transition={{ type: "spring", stiffness: 500, damping: 30 }}
								/>
							)}
						</button>
					))}
				</div>

				<button
					onClick={handleCopy}
					className="cursor-pointer rounded-lg p-1.5 text-[#fafafa]/40 transition-colors duration-300 hover:bg-[#fafafa]/10 hover:text-[#fafafa]"
				>
					{copied ? <Check size={16} color="#fafafa" /> : <Copy size={16} color="#fafafa" />}
				</button>
			</div>

			<div className="flex items-start">
				{!isMultiLine && <span className={`py-4 pl-4 text-[#fafafa]/50 select-none ${OutfitMedium.className}`}>$</span>}

				<div className="flex-1 overflow-hidden">
					<SyntaxHighlighter
						language="bash"
						style={vscDarkPlus}
						customStyle={{
							margin: 0,
							padding: "1rem",
							paddingLeft: isMultiLine ? "1rem" : "0.5rem",
							background: "transparent",
							fontSize: "0.875rem",
						}}
						wrapLongLines={true}
					>
						{currentCommand}
					</SyntaxHighlighter>
				</div>
			</div>
		</div>
	);
}
