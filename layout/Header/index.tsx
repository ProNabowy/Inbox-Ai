"use client";
import { useState } from "react";
import { Actions, ResponsiveHeader, Routes } from "./component";

export default function Header() {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<header className="bg-[#000000eb] border-b border-[#1F192A] min-h-[66.5px] flex items-center">
			<div className="container flex items-center justify-between">
				<Routes />

				<Actions onExpand={() => setIsExpanded(true)} />
			</div>

			<ResponsiveHeader
				onClose={() => setIsExpanded(false)}
				isExpanded={isExpanded}
			/>
		</header>
	);
}
