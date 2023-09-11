import { Input } from "@/components/ui/input";
import CalendarDemo from "../components/DayPicker";

function AddressInput() {
  return (
    <div
      id="add-input"
      className="w-[735px] h-[568px] bg-white rounded-lg border border-zinc-300  p-4"
    >
      <h3>กรอกข้อมูลบริการ</h3>
      <form className="flex flex-col">
        <div className="grid grid-cols-2 gap-4 gap-y-8">
          <div className="">
            <label htmlFor="calendar">
              วันที่สะดวกใช้บริการ<span className="text-utility-red">*</span>
            </label>
            <CalendarDemo />
          </div>
          <div>
            <label htmlFor="date">
              เวลาที่สะดวกใช้บริการ<span className="text-utility-red">*</span>
            </label>
            <Input type="time" id="time" name="time" required />
          </div>
          <div>
            <label htmlFor="address">
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
          <div>
            <label htmlFor="province">
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
          <div>
            <label htmlFor="city">
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
          <div>
            <label htmlFor="address2">
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
        <div className="py-8">
          <label htmlFor="other">ระบุข้อมูลเพิ่มเติม</label>
          <Input
            type="text"
            id="other"
            name="other"
            placeholder="กรุณาระบุข้อมูลเพิ่มเติม"
          />
        </div>
      </form>
    </div>
  );
}

export default AddressInput;
