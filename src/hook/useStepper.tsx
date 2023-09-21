import { useState } from "react";

import GroupIcon from "../assets/icon/Group.svg";
import PenGray from "../assets/icon/Pen_gray.svg";
import CreditGray from "../assets/icon/Credit_gray.svg";
// import { useNavigate } from "react-router-dom";

// import AlertPayment from "@/pages/Servicepayment";

function useStepper() {
  const [currentStep, setCurrentStep] = useState(1);
  // const navigate = useNavigate();

  console.log("step", currentStep);

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
    // else {
    //   navigate("/payment");
    // }
  };
  return {
    steppermenu,
    currentStep,
    setCurrentStep,
    handleNext,
    handleBack,
  };
}

export default useStepper;
