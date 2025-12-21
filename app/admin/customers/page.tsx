"use client"
import Header from '@/components/shared/toolbar/Header'
import { DataTable } from '@/components/ui/data-table'
import { Input } from '@/components/ui/input'

import { customers } from '@/data/customersData'
import { customerColumns } from './_components/customerColumns'
import CreateCustomerDialog from './_components/CreateCustomerDialog'

const CustomersPage = () => {
  return (
    <div>
      <DataTable
        columns={customerColumns}
        data={customers}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
      >
        <Header title="Customers" />
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-4">
            <Input placeholder="Search..." className="w-70" />
          </div>
        <CreateCustomerDialog/>

        </div>
        
        <div className="w-[300px] space-y-4"></div>
      </DataTable>
    </div>
  )
}

export default CustomersPage
