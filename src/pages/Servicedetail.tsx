import "../assets/css/servicedetailbanner.css";
import SellTag from "../assets/icon/sell_tag.png";
import PlusIcon from "../assets/icon/plus_icon.png";
import NegativeIcon from "../assets/icon/negative_icon.png";
// import LineIcon from "../assets/icon/line_icon.png";
import RightArrow from "../assets/icon/Right_Arrow.png";
import { Separator } from "@/components/ui/separator";
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
                className="z-10 relative flex flex-col px-40 gap-12 pt-16"
              >
                <div className="w-72 bg-white flex flex-row justify-center items-center rounded-lg border border-gray-300 p-2">
                  <h5 className="text-gray-700 mr-2 p-2">บริการของเรา</h5>
                  <img src={RightArrow} alt="Right Arrow" className="h-2 w-2" />
                  <h1 className="text-blue-600 ml-2 p-2">ล้างแอร์</h1>
                </div>
                <div className="w-300 bg-white  rounded-lg border border-gray-300  p-12">
                  <div className="flex flex-row justify-evenly">
                    <h5>รายการ</h5>
                    <h5>กรอกข้อมูลบริการ</h5>
                    <h5>ชำระเงิน</h5>
                  </div>
                </div>
                <div id="container-2" className="flex flex-row justify-between">
                  <div className="w-fit h-fit px-6 pt-6 pb-8 bg-white rounded-lg border border-gray-300 ">
                    {/* tital */}
                    <h3 className="text-gray-500 mb-8">
                      เลือกรายการบริการล้างแอร์
                    </h3>

                    {/* detail */}
                    <div className="flex-col justify-start items-start gap-px ">
                      <div className="flex-col justify-start items-start flex">
                        <div className="flex flex-row justify-evenly">
                          <div className="w-96 mb-4 ">
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
                        {/* Line */}
                        {/* <div className="flex justify-center mb-2">
                          <img src={LineIcon} alt="Line" className="w-" />
                        </div> */}
                        <Separator className="my-4" />
                      </div>
                    </div>
                  </div>
                  {/* Card Container */}
                  <div className="w-80 h-36 px-6 pt-6 pb-8 bg-white rounded-lg border border-gray-300 ">
                    {/* tital */}
                    <div>
                      <h3 className="text-gray-500 mb-2">สรุปรายการ</h3>
                    </div>
                    <Separator className="my-4" />

                    {/* Line */}
                    {/* <div className="flex justify-center mb-2">
                      <img src={LineIcon} alt="Line" className="w-72" />
                    </div> */}
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
