import "../assets/css/servicedetailbanner.css";

import { useParams } from "react-router-dom";

import BreadCrumb from "@/components/service/servicebreadcrumb";
import Stepper from "@/components/stepper";
import ServiceFooterButton from "@/components/service/servicefooterbutton";

import Subservice from "../components/service/Subservice";
import OrderDetail from "../components/OrderDetail";

import useStepper from "@/hook/useStepper";

function Servicedetail() {
  const { id } = useParams();

  const { currentStep, steppermenu, handleBack, handleNext } = useStepper();

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
                  {/* render - card 1-2-3 */}
                  <Subservice />
                  {/* <ClientInformation /> */}

                  {/* render - summary */}
                  <OrderDetail />
                  {/* <SummaryService /> */}
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
