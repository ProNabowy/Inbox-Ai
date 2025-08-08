import { Actions, Routes } from "./component";

export default function Header() {
	return (
		<header className="bg-[#000000eb] border-b border-[#1F192A]">
			<div className="container flex items-center justify-between">
				<Routes />
				<Actions />
			</div>
		</header>
	);
}
