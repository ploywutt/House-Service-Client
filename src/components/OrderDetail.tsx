import { Separator } from "./ui/separator";
import { createContext } from "react";

export const OrderContext = createContext({});

function OrderDetail(props: {
  selectedTime: string;
  address: string;
  selectedTambon: string;
  selectedAmphure: string;
  selectedProvince: string;
  thaiDate: string;
  date: any;
  totalprice: number;
  counts: { name: string; count: number; unit: string }[];
}) {
  return (
    <div className="w-[349px] h-fit px-6 pt-6 pb-8 bg-white rounded-lg border border-gray-300 sticky top-0 ">
      <div>
        <h3 className="text-gray-700 mb-2">สรุปรายการ</h3>
        <div className="flex flex-col ">
          {props.counts.map(
            (
              item: { name: string; count: number; unit: string },
              index: number
            ) => {
              return (
                <div key={index} className="flex justify-between">
                  {item.count > 0 && (
                    <>
                      <p>{item.name}</p>
                      <p>
                        {item.count} {item.unit}
                      </p>
                    </>
                  )}
                </div>
              );
            }
          )}
        </div>
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
        <h5>{props.totalprice.toFixed(2)} ฿</h5>
      </div>
    </div>
  );
}

export default OrderDetail;
