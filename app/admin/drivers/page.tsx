"use client"
import Header from '@/components/shared/toolbar/Header'
import { DataTable } from '@/components/ui/data-table'
import { Input } from '@/components/ui/input'

import {  driverColumns } from './_components/driverColumns'
import { drivers } from '@/data/driversData'

const DriversPage = () => {
  return (
    <div>
      <DataTable
        columns={driverColumns}
        data={drivers}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
      >
        <Header title="Drivers" />
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-4">
            <Input placeholder="Search..." className="w-70" />
          </div>
        </div>
      </DataTable>
    </div>
  )
}

export default DriversPage
