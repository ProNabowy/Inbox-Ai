import dynamic from "next/dynamic";
import Integrations from "./(components)/Integrations";

const Hero = dynamic(() => import("./(components)/Hero"));
const Simulator = dynamic(() => import("./(components)/Simulator"));
const PopularTeams = dynamic(() => import("./(components)/PopularTeams"));

export default function page() {
	return (
		<div className="flex flex-col gap-5 sm:gap-10">
			<Hero />
			<Simulator />
			<div className="relative">
				<PopularTeams />

				<div
					className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[-1] w-[400px] h-[880px] rotate-[24deg] rounded-[5120px] opacity-45"
					style={{
						background:
							"linear-gradient(180deg, var(--color-rose-42, #A13355) 0%, var(--color-blue-58, #5159D9) 100%)",
						filter: "blur(64px)",
					}}
				></div>

				<Integrations />
			</div>
		</div>
	);
}
