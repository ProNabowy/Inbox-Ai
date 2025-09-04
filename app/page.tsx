import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./(components)/Hero"));
const Simulator = dynamic(() => import("./(components)/Simulator"));

export default function page() {
	return (
		<div className="flex flex-col gap-5 sm:gap-10">
			<Hero />
			<Simulator />
		</div>
	);
}
