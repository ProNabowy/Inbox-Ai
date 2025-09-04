import useHeaderRoutes from "@/hooks/useHeaderRoutes";
import { Logo } from "@/icons";
import Modal from "@/ui/Modal";
import Link from "next/link";
import Dropdown from "../Dropdown";

export default function ResponsiveHeader({
	isExpanded,
	onClose,
}: {
	isExpanded: boolean;
	onClose: () => void;
}) {
	const routes = useHeaderRoutes();

	return (
		<Modal
			anchor="right"
			extraClassNames={{
				modal: "model border border-[#1F192A] xl:hidden z-[100]",
				overlay: "xl:!hidden",
			}}
			open={isExpanded}
			onClose={onClose}
		>
			<Link href={"/"} className="m-auto block w-fit mt-5">
				<Logo />
			</Link>

			<ul className="flex flex-col gap-5 py-10 px-5">
				{routes.map((route, index) => (
					<li key={index}>
						{route.isList ? (
							<Dropdown route={route} />
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
		</Modal>
	);
}
