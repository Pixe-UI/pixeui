/**
 * @version: 1.0.0
 * @author: Alexandr Virgovič
 * @description: Command Button
 * @website: https://www.pixeui.com
 */
import { HTMLMotionProps, motion } from "framer-motion";
import { Command } from "@deemlol/next-icons";

interface CommandButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
	shortcut?: string;
}

export default function CommandButton({ className, shortcut = "CMD + K", ...props }: CommandButtonProps) {
	return (
		<motion.button
			whileHover="hover"
			whileTap="tap"
			variants={{
				hover: { scale: 1.02 },
				tap: { scale: 0.95 },
			}}
			className={`group/btn relative inline-flex cursor-pointer items-center gap-2 overflow-hidden rounded-md border border-[#fafafa]/10 bg-[#fafafa]/4 px-2 py-2 ${className || ""} `}
			{...props}
		>
			<motion.div
				className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-[#fafafa]/8 to-transparent"
				transition={{
					duration: 1.5,
					repeat: Infinity,
					repeatDelay: 3,
					ease: "linear",
				}}
				animate={{
					translateX: ["-100%", "200%"],
				}}
			/>

			<div className="relative flex items-center justify-center">
				<motion.span
					variants={{
						hover: { rotate: [0, -10, 10, -5, 5, 0], transition: { duration: 0.5 } },
					}}
				>
					<Command size={17} className="text-[#fafafa]/80 transition-colors group-hover/btn:text-[#fafafa]" />
				</motion.span>
			</div>

			<span className="relative z-10 text-sm font-medium tracking-tight text-[#fafafa]/80 transition-colors group-hover/btn:text-[#fafafa]">
				{shortcut}
			</span>
		</motion.button>
	);
}
