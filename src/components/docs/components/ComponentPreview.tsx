"use client";

import { OutfitMedium, OutfitRegular } from "@/lib/fonts";

import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Check, Copy, File, Sliders } from "@deemlol/next-icons";
import * as React from "react";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
	code: string;
	name?: string;
	children: React.ReactNode;
	controls?: React.ReactNode;
}

export function ComponentPreview({
	children,
	code,
	className = "",
	name = "component-demo.tsx",
	controls,
	...props
}: ComponentPreviewProps) {
	const [view, setView] = React.useState<"preview" | "code">("preview");
	const [showControls, setShowControls] = React.useState(false);
	const [copied, setCopied] = React.useState(false);

	const onCopy = () => {
		navigator.clipboard.writeText(code);

		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className={`group relative flex flex-col space-y-4 ${className}`} {...props}>
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<div className="flex items-center gap-1.5 rounded-full bg-[#fafafa]/4 p-1">
						<button
							onClick={() => setView("preview")}
							className={`flex cursor-pointer items-center rounded-full px-6 py-1.5 text-sm ${OutfitMedium.className} transition-all duration-300 ${
								view === "preview" ? "bg-[#fafafa]/10 text-[#fafafa]" : "text-[#fafafa]/70 hover:text-[#fafafa]"
							}`}
						>
							Preview
						</button>

						<button
							onClick={() => setView("code")}
							className={`flex cursor-pointer items-center rounded-full px-6 py-1.5 text-sm ${OutfitMedium.className} transition-all duration-300 ${
								view === "code" ? "bg-[#fafafa]/10 text-[#fafafa]" : "text-[#fafafa]/70 hover:text-[#fafafa]"
							}`}
						>
							Code
						</button>
					</div>
				</div>

				{controls && view === "preview" && (
					<button
						onClick={() => setShowControls(!showControls)}
						className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg transition-colors duration-300 ${
							showControls ? "bg-[#fafafa] text-[#000000]" : "bg-[#fafafa]/5 text-[#fafafa]/70 hover:text-[#fafafa]"
						}`}
					>
						<Sliders size={18} />
					</button>
				)}
			</div>

			<div className="relative overflow-hidden rounded-xl border border-[#fafafa]/10 bg-[#fafafa]/1">
				{view === "preview" ? (
					<div className="flex min-h-[350px]">
						<div
							className={`flex flex-1 items-center justify-center p-10 ${showControls ? "border-r border-[#fafafa]/5" : ""}`}
						>
							{children}
						</div>

						{controls && showControls && <div className="w-[250px] shrink-0 bg-[#fafafa]/2 p-4">{controls}</div>}
					</div>
				) : (
					<div className="relative flex flex-col bg-[#fafafa]/1">
						<div className="flex items-center justify-between border-b border-[#fafafa]/15 bg-[#fafafa]/3 px-4 py-2.5">
							<span className={`flex items-center gap-2 text-xs text-[#fafafa]/50 ${OutfitRegular.className}`}>
								<File className="text-[#fafafa]/50" size={14} />
								{name}
							</span>

							<button
								onClick={onCopy}
								className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md text-[#fafafa]/50 transition-colors duration-300 hover:bg-[#fafafa]/10 hover:text-[#fafafa]"
							>
								{copied ? <Check size={16} /> : <Copy size={16} />}
							</button>
						</div>

						<div className="max-h-[450px] overflow-y-auto">
							<SyntaxHighlighter
								language="tsx"
								style={vscDarkPlus}
								customStyle={{
									margin: 0,
									padding: "1.5rem",
									background: "transparent",
									fontSize: "0.875rem",
									lineHeight: "1.5",
								}}
								wrapLines={true}
								showLineNumbers={false}
							>
								{code}
							</SyntaxHighlighter>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
