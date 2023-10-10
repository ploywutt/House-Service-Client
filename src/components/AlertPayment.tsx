import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import InfoPay from "../assets/icon/info_pay.svg";
import CheckSymbol from "../assets/icon/CheckSymbol.svg";
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
import { Loader2 } from "lucide-react";

import { useTranslation } from "react-i18next";

import useFetchUserEmail from "../hook/useFetchUserEmail";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { usePayment } from "@/hook/PayContext";

interface AlertPaymentProps {
  date: string;
  selectedTime: string;
  address: {
    address: string;
    selectedProvince: string;
    selectedAmphure: string;
    selectedTambon: string;
  };
  detail: string;
  counts: { name: string; count: number; unit: string }[];
  thaiDate: string;
  discount: number | null;
  type: "Fixed" | "Percent" | string;
  totalprice: number;
  orderTotalPrice?: number;
}

function AlertPayment(props: AlertPaymentProps) {
  const { t } = useTranslation();

  const userEmail = useFetchUserEmail();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);
  const navigate = useNavigate();

  const dateObject = new Date(props.date);
  const isoDateString = dateObject.toISOString();
  const formattedDate = isoDateString.split("T")[0];

  const { submit, setSubmit }: any = usePayment();

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setIsLoading(true);
    setSubmit(true);
    console.log("Submit has arrive:", submit);

    try {
      const result = await axios.post(
        `https://home-service-server.onrender.com/v1/user/orderdetails`,
        {
          working_time: `${formattedDate} ${props.selectedTime}`,
          address: props.address.address,
          province: props.address.selectedProvince,
          district: props.address.selectedAmphure,
          subdistrict: props.address.selectedTambon,
          details: props.detail,
          user_email: userEmail,
          status_id: 1,
          promotion_code: null,
          sub_service_orders: props.counts,
          totalprice:
            props.totalprice && props.orderTotalPrice
              ? props.orderTotalPrice
              : props.totalprice,
        }
      );
      setIsLoading(false);
      setConfirm(true);
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
        <Button className="w-40 h-11 dark:bg-black dark:text-white">
          <p className="mr-2 ">{t("alert_payment.alert_payment_next")}</p>
          <img src={ArrowRight} alt="ArrowRight" />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {!confirm && !isLoading && (
              <div id="Info Payment" className="flex flex-col items-center">
                <img src={InfoPay} alt="Info Payment Icon" />
                <div id="Title" className="pt-8 dark:text-white">
                  <h1>{t("alert_payment.alert_payment_header")}</h1>
                </div>
              </div>
            )}
            {isLoading ? (
              <div id="Info Payment" className="flex flex-col items-center">
                <Loader2 className="h-24 animate-spin" />
                <div id="Title" className="pt-8">
                  <h1>{t("checkout_processing")}</h1>
                </div>
              </div>
            ) : null}
            {confirm && !isLoading && (
              <div id="Info Payment" className="flex flex-col items-center">
                <img src={CheckSymbol} alt="Confirm Payment Icon" />
                <div id="Title" className="pt-8">
                  <h1>{t("checkout_finished")}</h1>
                </div>
              </div>
            )}
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col items-center p-4 dark:text-white">
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
                          <h4 className="w-1/3 text-end">
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
              <a className="p3 text-right text-black dark:text-white">
                {props.thaiDate}
              </a>
            </div>
            <div
              id="Time"
              className="flex flex-row justify-between w-[422px] p-4"
            >
              <a className="p3 text-gray-500">
                {t("alert_payment.alert_payment_time")}
              </a>
              <a className="p3 text-right text-black dark:text-white">
                {props.selectedTime}
              </a>
            </div>
            <div
              id="Place"
              className="flex flex-row justify-between w-[422px] p-4"
            >
              <a className="p3 text-gray-500">
                {t("alert_payment.alert_payment_location")}
              </a>
              <a className="p3 text-right text-black dark:text-white w-5/6">
                {props.address.address} {props.address.selectedTambon}{" "}
                {props.address.selectedAmphure} {props.address.selectedProvince}
              </a>
            </div>
            <Separator className="w-96 border-gray-300 mb-4" />

            <div
              id="totalprice-promotion"
              className="flex flex-col gap-3 w-full px-5"
            >
              {props.discount && props.type === "Fixed" && (
                <div className="flex flex-row justify-between">
                  <p className="text-gray-500 dark:text-white">
                    Promotion code
                  </p>
                  <h5 className="dark:text-white text-utility-red">
                    -{props.discount.toFixed(2)} ฿
                  </h5>
                </div>
              )}
              {props.discount && props.type === "Percent" && (
                <div className="flex flex-row justify-between">
                  <p className="text-gray-500 dark:text-white">
                    Promotion code
                  </p>
                  <h5 className="dark:text-white text-utility-red">
                    -{props.discount} %
                  </h5>
                </div>
              )}
              <div className="flex flex-row justify-between">
                <p className="text-gray-500">
                  {t("order_details.order_details_finale")}
                </p>
                {props.totalprice && props.orderTotalPrice ? (
                  <h5 className="dark:text-white">
                    {props.orderTotalPrice?.toFixed(2)} ฿
                  </h5>
                ) : (
                  <h5 className="dark:text-white">
                    {props.totalprice.toFixed(2)} ฿
                  </h5>
                )}
              </div>
            </div>
            {/* <div
              id="Sum"
              className="flex flex-row justify-between w-[422px] p-4 pb-8"
            >
              <a className="p3 text-gray-500">
                {t("alert_payment.alert_payment_finale")}
              </a>
              <h5>{props.totalprice.toFixed(2)} ฿</h5>
            </div> */}
          </AlertDialogDescription>
        </AlertDialogHeader>
        {!confirm && (
          <AlertDialogFooter className="flex pr-9">
            <AlertDialogCancel className="w-[194px] text-blue-600">
              {t("alert_payment.alert_payment_cancel")}
            </AlertDialogCancel>

            <AlertDialogAction className="w-[194px]" onClick={handleClick}>
              {t("alert_payment.alert_payment_confirm")}
            </AlertDialogAction>
          </AlertDialogFooter>
        )}
        {confirm && (
          <AlertDialogFooter className="px-6">
            <AlertDialogAction
              className="w-full"
              onClick={() => {
                navigate("/orders");
              }}
            >
              {t("checkout_page.checkout_page_check_order_list")}
            </AlertDialogAction>
          </AlertDialogFooter>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AlertPayment;
