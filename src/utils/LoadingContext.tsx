"use client";

import React, { ReactNode } from "react";

type LoadingContextType = {
	isLoading: boolean;
	setIsLoading: (loading: boolean) => void;
};

const LoadingContext = React.createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
	const [isLoading, setIsLoading] = React.useState(false);

	return <LoadingContext.Provider value={{ isLoading, setIsLoading }}>{children}</LoadingContext.Provider>;
}

export function useLoading() {
	const context = React.useContext(LoadingContext);
	if (context === undefined) throw new Error("useLoading must be used within a LoadingProvider");

	return context;
}
