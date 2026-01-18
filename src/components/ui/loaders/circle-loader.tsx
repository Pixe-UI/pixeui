/**
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
