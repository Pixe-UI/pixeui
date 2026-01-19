/**
 * @version: 1.0.0
 * @author: Alexandr Virgovič
 * @description: Shimmer Separator
 * @website: https://www.pixeui.com
 */
import { motion, type HTMLMotionProps } from "framer-motion";

function cn(...classes: (string | undefined | null | false)[]) {
	return classes.filter(Boolean).join(" ");
}

interface ShimmerSeparatorProps extends HTMLMotionProps<"div"> {
	duration?: number;
	baseColor?: string;
	shimmerColor?: string;
	width?: string | number;
}

export default function ShimmerSeparator({
	baseColor = "rgba(250, 250, 250, 0.1)",
	shimmerColor = "rgba(250, 250, 250, 0.5)",
	width = "100%",
	duration = 5,
	className,
	style,
	...props
}: ShimmerSeparatorProps) {
	return (
		<motion.div className={cn("flex w-full flex-col items-center justify-center", className)} style={{ width, ...style }} {...props}>
			<div className="relative w-full overflow-hidden rounded-full">
				<div
					className="h-px w-full"
					style={{
						backgroundColor: baseColor,
						borderRadius: "9999px",
					}}
				/>

				<motion.div
					key={duration}
					className="absolute inset-0 h-px w-full"
					style={{
						background: `linear-gradient(90deg, transparent 0%, ${shimmerColor} 50%, transparent 100%)`,
						backgroundSize: "200% 100%",
					}}
					animate={{
						backgroundPosition: ["200% 0", "-200% 0"],
					}}
					transition={{
						duration: duration,
						ease: "linear",
						repeat: Infinity,
					}}
				/>
			</div>
		</motion.div>
	);
}
