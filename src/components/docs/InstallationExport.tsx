"use client";

import { OutfitMedium, OutfitRegular, OutfitSemiBold } from "@/lib/fonts";
import { DOMAIN_BASE_URL } from "@/lib/constants";

import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ArrowRight, Check, Copy } from "@deemlol/next-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function InstallationExport() {
	return (
		<div className="flex max-w-4xl flex-col pt-2 pb-16">
			<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
				<h1 className={`mb-6 text-start text-4xl text-[#fafafa] md:text-5xl ${OutfitSemiBold.className}`}>Installation</h1>

				<p className={`text-start text-base text-[#fafafa]/60 md:text-lg ${OutfitRegular.className} leading-relaxed`}>
					Get started with{" "}
					<Link
						href={DOMAIN_BASE_URL}
						className={`text-[#fafafa] ${OutfitMedium.className} underline underline-offset-2 transition-all duration-300 hover:text-[#fafafa]/80`}
					>
						PixeUI
					</Link>{" "}
					by installing the necessary packages and dependencies.
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
				className="mt-10 h-px w-full bg-linear-to-r from-transparent via-[#fafafa]/15 to-transparent"
			/>

			<div className="mt-8 flex flex-col gap-10">
				<Step
					step={1}
					title="Create project"
					description="Start by creating a new Next.js project if you don't have one set up."
					delay={0.2}
				>
					<CodeBlock command="npx create-next-app@latest" />
				</Step>

				<Step step={2} title="Install dependencies" description="Install the required dependencies for PixeUI." delay={0.3}>
					<div className="flex flex-col gap-3">
						<CodeBlock command="npm install framer-motion @deemlol/next-icons@latest" />

						<div
							className={`rounded-lg border border-[#fafafa]/5 bg-[#fafafa]/3 p-2 text-xs text-[#fafafa]/70 md:text-sm ${OutfitRegular.className}`}
						>
							We use <span className="text-[#fafafa]">@deemlol/next-icons</span> for icons. If you are missing any icon, you
							can request it{" "}
							<Link
								href="https://www.nexticons.com/contact"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#fafafa] underline decoration-[#fafafa]/30 underline-offset-4 transition-colors hover:decoration-[#fafafa]"
							>
								here
							</Link>
							.
						</div>
					</div>
				</Step>

				<Step
					step={3}
					title="Optional dependencies"
					description="Some components can require additional libraries, listed at the bottom of each components."
					delay={0.4}
				>
					<div
						className={`rounded-lg border border-[#fafafa]/5 bg-[#fafafa]/3 p-2 text-xs text-[#fafafa]/70 md:text-sm ${OutfitRegular.className}`}
					>
						Always check the dependencies section of each component you copy and install them.
					</div>
				</Step>

				<Step step={4} title="That's it!" description="You are now ready to use PixeUI components in your project." delay={0.5}>
					<div className="flex items-center pt-1">
						<Link href="/docs/components">
							<button
								className={`group flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#fafafa] px-6 py-2 text-base text-[#000000] ${OutfitMedium.className}`}
							>
								<span>Browse Components</span>

								<ArrowRight
									size={16}
									color="#000000"
									className="transition-transform duration-300 group-hover:translate-x-1"
								/>
							</button>
						</Link>
					</div>
				</Step>
			</div>
		</div>
	);
}

function Step({
	step,
	title,
	description,
	children,
	delay,
}: {
	step: number;
	title: string;
	delay: number;
	description: string;
	children: React.ReactNode;
}) {
	return (
		<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay }}>
			<div className="flex items-center gap-4">
				<div
					className={`flex h-8 w-8 items-center justify-center rounded-full bg-[#fafafa]/10 text-base text-[#fafafa] ${OutfitMedium.className}`}
				>
					{step}
				</div>

				<h2 className={`text-start text-2xl ${OutfitSemiBold.className} text-[#fafafa]`}>{title}</h2>
			</div>

			<div className="ml-4 border-l border-[#fafafa]/10 pb-4 pl-8">
				<p className={`mt-2 mb-6 text-start text-sm tracking-normal text-[#fafafa]/70 md:text-base ${OutfitRegular.className}`}>
					{description}
				</p>

				{children}
			</div>
		</motion.div>
	);
}

function CodeBlock({ command, isMultiLine = false }: { command: string; isMultiLine?: boolean }) {
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

		if (command.startsWith("npx create-next-app")) {
			switch (tab) {
				case "pnpm":
					return "pnpm create next-app";
				case "yarn":
					return "yarn create next-app";
				case "bun":
					return "bun create next-app";
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
									layoutId="activeTab"
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
