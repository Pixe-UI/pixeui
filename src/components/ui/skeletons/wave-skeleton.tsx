/**
 * @version: 1.0.0
 * @author: Alexandr Virgovič
 * @description: Wave Skeleton
 * @website: https://www.pixeui.com
 */
import { motion } from "framer-motion";
import * as React from "react";

function cn(...classes: (string | undefined | null | false)[]) {
	return classes.filter(Boolean).join(" ");
}

interface WaveSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
	rounded?: boolean;
	width?: string | number;
	height?: string | number;
}

export default function WaveSkeleton({ width = "100%", height = 20, rounded = false, className, style, ...props }: WaveSkeletonProps) {
	return (
		<div
			className={cn(
				"relative flex items-center overflow-hidden bg-[#fafafa]/7 backdrop-blur-sm",
				rounded ? "rounded-full" : "rounded-none",
				className,
			)}
			style={{ width, height, ...style }}
			{...props}
		>
			{[...Array(5)].map((_, i) => (
				<motion.div
					key={i}
					initial={{ opacity: 0.2 }}
					animate={{
						opacity: [0.2, 0.6, 0.2],
						scaleY: [1, 1.1, 1],
					}}
					transition={{
						duration: 1.5,
						repeat: Infinity,
						ease: "easeInOut",
						delay: i * 0.15,
					}}
					style={{
						width: "20%",
						height: "100%",
						backgroundColor: "rgba(250, 250, 250, 0.25)",
					}}
				/>
			))}
		</div>
	);
}
