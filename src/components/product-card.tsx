import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tag } from "lucide-react";

export default function productCard() {
  return (
    <div className="border rounded-lg overflow-hidden">
      <img src="https://picsum.photos/400/300" alt="Image" className="w-full" />
      <div className="p-4 bg-white">
        <Badge variant="blue" className="py-1 text-[0.75rem]">
          บริการทั่วไป
        </Badge>
        <div className="text-gray-950 text-[1.25rem] pt-2">
          ทำความสะอวดทั่วไป
        </div>
        <div className="text-gray-700 text-[0.875rem] flex items-center pb-2">
          <Tag className="w-[1rem] mr-2" />
          ค่าบริการประมาณ 500.00 - 1,000.00 ฿
        </div>
        <Button variant="link" className="underline text-blue-600 px-0">
          เลือกบริการ
        </Button>
      </div>
    </div>
  );
}
