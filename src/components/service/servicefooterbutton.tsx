import { Button } from "../ui/button";
import ArrowLeft from "../../assets/icon/arrow_left.png";
import ArrowRight from "../../assets/icon/arrow_right.png";

import AlertPayment from "../AlertPayment";

import { useTranslation } from "react-i18next";

type ServiceFooter = {
  handleBack?: () => void;
  handleNext?: () => void;
  currentStep: number;
  totalprice: number;
  counts: { name: string; count: number; unit: string }[];
  date: Date | undefined;
  thaiDate: string;
  selectedTime: string;
  address: {
    address: string;
    selectedTambon: string;
    selectedAmphure: string;
    selectedProvince: string;
  };
};

function ServiceFooterButton({
  handleBack,
  handleNext,
  currentStep,
  totalprice,
  counts,
  date,
  thaiDate,
  selectedTime,
  address,
}: ServiceFooter) {
  const { t } = useTranslation();
  return (
    <div className="px-[160px] first-line:w-full h-[92px] flex justify-between items-center  bg-white">
      <Button
        onClick={handleBack}
        variant="secondary"
        className="w-40 h-11 bg-white hover:opacity-80 "
      >
        <img src={ArrowLeft} alt="ArrowLeft" />
        <p className="ml-2">{t("service_footer_back")}</p>
      </Button>
      {/* {currentStep < 3 ? (
        <Button onClick={handleNext} variant="default" className="w-40 h-11 ">
          <p className="mr-2 ">{t("service_footer_next")}</p>
          <img src={ArrowRight} alt="ArrowRight" />
        </Button>
      ) : null} */}

      {currentStep === 1 ? (
        <Button
          onClick={handleNext}
          variant="default"
          className="w-40 h-11 "
          disabled={totalprice == 0}
        >
          <p className="mr-2 ">{t("service_footer_next")}</p>
          <img src={ArrowRight} alt="ArrowRight" />
        </Button>
      ) : null}

      {currentStep > 1 && currentStep < 3 ? (
        <Button onClick={handleNext} variant="default" className="w-40 h-11 ">
          <p className="mr-2 ">{t("service_footer_next")}</p>
          <img src={ArrowRight} alt="ArrowRight" />
        </Button>
      ) : null}

      {currentStep === 3 && (
        <AlertPayment
          totalprice={totalprice}
          counts={counts}
          date={date}
          thaiDate={thaiDate}
          selectedTime={selectedTime}
          address={address}
        />
      )}
    </div>
  );
}

export default ServiceFooterButton;
