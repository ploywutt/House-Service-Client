import "@/assets/css/servicelistpage.css";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select-no-indicator";

import { AutoComplete, Option } from "@/components/ui/autocomplete";

function Servicelistpage() {
  const [searchtext, setSearchText] = useState<Option>();
  const [selectcategory, setSelectcategory] = useState("all");
  const option = [
    { label: "ล้างแอร์", value: "ล้างแอร์" },
    { label: "ติดตั้งแอร์", value: "ติดตั้งแอร์" },
    { label: "ซ่อมแอร์", value: "ซ่อมแอร์" },
    { label: "ทำความสะอาดทั่วไป", value: "ทำความสะอาดทั่วไป" },
  ];
  const servicecategory = [
    { value: "all", text: "บริการทั้งหมด" },
    { value: "general", text: "บริการทั่วไป" },
    { value: "kitchen", text: "บริการห้องครัว" },
    { value: "toilet", text: "บริการห้องน้ำ" },
  ];

  const ChangeSelectedcategory = (event: string) => {
    setSelectcategory(event);
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="relative">
          <div className="list-image text-white">
            <div className="z-10 relative text-center py-[5rem]">
              <div className="font-medium text-[2rem]">บริการของเรา</div>
              <div className="pt-[1.5rem]">
                ซ่อมเครื่องใช้ไฟฟ้า ซ่อมแอร์ ทำความสะอาดบ้าน และอื่น ๆ อีกมากมาย
                <br />
                โดยพนักงานแม่บ้าน และช่างมืออาชีพ
              </div>
            </div>
          </div>
        </div>
        <div className="flex bg-white px-52 items-center justify-between">
          <div>
            <AutoComplete
              placeholder="ค้นหาบริการ..."
              options={option}
              emptyMessage="ไม่พ้บข้อมูล"
              value={searchtext}
              onValueChange={(event) => {
                setSearchText(event);
              }}
            ></AutoComplete>
          </div>
          <div>
            <div className="text-[0.75rem] text-gray-700">หมวดหมู่บริการ</div>
            <div>
              <Select
                defaultValue={selectcategory}
                onValueChange={(event) => {
                  ChangeSelectedcategory(event);
                }}
              >
                <SelectTrigger className="w-[10rem]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {servicecategory.map((category, index) => {
                    let className = "pl-2";
                    if (category.value == selectcategory) {
                      className += " text-blue-700";
                    }
                    return (
                      <SelectItem
                        key={index}
                        value={category.value}
                        className={className}
                      >
                        {category.text}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicelistpage;
