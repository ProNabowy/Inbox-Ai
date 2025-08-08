export type HeaderRoute = {
	name: string;
	isList: boolean;
	children: HeaderRoute[];
	path: string;
};

export default function useHeaderRoutes() {
	return [
		{
			name: "Product",
			isList: true,
			children: [
				{
					name: "Product overview",
					path: "/",
				},
				{
					name: "integrations",
					path: "/integrations",
				},
				{
					name: "templates",
					path: "/templates",
				},
				{
					name: "AI",
					path: "/ai",
				},
			],
			path: "/",
		},
		{
			name: "Use cases",
			isList: true,
			children: [
				{
					name: "Building AI agents",
					path: "/building-ai-agents",
				},
				{
					name: "IT Operations",
					path: "/it-operations",
				},
				{
					name: "Security Operations",
					path: "/security-operations",
				},
			],
			path: "/",
		},
		{
			name: "Docs",
			isList: true,
			children: [
				{
					name: "Building AI agents",
					path: "/building-ai-agents",
				},
				{
					name: "IT Operations",
					path: "/it-operations",
				},
				{
					name: "Security Operations",
					path: "/security-operations",
				},
			],
			path: "/",
		},
		{
			name: "Community",
			isList: true,
			children: [
				{
					name: "Product overview",
					path: "/product-overview",
				},
				{
					name: "integrations",
					path: "/integrations",
				},
				{
					name: "templates",
					path: "/templates",
				},
				{
					name: "AI",
					path: "/ai",
				},
			],
			path: "/",
		},
		{
			name: "Enterprise",
			isList: false,
			children: [],
			path: "/",
		},
		{
			name: "Pricing",
			isList: false,
			children: [],
			path: "/",
		},
	] as HeaderRoute[];
}
