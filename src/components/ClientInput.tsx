import { Input } from "@/components/ui/input";
import DayPicker from "./DayPicker";
import TimePicker from "./TimePicker";

function ClientInput() {
  return (
    <div
      id="add-input"
      className="w-[735px] h-[568px] bg-white rounded-lg border border-zinc-300  p-5"
    >
      <h4 className="text-gray-700">กรอกข้อมูลบริการ</h4>
      <div className="flex flex-col py-8">
        <div className="grid grid-cols-2 gap-4 gap-y-6">
          <div className="flex flex-col">
            <label htmlFor="calendar" className="py-0.5">
              วันที่สะดวกใช้บริการ<span className="text-utility-red">*</span>
            </label>
            <DayPicker />
          </div>
          <div className="flex flex-col">
            <label htmlFor="time" className="py-0.5">
              เวลาที่สะดวกใช้บริการ<span className="text-utility-red">*</span>
            </label>
            <TimePicker />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" className="py-0.5">
              ที่อยู่<span className="text-utility-red">*</span>
            </label>
            <Input
              type="text"
              id="address"
              name="address"
              placeholder="กรุณากรอกที่อยู่"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="province" className="py-0.5">
              จังหวัด<span className="text-utility-red">*</span>
            </label>
            <Input
              type="text"
              id="province"
              name="province"
              placeholder="เลือกจังหวัด"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="city" className="py-0.5">
              เขต / อำเภอ<span className="text-utility-red">*</span>
            </label>
            <Input
              type="text"
              id="city"
              name="city"
              placeholder="เลือกเขต / อำเภอ"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address2" className="py-0.5">
              แขวง / ตำบล<span className="text-utility-red">*</span>
            </label>
            <Input
              type="text"
              id="address2"
              name="address2"
              placeholder="เลือกแขวง / ตำบล"
              required
            />
          </div>
        </div>
        <div className="flex flex-col py-6">
          <label htmlFor="other" className="py-0.5">
            ระบุข้อมูลเพิ่มเติม
          </label>
          <textarea
            id="other"
            name="other"
            rows="3"
            cols="60"
            placeholder="กรุณาระบุข้อมูลเพิ่มเติม"
            className="px-4 py-2.5 border rounded-lg border-gray-300 placeholder:text-gray-700 text-base focus:outline-none"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default ClientInput;
