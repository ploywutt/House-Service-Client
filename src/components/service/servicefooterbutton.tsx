import { Button } from "../ui/button";
import ArrowLeft from "../../assets/icon/arrow_left.png";
import ArrowRight from "../../assets/icon/arrow_right.png";
import AlertPayment from "../AlertPayment";
import { useTranslation } from "react-i18next";
import Success from "../success";

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
  detail: string;
  orderTotalPrice: number | undefined;
  discount: number | undefined;
  type: string | undefined;
  formData: {
    cardHolderName: string;
    creditCardNumber: string;
    expirationDate: string;
    cvc: string;
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
  detail,
  orderTotalPrice,
  discount,
  type,
  formData,
}: ServiceFooter) {
  const { t } = useTranslation();
  return (
    <div className="px-[160px] first-line:w-full h-[92px] flex justify-between items-center bg-white dark:bg-gray-800">
      <Button
        onClick={handleBack}
        variant="secondary"
        className="w-40 h-11 bg-white hover:opacity-80 "
      >
        <img src={ArrowLeft} alt="ArrowLeft" />
        <p className="ml-2">{t("service_footer_back")}</p>
      </Button>

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

      {currentStep === 2 ? (
        <Button
          onClick={handleNext}
          variant="default"
          className="w-40 h-11"
          disabled={
            address.address === "" ||
            address.selectedTambon === "" ||
            address.selectedAmphure === "" ||
            address.selectedProvince === "" ||
            date === undefined ||
            thaiDate === "รักของเรามันกลายเป็นอดีตไปแล้ว" ||
            selectedTime === ""
          }
        >
          <p className="mr-2 ">{t("service_footer_next")}</p>
          <img src={ArrowRight} alt="ArrowRight" />
        </Button>
      ) : null}

      {currentStep === 3 && (
        <AlertPayment
          totalprice={totalprice}
          counts={counts}
          date={date ? date.toISOString() : ""}
          thaiDate={thaiDate}
          selectedTime={selectedTime}
          address={address}
          detail={detail}
          orderTotalPrice={orderTotalPrice}
          discount={discount || null}
          type={type || ""}
          formData={formData}
        />
        
      )}
          {/* <Success
                  totalprice={totalprice}
                  counts={counts}
                  date={date}        
                  thaiDate={thaiDate}
                  selectedTime={selectedTime}
                  address={address}
                  detail={detail}/> */}
    </div>
  );
}

export default ServiceFooterButton;
