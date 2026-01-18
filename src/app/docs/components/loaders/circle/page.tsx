"use client";

import { CommandBlock, InstallationStepsExport, Step } from "@/components/docs/components/InstallationStepsExport";
import { ApiReference, PropsTable } from "@/components/docs/components/ApiReferenceExport";
import { ComponentPreview } from "@/components/docs/components/ComponentPreview";
import { OutfitMedium, OutfitRegular, OutfitSemiBold } from "@/lib/fonts";
import { CodeBlock } from "@/components/docs/components/CodeBlock";
import CircleLoader from "@/components/ui/loaders/circle-loader";
import { contributors } from "@/lib/contributors";
import { DOMAIN_BASE_URL } from "@/lib/constants";

import * as React from "react";
import Link from "next/link";

const circleLoaderCode = `/**
 * @version: 1.0.0
 * @author: Alexandr Virgovič
 * @description: Circle Loader
 * @website: https://www.pixeui.com
 */
import { motion } from "framer-motion";
import * as React from "react";

function cn(...classes: (string | undefined | null | false)[]) {
	return classes.filter(Boolean).join(" ");
}

interface CircleLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
	max?: number;
	size?: number;
	strokeWidth?: number;
	value?: number | null;
}

export default function CircleLoader({ className, value, max = 100, size = 120, strokeWidth = 10, ...props }: CircleLoaderProps) {
	const percentage = Math.min(Math.max(((value || 0) / max) * 100, 0), 100);
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const offset = circumference - (percentage / 100) * circumference;

	return (
		<div className={cn("relative flex items-center justify-center", className)} style={{ width: size, height: size }} {...props}>
			<svg width={size} height={size} className="-rotate-90">
				<circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					fill="transparent"
					stroke="currentColor"
					strokeWidth={strokeWidth}
					className="text-[#fafafa]/10"
				/>

				<motion.circle
					cx={size / 2}
					cy={size / 2}
					r={radius}
					fill="transparent"
					stroke="currentColor"
					strokeWidth={strokeWidth}
					strokeLinecap="round"
					className="text-[#fafafa]"
					initial={{ strokeDashoffset: circumference }}
					animate={{ strokeDashoffset: offset }}
					transition={{ type: "spring", stiffness: 50, damping: 15 }}
					strokeDasharray={circumference}
				/>
			</svg>

			<div className="absolute inset-0 flex items-center justify-center">
				<span className="text-xl font-medium text-[#fafafa]">{Math.round(percentage)}%</span>
			</div>
		</div>
	);
}
`;

function CircleLoaderDemo() {
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

	return <CircleLoader value={progress} max={100} size={120} strokeWidth={10} />;
}

export default function CircleLoaderComponent() {
	const usageCode = `import CircleLoader from "@/components/ui/circle-loader.tsx"
import * as React from "react"

function CircleLoaderDemo() {
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
		<div className="flex w-full items-center justify-center">
			<CircleLoader value={progress} />
		</div>
	);
}
`;

	return (
		<div className="flex w-full flex-col pt-2 pb-16">
			<div>
				<h1 className={`mb-3 text-start text-5xl text-[#fafafa] ${OutfitSemiBold.className}`}>Circle Loader</h1>

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
				<ComponentPreview code={circleLoaderCode} name="components/ui/circle-loader.tsx">
					<CircleLoaderDemo />
				</ComponentPreview>

				<InstallationStepsExport>
					<Step step={1} title="Install dependencies">
						<CommandBlock command="npm install framer-motion" />
					</Step>

					<Step step={2} title="Copy the code" description="Copy and paste the following code into your project.">
						<CodeBlock code={circleLoaderCode} fileName="components/ui/circle-loader.tsx" expandable />
					</Step>
				</InstallationStepsExport>

				<div className="pt-10">
					<h3 className={`mb-4 text-2xl text-[#fafafa] ${OutfitMedium.className}`}>Usage</h3>

					<CodeBlock code={usageCode} fileName="components/ui/circle-loader.tsx" />
				</div>

				<ApiReference>
					<PropsTable
						title="CircleLoader"
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
								prop: "size?",
								type: "number",
								defaultValue: "120",
							},
							{
								prop: "strokeWidth?",
								type: "number",
								defaultValue: "10",
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
