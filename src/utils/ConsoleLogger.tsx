"use client";

import { useEffect } from "react";

export function ConsoleLogger() {
	useEffect(() => {
		console.info(
			[
				"🚀 PixeUI.com:  Get free, modern TailwindCSS components that save time and make your projects look amazing with no setup needed.",
				"",
				"Below, you will find links to help you get started with PixeUI:",
				"Website: https://www.pixeui.com",
				"Documentation: https://www.pixeui.com/docs",
				"Components: https://www.pixeui.com/components",
				"GitHub: https://github.com/Pixe-UI",
				"X (Twitter): https://x.com/pixe_ui",
				"Discord: https://discord.gg/gNAHhRaCJD",
				"",
				"🌟 Thank you for using Pixe UI! We hope it helps you build amazing projects!",
			].join("\n"),
		);
	}, []);

	return null;
}
