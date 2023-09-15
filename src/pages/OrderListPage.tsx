import history from "../assets/icon/history.svg";
import info from "../assets/icon/info.svg";
import order from "../assets/icon/order.svg";
import calendar from "../assets/icon/calendar.svg";
import employee from "../assets/icon/employee.svg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import supabase from "@/auth/supabaseauth";

function OrderListPage() {
  const [fetchData, setFetchData] = useState<any>([]);
  const [currentUserEmail, setCurrentUserEmail] = useState<any>("");

  useEffect(() => {
    async function fetchUser() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        console.log(user.email);
        setCurrentUserEmail(user?.email);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:4000/v1/user/orders?email=${currentUserEmail}`
        );
        console.log(response.data.data);
        setFetchData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [currentUserEmail]);

  return (
    <div id="container" className="flex flex-col gap-7">
      <header
        id="title-bg"
        className="flex justify-center items-center h-24 py-6 mb-7 bg-blue-600"
      >
        <h1 className="text-white">รายการคำสั่งซ่อม</h1>
      </header>
      <main className="flex flex-row gap-9 justify-center">
        <section
          id="sidebar"
          className="w-64 h-fit bg-white border border-gray-300 rounded-lg p-6 sticky top-[64px]"
        >
          <h3 className="text-gray-700">บัญชีผู้ใช้</h3>
          <hr className="mt-5 mb-4 border-gray-300" />
          <div id="menu1" className="flex flex-row items-center gap-3 py-3">
            <img src={info} alt="info" />
            <p className="p1 text-gray-950">ข้อมูลผู้ใช้งาน</p>
          </div>
          <div id="menu2" className="flex flex-row items-center gap-3 py-3">
            <img src={order} alt="info" />
            <p className="p1 text-blue-700">รายการคำสั่งซ่อม</p>
          </div>
          <div id="menu3" className="flex flex-row items-center gap-3 py-3">
            <img src={history} alt="info" />
            <p className="p1 text-gray-950">ประวัติการซ่อม</p>
          </div>
        </section>

        <section id="order-list-column" className="flex flex-col gap-4">
          {fetchData.map(
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
              const orderPrice = subServiceArray.reduce(
                (
                  totalPrice: number,
                  data: { amount: number; sub_service: { price: number } }
                ) => {
                  const amount = data.amount;
                  const price = data.sub_service.price;
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
                    <div
                      id="status"
                      className="flex flex-row gap-3 items-center"
                    >
                      <p className="p3">สถานะ:</p>
                      <Badge
                        variant={status === "รอดำเนินการ" ? "gray" : "yellow"}
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
                          วันเวลาดำเนินการ: 25/04/2563 เวลา 13.00 น.
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
                                  {result}
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
                            const unit = data.sub_service.service_unit;
                            return (
                              <li key={index}>
                                {subServiceName} - จำนวน {amount} {unit}
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                    <Button className="px-6 py-2.5">ดูรายละเอียด</Button>
                  </div>
                </div>
              );
            }
          )}
        </section>
      </main>
    </div>
  );
}

export default OrderListPage;
