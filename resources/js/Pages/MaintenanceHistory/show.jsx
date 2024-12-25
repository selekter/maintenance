import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function MaintenanceHistoryShow({ auth }) {
  const MaintenaceHistory = [
    {
      date: "2024-12-18",
      licensePlate: "70-7210",
      maintenance: "เปลี่ยนบูตหัวเก๋ง (ซ้าย-ขวา)",
    },
    {
      date: "2024-12-21",
      licensePlate: "70-7209",
      maintenance: "เปลี่ยนบูตหัวเก๋ง (ขวา)",
    },
  ];

  // ฟังก์ชันสำหรับแปลงวันที่เป็นภาษาไทย
  const formatThaiDate = (convertDate) => {
    const date = new Date(convertDate);

    const thaiDate = date.toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });
    return thaiDate;
  };

  return (
    <Authenticated user={auth.user} header="ประวัติซ่อมบำรุง">
      <div className="space-y-2">
        <table className="bg-white shadow">
          <thead className="bg-blue-400">
            <tr>
              <th>วันที่</th>
              <th>ทะเบียน</th>
              <th>ประวัติซ่อมบำรุง</th>
            </tr>
          </thead>
          <tbody>
            {MaintenaceHistory.map((mainten, index) => (
              <tr key={index}>
                <td>{formatThaiDate(mainten.date)}</td>
                <td>{mainten.licensePlate}</td>
                <td>{mainten.maintenance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Authenticated>
  );
}
