"use client";

import * as React from "react";
import { Command, MapPin, Settings2, Store, User } from "lucide-react";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Products",
      url: "#",
      icon: Store,
      isActive: true,
      items: [
        { title: "Products", url: "/admin/products" },
        { title: "Categories", url: "/admin/categories" },
        { title: "Subcategories", url: "/admin/subcategories" },
        { title: "Brands", url: "/admin/brands" },
        { title: "Orders", url: "/admin/orders" },
      ],
    },
    {
      title: "Tracking",
      url: "#",
      icon: MapPin,
      items: [
        { title: "Delivery Map", url: "/admin/delivery-map" },
        { title: "Delivery Path", url: "/admin/delivery-path" },
      ],
    },
    {
      title: "User Management",
      url: "#",
      icon: User,
      items: [
        { title: "All Users", url: "/admin/all-users" },
        // { title: "Customers", url: "/admin/customers" },
        { title: "Stores", url: "/admin/stores" },
        { title: "Vhicles", url: "/admin/vehicles" },
        { title: "Activity Logs", url: "/admin/activity-logs" },
      ],
    },

    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General Settings",
          url: "#",
        },
        { title: "Map Settings", url: "#" },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]! "
      {...props}
    >
      <SidebarHeader className="bg-background">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Ecommerce</span>
                  {/* <span className="truncate text-xs">Enterprise</span> */}
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-background">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="bg-background border-t sidebar-border">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
