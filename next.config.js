/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	compress: true,
	experimental: {
		useLightningcss: false,
	},
	compiler: {
		styledComponents: true,
	},
	rewrites: async () => {
		return [
			{
				source: "/backend/API/:path*",
				destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.amazonaws.com",
				port: "",
			},
			{
				protocol: "https",
				hostname: "biddex-app-v2.test",
				port: "",
			},
			{
				protocol: "https",
				hostname: "**.biddex.info",
				port: "",
			},
		],
	},
};
