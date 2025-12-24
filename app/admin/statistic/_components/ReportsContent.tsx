"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, Download } from "lucide-react"

const reports = [
    {
        id: "R-DAILY-01",
        name: "Daily Sales Report",
        date: "Today, 9:00 AM",
        status: "Generated",
    },
    {
        id: "R-INV-05",
        name: "Low Stock Warning",
        date: "Yesterday, 6:00 PM",
        status: "Action Needed",
    },
    {
        id: "R-RET-12",
        name: "Refund Requests Log",
        date: "Dec 22, 2023",
        status: "Generated",
    },
    {
        id: "R-LTV-03",
        name: "Customer LTV Analysis",
        date: "Dec 01, 2023",
        status: "Generated",
    },
]

export function ReportsContent() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Generated Reports</CardTitle>
                <CardDescription>
                    Access and download your system generated reports.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Report ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {reports.map((report) => (
                            <TableRow key={report.id}>
                                <TableCell className="font-medium">{report.id}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <FileText className="h-4 w-4 text-muted-foreground" />
                                        {report.name}
                                    </div>
                                </TableCell>
                                <TableCell>{report.date}</TableCell>
                                <TableCell>
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${report.status === 'Generated'
                                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                            : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                        }`}>
                                        {report.status}
                                    </span>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="sm" disabled={report.status !== 'Generated'}>
                                        <Download className="h-4 w-4 mr-2" />
                                        Download
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
