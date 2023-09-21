import { Button } from "../ui/button";
import ArrowLeft from "../../assets/icon/arrow_left.png";
import ArrowRight from "../../assets/icon/arrow_right.png";

import AlertPayment from "../AlertPayment";

type ServiceFooter = {
  handleBack?: () => void;
  handleNext?: () => void;
  currentStep: number;
};

function ServiceFooterButton({
  handleBack,
  handleNext,
  currentStep,
}: ServiceFooter) {
  return (
    <div className="px-[160px] first-line:w-full h-[92px] flex justify-between items-center  bg-white">
      <Button
        onClick={handleBack}
        variant="secondary"
        className="w-40 h-11 bg-white hover:opacity-80 "
      >
        <img src={ArrowLeft} alt="ArrowLeft" />
        <p className="ml-2">ย้อนกลับ</p>
      </Button>
      {currentStep === 1 || currentStep === 2 ? (
        <Button onClick={handleNext} variant="default" className="w-40 h-11 ">
          <p className="mr-2 ">ดำเนินการต่อ</p>
          <img src={ArrowRight} alt="ArrowRight" />
        </Button>
      ) : null}

      {currentStep === 3 && <AlertPayment />}
    </div>
  );
}

export default ServiceFooterButton;
