import { Separator } from "./ui/separator";

function OrderDetail() {
  return (
    <div className="w-[349px] h-fit px-6 pt-6 pb-8 bg-white rounded-lg border border-gray-300 sticky top-0">
      <div>
        <h3 className="text-gray-700 mb-2">สรุปรายการ</h3>
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-1 gap-5 py-2">
        <div className="flex flex-row justify-between">
          <p className="text-gray-500">วันที่</p>
          <h5>23 เม.ย. 2022 ฿</h5>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-gray-500">เวลา</p>
          <h5>11.00 ฿</h5>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-gray-500">สถานที่</p>
          <h5 className="w-48 text-end">
            444/4 คอนโดสุภาลัย เสนานิคม จตุจักร กรุงเทพฯ
          </h5>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex flex-row justify-between">
        <p className="text-gray-500">รวม</p>
        <h5>0.00 ฿</h5>
      </div>
    </div>
  );
}

export default OrderDetail;
