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
		// TODO: ADD ALL ROUTES TO SITEMAP BEFORE PUSHING TO PRODUCTION
	];
}
