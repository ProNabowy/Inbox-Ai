import useFooterRoutes from "@/hooks/useFooterRoutes";
import List from "../List";
import Social from "../Social";

export default function NavigationGrid() {
	const data = useFooterRoutes();
	return (
		<>
			<div className="grid grid-cols-5 gap-5">
				<Social />

				{[data.col_1, data.col_2, data.col_3].map((item) => (
					<List {...item} />
				))}
			</div>

			<div className="h-[1px] bg-[#1F192A] w-full"></div>

			<div className="grid grid-cols-5 gap-5 relative z-10">
				{[data.col_4, data.col_5, data.col_6, data.col_7, data.col_8].map(
					(item) => (
						<List {...item} />
					)
				)}
			</div>

			<div className="h-[1px] bg-[#1F192A] w-full"></div>
		</>
	);
}
