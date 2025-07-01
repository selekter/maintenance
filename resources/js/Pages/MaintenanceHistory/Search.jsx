import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";

export default function Search({ auth, search }) {
  console.log(search);
  return (
    <Authenticated user={auth.user}>
      <div className="container mx-auto">
      <table className="bg-blue-400 shadow-md">
        <thead>
          <tr>
            <th>วันที่</th>
            <th>ทะเบียน</th>
            <th>ซ่อมบำรุง</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr>
            <td>14/06/2568</td>
            <td>70-7211</td>
            <td>เปลี่ยนน้ำมันเครื่อง</td>
          </tr>
        </tbody>
      </table>
      </div>
    </Authenticated>
  );
}
