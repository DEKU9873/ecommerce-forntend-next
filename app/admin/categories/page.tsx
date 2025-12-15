"use client"

import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import { Input } from '@/components/ui/input'
import { MultiSelect } from '@/components/ui/multi-select';
import { useState } from 'react';
export const categories = [
  { id: 1, name: "الكترونيات", code: "EL" },
  { id: 2, name: "ملابس", code: "CL" },
  { id: 3, name: "أثاث", code: "FR" },
];

export const categoryOptions = categories.map((category) => ({
  label: category.name,
  value: category.id,
}));

const CategoriesPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  return (
    <div>
      <DataTable columns={[]} data={[]} currentPage={1} totalPages={1} onPageChange={() => { }}>
        <h1 className='text-2xl font-bold'>Categories</h1>
        <div className='flex justify-between items-center mt-2'>
          <div className="flex items-center space-x-4">
            <Input placeholder="Search..." className="w-70" />
            <MultiSelect
              options={categoryOptions}
              value={selectedCategories}
              onChange={setSelectedCategories}
              placeholder="Department"
            />
          </div>
          <Button>Add Category</Button>
        </div>
        <div className="w-[300px] space-y-4">

        </div>


      </DataTable>
    </div>
  )
}

export default CategoriesPage
