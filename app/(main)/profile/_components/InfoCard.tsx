"use client"
import {
    Card,
    CardContent,
    CardFooter,

} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
	{ label: "Profile", href: "/profile" },
	{ label: "Address", href: "/profile/addres" },
];
const InfoCard = () => {
    	const pathname = usePathname();

    return (
        <Card className="h-[450px]">

            <CardContent className="flex flex-col justify-center items-center gap-4" >
                <div className="h-30 w-30 rounded-full">
                    <Avatar >
                        <AvatarImage className="rounded-full" src="https://github.com/shadcn.png" alt="@user" />
                        <AvatarFallback className="bg-primary/10 text-primary font-medium">hi</AvatarFallback>
                    </Avatar>
                </div>

                <div className="flex flex-col justify-center items-center gap-2">
                  <h5 className="text-lg font-semibold">Al-Hassan Mohammed</h5>
                      <p className="text-slate-400">alhassan@gmail.com</p>
                      <p className="text-slate-700 text-sm font-bold">Admin</p>
                </div>

            </CardContent>
            <hr className="mx-4" />
            <CardFooter className="flex flex-col justify-center items-start gap-4">
                <ul className="list-none sidebar-nav mb-0 mt-3" id="navmenu-nav">
			{menu.map((item, i) => (
				<li className="navbar-item account-menu" key={i}>
					<Link
						href={item.href}
						className={`navbar-link flex items-center py-2 rounded ${
							pathname === item.href ? "text-primary" : "text-slate-400"
						}`}>
						<h6 className="mb-0 font-semibold">{item?.label}</h6>
					</Link>
				</li>
			))}
			<li className="navbar-item account-menu">
				<Link
					href="#" 
					className="navbar-link text-slate-400 flex items-center py-2 rounded">
					<h6 className="mb-0 font-semibold">Sign Out</h6>
				</Link>
			</li> 
		</ul>
            </CardFooter>
        </Card>
    )
}

export default InfoCard
