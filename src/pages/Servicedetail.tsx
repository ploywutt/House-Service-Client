import "../assets/css/servicedetailbanner.css";
import SellTag from "../assets/icon/sell_tag.png";
import PlusIcon from "../assets/icon/plus_icon.png";
import NegativeIcon from "../assets/icon/negative_icon.png";
import { Separator } from "@/components/ui/separator";
import BreadCrumb from "@/components/layout/servicebreadcrumb";
import GroupIcon from "../assets/icon/Group.svg";
import PenGray from "../assets/icon/Pen_gray.svg";
import CreditGray from "../assets/icon/Credit_gray.svg";
import { useParams } from "react-router-dom";
import Stepper from "@/components/stepper";
import ServiceFooterButton from "@/components/layout/servicefooterbutton";
import { useState } from "react";

// import { Button } from "@/components/ui/button";

<<<<<<< HEAD
function Servicedetail() {
  const [currentStep, setCurrentStep] = useState(1);
  const { id } = useParams();
  const steppermenu = [
    { icon: GroupIcon, label: "รายการ" },
    { icon: PenGray, label: "กรอกข้อมูลบริการ" },
    { icon: CreditGray, label: "ชำระเงิน" },
  ];
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleNext = () => {
    const maxstep = steppermenu.length;
    if (currentStep < maxstep) {
      setCurrentStep(currentStep + 1);
    }
  };
=======
function Servicedetail(props) {
>>>>>>> 60c949f (feat(orderPage): map data from database)
  return (
    <>
      <div className="flex flex-col">
        <div className="relative">
          <div className="service-detail-banner w-full h-60">
            <section>
              <div
                id="container-1"
                className="z-10 relative flex flex-col gap-12 px-52 py-[5rem]"
              >
                <BreadCrumb />

                <div className="w-full h-[129px] bg-white  rounded-lg border border-gray-300">
                  <div>
                    <Stepper
                      value={steppermenu}
                      currentStep={currentStep}
                      className="w-[50rem]"
                    ></Stepper>
                  </div>
                </div>
                <div id="container-2" className="flex flex-row justify-between">
<<<<<<< HEAD
                  <div className="w-[735px] h-fit px-6 pt-6 pb-8 bg-white rounded-lg border border-gray-300 ">
=======
                  {props.data}
                  <div className="w-fit h-fit px-6 pt-6 pb-8 bg-white rounded-lg border border-gray-300 ">
                    {/* tital */}
>>>>>>> 60c949f (feat(orderPage): map data from database)
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
      <div className="fixed bottom-0 z-10 w-full">
        <ServiceFooterButton
          handleBack={handleBack}
          handleNext={handleNext}
        ></ServiceFooterButton>
      </div>
    </>
  );
}

export default Servicedetail;
