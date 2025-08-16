import { Bars, Github, Star } from "@/icons";
import Button from "@/ui/Button";

export default function Actions({ onExpand }: { onExpand: () => void }) {
	return (
		<ul className="flex items-center gap-2">
			<Button
				className="border border-[#FFFFFF33] hidden sm:flex items-center gap-1 text-white p-[5px] rounded-lg text-sm bg-[linear-gradient(180deg,#00000000_0%,#0000006b_100%),#dddddd00]"
				variant="text"
			>
				<Github />

				<span>GitHub</span>

				<Star />

				<span>127,580</span>
			</Button>

			<Button className="text-blue-haze text-[15px] p-[5px] font-medium hidden sm:block">
				Sign In
			</Button>

			<Button
				className="text-white text-[15px] p-[5px] px-6 font-medium text-nowrap rounded-lg"
				variant="primary"
			>
				Get Started
			</Button>

			<Button>
				<Bars onClick={onExpand} className="size-10 xl:hidden" />
			</Button>
		</ul>
	);
}
