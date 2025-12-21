"use client"
import Header from '@/components/shared/toolbar/Header'
import { DataTable } from '@/components/ui/data-table'
import { Input } from '@/components/ui/input'
import { vendors } from '@/data/vendorData'
import { vendorColumns } from './_components/vendorColumns'

const VendorsPage = () => {
  return (
    <div>
         <DataTable
        columns={vendorColumns}
        data={vendors}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
      >
        <Header title="Vendors" />
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-4">
            <Input placeholder="Search..." className="w-70" />
          </div>
        </div>
        <div className="w-[300px] space-y-4"></div>
      </DataTable>
    </div>
  )
}

export default VendorsPage
