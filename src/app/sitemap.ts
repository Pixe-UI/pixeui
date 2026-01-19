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
			url: `${DOMAIN_BASE_URL}/docs/components/inputs/otp`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${DOMAIN_BASE_URL}/docs/components/loaders/progress`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${DOMAIN_BASE_URL}/docs/components/loaders/circle`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${DOMAIN_BASE_URL}/docs/components/skeletons/shimmer`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${DOMAIN_BASE_URL}/docs/components/skeletons/pulse`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${DOMAIN_BASE_URL}/docs/components/skeletons/wave`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${DOMAIN_BASE_URL}/docs/components/separators/dashed`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${DOMAIN_BASE_URL}/docs/components/separators/gradient`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${DOMAIN_BASE_URL}/docs/components/separators/shimmer`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
	];
}
