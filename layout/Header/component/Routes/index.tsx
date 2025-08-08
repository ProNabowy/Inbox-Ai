import useHeaderRoutes from "@/hooks/useHeaderRoutes";
import { Logo } from "@/icons";
import Link from "next/link";
import List from "../List";

export default function Routes() {
	const routes = useHeaderRoutes();

	return (
		<ul className="flex items-center gap-5 [&>li]:py-[22px] px-4 [&>li]:text-[15px] relative">
			<li>
				<Link href={"/"}>
					<Logo />
				</Link>
			</li>

			{routes.map((route) => (
				<li key={route.name}>
					{route.isList ? (
						<List route={route} />
					) : (
						<Link
							href={route.path}
							className="text-blue-haze hover:text-white transition select-none"
						>
							{route.name}
						</Link>
					)}
				</li>
			))}
		</ul>
	);
}
