"use client";

import { DocsSidebarExport, MobileDocsNav } from "@/components/DocsSidebarExport";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className={`flex min-h-screen px-2 pt-24 xl:pt-36`}>
			<DocsSidebarExport />

			<div className="w-full px-4">
				<MobileDocsNav />
				<div className="mx-auto max-w-6xl">{children}</div>
			</div>
		</div>
	);
}
