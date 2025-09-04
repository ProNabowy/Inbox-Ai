import { SOCIAL_LINKS } from "@/helpers/consents";
import { Discord, Github, Linkedin, Logo, Twitter, Youtube } from "@/icons";
import Link from "next/link";

const data = [
	{
		icon: <Twitter />,
		url: SOCIAL_LINKS.twitter,
	},
	{ icon: <Github className="size-6 fill-white" />, url: SOCIAL_LINKS.github },
	{
		icon: <Discord className="size-6 fill-white" />,
		url: SOCIAL_LINKS.discord,
	},
	{
		icon: <Linkedin className="size-8 fill-white" />,
		url: SOCIAL_LINKS.linkedin,
	},
	{
		icon: <Youtube className="size-8 fill-white" />,
		url: SOCIAL_LINKS.youtube,
	},
] as { icon: JSX.Element; url: string }[];

export default function Social() {
	return (
		<div className="lg:col-span-2 flex flex-col gap-5">
			<Logo />

			<p className="text-white text-[15.5px]">Automate without limits</p>

			<div className="flex items-center gap-4">
				{data.map((item, index) => (
					<Link href={item.url} key={index}>
						{item.icon}
					</Link>
				))}
			</div>
		</div>
	);
}
