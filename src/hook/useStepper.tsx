import { useState } from "react";

import GroupIcon from "../assets/icon/Group.svg";
import PenGray from "../assets/icon/Pen_gray.svg";
import CreditGray from "../assets/icon/Credit_gray.svg";

import { useTranslation } from "react-i18next";

function useStepper() {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);

  console.log("step", currentStep);

  const steppermenu = [
    { icon: GroupIcon, label: t("stepper_first") },
    { icon: PenGray, label: t("stepper_second") },
    { icon: CreditGray, label: t("stepper_third") },
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
  return {
    steppermenu,
    currentStep,
    setCurrentStep,
    handleNext,
    handleBack,
  };
}

export default useStepper;
