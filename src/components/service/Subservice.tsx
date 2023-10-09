import SellTag from "../../assets/icon/sell_tag.png";
import { Separator } from "../../components/ui/separator";
import Counter from "../service/Counter";
import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

interface SubserviceProps {
  subservice: {
    sub_service_name: string;
    price_per_unit: number;
    unit: string;
  }[];
  counts: { count: number }[];
  handleIncrement: (index: number) => void;
  handleDecrement: (index: number) => void;
  discount?: number;
  setDiscount: (value: number) => void;
  totalprice: number;
  setOrderTotalPrice: (index: number) => void;
  type?: string;
  setType: (value: string) => void;
}

export default function Subservice(props: SubserviceProps) {
  const { t } = useTranslation();

  const [codeName, setCodeName] = useState<string>();
  const [promoData, setPromoData] = useState<any>();
  const [totalPriceWithDiscount, setTotalPriceWithDiscount] =
    useState<number>();

  console.log("codeName", codeName);
  console.log("promoData state", promoData);
  console.log("totalPriceWithDiscount", totalPriceWithDiscount);
  console.log("หน้า CheckoutPage", props.totalprice);

  const handlePromoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCodeName(event.target.value);
  };

  const handleOnClickPromotionCode = async () => {
    try {
      console.log("codeName in onCLick", codeName);
      const { data } = await axios.get(
        `http://localhost:4000/v1/user/promotions/${codeName}`
      );
      console.log("Promo Data fetch:", data.data);
      setPromoData(data.data);
    } catch (error) {
      console.error("Promo fetch error:", error);
    }
  };

  useEffect(() => {
    const discount = promoData?.discount_amount;
    props.setDiscount(discount);
    const type = promoData?.type;
    props.setType(type);
    if (promoData?.type === "Fixed") {
      const totalPriceWithDiscount = props.totalprice - discount;
      setTotalPriceWithDiscount(totalPriceWithDiscount);
      props.setOrderTotalPrice(totalPriceWithDiscount);
    } else if (promoData?.type === "Percent") {
      const totalPriceWithDiscount =
        props.totalprice - props.totalprice * (discount / 100);
      setTotalPriceWithDiscount(totalPriceWithDiscount);
      props.setOrderTotalPrice(totalPriceWithDiscount);
    }
  }, [promoData]);

  return (
    <div className="flex flex-col gap-6">
      <div className="w-[735px] h-fit px-6 pt-6 pb-8 bg-white rounded-lg border border-gray-300 dark:bg-gray-800">
        <h3 className="text-gray-700 mb-8 dark:text-white">
          {t("subservice_header")}
        </h3>

        {props.subservice.map(
          (
            item: {
              sub_service_name: string;
              price_per_unit: number;
              unit: string;
            },
            index: number
          ) => {
            const price = item.price_per_unit;
            console.log(`price: ${price}`);

            return (
              <div
                className="flex-col justify-start items-start gap-px"
                key={index}
              >
                <div className="flex-col justify-start items-start flex">
                  <div className="w-full flex flex-row justify-between">
                    <div className="w-full mb-4 ">
                      <h4 className=" text-black dark:text-white">
                        {item.sub_service_name}
                      </h4>
                      <div className="justify-start items-center inline-flex">
                        <img
                          src={SellTag}
                          alt="Sell tag icon"
                          className="h-4 w-4 mr-2"
                        />
                        <p className="text-gray-500 dark:text-white">
                          {item.price_per_unit.toFixed(2)} ฿ / {item.unit}
                        </p>
                      </div>
                    </div>
                    <Counter
                      index={index}
                      count={props.counts[index].count}
                      handleIncrement={() => props.handleIncrement(index)}
                      handleDecrement={() => props.handleDecrement(index)}
                    />
                  </div>
                  <Separator className="my-4" />
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="w-[735px] h-fit px-6 pt-6 pb-8 bg-white rounded-lg border border-gray-300 dark:bg-gray-800">
        <h5 className="text-slate-900 pb-1 mb-2">Promotion Code</h5>
        <input
          type="text"
          name="discountCode"
          value={codeName}
          onChange={handlePromoChange}
          placeholder={t("checkout_page.checkout_page_cvv_please")}
          className="w-[331px] h-[auto] px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex focus:outline-none focus:border-blue-600 focus:border-1 placeholder:text-gray-700 hover:bg-slate-100 placeholder:hover:text-slate-900"
        />
        <button
          className="ButtonPrimaryMedium w-[90px] h-11 px-6 py-2.5 ml-[24px] bg-blue-600 rounded-lg justify-center items-center gap-2 inline-flex text-white"
          onClick={handleOnClickPromotionCode}
        >
          {t("checkout_page.checkout_page_use_code")}
        </button>
      </div>
    </div>
  );
}
