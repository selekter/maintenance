import Button from "@/Components/ฺButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";

export default function Create({ auth, license_plates }) {
  // console.log(license_plates);
  license_plates.sort((a, b) => a.number_plate.localeCompare(b.number_plate));

  const { data, setData, post, processing, errors, reset } = useForm({
    plate: "",
    service: [],
    other: "",
  });

  const [option, setOption] = useState(false);
  const [isChecked, setIsChecked] = useState([]);

  const open_other = () => {
    setOption((prev) => !prev);
    console.log(option);

    if (option) {
      setData("other", "");
    }
  };

  const resetInput = () => {
    setOption(false);
    reset();
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setIsChecked((prev) => [...prev, value]);
      setData("service", [...(data.service || []), value]);
    } else {
      setIsChecked((prev) => prev.filter((item) => item !== value));
      setData(
        "service",
        (data.service || []).filter((item) => item !== value)
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);

    post(route("report.store"));
  };

  return (
    <Authenticated user={auth.user} header="Report">
      <div className="space-y-2 bg-white p-5 shadow rounded">
        <form className="space-y-3" onSubmit={handleSubmit}>
          <div className="flex items-center gap-2">
            <label htmlFor="plate">ป้ายทะเบียน:</label>
            <select
              name="plate"
              id="plate"
              defaultValue=""
              required
              className="outline outline-1 outline-blue-600 border border-blue-500 rounded"
              onChange={(e) => setData("plate", e.target.value)}
            >
              <option value="" disabled>
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
            <input
              type="checkbox"
              name="engine_oil"
              id=""
              value="เปลี่ยนน้ำมันเครื่อง"
              onChange={handleCheckbox}
            />
            <label htmlFor="engine_oil">เปลี่ยนน้ำมันเครื่อง</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="gear_oil"
              value="เปลี่ยนน้ำมันเกียร์"
              onChange={handleCheckbox}
            />
            <label htmlFor="gear_oil">เปลี่ยนน้ำมันเกียร์</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="differential_oil"
              value="เปลี่ยนน้ำมันเฟืองท้าย"
              onChange={handleCheckbox}
            />
            <label htmlFor="differential_oil">เปลี่ยนน้ำมันเฟืองท้าย</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="other"
              onChange={(e) => {
                open_other();
              }}
            />
            <label htmlFor="other">อื่นๆ</label>
          </div>

          {option && (
            <div className="mt-5">
              <label htmlFor="other">แจ้งซ่อม</label>
              <input
                type="text"
                id="other"
                value={data.other}
                onChange={(e) => setData("other", e.target.value)}
                className="rounded w-full border border-blue-500"
              />
            </div>
          )}
          <div className="flex flex-col md:flex-row gap-2">
            <Button
              type="submit"
              className="bg-blue-500 text-white"
              disabled={processing}
            >
              บันทึก
            </Button>
            <Button
              className="bg-red-500 text-white"
              type="reset"
              onClick={resetInput}
            >
              ล้างข้อมูล
            </Button>
          </div>
        </form>
      </div>
    </Authenticated>
  );
}
