import useHeaderRoutes from "@/hooks/useHeaderRoutes";
import { Logo } from "@/icons";
import Link from "next/link";
import { List } from "./component";

export default function Header() {
	const routes = useHeaderRoutes();

	return (
		<header className="bg-[#000000eb] border-b border-[#1F192A]">
			<div className="container flex items-center justify-between">
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
			</div>
		</header>
	);
}
