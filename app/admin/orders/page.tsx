"use client";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";

import Header from "@/components/shared/toolbar/Header";

import { MultiSelect } from "@/components/ui/multi-select";
import { useState } from "react";
import DatePicker from "@/components/shared/toolbar/DatePicker";
import { orderColumns } from "./_components/orderColumns";
import { orders } from "@/data/ordersData";

const OrderPage = () => {
const [selectedStatus, setSelectedStatus] = useState<(string | number)[]>([]);
const [selectedPaymentStatus, setSelectedPaymentStatus] = useState<(string | number)[]>([]);
const [selectedDeliveryStatus, setSelectedDeliveryStatus] = useState<(string | number)[]>([]);

    const stateFilter = [
    { value: "all", label: "All" },
    { value: "pending", label: "Pending" },
    { value: "processing", label: "Processing" },
    { value: "shipped", label: "Shipped" },
    { value: "delivered", label: "Delivered" },
    { value: "cancelled", label: "Cancelled" },
  ];

  const PaymentState = [
    { value: "all", label: "All" },
    { value: "paid", label: "Paid" },
    { value: "unpaid", label: "Unpaid" },
   
  ];

  const DeliveryState = [
    { value: "all", label: "All" },
    { value: "delivered", label: "Delivered" },
    { value: "undelivered", label: "Undelivered" },
  ];

  const stateOptions = stateFilter.map((state) => ({
    label: state.label,
    value: state.value,
  }));

  const paymentStatusOptions = PaymentState.map((state) => ({
    label: state.label,
    value: state.value,
  }));

  const deliveryStatusOptions = DeliveryState.map((state) => ({
    label: state.label,
    value: state.value,
  }));
  return (
    <div>
      <DataTable
        columns={orderColumns}
        data={orders}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
      >
        <Header title="Orders" />
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-4">
            <Input placeholder="Search..." className="w-70" />
            <MultiSelect
              options={stateOptions}
              value={selectedStatus}
              onChange={setSelectedStatus}
              placeholder="Status"
            />
            <MultiSelect
              options={paymentStatusOptions}
              value={selectedPaymentStatus}
              onChange={setSelectedPaymentStatus}
              placeholder="Payment"
            />
            <MultiSelect
              options={deliveryStatusOptions}
              value={selectedDeliveryStatus}
              onChange={setSelectedDeliveryStatus}
              placeholder="Delivery"
            />
 
            <DatePicker/>
          </div>
        </div>
        <div className="w-[300px] space-y-4"></div>
      </DataTable>
    </div>
  );
};

export default OrderPage;
