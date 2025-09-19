import Button from "@/ui/Button";

export default function Hero() {
	return (
		<section className="relative">
			<div className="container flex items-center gap-10 justify-between py-10 sm:py-20 relative z-1">
				<div className="flex flex-col gap-3">
					<h2 className="text-[40px] title-violet">
						Flexible AI workflow automation
					</h2>
					<p className="text-[40px] title-orange -mt-5">for technical teams</p>
					<p className="text-blue-haze max-w-[500px] text-[15.875px]">
						Build with the precision of code or the speed of drag-n-drop. Host
						with on-prem control or in-the-cloud convenience. n8n gives you more
						freedom to implement multi-step AI agents and integrate apps than
						any other tool.
					</p>

					<div className="flex items-center gap-4 mt-2.5">
						<Button
							className="text-white text-[15px] p-[11.5px] px-6 font-medium text-nowrap rounded-lg"
							variant="primary"
						>
							Get started for free
						</Button>
						<Button
							variant="secondary"
							className="text-white text-[15px] p-[11.5px] px-6 font-medium text-nowrap rounded-lg"
						>
							Talk to sales
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
