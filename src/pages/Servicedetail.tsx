import "../assets/css/servicedetailbanner.css";
import SellTag from "../assets/icon/sell_tag.png";
import PlusIcon from "../assets/icon/plus_icon.png";
import NegativeIcon from "../assets/icon/negative_icon.png";
import { Separator } from "@/components/ui/separator";
import BreadCrumb from "@/components/layout/servicebreadcrumb";
import GroupIcon from "../assets/icon/Group.svg";
import PenGray from "../assets/icon/Pen_gray.svg";
import CreditGray from "../assets/icon/Credit_gray.svg";

// import { Button } from "@/components/ui/button";

function Servicedetail() {
  return (
    <>
      <div className="flex flex-col">
        <div className="relative">
          <div className="service-detail-banner w-full h-60">
            <section>
              <div
                id="container-1"
                className="z-10 relative flex flex-col gap-12 pt-16 px-[160px]"
              >
                <BreadCrumb />

                <div className="w-full h-[129px] bg-white  rounded-lg border border-gray-300">
                  <div className="flex flex-row justify-evenly">
                    <div className="text-blue-500 flex flex-col items-center">
                      <div
                        id="circle1"
                        className="w-[40px] h-[40px] rounded-full border-blue-500 border-2 flex justify-center items-center"
                      >
                        <img src={GroupIcon} alt="GroupIcon" />
                      </div>
                      <h5 className="pt-2">รายการ</h5>
                    </div>

                    <div className="text-gray-700 flex flex-col items-center">
                      <div
                        id="circle1"
                        className="w-[40px] h-[40px] rounded-full border-gray-300 border-2 flex justify-center items-center"
                      >
                        <img src={PenGray} alt="PenGray" />
                      </div>
                      <h5 className="pt-2">กรอกข้อมูลบริการ</h5>
                    </div>

                    <div className="text-gray-700 flex flex-col items-center">
                      <div
                        id="circle1"
                        className="w-[40px] h-[40px] rounded-full border-gray-300 border-2 flex justify-center items-center"
                      >
                        <img src={CreditGray} alt="CreditGray" />
                      </div>
                      <h5 className="pt-2">ชำระเงิน</h5>
                    </div>
                  </div>
                </div>
                <div id="container-2" className="flex flex-row justify-between">
                  <div className="w-[735px] h-fit px-6 pt-6 pb-8 bg-white rounded-lg border border-gray-300 ">
                    <h3 className="text-gray-500 mb-8">
                      เลือกรายการบริการล้างแอร์
                    </h3>

                    <div className="flex-col justify-start items-start gap-px ">
                      <div className="flex-col justify-start items-start flex">
                        <div className="w-full flex flex-row justify-between">
                          <div className="w-full mb-4 ">
                            <h4 className=" text-black">
                              9,000 - 18,000 BTU, แบบติดผนัง
                            </h4>
                            <div className="justify-start items-center inline-flex">
                              <img
                                src={SellTag}
                                alt="Sell tag icon"
                                className="h-4 w-4 mr-2"
                              />
                              <p className="text-gray-500">
                                800.00 ฿ / เครื่อง
                              </p>
                            </div>
                          </div>

                          <div className="w-36 h-11 justify-center items-start inline-flex">
                            <button className="w-11 pl-3 pr-2.5 pt-2.5 pb-3 bg-white hover:opacity-50 rounded-lg border border-blue-600 ">
                              <img
                                src={NegativeIcon}
                                alt="Negative Icon"
                                className="h-4 w-4"
                              />
                            </button>
                            <div className="grow shrink py-2 justify-center items-center">
                              <h5 className="text-center text-gray-600">2</h5>
                            </div>
                            <button className="w-11 pl-3 pr-2.5 pt-2.5 pb-3 bg-white hover:opacity-50 rounded-lg border border-blue-600 ">
                              <img
                                src={PlusIcon}
                                alt="Plus Icon"
                                className="h-4 w-4"
                              />
                            </button>
                          </div>
                        </div>

                        <Separator className="my-4" />
                      </div>
                    </div>
                  </div>

                  <div className="w-[349px] h-fit px-6 pt-6 pb-8 bg-white rounded-lg border border-gray-300 sticky top-0">
                    <div>
                      <h3 className="text-gray-500 mb-2">สรุปรายการ</h3>
                    </div>
                    <Separator className="my-4" />

                    <div className="flex flex-row justify-between">
                      <p>รวม</p>
                      <h5>0.00 ฿</h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicedetail;
