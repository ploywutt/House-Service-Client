import SellTag from "../../assets/icon/sell_tag.png";
import { Separator } from "../../components/ui/separator";
import Counter from "../service/Counter";

export default function Subservice(props) {
  return (
    <div className="w-[735px] h-fit px-6 pt-6 pb-8 bg-white rounded-lg border border-gray-300 ">
      <h3 className="text-gray-500 mb-8">รายการที่เลือก</h3>

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
                    <h4 className=" text-black">{item.sub_service_name}</h4>
                    <div className="justify-start items-center inline-flex">
                      <img
                        src={SellTag}
                        alt="Sell tag icon"
                        className="h-4 w-4 mr-2"
                      />
                      <p className="text-gray-500">
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
  );
}
