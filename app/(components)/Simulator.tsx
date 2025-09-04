"use client";
import diagram from "@/public/png/diagram.png";
import diagram_2 from "@/public/webp/diagram-2.webp";
import Button from "@/ui/Button";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Simulator() {
	const [activeTab, setActiveTab] = useState(0);

	const [currentDiagram, setCurrentDiagram] = useState(diagram);

	const tabs = [
		{
			label: "IT Ops",
			content: "⚡ On-board new employees",
		},
		{
			label: "Sec Ops",
			content: "⚡ Enrich security incident tickets",
		},
		{
			label: "Dev Ops",
			content: "⚡ Convert natural language into API calls",
		},
		{
			label: "Sales",
			content: "⚡ Generate customer insights from reviews",
		},
		{
			label: "You",
			content: "▶ Watch this video to hear our pitch",
		},
	];

	useEffect(() => {
		setCurrentDiagram(activeTab % 2 === 0 ? diagram : diagram_2);

		return () => {};
	}, [activeTab]);

	return (
		<section className="container">
			<div className="p-[5px] sm:p-[9px] rounded-xl sm:rounded-3xl border border-[rgba(255,_255,_255,_0.10)]  bg-[linear-gradient(109deg,rgba(227,165,114,0.31)_0%,rgba(87,128,230,0.38)_100%)] shadow-[0_0.451px_0_1px_rgba(255,_255,_255,_0.30)_inset,_0_0_36.047px_0_rgba(255,_255,_255,_0.06)]">
				<div className="p-0.5 rounded-lg sm:rounded-[19px] bg-gradient-to-b from-[#211A2E] from-10% to-[#000000] to-100% overflow-hidden">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 p-2">
						{tabs.map((tab, index) => {
							return (
								<Button
									key={index}
									onClick={() => setActiveTab(index)}
									className={`p-3 sm:p-[25px] ${index === tabs.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""} rounded-sm sm:rounded-lg text-white text-sm border transition flex flex-col items-start gap-2 shadow-[0_0_0_1px_rgba(255,_255,_255,_0.20)_inset,_0_0_8px_0_#000] ${activeTab === index ? "border-violet-700 bg-[linear-gradient(0deg,rgba(107,33,239,0.15)_0%,rgba(107,33,239,0.15)_100%),radial-gradient(94.78%_79.29%_at_59.78%_129.81%,#7F5EB6_0%,rgba(127,94,182,0)_100%),linear-gradient(180deg,#3C3149_0%,rgba(60,49,73,0)_100%)]" : "bg-[linear-gradient(0deg,rgba(38,33,73,0)_0%,rgba(38,33,73,0)_100%),linear-gradient(180deg,#251E32_0%,#17121F_100%)] border-[rgba(255,_255,_255,_0.10)]"}`}
								>
									<p>
										{tab.label} <span className="text-blue-haze">can</span>
									</p>

									<p className="text-start">{tab.content}</p>
								</Button>
							);
						})}
					</div>

					<Image
						src={currentDiagram}
						alt=""
						className="w-full h-[250px] object-fill sm:h-[616px]"
					/>
				</div>
			</div>
		</section>
	);
}
