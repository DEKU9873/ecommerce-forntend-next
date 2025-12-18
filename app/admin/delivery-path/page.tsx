
"use client"

import { useRouter } from "next/navigation";


const DeliveryPathPage = () => {
    const router = useRouter();
  return (
    <div>
      <h1 onClick={() => router.push("/admin/delivery-path/id")}>hassan mohammed</h1>
    </div>
  )
}

export default DeliveryPathPage
