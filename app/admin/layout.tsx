import { AppSidebar } from "@/components/shared/adminsidebar/app-sidebar"
import { SiteHeader } from "@/components/shared/adminsidebar/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <SidebarProvider className="flex flex-col" style={
            {
                "--sidebar-width": "calc(var(--spacing) * 72)",
                "--header-height": "calc(var(--spacing) * 12)",
            } as React.CSSProperties
        } >
            <SiteHeader />
            <div className="flex flex-1">
                <AppSidebar />
                <SidebarInset className="min-w-0">
                    <div className="px-8 mt-4 mb-4 overflow-x-hidden">
                        {children}
                    </div>
                </SidebarInset>
            </div>
        </SidebarProvider>
  )
}
