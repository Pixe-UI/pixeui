"use client";

import { OutfitMedium, OutfitRegular } from "@/lib/fonts";

import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Check, Copy, File } from "@deemlol/next-icons";
import * as React from "react";

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
	code: string;
	fileName?: string;
	expandable?: boolean;
}

export function CodeBlock({ code, fileName, className = "", expandable = false, ...props }: CodeBlockProps) {
	const [isExpanded, setIsExpanded] = React.useState(false);
	const [copied, setCopied] = React.useState(false);

	const onCopy = () => {
		navigator.clipboard.writeText(code);

		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className={`group relative flex flex-col space-y-4 ${className}`} {...props}>
			<div className="relative rounded-xl border border-[#fafafa]/10 bg-[#fafafa]/1">
				<div className="flex items-center justify-between border-b border-[#fafafa]/15 bg-[#fafafa]/3 px-4 py-2.5">
					<span className={`flex items-center gap-2 text-xs text-[#fafafa]/50 ${OutfitRegular.className}`}>
						{fileName && (
							<>
								<File className="text-[#fafafa]/50" size={14} />
								{fileName}
							</>
						)}
					</span>

					<button
						onClick={onCopy}
						className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md text-[#fafafa]/50 transition-colors duration-300 hover:bg-[#fafafa]/10 hover:text-[#fafafa]"
					>
						{copied ? <Check size={14} /> : <Copy size={14} />}
					</button>
				</div>

				<div className="relative">
					<div
						className={`relative transition-all duration-300 ${
							expandable
								? isExpanded
									? "max-h-[550px] overflow-y-auto"
									: "max-h-[150px] overflow-hidden"
								: "overflow-hidden overflow-y-auto"
						}`}
					>
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

						{expandable && isExpanded && (
							<div className="sticky bottom-0 left-0 flex w-full items-center justify-center bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pt-12 pb-4">
								<button
									onClick={() => setIsExpanded(false)}
									className={`cursor-pointer rounded-md bg-[#fafafa]/10 px-4 py-1.5 text-xs text-[#fafafa] backdrop-blur-sm transition-colors hover:bg-[#fafafa]/20 ${OutfitMedium.className}`}
								>
									Collapse
								</button>
							</div>
						)}
					</div>

					{expandable && !isExpanded && (
						<div className="absolute inset-0 flex items-end justify-center bg-linear-to-b from-transparent to-[#0a0a0a]/90 pb-8">
							<button
								onClick={() => setIsExpanded(true)}
								className={`cursor-pointer rounded-md bg-[#fafafa]/10 px-4 py-1.5 text-xs text-[#fafafa] backdrop-blur-sm transition-colors hover:bg-[#fafafa]/20 ${OutfitMedium.className}`}
							>
								Expand
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
