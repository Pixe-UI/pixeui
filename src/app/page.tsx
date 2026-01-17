"use client";

import { HomeLoader } from "@/components/HomeLoader";
import { useLoading } from "@/utils/LoadingContext";

import { motion } from "framer-motion";
import * as React from "react";

// TODO: MAKE HOME PAGE DESIGN BEFORE PUBLISHING TO PRODUCTION
export default function Home() {
	const { isLoading, setIsLoading } = useLoading();

	React.useEffect(() => {
		setIsLoading(true);
	}, [setIsLoading]);

	return (
		<div className="flex min-h-screen items-center justify-center">
			{isLoading ? (
				<HomeLoader onLoadingComplete={() => setIsLoading(false)} />
			) : (
				<motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
					<div className="mx-auto max-w-7xl"></div>
				</motion.section>
			)}
		</div>
	);
}
