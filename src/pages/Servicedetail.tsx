import "../assets/css/servicedetailbanner.css";
import BreadCrumb from "@/components/service/servicebreadcrumb";
import GroupIcon from "../assets/icon/Group.svg";
import PenGray from "../assets/icon/Pen_gray.svg";
import CreditGray from "../assets/icon/Credit_gray.svg";
import { useParams } from "react-router-dom";
import Stepper from "@/components/stepper";
import ServiceFooterButton from "@/components/service/servicefooterbutton";
import { useState } from "react";
import Subservice from "../components/service/Subservice";
import SummaryService from "@/components/service/Summaryservice";

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
                  <Subservice />
                  <SummaryService />
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
