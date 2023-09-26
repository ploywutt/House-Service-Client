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

import { useTranslation } from "react-i18next";

import useFetchUserEmail from "../hook/useFetchUserEmail";
import { useState } from "react";
import axios from "axios";

function AlertPayment(props) {
  const { t } = useTranslation();

  const dateObject = new Date(props.date);
  const isoDateString = dateObject.toISOString();
  const formattedDate = isoDateString.split("T")[0];

  const userEmail = useFetchUserEmail();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const result = await axios.post(
        `http://localhost:4000/v1/user/orderdetails`,
        {
          working_time: `${formattedDate} ${props.selectedTime}`,
          address: props.address.address,
          province: props.address.selectedProvince,
          district: props.address.selectedAmphure,
          subdistrict: props.address.selectedTambon,
          detail: null,
          user_email: userEmail,
          status_id: 4,
          promotion_code: null,
          sub_service_orders: props.counts,
        }
      );
      setIsLoading(false);
      console.log("Order created successfully:", result);
      return result;
    } catch (error) {
      console.error("Order creation failed:", error);
      setIsLoading(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-40 h-11" onClick={handleClick}>
          <p className="mr-2 ">{t("alert_payment.alert_payment_next")}</p>
          <img src={ArrowRight} alt="ArrowRight" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div id="Info Payment" className="flex flex-col items-center">
              <img src={InfoPay} alt="Info Payment Icon" />
              <div id="Title" className="pt-8">
                <h1>{t("alert_payment.alert_payment_header")}</h1>
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
              <a className="p3 text-gray-500">
                {t("alert_payment.alert_payment_day")}
              </a>
              <a className="p3 text-right text-black">{props.thaiDate}</a>
            </div>
            <div
              id="Time"
              className="flex flex-row justify-between w-[422px] p-4"
            >
              <a className="p3 text-gray-500">
                {t("alert_payment.alert_payment_time")}
              </a>
              <a className="p3 text-right text-black">{props.selectedTime}</a>
            </div>
            <div
              id="Place"
              className="flex flex-row justify-between w-[422px] p-4"
            >
              <a className="p3 text-gray-500">
                {t("alert_payment.alert_payment_location")}
              </a>
              <a className="p3 text-right text-black w-5/6">
                {props.address.address} {props.address.selectedTambon}{" "}
                {props.address.selectedAmphure} {props.address.selectedProvince}
              </a>
            </div>
            <Separator className="w-96 border-gray-300" />
            <div
              id="Sum"
              className="flex flex-row justify-between w-[422px] p-4 pb-8"
            >
              <a className="p3 text-gray-500">
                {t("alert_payment.alert_payment_finale")}
              </a>
              <h5>{props.totalprice.toFixed(2)} ฿</h5>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex pr-9">
          <AlertDialogCancel className="w-[194px] text-blue-600">
            {t("alert_payment.alert_payment_cancel")}
          </AlertDialogCancel>
          <AlertDialogAction className="w-[194px]">
            {" "}
            {t("alert_payment.alert_payment_confirm")}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AlertPayment;
