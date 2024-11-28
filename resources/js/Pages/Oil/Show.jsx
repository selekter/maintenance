import Authenticated from '@/Layouts/AuthenticatedLayout'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function OilShow({ auth }) {
  return (
    <Authenticated user={auth.user} header="เปลี่ยนน้ำมัน">
      <div className="space-y-2">
        <div className="flex justify-end flex-col md:flex-row gap-5">
          <Link
            href={route("oil.create")}
            className="text-center font-bold transition bg-blue-300 hover:bg-blue-400 rounded px-3 py-2"
          >
            เพิ่มแจ้งซ่อม
          </Link>
          <Link
            href={route("maintain.index")}
            className="text-center font-bold transition bg-red-300 hover:bg-red-400 rounded px-3 py-2"
          >
            กลับไปหน้าแจ้งซ่อม
          </Link>
        </div>
      </div>
    </Authenticated>
  )
}
