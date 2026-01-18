/**
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
				animate={{ width: `${percentage}%` }}
				transition={{ type: "spring", stiffness: 50, damping: 15 }}
			/>
		</div>
	);
}
