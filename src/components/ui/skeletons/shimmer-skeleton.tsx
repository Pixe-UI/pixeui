/**
 * @version: 1.0.0
 * @author: Alexandr Virgovič
 * @description: Shimmer Skeleton
 * @website: https://www.pixeui.com
 */
import { motion } from "framer-motion";
import * as React from "react";

function cn(...classes: (string | undefined | null | false)[]) {
	return classes.filter(Boolean).join(" ");
}

interface ShimmerSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
	rounded?: boolean;
	width?: string | number;
	height?: string | number;
}

export default function ShimmerSkeleton({
	width = "100%",
	height = 20,
	rounded = false,
	className,
	style,
	...props
}: ShimmerSkeletonProps) {
	return (
		<div
			className={cn("relative overflow-hidden bg-[#fafafa]/7 backdrop-blur-sm", rounded ? "rounded-full" : "rounded-none", className)}
			style={{ width, height, ...style }}
			{...props}
		>
			<motion.div
				className="absolute inset-0 h-full w-full"
				initial={{ x: "-100%" }}
				animate={{ x: "100%" }}
				transition={{
					repeat: Infinity,
					duration: 2,
					ease: [0.4, 0, 0.2, 1],
				}}
				style={{
					background: "linear-gradient(90deg, transparent 0%, rgba(250, 250, 250, 0.1) 50%, transparent 100%)",
				}}
			/>
		</div>
	);
}
