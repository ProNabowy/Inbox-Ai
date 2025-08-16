import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./(components)/Hero"));

export default function page() {
	return (
		<div>
			<Hero />
		</div>
	);
}
