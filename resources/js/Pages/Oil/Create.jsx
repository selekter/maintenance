import Authenticated from '@/Layouts/AuthenticatedLayout'
import React from 'react'

export default function Create({ auth }) {
  return (
    <Authenticated user={auth.user} header="เปลี่ยนน้ำมัน">

    </Authenticated>
  )
}
