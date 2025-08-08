import { Footer, Header } from "@/layout";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Button from "@/ui/Button";

const geistMono = Roboto({
	variable: "--font-robot",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Inbox AI",
	description: "",
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistMono.variable} antialiased flex flex-col justify-between min-h-[100vh]`}
			>
				<Header />
				<div className="flex-1">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
