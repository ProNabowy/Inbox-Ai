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
					path: "/",
				},
				{
					name: "templates",
					path: "/",
				},
				{
					name: "AI",
					path: "/",
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
					path: "/",
				},
				{
					name: "IT Operations",
					path: "/",
				},
				{
					name: "Security Operations",
					path: "/",
				},
				{
					name: "Security Operations",
					path: "/",
				},
				{
					name: "Security Operations",
					path: "/",
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
					path: "/",
				},
				{
					name: "IT Operations",
					path: "/",
				},
				{
					name: "Security Operations",
					path: "/",
				},
				{
					name: "Security Operations",
					path: "/",
				},
				{
					name: "Security Operations",
					path: "/",
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
					path: "/",
				},
				{
					name: "integrations",
					path: "/",
				},
				{
					name: "templates",
					path: "/",
				},
				{
					name: "AI",
					path: "/",
				},
				{
					name: "Product overview",
					path: "/",
				},
				{
					name: "integrations",
					path: "/",
				},
				{
					name: "templates",
					path: "/",
				},
				{
					name: "AI",
					path: "/",
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
