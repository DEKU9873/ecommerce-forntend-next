"use client";

import CreateAddressDialog from "./_components/CreateAddressDialog";
import { address } from "@/data/addressData";

export default function Page() {
  return (
    <div className="space-y-6 font-cairo">
      <div className="flex items-center justify-end">

        <CreateAddressDialog />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {address.map((addr) => (
          <div key={addr.id} className="p-4 border rounded-md">
            <h3 className="font-semibold">{addr.city}</h3>
            <p className="text-sm">{addr.address}</p>
            <p className="text-xs mt-2 text-muted-foreground">
              {addr.posetion[0].toFixed(6)}, {addr.posetion[1].toFixed(6)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
