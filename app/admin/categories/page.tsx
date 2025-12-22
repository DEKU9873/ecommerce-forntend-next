"use client";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";
import { categoryColumns } from "./_components/categoryColumns";
import CreateCategoryDialog from "./_components/CreateCategoryDialog";
import { categories } from "@/data/categoriesData";
import Header from "@/components/shared/toolbar/Header";

const CategoriesPage = () => {
  return (
    <div>
      <DataTable
        columns={categoryColumns}
        data={categories}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
      >
        <Header title="Categories" />
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-4">
            <Input placeholder="Search..." className="w-70" />
          </div>
          <CreateCategoryDialog />
        </div>
      </DataTable>
    </div>
  );
};

export default CategoriesPage;
