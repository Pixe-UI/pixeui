"use client";

import { OutfitMedium, OutfitRegular, OutfitSemiBold } from "@/lib/fonts";
import { DOMAIN_BASE_URL } from "@/lib/constants";

import { ArrowRight, Code, Sparkles2, Copy, Key, Star } from "@deemlol/next-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const INTRODUCTION_FEATURES = [
	{
		title: "Modern Design",
		description: "Clean, modern, and professional UI components designed to provide the best user experience.",
		icon: "Sparkles2",
	},
	{
		title: "Copy & Paste",
		description: "Simply copy the code and paste it into your project. No complex installation or dependencies required.",
		icon: "Copy",
	},
	{
		title: "Fully Customizable",
		description: "Built with Tailwind CSS, making it incredibly easy to fully customize and adapt to your brand identity.",
		icon: "Code",
	},
];

const ICON_MAP = {
	Sparkles2: <Sparkles2 size={26} color="#fafafa" />,
	Copy: <Copy size={26} color="#fafafa" />,
	Code: <Code size={26} color="#fafafa" />,
};

export default function IntroductionExport() {
	return (
		<div className="flex max-w-4xl flex-col pt-2 pb-16">
			<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
				<div>
					<h1 className={`mb-6 text-start text-4xl text-[#fafafa] md:text-5xl ${OutfitSemiBold.className}`}>Introduction</h1>

					<p className={`text-justify text-base text-[#fafafa]/60 md:text-lg ${OutfitRegular.className} leading-relaxed`}>
						Welcome to{" "}
						<Link
							href={DOMAIN_BASE_URL}
							className={`text-[#fafafa] ${OutfitMedium.className} underline underline-offset-2 transition-all duration-300 hover:text-[#fafafa]/80`}
						>
							PixeUI
						</Link>
						. We offer a collection of modern, accessible, and fully customizable UI components built with{" "}
						<Link
							href={"https://react.dev/"}
							target="_blank"
							rel="noopener noreferrer"
							className={`text-[#FFFFFF] ${OutfitMedium.className} underline underline-offset-2 transition-all duration-300 hover:text-[#fafafa]/80`}
						>
							React
						</Link>
						,{" "}
						<Link
							href={"https://tailwindcss.com/"}
							target="_blank"
							rel="noopener noreferrer"
							className={`text-[#FFFFFF] ${OutfitMedium.className} underline underline-offset-2 transition-all duration-300 hover:text-[#fafafa]/80`}
						>
							Tailwind CSS
						</Link>
						, and{" "}
						<Link
							href={"https://www.npmjs.com/package/framer-motion"}
							target="_blank"
							rel="noopener noreferrer"
							className={`text-[#FFFFFF] ${OutfitMedium.className} underline underline-offset-2 transition-all duration-300 hover:text-[#fafafa]/80`}
						>
							Framer Motion
						</Link>
						. The components are ready to copy and paste, so you can simply copy the code and paste it into your project. No
						complex installation are required.
					</p>
				</div>

				<div className="mt-4 flex w-full max-w-lg flex-col items-start justify-start gap-4 sm:flex-row">
					<Link href="/docs/installation" className="w-full sm:w-1/2">
						<button
							className={`group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#fafafa] px-6 py-2 text-base text-[#000000] ${OutfitMedium.className}`}
						>
							<span>Installation</span>
							<ArrowRight size={16} color="#000000" className="transition-transform duration-300 group-hover:translate-x-1" />
						</button>
					</Link>

					<Link href="/docs/components" className="w-full sm:w-1/2">
						<button
							className={`flex w-full cursor-pointer items-center justify-center rounded-xl bg-[#262626] px-6 py-2 text-base text-[#fafafa] ${OutfitMedium.className}`}
						>
							<span>Browse Components</span>
						</button>
					</Link>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
				className="mt-10 h-px w-full bg-linear-to-r from-transparent via-[#fafafa]/15 to-transparent"
			/>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
				className="mt-8"
			>
				<h2 className={`text-start text-3xl text-[#fafafa] ${OutfitSemiBold.className}`}>Why PixeUI?</h2>

				<div className="mt-6 grid gap-6 md:grid-cols-3">
					{INTRODUCTION_FEATURES.map((feature, index) => (
						<div
							key={index}
							className="flex flex-col gap-3 rounded-xl bg-[#fafafa]/3 p-6 transition-colors duration-300 hover:bg-[#fafafa]/5"
						>
							<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#fafafa]/5">
								{ICON_MAP[feature?.icon as keyof typeof ICON_MAP]}
							</div>

							<div>
								<h3 className={`text-start text-xl text-[#fafafa] ${OutfitSemiBold.className}`}>{feature?.title}</h3>

								<p className={`mt-1 text-justify text-sm text-[#fafafa]/60 ${OutfitRegular.className} leading-relaxed`}>
									{feature?.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
				className="mt-8"
			>
				<h2 className={`text-start text-3xl text-[#fafafa] ${OutfitSemiBold.className}`}>Key Features</h2>

				<div className="mt-6 grid gap-3 md:grid-cols-2">
					{[
						"Fully typed with TypeScript",
						"Styled with Tailwind CSS",
						"Animations using Framer Motion",
						"Accessible components (A11y friendly)",
						"Responsive design for all devices",
						"Easy to customize and extend",
					].map((feature, index) => (
						<div key={index} className="flex items-center gap-2 rounded-xl bg-[#fafafa]/3 p-4">
							<Key size={20} color="#FFFFFF" />

							<span className={`text-start text-sm text-[#fafafa] ${OutfitRegular.className}`}>{feature}</span>
						</div>
					))}
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
				className="mt-6 rounded-2xl border border-[#fafafa]/5 bg-[#fafafa]/5 p-6"
			>
				<div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
					<div>
						<h2 className={`mb-2 text-start text-2xl text-[#fafafa] ${OutfitSemiBold.className}`}>Open Source</h2>

						<p className={`max-w-md text-start text-base text-[#fafafa]/70 ${OutfitRegular.className}`}>
							PixeUI is open source and community driven. Feel free to contribute, suggest features, or report bugs on our
							GitHub.
						</p>
					</div>

					<Link href="https://github.com/Pixe-UI" target="_blank" rel="noopener noreferrer">
						<button
							className={`flex cursor-pointer items-center gap-2 rounded-xl bg-[#fafafa]/10 px-8 py-2.5 text-sm text-[#fafafa] transition-all duration-300 hover:bg-[#fafafa]/15 ${OutfitSemiBold.className}`}
						>
							<Star size={18} color="#fafafa" />
							<span>Star on GitHub</span>
						</button>
					</Link>
				</div>
			</motion.div>
		</div>
	);
}
