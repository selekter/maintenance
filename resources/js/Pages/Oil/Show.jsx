import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import React from "react";

export default function OilShow({ auth }) {
  const changeOil = [
    {
      changeDate: "28/11/2567",
      list: "ซื้อน้ำมันเครื่อง",
      licensePlate: "-",
      quantity: 14,
      remaining: 24,
      note: "-",
    },
    {
      changeDate: "28/11/2567",
      list: "เปลี่ยนน้ำมันเครื่อง",
      licensePlate: "70-7210",
      quantity: 18,
      remaining: 6,
      note: "-",
    },
    {
      changeDate: "2/12/67",
      list: "ซื้อน้ำมันเครื่อง",
      licensePlate: "-",
      quantity: 14,
      remaining: 20,
      note: "-",
    },
  ];
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
        <table className="table-auto w-full shadow">
          <thead className="bg-blue-400">
            <tr>
              <th>วันที่เปลี่ยน</th>
              <th>รายการ</th>
              <th>ทะเบียน</th>
              <th>จำนวน</th>
              <th>คงเหลือ</th>
              <th>หมายเหตุ</th>
            </tr>
          </thead>
          <tbody>
            {changeOil.map((oil, index) => (
              <tr key={index}>
                <td>{oil.changeDate}</td>
                <td>{oil.list}</td>
                <td>{oil.licensePlate}</td>
                <td>{oil.quantity}</td>
                <td>{oil.remaining}</td>
                <td>{oil.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Authenticated>
  );
}
