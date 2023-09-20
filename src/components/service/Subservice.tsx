import SellTag from "../../assets/icon/sell_tag.png";
import { Separator } from "../../components/ui/separator";
import Counter from "../service/Counter";
import useFetchSubservice from "@/hook/useFetchSubservice";

export default function Subservice() {
  const { subservice, counts, handleDecrement, handleIncrement } =
    useFetchSubservice();

  return (
    <div className="w-[735px] h-fit px-6 pt-6 pb-8 bg-white rounded-lg border border-gray-300 ">
      <h3 className="text-gray-500 mb-8">รายการที่เลือก</h3>

      {subservice.map(
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

          // ส่ง count Hook มาใน map ไม่ได้
          // const amount = count;
          // console.log(`countMap: ${count}`);

          // const totalpricePerSubService = price * amount;
          // console.log(`totalpricePerSubService: ${totalpricePerSubService}`);
          return (
            <div
              className="flex-col justify-start items-start gap-px"
              key={index}
            >
              <div className="flex-col justify-start items-start flex">
                <div className="w-full flex flex-row justify-between">
                  <div className="w-full mb-4 ">
                    <h4 className=" text-black">{item.sub_service_name}</h4>
                    <div className="justify-start items-center inline-flex">
                      <img
                        src={SellTag}
                        alt="Sell tag icon"
                        className="h-4 w-4 mr-2"
                      />
                      <p className="text-gray-500">
                        {item.price_per_unit} / {item.unit}
                      </p>
                    </div>
                  </div>
                  <Counter
                    index={index}
                    count={counts[index].count}
                    handleIncrement={() => handleIncrement(index)}
                    handleDecrement={() => handleDecrement(index)}
                  />
                </div>
                <Separator className="my-4" />
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}
