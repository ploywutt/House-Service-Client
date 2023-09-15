import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import DayPicker from "./DayPicker";
import TimePicker from "./TimePicker";
import { useEffect, useState } from "react";
import axios from "axios";

function ClientInput() {
  const [provinces, setProvinces] = useState([]);
  const [amphures, setAmphures] = useState([]);
  const [tambons, setTambons] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("เลือกจังหวัด");
  const [selectedAmphure, setSelectedAmphure] = useState("เลือกเขต / อำเภอ");
  const [selectedTambon, setSelectedTambon] = useState("เลือกแขวง / ตำบล");

  const fetchProvince = async () => {
    try {
      const data = await axios.get("http://localhost:4000/area");
      console.log(data.data);
      setProvinces(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDistrict = async () => {
    if (selectedProvince) {
      try {
        const data = await axios.get(
          `http://localhost:4000/area/amphure/${selectedProvince}`
        );
        console.log(data.data);
        setAmphures(data.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const fetchSubDistrict = async () => {
    if (selectedAmphure) {
      try {
        const data = await axios.get(
          `http://localhost:4000/area/tambon/${selectedAmphure}`
        );
        console.log(data.data);
        setTambons(data.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchProvince();
  }, []);

  useEffect(() => {
    fetchDistrict();
  }, [selectedProvince]);

  useEffect(() => {
    fetchSubDistrict();
  }, [selectedAmphure]);

  console.log(selectedProvince);
  console.log(selectedAmphure);
  console.log(selectedTambon);

  return (
    <div
      id="add-input"
      className="w-[735px] h-fit bg-white rounded-lg border border-zinc-300  p-5"
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

            <Select
              onValueChange={(event) => setSelectedProvince(event)}
              // defaultValue={selectedProvince}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="เลือกจังหวัด" />
              </SelectTrigger>
              <SelectContent className="h-96">
                {provinces.map((item: { name_th: string; id: number }) => {
                  return (
                    <SelectItem key={item.id} value={item.name_th}>
                      {item.name_th}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="city" className="py-0.5">
              เขต / อำเภอ<span className="text-utility-red">*</span>
            </label>

            <Select
              onValueChange={(event) => setSelectedAmphure(event)}
              // defaultValue={selectedAmphure}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="เลือกเขต / อำเภอ" />
              </SelectTrigger>
              <SelectContent>
                {amphures.map((item: { name_th: string; id: number }) => {
                  return (
                    <SelectItem key={item.id} value={item.name_th}>
                      {item.name_th}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="address2" className="py-0.5">
              แขวง / ตำบล<span className="text-utility-red">*</span>
            </label>

            <Select
              onValueChange={(event) => setSelectedTambon(event)}
              // defaultValue={selectedTambon}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="เลือกแขวง / ตำบล" />
              </SelectTrigger>
              <SelectContent>
                {tambons.map((item: { name_th: string; id: number }) => {
                  return (
                    <SelectItem key={item.id} value={item.name_th}>
                      {item.name_th}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col py-6">
          <label htmlFor="other" className="py-0.5">
            ระบุข้อมูลเพิ่มเติม
          </label>
          <textarea
            id="other"
            name="other"
            rows={3}
            // cols="20"
            placeholder="กรุณาระบุข้อมูลเพิ่มเติม"
            className="px-4 py-2.5 border rounded-lg border-gray-300 placeholder:text-gray-700 text-base focus:outline-none"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default ClientInput;
