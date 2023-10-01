import { Separator } from "./ui/separator";
import { createContext } from "react";
import { useTranslation } from "react-i18next";
export const OrderContext = createContext({});

function OrderDetail(props: {
  selectedTime: string;
  address: {
    address: string;
    selectedTambon: string;
    selectedAmphure: string;
    selectedProvince: string;
  };

  thaiDate: string;
  date: Date | undefined;
  totalprice: number;
  counts: { name: string; count: number; unit: string }[];
}) {
  const { t } = useTranslation();
  return (
    <div className="w-[349px] h-fit px-6 pt-6 pb-8 bg-white rounded-lg border border-gray-300 sticky top-0 dark:bg-gray-800">
      <div>
        <h3 className="text-gray-700 mb-2 dark:text-white">
          {t("order_details.order_details_summary")}
        </h3>
        <div className="flex flex-col">
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
        {props.date && props.thaiDate !== "รักของเรามันกลายเป็นอดีตไปแล้ว" && (
          <div className="flex flex-row justify-between">
            <p className="text-gray-500 dark:text-white">
              {t("order_details.order_details_day")}
            </p>
            <h5>{props.thaiDate}</h5>
          </div>
        )}
        {props.selectedTime && (
          <div className="flex flex-row justify-between">
            <p className="text-gray-500 dark:text-white">
              {t("order_details.order_details_time")}
            </p>
            <h5>{props.selectedTime} น.</h5>
          </div>
        )}
        {(props.address.address || props.address.selectedProvince) && (
          <div className="flex flex-row justify-between">
            <p className="text-gray-500 dark:text-white">
              {t("order_details.order_details_location")}
            </p>
            <div className="w-[200px]">
              <h5 className="text-end">{props.address.address}</h5>
              <h5 className="text-end">
                {`${props.address.selectedTambon} ${props.address.selectedAmphure} ${props.address.selectedProvince}`}
              </h5>
            </div>
          </div>
        )}
      </div>
      {((props.date && props.thaiDate !== "รักของเรามันกลายเป็นอดีตไปแล้ว") ||
        props.selectedTime ||
        props.address.address ||
        props.address.selectedProvince) && <Separator className="my-4" />}
      <div className="flex flex-row justify-between">
        <p className="text-gray-500 dark:text-white">
          {t("order_details.order_details_finale")}
        </p>
        <h5 className="dark:text-white">{props.totalprice.toFixed(2)} ฿</h5>
      </div>
    </div>
  );
}

export default OrderDetail;
