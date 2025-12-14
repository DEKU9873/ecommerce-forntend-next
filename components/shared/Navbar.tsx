"use client"
import { Heart, MenuIcon, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";

import SearchDialog from "@/app/(main)/_components/SearchDialog";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavigationSection = {
  title: string;
  href: string;
};

type HeaderProps = {
  navigationData: NavigationSection[];
  className?: string;
};

const Navbar = ({ navigationData, className }: HeaderProps) => {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "bg-background sticky top-0 z-50 h-16 border-b shadow-sm ",
        className
      )}
    >
      <div className=" max-w-[1420px] mx-auto flex h-full items-center justify-between px-2 md:px-0">
        <div className="flex items-center gap-3 md:hidden">
          <Sheet>
            <SheetTrigger>
              <MenuIcon size={26} className="text-primary" />
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <SheetHeader>
                <SheetTitle className="text-lg font-semibold mb-4">
                  Menu
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col space-y-4 mt-4 mx-4">
                {navigationData.map((navItem) => (
                  <Link
                    key={navItem.title}
                    href={navItem.href}
                    className="text-base text-muted-foreground hover:text-primary transition"
                  >
                    {navItem.title}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <Link
          href="/"
          className="font-bold text-xl sm:text-2xl text-primary tracking-wide"
        >
          Ecommerce
        </Link>

        <nav className="hidden md:flex items-center gap-2 lg:gap-6">
          {navigationData.map((navItem) => {
            const isActive = pathname === navItem.href;
            return (
              <Link
                key={navItem.title}
                href={navItem.href}
                className={`relative text-muted-foreground 
              hover:text-primary 
              px-1 lg:px-2 py-1.5 
              font-medium 
              after:absolute 
              after:left-0 
              after:bottom-0 
              after:w-full 
              after:h-0.5 
              after:bg-primary 
              after:origin-left 
              after:transition-transform 
              after:duration-500
              ${isActive ? "after:scale-x-100" : "after:scale-x-0"}
              hover:after:scale-x-100
            `}
              >
                {navItem.title}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <div className="">
            <SearchDialog />
          </div>

          <div className="relative">
            <Link href="/cart">
              <div className="w-9 h-9 flex items-center justify-center">
                <ShoppingBag
                  size={22}
                  className="text-muted-foreground hover:text-primary transition"
                />
              </div>
              <span className="absolute top-1 right-0 bg-primary text-white text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center shadow-md">
                2
              </span>
            </Link>
          </div>

          <div className="relative">
            <Link href="/favorite">
              <div className="w-9 h-9 flex items-center justify-center">
                <Heart
                  size={22}
                  className="text-muted-foreground hover:text-primary transition"
                />
              </div>
              <span className="absolute top-1 right-0 bg-primary text-white text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center shadow-md">
                2
              </span>
            </Link>
          </div>



          <Link
            href="/login"
            className=" text-base font-medium text-muted-foreground hover:text-primary transition"
          >
            Login
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
