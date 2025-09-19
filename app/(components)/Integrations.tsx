import { Gemini } from "@/icons";
import Button from "@/ui/Button";

export default function Integrations() {
	return (
		<section className="py-16 container">
			<div className="flex flex-col gap-12">
				<div>
					<h4 className="text-[47.063px] title-violet text-center">
						Plug AI into your own data &
					</h4>

					<p className="text-[48px] text-center title-orange -mt-5">
						over 500 integrations
					</p>
				</div>

				<div className="flex flex-col gap-2.5">
					<div className="c-marquee mask relative overflow-hidden py-[10px]">
						<div className="c-marquee-track flex w-max flex-row gap-3 pl-3 md:gap-4 md:pl-4">
							{Array(120)
								.fill(0)
								.map((_, index) => (
									<div
										key={index}
										className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/80 bg-gradient-to-b from-white/60 to-white/30 p-4 transition-[transform,border,background-color] duration-300 hover:scale-110 hover:border-[rgb(70,71,77)] hover:bg-[rgb(33,34,36)] md:h-[70px] md:w-[70px]"
									>
										<Gemini />
									</div>
								))}
						</div>
					</div>

					<div className="c-marquee mask relative overflow-hidden py-[10px]">
						<div
							className="c-marquee-track flex w-max flex-row gap-3 pl-3 md:gap-4 md:pl-4"
							style={{ animationDirection: "reverse" }}
						>
							{Array(120)
								.fill(0)
								.map((_, index) => (
									<div
										key={index}
										className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/80 bg-gradient-to-b from-white/60 to-white/30 p-4 transition-[transform,border,background-color] duration-300 hover:scale-110 hover:border-[rgb(70,71,77)] hover:bg-[rgb(33,34,36)] md:h-[70px] md:w-[70px]"
									>
										<Gemini />
									</div>
								))}
						</div>
					</div>
				</div>

				<Button
					style={{
						background:
							"linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(104deg, #077AC7 0%, #6B21EF 100%)",
						boxShadow:
							" 0 1px 1px 0 rgba(255, 255, 255, 0.20) inset, 0 1px 2px 0 rgba(8, 8, 8, 0.20), 0 4px 4px 0 rgba(8, 8, 8, 0.08), 0 7px 0 -12px #077AC7, 0 6px 12px 0 rgba(255, 255, 255, 0.12) inset",
					}}
					className="py-[12.5px] px-6 rounded-lg text-sm text-whisper-75 w-fit m-auto"
				>
					Browse all integrations
				</Button>
			</div>
		</section>
	);
}
