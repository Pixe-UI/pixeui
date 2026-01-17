/**
 * @version: 1.0.0
 * @author: Alexandr Virgovič
 * @description: Copy Button
 * @website: https://www.pixeui.com
 */
import { AnimatePresence, motion, type HTMLMotionProps } from "framer-motion";
import { Check, Copy } from "@deemlol/next-icons";
import * as React from "react";

function cn(...classes: (string | undefined | null | false)[]) {
	return classes.filter(Boolean).join(" ");
}

interface CopyButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
	textToCopy: string;
	size?: "sm" | "md" | "lg" | "xl";
}

const sizeConfig = {
	sm: { button: "h-8 w-8", icon: 15 },
	md: { button: "h-9 w-9", icon: 17 },
	lg: { button: "h-11 w-11", icon: 20 },
	xl: { button: "h-14 w-14", icon: 26 },
};

export default function CopyButton({ textToCopy, size = "md", className, ...props }: CopyButtonProps) {
	const [isCopied, setIsCopied] = React.useState(false);
	const config = sizeConfig[size];

	const handleCopy = () => {
		navigator.clipboard.writeText(textToCopy);

		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 2500);
	};

	return (
		<motion.button
			whileTap={{ scale: 0.9 }}
			onClick={handleCopy}
			className={cn(
				"relative flex cursor-pointer items-center justify-center rounded-md border border-[#fafafa]/10 bg-[#fafafa]/7 text-[#fafafa] transition-colors duration-300 hover:border-[#fafafa]/20 hover:bg-[#fafafa]/10",
				config.button,
				className,
			)}
			{...props}
		>
			<AnimatePresence mode="wait" initial={false}>
				{isCopied ? (
					<motion.div
						key="copied"
						initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
						animate={{ opacity: 1, scale: 1, rotate: 0 }}
						exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
						transition={{ type: "spring", stiffness: 300, damping: 15 }}
						className="absolute flex items-center justify-center"
					>
						<Check size={config.icon} />
					</motion.div>
				) : (
					<motion.div
						key="copy"
						initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
						animate={{ opacity: 1, scale: 1, rotate: 0 }}
						exit={{ opacity: 0, scale: 0.5, rotate: -90 }}
						transition={{ type: "spring", stiffness: 300, damping: 15 }}
						className="absolute flex items-center justify-center"
					>
						<Copy size={config.icon} />
					</motion.div>
				)}
			</AnimatePresence>
		</motion.button>
	);
}
