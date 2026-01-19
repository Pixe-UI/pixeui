/**
 * @version: 1.0.0
 * @author: Alexandr Virgovič
 * @description: Pulse Skeleton
 * @website: https://www.pixeui.com
 */
import { motion, type HTMLMotionProps } from "framer-motion";

function cn(...classes: (string | undefined | null | false)[]) {
	return classes.filter(Boolean).join(" ");
}

interface PulseSkeletonProps extends HTMLMotionProps<"div"> {
	rounded?: boolean;
	width?: string | number;
	height?: string | number;
}

export default function PulseSkeleton({ width = "100%", height = 20, rounded = false, className, style, ...props }: PulseSkeletonProps) {
	return (
		<motion.div
			className={cn("bg-[#fafafa]/7 backdrop-blur-sm", rounded ? "rounded-full" : "rounded-none", className)}
			style={{ width, height, ...style }}
			initial={{ opacity: 0.5 }}
			animate={{ opacity: [0.5, 1, 0.5] }}
			transition={{
				duration: 1.5,
				repeat: Infinity,
				ease: "easeInOut",
			}}
			{...props}
		/>
	);
}
