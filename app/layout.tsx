import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

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
      <body className={`${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
