import Button from "@/Components/ฺButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";

export default function Create({ auth, license_plates }) {
  console.log(license_plates);
  license_plates.sort((a, b) => a.number_plate.localeCompare(b.number_plate));

  const { data, setData, post, processing, errors, reset } = useForm({
    plate: "",
    report: "",
  });

  const [option, setOption] = useState(false)

  const open_other = () => {
    setOption((prev) => !prev)
  }

  const resetInput = () => {
    reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    post(route("report.store"));
  };

  return (
    <Authenticated user={auth.user} header="Report">
      <div className="space-y-2">
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="plate">ป้ายทะเบียน</label>
            <select
              name="plate"
              id="plate"
              defaultValue=""
              required
              onChange={(e) => setData("plate", e.target.value)}
            >
              <option value="" disabled selected>
                เลือกป้ายทะเบียน
              </option>
              {license_plates.map((plate, key) => (
                <option key={key} value={plate.id}>
                  {plate.number_plate}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-2 items-center">
            <input type="checkbox" name="engine_oil" id="" />
            <label htmlFor="engine_oil">เปลี่ยนน้ำมันเครื่อง</label>
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="gear_oil" id="" />
            <label htmlFor="gear_oil">เปลี่ยนน้ำมันเกียร์</label>
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="differential_oil" id="" />
            <label htmlFor="differential_oil">เปลี่ยนน้ำมันเฟืองท้าย</label>
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="other" id="" onChange={open_other} />
            <label htmlFor="other">อื่นๆ</label>
          </div>

          {option && (
            <div>
              <div className="">
                <label htmlFor="reports">แจ้งซ่อม</label>
                <input
                  type="text"
                  id="reports"
                  value={data.report}
                  onChange={(e) => setData("report", e.target.value)}
                  className="rounded w-full border border-blue-500"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <Button
                  type="submit"
                  className="bg-blue-500 text-white"
                  disabled={processing}
                >
                  บันทึก
                </Button>
                <Button className="bg-yellow-500">เพิ่มการแจ้งซ้อม</Button>
                <Button className="bg-red-500 text-white" onClick={resetInput}>
                  ล้างข้อมูล
                </Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </Authenticated>
  );
}
