import { Link } from "@inertiajs/react";

export default function MaintainIndex({ user, reports }) {
  reports.sort((a, b) => a.number_plate.localeCompare(b.number_plate));

  return (
    <div className="p-5">
      <div className="py-5 print:hidden">
        {user ? (
          <Link
            href={route("report.index")}
            className="text-center font-bold transition bg-blue-300 hover:bg-blue-400 rounded px-3 py-2"
          >
            แจ้งซ่อม
          </Link>
        ) : (
          <Link
            href={route("login")}
            className="text-center font-bold transition bg-blue-300 hover:bg-blue-400 rounded px-3 py-2"
          >
            Login
          </Link>
        )}
      </div>
      <table className="w-full text-center bg-white md:text-2xl shadow-lg">
        <thead className="bg-blue-400">
          <tr>
            <th className="border border-blue-500 p-5">ทะเบียน</th>
            <th className="border border-blue-500">แจ้งซ่อม</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((mainten, maintenIndex) => (
            <tr key={maintenIndex} className="hover:bg-neutral-200">
              <td className="border border-blue-400 p-3">
                {mainten.number_plate}
              </td>
              <td className="border border-blue-400 p-3">
                <ul>
                  {mainten.report?.map((main, i) => (
                    <li key={i}>{main.repair}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
