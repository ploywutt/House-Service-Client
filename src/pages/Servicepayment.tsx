import { Separator } from "../components/ui/separator";
import CheckSymbol from "../assets/icon/CheckSymbol.svg";
import { Button } from "../components/ui/button";

function ServicePayment() {
  return (
    <div id="Container" className="flex justify-center pt-24">
      <div
        id="Card"
        className="w-[542px] h-[600px] bg-white rounded-lg border border-gray-300 flex flex-col items-center"
      >
        <div id="Check-Symbol" className="p-8">
          <img src={CheckSymbol} alt="Check Symbol" />
        </div>
        <div id="Title" className="p-2">
          <h1>ชำระเงินเรียบร้อย !</h1>
        </div>
        <div
          id="Detail"
          className="w-[422px] flex flex-row justify-between p-4"
        >
          <h4>9,000 - 18,000 BTU, แบบติดผนัง</h4>
          <h4>2 รายการ</h4>
        </div>
        <Separator className="w-96 border-gray-300 px-4" />
        <div id="Date" className="flex flex-row justify-between w-[422px] p-4">
          <a className="p3 text-gray-500">วันที่</a>
          <a className="p3 text-right text-black">23 เม.ย. 2021</a>
        </div>
        <div id="Time" className="flex flex-row justify-between w-[422px] p-4">
          <a className="p3 text-gray-500">เวลา</a>
          <a className="p3 text-right text-black">11.00 น.</a>
        </div>
        <div id="Place" className="flex flex-row justify-between w-[422px] p-4">
          <a className="p3 text-gray-500">สถานที่</a>
          <a className="p3 text-right text-black">
            444/4 คอนโดสุภาลัย เสนานิคม จตุจักร กรุงเทพฯ
          </a>
        </div>
        <Separator className="w-96 border-gray-300" />
        <div
          id="Sum"
          className="flex flex-row justify-between w-[422px] p-4 pb-8"
        >
          <a className="p3 text-gray-500">รวม</a>
          <h5>1550.00 ฿</h5>
        </div>
        <Button variant="default" className="w-96">
          เช็ครายการซ่อม
        </Button>
      </div>
    </div>
  );
}

export default ServicePayment;
