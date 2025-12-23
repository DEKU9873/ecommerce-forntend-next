"use client"
import Header from '@/components/shared/toolbar/Header'
import { DataTable } from '@/components/ui/data-table'
import { Input } from '@/components/ui/input'

import {  vehicleColumns } from './_components/vehicleColumns'
import { vehicles } from '@/data/vehiclesData'

const VehiclesPage = () => {
  return (
    <div>
      <DataTable
        columns={vehicleColumns}
        data={vehicles}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
      >
        <Header title="Vehicles" />
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-4">
            <Input placeholder="Search..." className="w-70" />
          </div>
        </div>
      </DataTable>
    </div>
  )
}

export default VehiclesPage
