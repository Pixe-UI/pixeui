"use client";

import { CommandBlock, InstallationStepsExport, Step } from "@/components/docs/components/InstallationStepsExport";
import { ApiReference, PropsTable } from "@/components/docs/components/ApiReferenceExport";
import { ComponentPreview } from "@/components/docs/components/ComponentPreview";
import { OutfitMedium, OutfitRegular, OutfitSemiBold } from "@/lib/fonts";
import GitHubStarsButton from "@/components/ui/github-stars-button";
import { CodeBlock } from "@/components/docs/components/CodeBlock";
import { contributors } from "@/lib/contributors";
import { DOMAIN_BASE_URL } from "@/lib/constants";

import Link from "next/link";

const gitHubStarsButtonCode = `/**
 * @version: 1.0.0
 * @author: Alexandr Virgovič
 * @description: GitHub Stars Button
 * @website: https://www.pixeui.com
 */
import { motion, useMotionValue, useSpring, useInView, type HTMLMotionProps } from "framer-motion";
import { Github, Star } from "@deemlol/next-icons";
import * as React from "react";

function cn(...classes: (string | undefined | null | false)[]) {
	return classes.filter(Boolean).join(" ");
}

interface GitHubStarsButtonProps extends Omit<HTMLMotionProps<"a">, "children"> {
	href: string;
	stars: number;
	label?: string;
}

function NumberTicker({ value }: { value: number }) {
	const ref = React.useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, {
		damping: 60,
		stiffness: 100,
	});

	React.useEffect(() => {
		if (isInView) motionValue.set(value);
	}, [motionValue, value, isInView]);

	React.useEffect(() => {
		springValue.on("change", (latest) => {
			if (ref.current) ref.current.textContent = Intl.NumberFormat("en-US").format(Math.round(latest));
		});
	}, [springValue]);

	return (
		<span ref={ref} className="tracking-wider tabular-nums">
			0
		</span>
	);
}

export default function GitHubStarsButton({ href, stars, label = "Star on GitHub", className, ...props }: GitHubStarsButtonProps) {
	return (
		<motion.a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			whileHover={{ scale: 1.03 }}
			whileTap={{ scale: 0.95 }}
			transition={{ type: "spring", stiffness: 300, damping: 30 }}
			className={cn(
				"group/github relative flex items-center gap-4 overflow-hidden rounded-md bg-[#fafafa]/3 px-4 py-2.5 text-sm font-medium text-[#fafafa]/80 ring-1 ring-[#fafafa]/7 transition-colors hover:bg-[#fafafa]/5 hover:text-[#fafafa] hover:ring-[#fafafa]/10",
				className,
			)}
			{...props}
		>
			<div className="absolute inset-0 -z-10 overflow-hidden rounded-md">
				<div className="absolute top-0 left-0 h-full w-[200%] -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] transition-transform duration-2500 ease-in-out group-hover/github:translate-x-full" />
			</div>

			<span className="flex items-center gap-2 transition-colors group-hover/github:text-[#fafafa]">
				<Github size={16} />
				<span>{label}</span>
			</span>

			<span className="flex items-center gap-1.5 rounded-full bg-[#fafafa]/6 px-2.5 py-0.5 text-xs font-medium text-[#fafafa]/80 ring-1 ring-white/10 transition-colors group-hover/github:bg-[#fafafa]/10 group-hover/github:text-[#fafafa] group-hover/github:ring-[#fafafa]/15">
				<NumberTicker value={stars} />
				<Star size={12} className="fill-[#fcc800] text-[#fcc800]" />
			</span>
		</motion.a>
	);
}
`;

export default function GithubStarsButtonComponent() {
	const usageCode = `<GitHubStarsButton stars={852} href="https://www.pixeui.com" />`;

	return (
		<div className="flex w-full flex-col pt-2 pb-16">
			<div>
				<h1 className={`mb-3 text-start text-3xl text-[#fafafa] lg:text-5xl ${OutfitSemiBold.className}`}>GitHub Stars Button</h1>

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
				<ComponentPreview code={gitHubStarsButtonCode} name="components/ui/github-stars-button.tsx">
					<GitHubStarsButton stars={852} href="https://www.pixeui.com" />
				</ComponentPreview>

				<InstallationStepsExport>
					<Step step={1} title="Install dependencies">
						<CommandBlock command="npm install framer-motion @deemlol/next-icons" />
					</Step>

					<Step step={2} title="Copy the code" description="Copy and paste the following code into your project.">
						<CodeBlock code={gitHubStarsButtonCode} fileName="components/ui/github-stars-button.tsx" expandable />
					</Step>
				</InstallationStepsExport>

				<div className="pt-10">
					<h3 className={`mb-4 text-2xl text-[#fafafa] ${OutfitMedium.className}`}>Usage</h3>

					<CodeBlock code={usageCode} fileName="components/ui/github-stars-button.tsx" />
				</div>

				<ApiReference>
					<PropsTable
						title="GitHubStarsButton"
						props={[
							{
								prop: "href",
								type: "string",
								defaultValue: "-",
							},
							{
								prop: "stars",
								type: "number",
								defaultValue: "-",
							},
							{
								prop: "label?",
								type: "string",
								defaultValue: "Star on GitHub",
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
