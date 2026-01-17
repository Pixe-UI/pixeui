/**
 * @version: 1.0.0
 * @author: Alexandr Virgovič
 * @description: Hold Button
 * @website: https://www.pixeui.com
 */
import { CheckCircle, Download, Trash, Loader } from "@deemlol/next-icons";
import { motion, useAnimation, type HTMLMotionProps } from "framer-motion";
import * as React from "react";

function cn(...classes: (string | undefined | null | false)[]) {
	return classes.filter(Boolean).join(" ");
}

const buttonVariants = {
	red: {
		base: "bg-[#ff6467]/10 text-[#ff6467] hover:bg-[#ff6467]/20 border-[#ff6467]/20",
		indicator: "bg-[#ff6467]/20",
		icon: Trash,
	},
	green: {
		base: "bg-[#00d492]/10 text-[#00d492] hover:bg-[#00d492]/20 border-[#00d492]/20",
		indicator: "bg-[#00d492]/20",
		icon: CheckCircle,
	},
	gray: {
		base: "bg-[#e5e7eb]/10 text-[#e5e7eb] hover:bg-[#e5e7eb]/20 border-[#e5e7eb]/20",
		indicator: "bg-[#e5e7eb]/20",
		icon: Download,
	},
	orange: {
		base: "bg-[#ff8904]/10 text-[#ff8904] hover:bg-[#ff8904]/20 border-[#ff8904]/20",
		indicator: "bg-[#ff8904]/20",
		icon: Loader,
	},
};

interface HoldButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
	holdDuration?: number;
	onComplete?: () => void;
	children?: React.ReactNode;
	variant?: keyof typeof buttonVariants;
}

export default function HoldButton({
	className,
	variant = "gray",
	holdDuration = 1500,
	type = "button",
	children,
	onComplete,
	...props
}: HoldButtonProps) {
	const [status, setStatus] = React.useState<"idle" | "holding" | "success">("idle");
	const isCancelledRef = React.useRef(false);
	const controls = useAnimation();

	const currentVariant = buttonVariants[variant] || buttonVariants.gray;
	const Icon = currentVariant.icon;

	async function handleHoldStart() {
		if (status === "success") return;
		isCancelledRef.current = false;
		setStatus("holding");

		controls.set({ width: "0%" });
		await controls.start({
			width: "100%",
			transition: {
				duration: holdDuration / 1000,
				ease: "linear",
			},
		});

		if (!isCancelledRef?.current) {
			setStatus("success");
			onComplete?.();
		}
	}

	function handleHoldEnd() {
		isCancelledRef.current = true;

		if (status === "success") {
			setTimeout(() => {
				setStatus("idle");
				controls.start({ width: "0%", transition: { duration: 0.3 } });
			}, 2000);
			return;
		}

		setStatus("idle");
		controls.stop();
		controls.start({
			width: "0%",
			transition: { duration: 0.2, ease: "easeOut" },
		});
	}

	return (
		<motion.button
			type={type}
			whileTap={{ scale: 0.95 }}
			animate={status === "success" ? { scale: [1, 1.05, 1], transition: { duration: 0.3 } } : undefined}
			className={cn(
				"relative inline-flex h-10 min-w-36 cursor-pointer touch-none items-center justify-center overflow-hidden rounded-md border px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-300 select-none disabled:opacity-50",
				currentVariant?.base,
				className,
			)}
			onMouseDown={handleHoldStart}
			onMouseLeave={handleHoldEnd}
			onMouseUp={handleHoldEnd}
			onTouchCancel={handleHoldEnd}
			onTouchEnd={handleHoldEnd}
			onTouchStart={handleHoldStart}
			{...props}
		>
			<motion.div
				animate={controls}
				className={cn("absolute top-0 left-0 h-full", currentVariant?.indicator)}
				initial={{ width: "0%" }}
			/>

			<span className="relative z-10 flex w-full items-center justify-center gap-2">
				<motion.div
					animate={
						status === "holding"
							? { rotate: [0, -10, 10, -10, 10, 0], transition: { duration: 0.5, repeat: Number.POSITIVE_INFINITY } }
							: status === "success"
								? { scale: [1, 1.2, 1], rotate: 360 }
								: { rotate: 0 }
					}
					transition={{ duration: 0.3 }}
				>
					<Icon size={16} aria-hidden="true" />
				</motion.div>

				<span className="min-w-[60px] text-center">
					{status === "holding" ? "Hold..." : status === "success" ? "Done" : children || "Hold me"}
				</span>
			</span>
		</motion.button>
	);
}
