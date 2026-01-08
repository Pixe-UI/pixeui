import { DOMAIN_BASE_URL } from "@/lib/constants";

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: DOMAIN_BASE_URL,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 1.0,
		},
		{
			url: `${DOMAIN_BASE_URL}/docs`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${DOMAIN_BASE_URL}/docs/installation`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		// TODO: ADD ALL ROUTES TO SITEMAP BEFORE PUSHING TO PRODUCTION
	];
}
