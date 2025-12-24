"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { BellRing, Mail, MessageSquare } from "lucide-react"

export function NotificationsContent() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>Recent Notifications</CardTitle>
                    <CardDescription>
                        Latest background activities and alerts.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[
                            { title: "New Order received", desc: "Order #2582 has been placed.", time: "2 min ago", icon: BellRing },
                            { title: "Server usage warning", desc: "CPU usage exceeded 80%.", time: "1 hour ago", icon: ActivityIcon },
                            { title: "New Review", desc: "John Doe left a 5-star review.", time: "3 hours ago", icon: MessageSquare },
                            { title: "Stock Alert", desc: "Product XYZ is running low.", time: "5 hours ago", icon: BellRing },
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-4 rounded-md border p-4">
                                <item.icon className="mt-1 h-5 w-5 text-muted-foreground" />
                                <div className="flex-1 space-y-1">
                                    <p className="text-sm font-medium leading-none">{item.title}</p>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                                <span className="text-xs text-muted-foreground">{item.time}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
            <Card className="col-span-3">
                <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                    <CardDescription>
                        Manage how you receive alerts.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center justify-between space-x-2">
                        <div className="flex flex-col space-y-1">
                            <span className="text-sm font-medium leading-none">Email Notifications</span>
                            <span className="text-xs text-muted-foreground">Receive daily summaries via email.</span>
                        </div>
                        <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                        <div className="flex flex-col space-y-1">
                            <span className="text-sm font-medium leading-none">Push Notifications</span>
                            <span className="text-xs text-muted-foreground">Receive real-time alerts on your device.</span>
                        </div>
                        <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                        <div className="flex flex-col space-y-1">
                            <span className="text-sm font-medium leading-none">Order Alerts</span>
                            <span className="text-xs text-muted-foreground">Get notified for every new order.</span>
                        </div>
                        <Switch />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                        <div className="flex flex-col space-y-1">
                            <span className="text-sm font-medium leading-none">Marketing Emails</span>
                            <span className="text-xs text-muted-foreground">Receive updates about new features.</span>
                        </div>
                        <Switch />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

function ActivityIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    )
}
