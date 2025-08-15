export default function Copyright() {
	return (
		<div className="flex md:items-center gap-5 justify-between flex-col md:flex-row sm:pb-12">
			<ul className="flex items-center gap-2 sm:gap-4 text-white text-sm sm:text-base">
				<li>Imprint</li>
				<li className="h-5 w-[1px] bg-white"></li>
				<li>Legal</li>
				<li className="h-5 w-[1px] bg-white"></li>
				<li>Privacy</li>
				<li className="h-5 w-[1px] bg-white"></li>
				<li>Report a vulnerability</li>
			</ul>

			<ul className="flex items-center gap-2 sm:gap-4 text-white text-sm sm:text-base">
				<li>© {new Date().getFullYear()} Inbox AI</li>
				<li className="h-5 w-[1px] bg-white"></li>
				<li>All rights reserved.</li>
			</ul>
		</div>
	);
}
