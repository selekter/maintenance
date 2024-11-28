import Authenticated from '@/Layouts/AuthenticatedLayout'
import React from 'react'

export default function Create({ auth }) {
  return (
    <Authenticated user={auth.user} header="เปลี่ยนน้ำมัน">
      <table className='table-auto w-full shadow'>
        <thead className='bg-green-400'>
          <tr>
            <th>ถังที่</th>
            <th>วันที่เปลี่ยน</th>
            <th>รายการ</th>
            <th>ทะเบียน</th>
            <th>จำนวน</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9/8/2567</td>
            <td>28/11/2567</td>
            <td>เปลี่ยนน้ำมันเครื่อง</td>
            <td>70-7210</td>
            <td>18</td>
          </tr>
        </tbody>
      </table>
    </Authenticated>
  )
}
