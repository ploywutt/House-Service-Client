import { ReactSVG } from "react-svg";
import "@/assets/css/stepper.scss";
import { cn } from "@/lib/utils";

type StepperValue = {
  icon: string;
  label: string;
};

type Stepper = {
  value: StepperValue[];
  currentStep: number;
  className?: string;
};

function stepper({ value, currentStep, className }: Stepper) {
  const checkstatus = (index: number) => {
    let flag = "current";
    if (index + 1 > currentStep) {
      flag = "future";
    } else if (index + 1 < currentStep) {
      flag = "past";
    }
    return flag;
  };
  return (
    <div className="w-full">
      <div
        className={cn("flex w-full items-center pt-8 pb-14 mx-auto", className)}
      >
        {value.map((val: StepperValue, index) => {
          return (
            <div
              key={index}
              className={
                "w-full last:w-fit flex items-center " + checkstatus(index)
              }
            >
              <div className="flex w-fit flex-col relative">
                <div className="stepper-icon rounded-full border-2 p-2">
                  <ReactSVG src={val.icon} />
                </div>
                <div className="stepper-label text-center absolute top-14 w-[140px] left-[-46px] dark:text-white">
                  {val.label}
                </div>
              </div>
              {index < value.length - 1 && (
                <div className="stepper-progress border-t-2 w-full h-0">
                  &nbsp;
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default stepper;
