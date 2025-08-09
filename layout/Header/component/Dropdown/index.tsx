import { HeaderRoute } from "@/hooks/useHeaderRoutes";
import { AngleDown } from "@/icons";
import Button from "@/ui/Button";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Dropdown(props: { route: HeaderRoute }): JSX.Element {
	const { route, ...defaultProps } = props;

	const [maxHeight, setMaxHeight] = useState<number>(100);

	const [visible, setVisible] = useState<boolean>(false);

	const contentRef = useRef<HTMLDivElement>(null);

	const pathname = usePathname();

	useEffect(() => {
		let totalHeight = 0;

		const calculateHeight = (item: HeaderRoute) => {
			totalHeight += contentRef.current?.children?.[0]?.clientHeight ?? 0;
			if (item.children) {
				item.children.forEach((child) => calculateHeight(child));
			}
		};

		route.children.forEach((item) => calculateHeight(item));

		setMaxHeight(totalHeight);

		return () => {};
	}, [route.children]);

	useEffect(() => {
		route.children.map((item) => {
			if (item.path === pathname) {
				setVisible(true);
			}
		});

		return () => {};
	}, [pathname]);

	return (
		<div {...defaultProps}>
			<div
				onClick={() => setVisible((prev) => !prev)}
				className="flex items-center justify-between cursor-pointer text-hover"
			>
				<button className="text-blue-haze hover:text-white transition select-none">
					{route.name}
				</button>

				<span className={`${visible ? "rotate-180" : ""} transition`}>
					<AngleDown />
				</span>
			</div>

			<div
				ref={contentRef}
				className={`transition ${visible ? "my-2" : ""} overflow-y-hidden relative`}
				style={{ maxHeight: `${visible ? `${maxHeight}px` : "0px"}` }}
			>
				{route.children.map((item, index) => (
					<ul key={index}>
						<li className="text-blue-haze group">
							<Button className="w-full py-2 px-3 text-start flex items-center">
								<div
									className={`w-[1px] h-full top-1/2 -translate-y-1/2 absolute left-0 transition group-hover:bg-[#FF0C00] ${pathname === item.path ? "bg-[#FF0C00]" : ""}`}
								></div>

								<p className="ms-3">{item.name}</p>
							</Button>
						</li>
					</ul>
				))}

				<div className="w-[1px] h-full top-1/2 -translate-y-1/2 absolute left-0 bg-[#f9fafb63]"></div>
			</div>
		</div>
	);
}
