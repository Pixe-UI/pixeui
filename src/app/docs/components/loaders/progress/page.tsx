"use client";

import { CommandBlock, InstallationStepsExport, Step } from "@/components/docs/components/InstallationStepsExport";
import { ApiReference, PropsTable } from "@/components/docs/components/ApiReferenceExport";
import { ComponentPreview } from "@/components/docs/components/ComponentPreview";
import { OutfitMedium, OutfitRegular, OutfitSemiBold } from "@/lib/fonts";
import ProgressLoader from "@/components/ui/loaders/progress-loader";
import { CodeBlock } from "@/components/docs/components/CodeBlock";
import { contributors } from "@/lib/contributors";
import { DOMAIN_BASE_URL } from "@/lib/constants";

import * as React from "react";
import Link from "next/link";

const progressLoaderCode = `/**
 * @version: 1.0.0
 * @author: Alexandr Virgovič
 * @description: Progress Loader
 * @website: https://www.pixeui.com
 */
import { motion } from "framer-motion";
import * as React from "react";

function cn(...classes: (string | undefined | null | false)[]) {
	return classes.filter(Boolean).join(" ");
}

interface ProgressLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
	max?: number;
	value?: number | null;
}

export default function ProgressLoader({ className, value, max = 100, ...props }: ProgressLoaderProps) {
	const percentage = Math.min(Math.max(((value || 0) / max) * 100, 0), 100);

	return (
		<div className={cn("relative h-2 w-full overflow-hidden rounded-full bg-[#fafafa]/10", className)} {...props}>
			<motion.div
				className="h-full flex-1 bg-[#fafafa]"
				initial={{ width: 0 }}
				animate={{ width: \`\${percentage}%\` }}
				transition={{ type: "spring", stiffness: 50, damping: 15 }}
			/>
		</div>
	);
}
`;

function ProgressLoaderDemo() {
	const [progress, setProgress] = React.useState(13);

	React.useEffect(() => {
		const timer = setInterval(() => {
			setProgress((oldProgress) => {
				if (oldProgress === 100) return 0;

				const diff = Math.random() * 10;
				return Math.min(oldProgress + diff, 100);
			});
		}, 500);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className="flex w-full max-w-md flex-col gap-4">
			<ProgressLoader value={progress} />
		</div>
	);
}

export default function ProgressLoaderComponent() {
	const usageCode = `import * as React from "react"
import ProgressLoader from "@/components/ui/progress-loader.tsx"

export function ProgressLoaderDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <ProgressLoader value={progress} max={100} className="w-[60%]" />
}
`;

	return (
		<div className="flex w-full flex-col pt-2 pb-16">
			<div>
				<h1 className={`mb-3 text-start text-3xl text-[#fafafa] lg:text-5xl ${OutfitSemiBold.className}`}>Progress Loader</h1>

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
				<ComponentPreview code={progressLoaderCode} name="components/ui/progress-loader.tsx">
					<ProgressLoaderDemo />
				</ComponentPreview>

				<InstallationStepsExport>
					<Step step={1} title="Install dependencies">
						<CommandBlock command="npm install framer-motion" />
					</Step>

					<Step step={2} title="Copy the code" description="Copy and paste the following code into your project.">
						<CodeBlock code={progressLoaderCode} fileName="components/ui/progress-loader.tsx" expandable />
					</Step>
				</InstallationStepsExport>

				<div className="pt-10">
					<h3 className={`mb-4 text-2xl text-[#fafafa] ${OutfitMedium.className}`}>Usage</h3>

					<CodeBlock code={usageCode} fileName="components/ui/progress-loader.tsx" />
				</div>

				<ApiReference>
					<PropsTable
						title="ProgressLoader"
						props={[
							{
								prop: "value?",
								type: "number | null",
								defaultValue: "0",
							},
							{
								prop: "max?",
								type: "number",
								defaultValue: "100",
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
						]}
					/>
				</ApiReference>
			</section>
		</div>
	);
}
