"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

const topProductsData = [
    { name: 'iPhone 15', sales: 120 },
    { name: 'Nike Air', sales: 98 },
    { name: 'Samsung S24', sales: 86 },
    { name: 'PS5', sales: 72 },
    { name: 'AirPods', sales: 65 },
];

export function AnalyticsContent() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
                <CardHeader>
                    <CardTitle>Top Selling Products</CardTitle>
                    <CardDescription>
                        Best performing products this month.
                    </CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                    <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={topProductsData} layout="vertical" margin={{ left: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E7EB" />
                                <XAxis
                                    type="number"
                                    stroke="#888888"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    dataKey="name"
                                    type="category"
                                    stroke="#888888"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                    width={100}
                                />
                                <Tooltip />
                                <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} barSize={32} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
            <Card className="col-span-3">
                <CardHeader>
                    <CardTitle>Sales by Category</CardTitle>
                    <CardDescription>
                        Revenue distribution across top categories.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <div className="w-full space-y-1">
                                <p className="text-sm font-medium leading-none">Electronics</p>
                                <div className="flex items-center gap-2">
                                    <div className="h-2 flex-1 rounded-full bg-muted">
                                        <div className="h-full w-[55%] rounded-full bg-primary" />
                                    </div>
                                    <span className="text-sm text-muted-foreground">55%</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-full space-y-1">
                                <p className="text-sm font-medium leading-none">Clothing</p>
                                <div className="flex items-center gap-2">
                                    <div className="h-2 flex-1 rounded-full bg-muted">
                                        <div className="h-full w-[25%] rounded-full bg-primary" />
                                    </div>
                                    <span className="text-sm text-muted-foreground">25%</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-full space-y-1">
                                <p className="text-sm font-medium leading-none">Home & Garden</p>
                                <div className="flex items-center gap-2">
                                    <div className="h-2 flex-1 rounded-full bg-muted">
                                        <div className="h-full w-[15%] rounded-full bg-primary" />
                                    </div>
                                    <span className="text-sm text-muted-foreground">15%</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-full space-y-1">
                                <p className="text-sm font-medium leading-none">Beauty</p>
                                <div className="flex items-center gap-2">
                                    <div className="h-2 flex-1 rounded-full bg-muted">
                                        <div className="h-full w-[5%] rounded-full bg-primary" />
                                    </div>
                                    <span className="text-sm text-muted-foreground">5%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
