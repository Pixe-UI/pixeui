"use client";

import { OutfitSemiBold } from "@/lib/fonts";

import { motion, AnimatePresence } from "framer-motion";
import * as React from "react";

export function HomeLoader({ onLoadingComplete }: { onLoadingComplete: () => void }) {
	const [isLoading, setIsLoading] = React.useState(true);
	const title = "PixeUI";

	React.useEffect(() => {
		const t = setTimeout(() => {
			setIsLoading(false);
			setTimeout(onLoadingComplete, 400);
		}, 2000);

		return () => clearTimeout(t);
	}, [onLoadingComplete]);

	return (
		<AnimatePresence mode="wait">
			{isLoading && (
				<motion.div
					key="home-loader"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
					className="fixed inset-0 z-50 grid place-items-center"
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.98 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
						className="flex flex-row items-center gap-4"
					>
						<motion.img
							src="/PixeUIWhite.svg"
							alt="PixeUI"
							initial={{ x: -10, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
							className="h-12 w-12"
						/>

						<motion.div
							initial="hidden"
							animate="visible"
							transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
							className={`text-5xl text-[#fafafa] ${OutfitSemiBold.className} text-start tracking-tight`}
						>
							{title.split("").map((ch, i) => (
								<motion.span
									key={`${ch}-${i}`}
									variants={{
										hidden: { y: 10, opacity: 0 },
										visible: {
											y: 0,
											opacity: 1,
											transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
										},
									}}
									className="inline-block"
								>
									{ch}
								</motion.span>
							))}
						</motion.div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
