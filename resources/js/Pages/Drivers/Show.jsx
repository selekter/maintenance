import Button from "@/Components/ฺButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";

function show({ auth, licensePlates }) {
  console.log(licensePlates);
  licensePlates.sort((a, b) =>
    a.number_plate.localeCompare(b.number_plate)
  );

  return (
    <Authenticated user={auth.user} header="พนักงานขับรถ">
      <div className="space-y-2">
        <div className="flex justify-end">
          <Button className="bg-blue-400">เพิ่มพนักงาน</Button>
        </div>
        <table className="table-auto w-full bg-white shadow-lg">
          <thead className="bg-blue-500 text-xl">
            <tr>
              <th className="border p-5">ทะเบียน</th>
              <th className="border p-5">ชื่อ พขร</th>
            </tr>
          </thead>
          <tbody>
            {licensePlates.map((plate) => (
              <tr key={plate.id} className="text-center">
                <td className="border p-5">
                  {plate.number_plate}
                </td>
                <td className="border p-5">{plate.driver.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Authenticated>
  );
}

export default show;
