import { DOMAIN_BASE_URL } from "@/lib/constants";

import { MetadataRoute } from "next";

// TODO: ADD ALL ROUTES TO SITEMAP BEFORE PUSHING TO PRODUCTION
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
			priority: 0.9,
		},
		{
			url: `${DOMAIN_BASE_URL}/docs/installation`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${DOMAIN_BASE_URL}/docs/components`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${DOMAIN_BASE_URL}/docs/components/buttons/hold-button`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${DOMAIN_BASE_URL}/docs/components/buttons/copy-button`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${DOMAIN_BASE_URL}/docs/components/buttons/github-stars-button`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${DOMAIN_BASE_URL}/docs/components/buttons/command-button`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${DOMAIN_BASE_URL}/docs/components/text-fields/opt`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
	];
}
