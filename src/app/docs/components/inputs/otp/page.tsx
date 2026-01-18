"use client";

import { CommandBlock, InstallationStepsExport, Step } from "@/components/docs/components/InstallationStepsExport";
import { ApiReference, PropsTable } from "@/components/docs/components/ApiReferenceExport";
import { ComponentPreview } from "@/components/docs/components/ComponentPreview";
import { OutfitMedium, OutfitRegular, OutfitSemiBold } from "@/lib/fonts";
import { CodeBlock } from "@/components/docs/components/CodeBlock";
import OtpInput from "@/components/ui/inputs/otp-input";
import { contributors } from "@/lib/contributors";
import { DOMAIN_BASE_URL } from "@/lib/constants";

import Link from "next/link";

const otpInputCode = `/**
 * @version: 1.0.0
 * @author: Alexandr Virgovič
 * @description: OTP Field
 * @website: https://www.pixeui.com
 */
import { motion } from "framer-motion";
import * as React from "react";

function cn(...classes: (string | undefined | null | false)[]) {
	return classes.filter(Boolean).join(" ");
}

interface OtpInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
	length?: number;
	onChange?: (value: string) => void;
	onComplete?: (value: string) => void;
}

export default function OtpInput({ className, length = 6, onComplete, onChange, ...props }: OtpInputProps) {
	const [otpValues, setOtpValues] = React.useState(() => Array(length).fill(""));
	const inputsRef = React.useRef<(HTMLInputElement | null)[]>([]);

	React.useEffect(() => {
		setOtpValues(Array(length).fill(""));
	}, [length]);

	const handleChange = (index: number, value: string) => {
		const newValue = value.replace(/[^0-9]/g, "");
		if (newValue?.length > 1) return;

		const newOtpValues = [...otpValues];
		newOtpValues[index] = newValue;
		setOtpValues(newOtpValues);

		const otpString = newOtpValues.join("");
		onChange?.(otpString);

		if (newValue && index < length - 1) inputsRef.current[index + 1]?.focus();
		if (otpString.length === length && newOtpValues.every((val) => val !== "")) onComplete?.(otpString);
	};

	const handlePaste = (e: React.ClipboardEvent) => {
		e.preventDefault();

		const paste = e?.clipboardData
			.getData("text")
			.replace(/[^0-9]/g, "")
			.slice(0, length);

		if (paste) {
			const digits = paste.split("");
			const newValues = [...digits, ...Array(length - digits.length).fill("")].slice(0, length);
			setOtpValues(newValues);
			onChange?.(newValues.join(""));

			const lastIndex = Math.min(digits.length - 1, length - 1);
			inputsRef.current[lastIndex]?.focus();

			if (newValues.join("").length === length) onComplete?.(newValues.join(""));
		}
	};

	const handleKeys = (index: number, e: React.KeyboardEvent) => {
		if (e?.key === "Backspace" && !otpValues[index] && index > 0) {
			inputsRef.current[index - 1]?.focus();
		} else if (e?.key === "ArrowLeft" && index > 0) {
			e.preventDefault();
			inputsRef.current[index - 1]?.focus();
		} else if (e?.key === "ArrowRight" && index < length - 1) {
			e.preventDefault();
			inputsRef.current[index + 1]?.focus();
		}
	};

	return (
		<div className={cn("flex flex-col items-center justify-center gap-6", className)} {...props}>
			<div className="flex items-center gap-2.5">
				{otpValues.map((digit, index) => (
					<React.Fragment key={index}>
						<motion.div
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: index * 0.05, type: "spring", stiffness: 300, damping: 20 }}
						>
							<input
								ref={(el) => {
									inputsRef.current[index] = el;
								}}
								type="text"
								maxLength={1}
								value={digit}
								onChange={(e) => handleChange(index, e?.target?.value)}
								onPaste={handlePaste}
								onKeyDown={(e) => handleKeys(index, e)}
								className={cn(
									"h-10 w-8 rounded-md border border-[#fafafa]/5 bg-[#fafafa]/6 text-center text-base font-medium text-[#fafafa] transition-all duration-300 outline-none focus:border-[#fafafa]/15 focus:bg-[#fafafa]/8 sm:h-12 sm:w-12 sm:text-lg",
									digit && "border-[#fafafa]/15 bg-[#fafafa]/8",
								)}
							/>
						</motion.div>

						{index === Math.floor(length / 2) - 1 && length > 4 && (
							<div className="flex items-center justify-center px-0.5">
								<motion.div
									initial={{ width: 0 }}
									animate={{ width: 8 }}
									transition={{ delay: 0.3, duration: 0.3 }}
									className="h-1 rounded-full bg-[#fafafa]/25"
								/>
							</div>
						)}
					</React.Fragment>
				))}
			</div>

			<div className="flex gap-2.5">
				{otpValues.map((digit, index) => (
					<motion.div
						key={index}
						animate={{
							scale: digit ? 1 : 0.8,
							opacity: digit ? 1 : 0.2,
							backgroundColor: digit ? "#fafafa" : "#fafafa",
						}}
						transition={{ duration: 0.2 }}
						className="h-1.5 w-1.5 rounded-full"
					/>
				))}
			</div>
		</div>
	);
}
`;

export default function OtpInputComponent() {
	const usageCode = `<OtpInput />`;

	return (
		<div className="flex w-full flex-col pt-2 pb-16">
			<div>
				<h1 className={`mb-3 text-start text-5xl text-[#fafafa] ${OutfitSemiBold.className}`}>OTP Input</h1>

				<p className={`${OutfitRegular.className} text-start text-sm text-[#fafafa]/60`}>
					Made by{" "}
					<Link
						href={contributors?.find((c) => c?.name === "Alexandr Virgovič")?.link || DOMAIN_BASE_URL}
						target="_blank"
						rel="noopener noreferrer"
						className={`text-[#fafafa] underline underline-offset-4 transition-colors duration-300 ${OutfitMedium.className}`}
					>
						{contributors?.find((c) => c?.name === "Alexandr Virgovič")?.name || "Unknown"}
					</Link>
				</p>
			</div>

			<section className="flex flex-col pt-10">
				<ComponentPreview code={otpInputCode} name="components/ui/otp-field.tsx">
					<OtpInput length={6} />
				</ComponentPreview>

				<InstallationStepsExport>
					<Step step={1} title="Install dependencies">
						<CommandBlock command="npm install framer-motion" />
					</Step>

					<Step step={2} title="Copy the code" description="Copy and paste the following code into your project.">
						<CodeBlock code={otpInputCode} fileName="components/ui/otp-field.tsx" expandable />
					</Step>
				</InstallationStepsExport>

				<div className="pt-10">
					<h3 className={`mb-4 text-2xl text-[#fafafa] ${OutfitMedium.className}`}>Usage</h3>

					<CodeBlock code={usageCode} fileName="components/ui/otp-field.tsx" />
				</div>

				<ApiReference>
					<PropsTable
						title="OtpField"
						props={[
							{
								prop: "length?",
								type: "number",
								defaultValue: "6",
							},
							{
								prop: "onChange?",
								type: "(value: string) => void",
								defaultValue: "-",
							},
							{
								prop: "onComplete?",
								type: "(value: string) => void",
								defaultValue: "-",
							},
							{
								prop: "className?",
								type: "string",
								defaultValue: "-",
							},
							{
								prop: "...props?",
								type: "React.ButtonHTMLAttributes<HTMLButtonElement>",
								defaultValue: "-",
							},
						]}
					/>
				</ApiReference>
			</section>
		</div>
	);
}
