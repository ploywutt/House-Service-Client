// import useFetchProvince from "../hook/useFetchProvince";
import { Separator } from "./ui/separator";

function OrderDetail(props: {
  selectedTime: string;
  address: string;
  selectedTambon: string;
  selectedAmphure: string;
  selectedProvince: string;
  thaiDate: string;
}) {
  // function OrderDetail() {
  //   const { selectedProvince, selectedAmphure, selectedTambon } =
  //     useFetchProvince();

  return (
    <div className="w-[349px] h-fit px-6 pt-6 pb-8 bg-white rounded-lg border border-gray-300 sticky top-0 ">
      <div>
        <h3 className="text-gray-700 mb-2">สรุปรายการ</h3>
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-1 gap-5 py-2">
        {props.date && (
          <div className="flex flex-row justify-between">
            <p className="text-gray-500">วันที่</p>
            <h5>{props.thaiDate}</h5>
          </div>
        )}
        {props.selectedTime && (
          <div className="flex flex-row justify-between">
            <p className="text-gray-500">เวลา</p>
            <h5>{props.selectedTime} น.</h5>
          </div>
        )}
        {(props.address || props.selectedProvince) && (
          <div className="flex flex-row justify-between">
            <p className="text-gray-500">สถานที่</p>
            <div className="w-[200px]">
              <h5 className="text-end">{props.address}</h5>
              <h5 className="text-end">
                {`${props.selectedTambon} ${props.selectedAmphure} ${props.selectedProvince}`}
                {/* {`${selectedTambon} ${selectedAmphure} ${selectedProvince}`} */}
              </h5>
            </div>
          </div>
        )}
      </div>
      {(props.date ||
        props.selectedTime ||
        props.address ||
        props.selectedProvince) && <Separator className="my-4" />}
      <div className="flex flex-row justify-between">
        <p className="text-gray-500">รวม</p>
        <h5>฿฿฿</h5>
      </div>
    </div>
  );
}

export default OrderDetail;
