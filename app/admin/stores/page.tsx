"use client";
import Header from "@/components/shared/toolbar/Header";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";
import { stores } from "@/data/storesData";
import { storeColumns } from "./_components/storeColumns";

const StoresPage = () => {
  return (
    <div>
      <DataTable
        columns={storeColumns}
        data={stores}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
      >
        <Header title="Stores" />
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-4">
            <Input placeholder="Search..." className="w-70" />
          </div>
        </div>
      </DataTable>
    </div>
  );
};

export default StoresPage;
