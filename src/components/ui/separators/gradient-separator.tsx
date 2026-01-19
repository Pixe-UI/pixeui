/**
 * @version: 1.0.0
 * @author: Alexandr Virgovič
 * @description: Gradient Separator
 * @website: https://www.pixeui.com
 */
import * as React from "react";

function cn(...classes: (string | undefined | null | false)[]) {
	return classes.filter(Boolean).join(" ");
}

interface GradientSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
	label?: string;
	gradient?: string;
	width?: string | number;
	orientation?: "horizontal" | "vertical";
}

export default function GradientSeparator({
	label,
	gradient = "from-transparent via-[#fafafa] to-transparent",
	width,
	orientation = "horizontal",
	className,
	style,
	...props
}: GradientSeparatorProps) {
	const isHorizontal = orientation === "horizontal";

	return (
		<div
			className={cn("flex items-center justify-center", isHorizontal ? "w-full flex-row" : "h-full flex-col", className)}
			style={{ width: isHorizontal ? width : undefined, ...style }}
			{...props}
		>
			<div
				className={cn("bg-linear-to-r", isHorizontal ? "h-px w-full" : "h-full w-px", !isHorizontal && "bg-linear-to-b", gradient)}
			/>

			{label && (
				<span
					className={cn(
						"shrink-0 text-xs font-medium tracking-wider text-[#fafafa]/60 uppercase",
						isHorizontal ? "mx-3" : "my-3 py-1 [writing-mode:vertical-rl]",
					)}
				>
					{label}
				</span>
			)}

			{label && (
				<div
					className={cn(
						"bg-linear-to-r",
						isHorizontal ? "h-px w-full" : "h-full w-px",
						!isHorizontal && "bg-linear-to-b",
						gradient,
					)}
				/>
			)}
		</div>
	);
}
