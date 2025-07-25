import Button from "@/Components/Button";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link, useForm } from "@inertiajs/react";

export default function MaintenanceHistoryShow({ auth, historyReport }) {
  console.log(historyReport);

  const { data, setData, get } = useForm({
    maintain: "",
    licensePlate: "",
  });

  //* ฟังก์ชันสำหรับแปลงวันที่เป็นภาษาไทย
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

  //* ฟังก์ชั่นสำหรับแปลงเวลาเป็นตัวเลข
  const formatDate = (getDate) => {
    const date = new Date(getDate);

    const convertDate = date.toLocaleDateString("th-TH", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    return convertDate;
  };

  const handleSumbitSearch = (e) => {
    e.preventDefault();

    get(route('mainHistory.show'));
  }

  return (
    <Authenticated user={auth.user} header="ประวัติซ่อมบำรุง">
      <div className="space-y-2">
        <div className="gap-5">
          <h2 className="font-bold text-xl">ค้นหา</h2>
          <div className="flex flex-col md:flex-row gap-3 md:items-center">
            <div className="flex gap-3 items-center">
              <label htmlFor="licensePlate">ป้ายทะเบียน</label>
              <input
                className="rounded border border-blue-500 w-full md:w-auto"
                value={data.licensePlate}
                onChange={(e) => setData("licensePlate", e.target.value)}
                type="text"
                id="licensePlate"
              />
            </div>
            <div className="flex gap-5 items-center">
              <label htmlFor="repair">ซ่อมบำรุง</label>
              <input
                className="rounded border border-blue-500 w-full md:w-auto"
                value={data.maintain}
                onChange={(e) => setData("maintain", e.target.value)}
                type="text"
                name=""
                id="repair"
              />
            </div>
            <div className="flex gap-5 items-center">
              <Button
                className="bg-blue-300 transition hover:bg-blue-400 hover:shadow-blue-600 hover:shadow-md"
                onClick={handleSumbitSearch}
              >
                ค้นหา
              </Button>
            </div>
          </div>
        </div>
        <table className="bg-white shadow">
          <thead className="bg-blue-400">
            <tr>
              <th>วันที่</th>
              <th>ทะเบียน</th>
              <th>ประวัติซ่อมบำรุง</th>
            </tr>
          </thead>
          <tbody>
            {historyReport.data.map((mainten, index) => (
              <tr key={index}>
                <td>
                  <div className="group cursor-pointer flex items-center text-center justify-center relative">
                    {formatThaiDate(mainten.updated_at)}
                    <small className="transition duration-1000 hidden group-hover:block absolute -top-5 p-1 text-xs rounded bg-green-200 shadow-xl">
                      {formatDate(mainten.updated_at)}
                    </small>
                  </div>
                </td>
                <td>{mainten.license_plate.number_plate}</td>
                <td>
                  <p>{mainten.repair}</p>
                  {mainten.description && (
                    <p>รายละเอียด : {mainten.description}</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center gap-1">
          {historyReport.links.map((pagination, id) =>
            pagination.active ? (
              <Link
                key={id}
                className="bg-green-500 px-3 py-1 rounded-md"
                dangerouslySetInnerHTML={{ __html: pagination.label }}
              />
            ) : pagination.url ? (
              <Link
                key={id}
                className="border border-neutral-300 px-3 py-1 bg-neutral-200 rounded-md"
                href={pagination.url}
                dangerouslySetInnerHTML={{ __html: pagination.label }}
              />
            ) : (
              <span key={id} className="hidden">
                {pagination.label}
              </span>
            )
          )}
        </div>
      </div>
    </Authenticated>
  );
}
