import { HeaderRoute } from "@/hooks/useHeaderRoutes";
import { AngleDown } from "@/icons";
import Button from "@/ui/Button";
import Link from "next/link";

export default function List({ route }: { route: HeaderRoute }) {
	return (
		<div className="group">
			<button className="flex items-center gap-1 text-blue-haze hover:text-white transition">
				<p className="select-none">{route.name}</p>

				<span className="group-hover:rotate-180 transition">
					<AngleDown />
				</span>
			</button>

			<ul className="shadow-[0_15px_14px_0px_#00000066] p-1 bg-[#000000eb] border border-[#1f192a] rounded-md flex flex-col gap-1 min-w-40 absolute top-full  opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
				{route.children.map((childRoute) => (
					<li>
						<Button className="block w-full text-start rounded-md select-none capitalize bg-transparent px-4 py-2 text-white transition hover:bg-[#C1C1C125] relative z-10 text-sm xl:text-md">
							<Link href={childRoute.path}>{childRoute.name}</Link>
						</Button>
					</li>
				))}
			</ul>
		</div>
	);
}
