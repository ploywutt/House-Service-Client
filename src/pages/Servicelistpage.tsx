import "@/assets/css/servicelistpage.css";
import ProductCard from "@/components/product-card";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import StickyBox from "@/components/stickybox";
import { ChevronDown } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select-no-indicator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { AutoComplete, Option } from "@/components/ui/autocomplete";

function Servicelistpage() {
  const [searchtext, setSearchText] = useState<Option>();
  const [selectcategory, setSelectcategory] = useState("all");
  const [selectsortby, setSelectsortby] = useState("recommended");
  const [minprice, setMinprice] = useState(0);
  const [maxprice, setMaxprice] = useState(2000);
  const [items, setItems] = useState(Array.from({ length: 8 }));
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

  const handleSlider = (value: number[]) => {
    setMinprice(value[0]);
    setMaxprice(value[1]);
  };
  const ChangeSelectedcategory = (event: string) => {
    setSelectcategory(event);
  };

  const ChangeSortby = (event: string) => {
    setSelectsortby(event);
  };

  const fetchMoreData = () => {
    setTimeout(() => {
      setItems((prevItems) => prevItems.concat(Array.from({ length: 9 })));
    }, 1000);
  };

  return (
    <>
      <div className="flex flex-col pb-12">
        <div className="relative">
          <div className="list-image text-white">
            <div className="z-10 relative text-center py-[5rem]">
              <div className="font-medium text-[2rem]">บริการของเรา</div>
              <div className="pt-[1.5rem] px-6">
                ซ่อมเครื่องใช้ไฟฟ้า ซ่อมแอร์ ทำความสะอาดบ้าน และอื่น ๆ อีกมากมาย
                <br />
                โดยพนักงานแม่บ้าน และช่างมืออาชีพ
              </div>
            </div>
          </div>
        </div>
        <StickyBox>
          <div
            className={
              "flex bg-white 2xl:px-52 lg:px-28 items-center justify-between py-2 flex-col lg:flex-row"
            }
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
            <div className="w-full px-[5rem] lg:px-0 lg:w-[10rem]">
              <div className="text-[0.75rem] text-gray-700">หมวดหมู่บริการ</div>
              <div>
                <Select
                  defaultValue={selectcategory}
                  onValueChange={(event) => {
                    ChangeSelectedcategory(event);
                  }}
                >
                  <SelectTrigger className="w-full">
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
            <div className="w-full px-[5rem] lg:px-0 lg:w-[8rem]">
              <div className="text-[0.75rem] text-gray-700">ราคา</div>
              <div className="w-full cursor-pointer select-none">
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="flex justify-between items-center pr-3 py-2">
                      <div>
                        {minprice}-{maxprice}฿
                      </div>
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="pb-6 px-6">
                    <div className="text-gray-700">
                      {minprice}-{maxprice}฿
                    </div>
                    <Slider
                      className="my-3"
                      onValueChange={handleSlider}
                      defaultValue={[minprice, maxprice]}
                      max={10000}
                      step={1}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="w-full px-[5rem] lg:px-0 lg:w-[14rem]">
              <div className="text-[0.75rem] text-gray-700">เรียงตาม</div>
              <div>
                <Select
                  defaultValue={selectsortby}
                  onValueChange={(event) => {
                    ChangeSortby(event);
                  }}
                >
                  <SelectTrigger className="w-full">
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
      <div>
        <InfiniteScroll
          className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-14 gap-6 lg:px-[6rem] lg:pb-20 pb-10 px-4"
          dataLength={items.length}
          next={fetchMoreData}
          hasMore={false}
          loader={<div />}
          scrollThreshold={0.4}
        >
          {items.map((_, index) => (
            <div key={index}>
              <ProductCard />
            </div>
          ))}
        </InfiniteScroll>
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
