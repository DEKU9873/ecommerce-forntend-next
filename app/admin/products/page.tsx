"use client";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";

import Header from "@/components/shared/toolbar/Header";

import { productColumns } from "./_components/productColumns";
import { products } from "@/data/productsData";
import CreateProductDialog from "./_components/CreateProductDialog";
import { MultiSelect } from "@/components/ui/multi-select";
import { categories } from "@/data/categoriesData";
import { useState } from "react";
import { brands } from "@/data/brandsData";
import DatePicker from "@/components/shared/toolbar/DatePicker";

const ProductsPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);
  const categoryOptions = categories.map((category) => ({
    label: category.name,
    value: category.id,
  }));

  const brandOptions = brands.map((brand) => ({
    label: brand.name,
    value: brand.id,
  }));
  return (
    <div>
      <DataTable
        columns={productColumns}
        data={products}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
      >
        <Header title="Products" />
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-4">
            <Input placeholder="Search..." className="w-70" />
            <MultiSelect
              options={categoryOptions}
              value={selectedCategories}
              onChange={setSelectedCategories}
              placeholder="Categories"
            />
            <MultiSelect
              options={brandOptions}
              value={selectedBrands}
              onChange={setSelectedBrands}
              placeholder="Brands"
            />
            <DatePicker/>
          </div>
          <CreateProductDialog />
        </div>
        <div className="w-[300px] space-y-4"></div>
      </DataTable>
    </div>
  );
};

export default ProductsPage;
