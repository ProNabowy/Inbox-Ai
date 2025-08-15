export type FooterLink = {
	url: string;
	name: string;
};

export type ListItem = {
	list: FooterLink[];
	title?: string;
};
export default function useFooterRoutes() {
	return {
		col_1: {
			list: [
				{
					url: "/careers",
					name: "Careers",
				},
				{
					url: "/contact",
					name: "Contact",
				},
				{
					url: "/merch",
					name: "Merch",
				},
				{
					url: "/press",
					name: "Press",
				},
				{
					url: "/security",
					name: "Security",
				},
			],
		},
		col_2: {
			list: [
				{
					url: "/case-studies",
					name: "Case Studies",
				},
				{
					url: "/zapier",
					name: "Zapier",
				},
				{
					url: "/make",
					name: "Make",
				},
				{
					url: "/tools",
					name: "Tools",
				},
				{
					url: "/ai-agent-report",
					name: "AI Agent Report",
				},
			],
		},
		col_3: {
			list: [
				{
					url: "/affiliate-program",
					name: "Affiliate program",
				},
				{
					url: "/expert-partners",
					name: "Expert partners",
				},
				{
					url: "/join",
					name: "Join user tests, get a gift",
				},
				{
					url: "/events",
					name: "Events",
				},
			],
		},
		col_4: {
			title: "Popular integrations",
			list: [
				{
					url: "/google-Sheets",
					name: "Google Sheets",
				},
				{
					url: "/telegram",
					name: "Telegram",
				},
				{
					url: "/mySQL",
					name: "MySQL",
				},
				{
					url: "/slack",
					name: "Slack",
				},
				{
					url: "/discord",
					name: "Discord",
				},
				{
					url: "/postgres",
					name: "Postgres",
				},
			],
		},
		col_5: {
			title: "Trending combinations",
			list: [
				{
					url: "/",
					name: "HubSpot and Salesforce",
				},
				{
					url: "/",
					name: "Twilio and WhatsApp",
				},
				{
					url: "/",
					name: "GitHub and Jira",
				},
				{
					url: "/",
					name: "Asana and Slack",
				},
				{
					url: "/",
					name: "Asana and Salesforce",
				},
				{
					url: "/",
					name: "Jira and Slack",
				},
			],
		},
		col_6: {
			title: "Top integration categories",
			list: [
				{
					url: "/",
					name: "Communication",
				},
				{
					url: "/",
					name: "Development",
				},
				{
					url: "/",
					name: "Cybersecurity",
				},
				{
					url: "/",
					name: "AI",
				},
				{
					url: "/",
					name: "Data & Storage",
				},
				{
					url: "/",
					name: "Marketing",
				},
			],
		},
		col_7: {
			title: "Trending templates",
			list: [
				{
					url: "/",
					name: "Creating an API endpoint",
				},
				{
					url: "/",
					name: "AI agent chat",
				},
				{
					url: "/",
					name: "Scrape and summarize webpa",
				},
				{
					url: "/",
					name: "Joining different datasets",
				},
				{
					url: "/",
					name: "Back Up Your n8n Workflows T",
				},
				{
					url: "/",
					name: "Very quick quickstart",
				},
			],
		},
		col_8: {
			title: "Top guides",
			list: [
				{
					url: "/",
					name: "Telegram bots",
				},
				{
					url: "/",
					name: "Open-source chatbot",
				},
				{
					url: "/",
					name: "Open-source LLM",
				},
				{
					url: "/",
					name: "Open-source low-code platfor",
				},
				{
					url: "/",
					name: "Zapier alternatives",
				},
				{
					url: "/",
					name: "Make vs Zapier",
				},
			],
		},
	} as Record<string, { title?: string; list: FooterLink[] }>;
}
