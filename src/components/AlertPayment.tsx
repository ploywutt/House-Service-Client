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

// import useFetchUserEmail from "./useFetchUserEmail";
// import { useState } from "react";
// import axios from "axios";

// import useCreateOrder from "@/hook/usePostOrder";

export function AlertPayment(props) {
  // const createOrder = useCreateOrder();

  // const handleClick = (event) => {
  //   event.preventDefault();
  //   createOrder({
  //         counts={counts}
  //         date={date}
  //         selectedTime={selectedTime}
  //         address={`${address} ${selectedTambon} ${selectedAmphure} ${selectedProvince}`}
  //   });
  // };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="w-40 h-11"
          // onClick={handleClick}
        >
          <p className="mr-2 ">ดำเนินการต่อ</p>
          <img src={ArrowRight} alt="ArrowRight" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div id="Info Payment" className="flex flex-col items-center">
              <img src={InfoPay} alt="Info Payment Icon" />
              <div id="Title" className="pt-8">
                <h1>ยืนยันการชำระเงิน !</h1>
              </div>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col items-center p-4">
            <div className="flex flex-col ">
              {props.counts.map(
                (
                  item: { name: string; count: number; unit: string },
                  index: number
                ) => {
                  return (
                    <div
                      key={index}
                      className="w-[422px] flex flex-row justify-between px-4"
                    >
                      {item.count > 0 && (
                        <>
                          <h4>{item.name}</h4>
                          <h4>
                            {item.count} {item.unit}
                          </h4>
                        </>
                      )}
                    </div>
                  );
                }
              )}
            </div>
            <Separator className="w-96 border-gray-300 px-4 mt-4 " />
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
              <a className="p3 text-right text-black w-5/6">{props.address}</a>
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
        <AlertDialogFooter className="flex pr-9">
          <AlertDialogCancel className="w-[194px] text-blue-600">
            ยกเลิก
          </AlertDialogCancel>
          <AlertDialogAction className="w-[194px]">ตกลง</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AlertPayment;
