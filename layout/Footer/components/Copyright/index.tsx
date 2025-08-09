export default function Copyright() {
	return (
		<div className="flex items-center justify-between pb-12">
			<ul className="flex items-center gap-4 text-white">
				<li>Imprint</li>
				<li className="h-5 w-[1px] bg-white"></li>
				<li>Legal</li>
				<li className="h-5 w-[1px] bg-white"></li>
				<li>Privacy</li>
				<li className="h-5 w-[1px] bg-white"></li>
				<li>Report a vulnerability</li>
			</ul>

			<ul className="flex items-center gap-4 text-white">
				<li>© {new Date().getFullYear()} Inbox AI</li>
				<li className="h-5 w-[1px] bg-white"></li>
				<li>All rights reserved.</li>
			</ul>
		</div>
	);
}
