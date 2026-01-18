/**
 * @version: 1.0.0
 * @author: Alexandr Virgovič
 * @description: GitHub Stars Button
 * @website: https://www.pixeui.com
 */
import { motion, useMotionValue, useSpring, useInView, type HTMLMotionProps } from "framer-motion";
import { Github, Star } from "@deemlol/next-icons";
import * as React from "react";

function cn(...classes: (string | undefined | null | false)[]) {
	return classes.filter(Boolean).join(" ");
}

interface GitHubStarsButtonProps extends Omit<HTMLMotionProps<"a">, "children"> {
	href: string;
	stars: number;
	label?: string;
}

function NumberTicker({ value }: { value: number }) {
	const ref = React.useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, {
		damping: 60,
		stiffness: 100,
	});

	React.useEffect(() => {
		if (isInView) motionValue.set(value);
	}, [motionValue, value, isInView]);

	React.useEffect(() => {
		springValue.on("change", (latest) => {
			if (ref.current) ref.current.textContent = Intl.NumberFormat("en-US").format(Math.round(latest));
		});
	}, [springValue]);

	return (
		<span ref={ref} className="tracking-wider tabular-nums">
			0
		</span>
	);
}

export default function GitHubStarsButton({ href, stars, label = "Star on GitHub", className, ...props }: GitHubStarsButtonProps) {
	return (
		<motion.a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			whileHover={{ scale: 1.03 }}
			whileTap={{ scale: 0.95 }}
			transition={{ type: "spring", stiffness: 300, damping: 30 }}
			className={cn(
				"group/github relative flex items-center gap-4 overflow-hidden rounded-md bg-[#fafafa]/3 px-4 py-2.5 text-sm font-medium text-[#fafafa]/80 ring-1 ring-[#fafafa]/7 transition-colors hover:bg-[#fafafa]/5 hover:text-[#fafafa] hover:ring-[#fafafa]/10",
				className,
			)}
			{...props}
		>
			<div className="absolute inset-0 -z-10 overflow-hidden rounded-md">
				<div className="absolute top-0 left-0 h-full w-[200%] -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)] transition-transform duration-2500 ease-in-out group-hover/github:translate-x-full" />
			</div>

			<span className="flex items-center gap-2 transition-colors group-hover/github:text-[#fafafa]">
				<Github size={16} />
				<span>{label}</span>
			</span>

			<span className="flex items-center gap-1.5 rounded-full bg-[#fafafa]/6 px-2.5 py-0.5 text-xs font-medium text-[#fafafa]/80 ring-1 ring-white/10 transition-colors group-hover/github:bg-[#fafafa]/10 group-hover/github:text-[#fafafa] group-hover/github:ring-[#fafafa]/15">
				<NumberTicker value={stars} />
				<Star size={12} className="fill-[#fcc800] text-[#fcc800]" />
			</span>
		</motion.a>
	);
}
