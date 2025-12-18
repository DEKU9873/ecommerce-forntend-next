"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

export default function OrderDetailsPage() {

  const orderItems = [
    {
      id: 1,
      name: "Indoor Succulent Plants",
      description: "Plants For Home",
      tags: ["Blue", "Green"],
      price: 120.0,
      qty: 1,
      image: "🌿",
    },
    {
      id: 2,
      name: "Smart Watch For Man",
      description: "Watch For Men",
      tags: ["Blue", "Black"],
      price: 135.0,
      qty: 1,
      image: "⌚",
    },
    {
      id: 3,
      name: "Camera Lens",
      description: "Camera Lens",
      tags: ["Grey", "Black"],
      price: 250.0,
      qty: 1,
      image: "📷",
    },
    {
      id: 4,
      name: "Nokon D5600",
      description: "Camera",
      tags: ["Blue", "Black"],
      price: 450.0,
      qty: 1,
      image: "📸",
    },
  ];

  const activityLog = [
    {
      status: "Ready to Pickup",
      time: "11:00",
      icon: "📦",
      color: "bg-green-500",
    },
    {
      status: "Order Processed",
      time: "10:30",
      icon: "📋",
      color: "bg-gray-400",
    },
    {
      status: "Payment Confirmed",
      time: "10:00",
      icon: "💳",
      color: "bg-gray-400",
    },
    { status: "Order Placed", time: "09:30", icon: "🛒", color: "bg-gray-400" },
  ];

  return (
    <div className="min-h-screen container ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - Order Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-xl font-semibold">Order Number #252596</h1>
              </div>

              {/* Order Items */}
              <div className="space-y-4 max-h-[40vh] overflow-y-auto hide-scrollbar">
                {orderItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-4 pb-4 border-b last:border-b-0 "
                  >
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-3xl">
                      {item.image}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                      <div className="flex gap-2 mt-1">
                        {item.tags.map((tag, idx) => (
                          <span key={idx} className="text-xs text-gray-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        ${item.price.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6 ">
                {/* Order Note */}
                <p className="text-sm">
                  <span className="font-medium">Order Note:</span>{" "}
                  <span className="text-gray-600">
                    Ship All The Ordered Item Together By Fridy And I Send You
                    An Email Please Check. Thanks!
                  </span>
                </p>

                {/* Order Summary */}
                <div className=" md:ml-auto">
                  <div className="flex justify-between text-sm gap-14">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-600">$955.00</span>
                  </div>
                  <div className="flex justify-between text-sm gap-2">
                    <span className="text-gray-600">Shipping</span>
                    <span className="text-gray-600">$3.50</span>
                  </div>
                  <div className="flex justify-between text-sm gap-2">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-600">$0.00</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold pt-2 border-t">
                    <span>Total</span>
                    <span>$958.50</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customer Details */}
          <Card className="p-0">

            <CardContent className="p-2">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="px-6">Customer Details</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance px-6 " >
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="font-medium">Courtney Henry</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Mobile</p>
                        <p className="font-medium">001230088</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">courtneyhenry@gmail.com</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Landmark</p>
                        <p className="font-medium">N/A</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="font-medium">3100</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Pin Code</p>
                        <p className="font-medium">123456</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Area</p>
                        <p className="font-medium">N/A</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Payment</p>
                        <p className="font-medium">Online</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">City</p>
                        <p className="font-medium">London</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Status</p>
                        <span className="inline-block px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                          Paid
                        </span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">State</p>
                        <p className="font-medium">London</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Activity Log */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-6">Activity</h2>
              <div className="space-y-6">
                {activityLog.map((activity, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full ${activity.color} flex items-center justify-center text-white`}
                      >
                        {activity.icon}
                      </div>
                      {idx !== activityLog.length - 1 && (
                        <div className="w-0.5 h-12 bg-gray-200 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium text-gray-900">
                            {activity.status}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Order#252596 from T-shirt
                          </p>
                        </div>
                        <span className="text-xs text-gray-400">
                          {activity.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
