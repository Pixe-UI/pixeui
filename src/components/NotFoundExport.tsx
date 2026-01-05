"use client";

import { OutfitBold, OutfitMedium, OutfitRegular } from "@/lib/fonts";

import { ArrowLeft, ArrowRight } from "@deemlol/next-icons";
import { motion } from "framer-motion";
import Link from "next/link";

const NotFoundExport = () => {
	return (
		<div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden px-4 2xl:px-0">
			<div className="z-10 flex flex-col items-center">
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className="flex flex-col items-start md:items-center"
				>
					<h2
						className={`mb-6 text-[2.8rem] tracking-wide text-[#fafafa] md:text-7xl ${OutfitBold.className} text-start md:text-center`}
					>
						Page Not Found
					</h2>

					<p className={`text-xl text-[#fafafa]/70 md:text-lg ${OutfitRegular.className} text-start md:text-center`}>
						The page you are looking for does not exist, or has been moved.
					</p>
				</motion.div>

				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					className="mx-auto mt-6 flex w-full max-w-lg flex-col items-center justify-center gap-4 text-center md:flex-row"
				>
					<Link
						href="/"
						className={`group flex w-full items-center justify-center gap-3 rounded-xl bg-[#fafafa] px-6 py-2 text-base text-[#000000] transition-all duration-300 hover:bg-[#ffffff] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95 md:w-1/2 ${OutfitMedium.className}`}
					>
						<ArrowLeft size={20} className="transition-transform duration-300 group-hover:-translate-x-1" />
						<span>Return Home</span>
					</Link>

					<Link
						href="/docs/components"
						className={`group flex w-full items-center justify-center gap-3 rounded-xl border border-[#fafafa]/15 bg-[#0a0a0a] px-6 py-2 text-base text-[#fafafa] transition-all duration-300 hover:bg-[#fafafa]/5 active:scale-95 md:w-1/2 ${OutfitMedium.className}`}
					>
						<span>Components</span>
						<ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
					</Link>
				</motion.div>
			</div>
		</div>
	);
};

export default NotFoundExport;
