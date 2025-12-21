"use client";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useState } from "react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Map = dynamic(() => import("./_components/Map"), {
  loading: () => (
    <div className="flex items-center justify-center h-full text-gray-500">
      Loading map...
    </div>
  ),
  ssr: false,
});

const users = [
  { name: "Hassan Mohammed", email: "hassan@example.com", status: "active" },
  { name: "Aisha Karim", email: "aisha@example.com", status: "inactive" },
  { name: "Omar Ali", email: "omar@example.com", status: "active" },
  { name: "Lina Youssef", email: "lina@example.com", status: "active" },
  { name: "Sami Ahmad", email: "sami@example.com", status: "inactive" },
];

const DeliveryPathPage = () => {
  const router = useRouter();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-12 gap-6 min-h-screen">
      <aside className="col-span-4">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Drivers</CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col gap-3">
            <Input placeholder="Search driver..." />

            <ul className="divide-y overflow-auto flex-1">
              {users.map((u, idx) => (
                <li key={idx} className="">
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      setSelected(idx);
                      router.push(`/admin/delivery-path/${idx}`);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
                        setSelected(idx);
                        router.push(`/admin/delivery-path/${idx}`);
                      }
                    }}
                    aria-pressed={selected === idx}
                    className={`w-full p-3 flex items-center justify-between rounded-lg text-left transition-colors focus:outline-none disabled:opacity-50 ${
                      selected === idx
                        ? "bg-accent/60 border border-border"
                        : "hover:bg-accent/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>
                          {u.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <div className="font-medium">{u.name}</div>
                        <div className="text-xs text-muted-foreground">{u.email}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Badge variant={u.status === "active" ? "default" : "outline"}>
                        {u.status}
                      </Badge>
                      <Button variant={selected === idx ? "secondary" : "ghost"} size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </aside>

      <section className="col-span-8">
        <Card className="h-full">
          <CardHeader>
            <div className="flex items-center justify-between w-full">
              <CardTitle>Driver Path Map</CardTitle>
              <span className="text-sm text-muted-foreground">Select a driver to view path</span>
            </div>
          </CardHeader>

          <CardContent className="flex-1 p-0">
            <div className="h-[600px]">
              <Map />
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default DeliveryPathPage;
