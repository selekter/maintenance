import Button from "@/Components/ฺButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, useForm } from "@inertiajs/react";
import React from "react";

function DashboardIndex({ auth, licensePlate }) {
  const { data, setData, post, delete: destroy } = useForm("licensePlate");
  console.log(licensePlate);

  licensePlate.sort((a, b) => a.number_plate.localeCompare(b.number_plate));

  const RemoveReport = (id) => {
    console.log(id);

    destroy(route("report.destroy", { id: id }), {
      onSuccess: () => {
        console.log("Report deleted");
      },
    });
  };

  return (
    <Authenticated user={auth.user} header="Report">
      <div className="space-y-2">
        <div className="flex justify-end flex-col md:flex-row gap-5">
          <Link
            href={route("report.create")}
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
        <table className="table-auto w-full bg-white shadow-lg">
          <thead className="bg-blue-500 text-xl">
            <tr>
              <th className="border p-5">ทะเบียน</th>
              <th className="border p-5" colSpan={2}>
                แจ้งซ่อม
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {licensePlate.map((plate, plateKey) => (
              <tr key={plateKey}>
                <td className="border p-5">{plate.number_plate}</td>
                <td className="border">
                  <ul>
                    {plate.report?.map((reports, key) => (
                      <li key={key}>{reports.repair}</li>
                    ))}
                  </ul>
                </td>
                <td className="border">
                  <div className="flex justify-center flex-col md:flex-row">
                    <Link className="bg-yellow-500 px-3 py-2">แก้ไข</Link>
                    <Button
                      className="bg-red-500 px-3 py-2"
                      onClick={(e) => RemoveReport(plate.id)}
                    >
                      ลบ
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Authenticated>
  );
}

export default DashboardIndex;
