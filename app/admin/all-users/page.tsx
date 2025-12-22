"use client";
import Header from "@/components/shared/toolbar/Header";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";

import { userColumns } from "./_components/userColumns";
import { users } from "@/data/userData";
import CreateUserDialog from "./_components/CreateUserDialog";
import { MultiSelect } from "@/components/ui/multi-select";
import { Roles } from "@/constant";
import { useState } from "react";
import DatePicker from "@/components/shared/toolbar/DatePicker";

const UsersPage = () => {
  const [role, setRole] = useState<(string | number)[]>([]);
  const handleRoleChange = (value: (string | number)[]) => {
    setRole(value);
  };
  return (
    <div>
      <DataTable
        columns={userColumns}
        data={users}
        currentPage={1}
        totalPages={1}
        onPageChange={() => {}}
      >
        <Header title="All Users" />
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-4">
            <Input placeholder="Search..." className="w-70" />
            <MultiSelect
              options={Roles}
              value={role}
              onChange={(value) => handleRoleChange(value)}
              placeholder="Role"
            />
            <DatePicker />
          </div>
          <CreateUserDialog />
        </div>

      </DataTable>
    </div>
  );
};

export default UsersPage;
