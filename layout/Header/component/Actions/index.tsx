import { Github, Star } from "@/icons";
import Button from "@/ui/Button";

export default function Actions() {
	return (
		<ul className="flex items-center gap-2">
			<Button
				className="border border-[#FFFFFF33] flex items-center gap-1 text-white p-[5px] rounded-lg text-sm"
				style={{
					background:
						"linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.42) 100%), rgba(221, 221, 221, 0.00)",
				}}
			>
				<Github />

				<span>GitHub</span>

				<Star />

				<span>127,580</span>
			</Button>

			<Button className="text-blue-haze text-[15px] p-[5px] font-medium">
				Sign In
			</Button>

			<Button
				className="text-white text-[15px] p-[5px] px-4 font-medium"
				style={{
					borderRadius: "8px",
					background: "linear-gradient(225deg,#ff0c00,#fd8925)",
				}}
			>
				Get Started
			</Button>
		</ul>
	);
}
