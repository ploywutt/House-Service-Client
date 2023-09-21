// import React from "react";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import InfoPay from "../assets/icon/info_pay.svg";
import ArrowRight from "../assets/icon/arrow_right.png";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import useCreateOrder from "@/hook/usePostOrder";

export function AlertPayment(props) {
  // const createOrder = useCreateOrder();
  //
  // const handleClick = (event) => {
  //   event.preventDefault();
  //   createOrder({
  //     title,
  //     content,
  //     status,
  //   });
  // };
  // };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="default" className="w-40 h-11">
          <p className="mr-2 ">ดำเนินการต่อ</p>
          <img src={ArrowRight} alt="ArrowRight" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div id="Check-Symbol" className="p-8">
              <img src={InfoPay} alt="Info Payment Icon" />
            </div>
            <div id="Title" className="p-2">
              <h1>ยืนยันการชำระเงิน !</h1>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
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
            <Separator className="w-96 border-gray-300 px-4" />
            <div
              id="Date"
              className="flex flex-row justify-between w-[422px] p-4"
            >
              <a className="p3 text-gray-500">วันที่</a>
              <a className="p3 text-right text-black">{props.thaiDate}</a>
            </div>
            <div
              id="Time"
              className="flex flex-row justify-between w-[422px] p-4"
            >
              <a className="p3 text-gray-500">เวลา</a>
              <a className="p3 text-right text-black">{props.selectedTime}</a>
            </div>
            <div
              id="Place"
              className="flex flex-row justify-between w-[422px] p-4"
            >
              <a className="p3 text-gray-500">สถานที่</a>
              <a className="p3 text-right text-black">{props.address}</a>
            </div>
            <Separator className="w-96 border-gray-300" />
            <div
              id="Sum"
              className="flex flex-row justify-between w-[422px] p-4 pb-8"
            >
              <a className="p3 text-gray-500">รวม</a>
              <h5>{props.totalprice.toFixed(2)} ฿</h5>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            {" "}
            <Button variant="secondary" className="w-[180px]">
              ยกเลิก
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction>
            <Button variant="default" className="w-[180px]">
              ตกลง
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AlertPayment;
