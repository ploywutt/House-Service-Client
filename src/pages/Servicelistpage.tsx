import "@/assets/css/servicelistpage.css";
import ProductCard from "@/components/product-card";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import StickyBox from "@/components/stickybox";
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
  const [selectsortby, setSelectsortby] = useState("recommended");
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
  const sortby = [
    { value: "recommended", text: "บริการแนะนำ" },
    { value: "popular", text: "บริการยอดนิยม" },
    { value: "ascend", text: "ตามตัวอักษร (Ascending)" },
    { value: "descend", text: "ตามตัวอักษร (Descending)" },
  ];

  const ChangeSelectedcategory = (event: string) => {
    setSelectcategory(event);
  };

  const ChangeSortby = (event: string) => {
    setSelectsortby(event);
  };

  return (
    <>
      <div className="flex flex-col pb-12">
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
        <StickyBox>
          <div
            className={"flex bg-white px-52 items-center justify-between py-2"}
          >
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
            <div>
              <div className="text-[0.75rem] text-gray-700">ราคา</div>
            </div>
            <div>
              <div className="text-[0.75rem] text-gray-700">เรียงตาม</div>
              <div>
                <Select
                  defaultValue={selectsortby}
                  onValueChange={(event) => {
                    ChangeSortby(event);
                  }}
                >
                  <SelectTrigger className="w-[14.5rem]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sortby.map((category, index) => {
                      let className = "pl-2";
                      if (category.value == selectsortby) {
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
            <Button className="px-8 py-6">ค้นหา</Button>
          </div>
        </StickyBox>
      </div>
      <div className="grid grid-cols-3 gap-14 px-52 pb-20">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
      <div className="footerLogo xl:px-[25rem] xl:py-[8rem] px-[16px] py-[32px] ">
        <div className="relative">
          <div className="opacity-image"></div>
        </div>
        <div className="flex justify-center w-full">
          <div className="text-white text-center text-[1.25rem] pb-[1.5rem]">
            เพราะเราคือช่าง ผู้ให้บริการเรื่องบ้านอันดับ 1 แบบครบวงจร
            โดยทีมช่างมืออาชีพมากกว่า 100 ทีม <br />
            สามารถตอบโจทย์ด้านการบริการเรื่องบ้านของคุณ และสร้าง <br />
            ความสะดวกสบายในการติดต่อกับทีมช่าง ได้ทุกที่ ทุกเวลา ตลอด 24 ชม.
            <br />
            มั่นใจ ช่างไม่ทิ้งงาน พร้อมรับประกันคุณภาพงาน
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicelistpage;
