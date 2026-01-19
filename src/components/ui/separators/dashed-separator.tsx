/**
 * @version: 1.0.0
 * @author: Alexandr Virgovič
 * @description: Dashed Separator
 * @website: https://www.pixeui.com
 */
import * as React from "react";

function cn(...classes: (string | undefined | null | false)[]) {
	return classes.filter(Boolean).join(" ");
}

interface DashedSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
	label?: string;
	color?: string;
	width?: string | number;
	orientation?: "horizontal" | "vertical";
}

export default function DashedSeparator({
	label,
	orientation = "horizontal",
	color = "border-[#fafafa]/20",
	width,
	className,
	style,
	...props
}: DashedSeparatorProps) {
	return (
		<div
			className={cn(
				"flex items-center justify-center",
				orientation === "horizontal" ? "w-full flex-row" : "h-full flex-col",
				className,
			)}
			style={{
				width: orientation === "horizontal" ? width : undefined,
				height: orientation === "vertical" ? width : undefined,
				...style,
			}}
			{...props}
		>
			<div className={cn(color, orientation === "horizontal" ? "w-full border-t border-dashed" : "h-full border-l border-dashed")} />

			{label && (
				<span
					className={cn(
						"shrink-0 text-xs font-medium tracking-wider text-[#fafafa]/60 uppercase",
						orientation === "horizontal" ? "mx-3" : "my-3 py-1 [writing-mode:vertical-rl]",
					)}
				>
					{label}
				</span>
			)}

			{label && (
				<div
					className={cn(color, orientation === "horizontal" ? "w-full border-t border-dashed" : "h-full border-l border-dashed")}
				/>
			)}
		</div>
	);
}
