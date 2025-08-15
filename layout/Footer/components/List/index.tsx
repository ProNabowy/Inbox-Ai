import { ListItem } from "@/hooks/useFooterRoutes";
import Link from "next/link";

export default function List({ title, list }: ListItem) {
	return (
		<div className="flex flex-col gap-3.5">
			{title && (
				<li className="">
					<h4 className="text-white font-medium">{title}</h4>
				</li>
			)}

			<ul className="flex flex-col gap-2">
				{list.map(({ name, url }, index) => (
					<li className="text-blue-haze text-[15px]" key={index}>
						<Link href={url}>{name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
