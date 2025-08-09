import Stars from "@/public/icons/stars.svg";
import Image from "next/image";
import { Copyright, NavigationGrid } from "./components";

export default function Footer() {
	return (
		<footer className="text-white relative py-[64px]">
			<Image
				src={Stars}
				alt="Stars"
				width={1000}
				height={1000}
				className="w-full object-cover select-none pointer-none:hidden absolute -top-full"
			/>

			<div className="container flex flex-col gap-12 relative z-10">
				<NavigationGrid />

				<Copyright />
			</div>
		</footer>
	);
}
