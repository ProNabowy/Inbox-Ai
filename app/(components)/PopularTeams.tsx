import {
	CommunityMember,
	Deda,
	Microsoft,
	Quote,
	TopGithub,
	Unbabel,
	Voda,
} from "@/icons";

export default function PopularTeams() {
	return (
		<section className="container flex flex-col gap-12">
			<div className="flex flex-col gap-2">
				<h5 className="text-silver-chalice text-center">
					The world's most popular workflow automation platform for technical
					teams including
				</h5>

				<div className="flex items-center justify-center gap-[66px] flex-wrap">
					<div className="w-[160px]">
						<Deda />
					</div>

					<div className="w-[160px]">
						<Unbabel />
					</div>

					<div className="w-[160px]">
						<Microsoft />
					</div>

					<div className="w-[160px]">
						<Voda />
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
				<div
					className="rounded-lg border border-white/10 p-[15px] flex items-center gap-2.5"
					style={{
						background:
							"radial-gradient(251.32% 50% at 100% -80%, var(--color-rose-5546, rgba(175, 106, 140, 0.46)) 0%, var(--color-rose-3238, rgba(98, 65, 83, 0.38)) 39%, var(--color-rose-320, rgba(98, 65, 83, 0.00)) 55%), radial-gradient(270.48% 53.81% at 50% 100%, var(--color-magenta-3529, rgba(122, 57, 109, 0.29)) 0%, var(--color-magenta-1339, rgba(42, 25, 41, 0.39)) 100%), var(--color-blue-728, rgba(13, 10, 25, 0.28))",
						backdropFilter: "blur(11px)",
					}}
				>
					<div className="min-w-fit">
						<TopGithub />
					</div>

					<p>
						<span className="text-white text-nowrap text-[18px]">
							Top 50 Github.{" "}
						</span>
						<span className="text-whisper-75">
							Our 127.6k stars place us among the most popular projects.
						</span>
					</p>
				</div>
				<div
					className="rounded-lg border border-white/10 p-[15px] flex items-center gap-2.5"
					style={{
						background:
							"radial-gradient(circle at 0 100%,#ff4f311f,#fff0),radial-gradient(circle at 50% 100%,hsla(0,0%,100%,.06),transparent),radial-gradient(circle at 50% 100%,#4b397a6e,#2a192963)",
						backdropFilter: "blur(11px)",
					}}
				>
					<div className="min-w-fit">
						<Quote />
					</div>

					<p>
						<span className="text-white text-nowrap text-[18px]">
							4.9/5 stars on G2.{" "}
						</span>
						<span className="text-whisper-75">
							To quote "A solid automation tool that just works."
						</span>
					</p>
				</div>
				<div
					className="rounded-lg border border-white/10 p-[15px] flex items-center gap-2.5"
					style={{
						background:
							"radial-gradient(circle farthest-side at 0 100%,#b200ff26,#fff0 56%),radial-gradient(circle farthest-side at 20% 100%,hsla(0,0%,100%,.1),transparent 43%),radial-gradient(circle at 50% 100%,#a3643a87,#2a192963)",
						backdropFilter: "blur(11px)",
					}}
				>
					<div className="min-w-fit">
						<CommunityMember />
					</div>

					<p>
						<span className="text-white text-nowrap text-[18px]">
							200k+ community members.{" "}
						</span>
						<span className="text-whisper-75">
							This wouldn't be possible without you.
						</span>
					</p>
				</div>
			</div>
		</section>
	);
}
