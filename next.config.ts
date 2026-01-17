import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactCompiler: true,
	devIndicators: false,
	reactStrictMode: true,
	cacheComponents: true,
	images: {
		remotePatterns: [
			{
				hostname: "*",
			},
		],
		minimumCacheTTL: 2_678_400,
		qualities: [75, 90],
	},
};

export default nextConfig;
