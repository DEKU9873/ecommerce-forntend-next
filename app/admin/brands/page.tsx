"use client";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";

import Header from "@/components/shared/toolbar/Header";
import { brandColumns } from "./_components/BrandColumns";
import { brands } from "@/data/brandsData";
import CreateBrandDialog from "./_components/CreateBrandDialog";

const BrandsPage = () => {
  return (
    <div>
      <DataTable
        columns={brandColumns}
        data={brands}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
      >
        <Header title="Categories" />
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-4">
            <Input placeholder="Search..." className="w-70" />
          </div>
          <CreateBrandDialog />
        </div>
        <div className="w-[300px] space-y-4"></div>
      </DataTable>
    </div>
  );
};

export default BrandsPage;
