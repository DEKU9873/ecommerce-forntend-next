"use client"
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import { Input } from '@/components/ui/input'

const CategoriesPage = () => {
  return (
    <div>
      <DataTable columns={[]} data={[] } currentPage={1} totalPages={1} onPageChange={()=>{}}>
        <h1 className='text-2xl font-bold'>Categories</h1>
        <div className='flex justify-between items-center mt-2'>
                <Input placeholder="Search..." className="w-70"/>
                <Button>Add Category</Button>
        </div>
      </DataTable>
    </div>
  )
}

export default CategoriesPage
