"use client";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";

import Header from "@/components/shared/toolbar/Header";
import CreateSubcategoryDialog from "./_components/CreateSubcategoryDialog";
import { subcategoryColumns } from "./_components/SubcategoryColumns";
import { subcategories } from "@/data/subcategoriesData";

const SubcategoriesPage = () => {
  return (
    <div>
      <DataTable
        columns={subcategoryColumns}
        data={subcategories}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
      >
        <Header title="Subcategories" />
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-4">
            <Input placeholder="Search..." className="w-70" />
          </div>
          <CreateSubcategoryDialog />
        </div>
      </DataTable>
    </div>
  );
};

export default SubcategoriesPage;
