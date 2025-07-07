import Button from '@/Components/Button';
import Authenticated from '@/Layouts/AuthenticatedLayout'
import { useForm } from '@inertiajs/react';
import React, { useEffect } from 'react'
import Swal from 'sweetalert2';

function Update({ auth, licensePlate }) {
	const { put, delete: destroy } = useForm("licensePlate")
	console.log(licensePlate);

	const updateStatus = (id, repair) => {
		const Toast = Swal.mixin({
			toast: true,
			position: "top-end",
			showConfirmButton: false,
			timer: 1500,
			timerProgressBar: true,
		});

		Swal.fire({
			title: "ซ่อมเสร็จเรียบร้อย",
			text: `คุณต้องการเปลี่ยนการแจ้งซ่อมนี้ใช่ไหม ${repair}`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonText: "ยืนยัน",
			cancelButtonText: "ยกเลิก",
		}).then((result) => {
			if (result.isConfirmed) {
				Toast.fire({
					icon: "success",
					title: "ลบการแจ้งซ่อมเรียบร้อยแล้ว",
				});

				put(route("report.updatestat", { id: id }), {
					onSuccess: () => {
						console.log("Report updated");
					},
				});
			}
		});
	}

	useEffect(()=> {
		if (!licensePlate || !licensePlate.report || licensePlate.report.length === 0) {
			window.location.href = '/report';
		}
	})

	const RemoveReport = (id, repair) => {
		const Toast = Swal.mixin({
			toast: true,
			position: "top-end",
			showConfirmButton: false,
			timer: 1500,
			timerProgressBar: true,
		});

		Swal.fire({
			title: "ลบการแจ้งซ่อม",
			text: `คุณต้องการลบการแจ้งซ่อมนี้ใช่ไหม ${repair}`,
			icon: "warning",
			showCancelButton: true,
			confirmButtonText: "ยืนยัน",
			cancelButtonText: "ยกเลิก",
		}).then((result) => {
			if (result.isConfirmed) {
				Toast.fire({
					icon: "success",
					title: "ลบการแจ้งซ่อมเรียบร้อยแล้ว",
				});

				destroy(route("reportedit.destroy", { id: id }), {
					onSuccess: () => {
						console.log("Report deleted");
					},
				});
			}
		});
	}

	return (
		<Authenticated user={auth.user} header="Edit">
			<div className="space-y-2 bg-white shadow">
				<table className='table table-auto'>
					<thead>
						<tr>
							<th colSpan={2}>รายการแจ้งซ่อม ( {licensePlate.number_plate} )</th>
						</tr>
					</thead>
					<tbody>
						{licensePlate?.report?.map((plate) => (
							<tr key={plate.id}>
								<td>
									{plate.repair}</td>
								<td>
									<div className="flex justify-center gap-2">
										<Button onClick={(e) => updateStatus(plate.id, plate.repair)} className='bg-green-300 hover:bg-green-600 hover:text-white'>ซ่อมเรียบร้อย</Button>
										<Button onClick={(e) => RemoveReport(plate.id, plate.repair)} className='text-white bg-red-500 hover:bg-red-700'>ลบ</Button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</Authenticated>
	)
}

export default Update