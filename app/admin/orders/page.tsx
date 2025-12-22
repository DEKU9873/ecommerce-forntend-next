"use client";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";

import Header from "@/components/shared/toolbar/Header";

import { MultiSelect } from "@/components/ui/multi-select";
import { useState } from "react";
import DatePicker from "@/components/shared/toolbar/DatePicker";
import { orderColumns } from "./_components/orderColumns";
import { orders } from "@/data/ordersData";
import { DeliveryState, PaymentState, stateFilter } from "@/constant";

const OrderPage = () => {
  const [filters, setFilters] = useState<{ status: (string | number)[]; payment: (string | number)[]; delivery: (string | number)[]; }>({
    status: [],
    payment: [],
    delivery: [],
  });

  const handleFilterChange = (
    key: "status" | "payment" | "delivery",
    value: (string | number)[]
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div>
      <DataTable
        columns={orderColumns}
        data={orders}
        currentPage={1}
        totalPages={1}
        onPageChange={() => { }}
      >
        <Header title="Orders" />
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-4">
            <Input placeholder="Search..." className="w-70" />
            <MultiSelect
              options={stateFilter}
              value={filters.status}
              onChange={(value) => handleFilterChange("status", value)}
              placeholder="Status"
            />

            <MultiSelect
              options={PaymentState}
              value={filters.payment}
              onChange={(value) => handleFilterChange("payment", value)}
              placeholder="Payment"
            />

            <MultiSelect
              options={DeliveryState}
              value={filters.delivery}
              onChange={(value) => handleFilterChange("delivery", value)}
              placeholder="Delivery"
            />

            <DatePicker />
          </div>
        </div>
      </DataTable>
    </div>
  );


};

export default OrderPage;
