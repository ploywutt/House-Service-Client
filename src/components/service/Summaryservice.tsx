import { Separator } from "../ui/separator";

export default function SummaryService() {
  return (
    <div className="w-[349px] h-fit px-6 pt-6 pb-8 bg-white rounded-lg border border-gray-300 sticky top-0">
      <div>
        <h3 className="text-gray-500 mb-2">สรุปรายการ</h3>
      </div>
      <Separator className="my-4" />
      <div className="flex flex-row justify-between">
        <p>รวม</p>
        <h5>0.00 ฿</h5>
      </div>
    </div>
  );
}
