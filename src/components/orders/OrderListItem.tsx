import calendar from "../../assets/icon/calendar.svg";
import employee from "../../assets/icon/employee.svg";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

// import { useNavigate } from "react-router-dom";
import usePathname from "@/hook/usePathname";

function OrderListItem(props: any) {
  // const navigate = useNavigate();
  const { pathname, navigate } = usePathname();

  return (
    <section id="order-list-column" className="flex flex-col gap-4">
      {props.fetchData.map(
        (item: {
          order_id: string;
          status: { status: string };
          order_detail: any;
          service_order: any;
        }) => {
          const orderId = item.order_id;
          const status = item.status.status;
          const employeeNameArray = item.order_detail.order_employee;
          const subServiceArray = item.service_order;

          const workingDateTime = new Date(item.order_detail.working_time);

          const thaiYear = workingDateTime.getFullYear() + 543;

          const workingDate = workingDateTime
            .toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })
            .replace(String(workingDateTime.getFullYear()), String(thaiYear));

          const hours = workingDateTime
            .getUTCHours()
            .toString()
            .padStart(2, "0");
          const minutes = workingDateTime
            .getUTCMinutes()
            .toString()
            .padStart(2, "0");
          const workingTime = `${hours}:${minutes}`;

          const orderPrice = subServiceArray.reduce(
            (
              totalPrice: number,
              data: { amount: number; sub_service: { price_per_unit: number } }
            ) => {
              const amount = data.amount;
              const price = data.sub_service.price_per_unit;
              return totalPrice + amount * price;
            },
            0
          );
          const orderPriceBaht = orderPrice.toLocaleString("th-TH", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });

          return (
            <div
              key={orderId}
              id="order-list"
              className="w-[831px] h-fit bg-white border border-gray-300 p-6 flex flex-col gap-3 rounded-lg"
            >
              <div
                id="first-line"
                className="flex flex-row justify-between items-center"
              >
                <h2>คำสั่งการซ่อมรหัส : {orderId}</h2>
                <div id="status" className="flex flex-row gap-3 items-center">
                  <p className="p3">สถานะ:</p>
                  <Badge
                    variant={
                      status === "รอดำเนินการ"
                        ? "gray-order"
                        : status === "กำลังดำเนินการ"
                        ? "yellow-order"
                        : status === "ดำเนินการสำเร็จ"
                        ? "green-order"
                        : null
                    }
                  >
                    {status}
                  </Badge>
                </div>
              </div>
              <div
                id="second-line"
                className="flex flex-row justify-between items-start"
              >
                <div className="flex flex-col gap-[6px]">
                  <div className="flex flex-row gap-3 items-center">
                    <img src={calendar} alt="working time" />
                    <p className="p3 text-gray-700">
                      วันเวลาดำเนินการ: {workingDate} เวลา {workingTime} น.
                    </p>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <img src={employee} alt="employee" />
                    <div id="employee" className="flex flex-row gap-1.5">
                      <p className="p3 text-gray-700">พนักงาน:</p>
                      {employeeNameArray.map(
                        (
                          employee: { employee: { name: string } },
                          index: number
                        ) => {
                          const result = employee.employee.name;
                          return (
                            <span className="p3 text-gray-700" key={index}>
                              {index + 1}.{result}
                            </span>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-5">
                  <p className="p3">ราคารวม:</p>
                  <h4>{orderPriceBaht} ฿</h4>
                </div>
              </div>
              <div
                id="third-line"
                className="flex flex-row justify-between items-center mt-2"
              >
                <div>
                  <p className="p1 text-gray-700">รายการ:</p>
                  <ul className="list-disc pl-5">
                    {subServiceArray.map(
                      (
                        data: { sub_service: any; amount: number },
                        index: number
                      ) => {
                        const subServiceName =
                          data.sub_service.sub_service_name;
                        const amount = data.amount;
                        const unit = data.sub_service.unit;
                        return (
                          <li key={index}>
                            {subServiceName} - จำนวน {amount} {unit}
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
                {pathname === "/history" ? null : (
                  <Button
                    className="px-6 py-2.5"
                    onClick={() => navigate("/payment")}
                  >
                    ดูรายละเอียด
                  </Button>
                )}
              </div>
            </div>
          );
        }
      )}
    </section>
  );
}

export default OrderListItem;
