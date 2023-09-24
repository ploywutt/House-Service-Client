import React, { useState } from "react";
import Summary from "@/components/layout/summary";
import { useTranslation } from "react-i18next";

const CheckoutPage = () => {
  const { t } = useTranslation();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    creditCardNumber: "",
    cardHolderName: "",
    expirationDate: "",
    cvc: "",
    discountCode: "",
  });
  const [isCodeApplied, setIsCodeApplied] = useState(false);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUseCode = () => {
    setIsCodeApplied(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (paymentMethod === "card") {
    } else if (paymentMethod === "promptpay") {
    }
  };

  return (
    <div>
      <div className="w-[735px] h-[auto]  bg-white rounded-lg border border-zinc-300 p-5">
        <h3 className="text-grey-700cr">
          {t("checkout_page.checkout_page_checkout")}
        </h3>
        <div className="flex flex-row">
          <button
            onClick={() => handlePaymentMethodChange("card")}
            className={`flex flex-col items-center justify-center w-[331px] h-[86px] py-[13px] rounded-[5px] border border-gray-300 ${
              paymentMethod === "card" ? "bg-blue-200 border-blue-500" : ""
            }`}
          >
            <div className="w-[35px] h-[35px] relative" />
            <img src="/src/assets/icon/card.png" alt="Logo" />
            <span className="ml-[10px] text-sm font-semibold font-[Prompt]">
              {t("checkout_page.checkout_page_credit")}
            </span>
          </button>

          <button
            onClick={() => handlePaymentMethodChange("promptpay")}
            className={`flex flex-col items-center justify-center w-[331px] h-[86px] py-[13px] rounded-[5px] border border-gray-300 ml-[24px] ${
              paymentMethod === "promptpay"
                ? "bg-blue-200 border-blue-500 "
                : ""
            }`}
          >
            <div className="w-[35px] h-[35px] relative" />
            <img src="/src/assets/icon/qr_code.png" alt="Logo" />
            <span className="ml-[10px] text-sm font-semibold font-[Prompt]">
              {t("checkout_page.checkout_page_promptpay")}
            </span>
          </button>
        </div>

        {paymentMethod === "card" && (
          <div>
            <div className="w-[686px] pt-[36px] flex flex-col ">
              <label htmlFor="creditCardNumber" className="mb-[10px]">
                {t("checkout_page.checkout_page_credit_number")}
                <span className="text-utility-red">*</span>
              </label>
              <input
                type="text"
                name="creditCardNumber"
                value={formData.creditCardNumber}
                onChange={handleInputChange}
                placeholder={t("checkout_page.checkout_page_credit_please")}
                className="w-[686px] h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex"
              />
            </div>
            <div className="w-[686px] pt-[36px] flex flex-col ">
              <label htmlFor="cardHolderName" className="">
                {t("checkout_page.checkout_page_credit_name")}
                <span className="text-utility-red">*</span>
              </label>
              <input
                type="text"
                name="cardHolderName"
                value={formData.cardHolderName}
                onChange={handleInputChange}
                placeholder={t(
                  "checkout_page.checkout_page_credit_name_please"
                )}
                className="w-[686px] h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex"
              />
            </div>

            <div className="w-[686px] h-auto pt-[36px] flex flex-row">
              <div className=" w-[331px] h-[72px] flex-col justify-start items-start gap-1 inline-flex">
                <label htmlFor="expirationDate" className="">
                  {t("checkout_page.checkout_page_expired_date")}
                  <span className="text-utility-red">*</span>
                </label>
                <input
                  type="text"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  className="w-[331px] h-auto px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex"
                  maxLength={4}
                />
              </div>
              <div className="w-[331px] h-[72px] flex-col justify-start items-start gap-1 inline-flex ml-[24px]">
                <label htmlFor="cvc" className="">
                  {t("checkout_page.checkout_page_cvv")}
                  <span className="text-utility-red">*</span>
                </label>
                <input
                  type="text"
                  name="cvc"
                  value={formData.cvc}
                  onChange={handleInputChange}
                  placeholder="xxx"
                  className="w-[331px] h-auto px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex"
                  maxLength={3}
                />
              </div>
            </div>
          </div>
        )}

        {paymentMethod === "promptpay" && (
          <div>
            <h3>Enter PromptPay Info</h3>
            <input
              type="text"
              name="promptPayId"
              value={formData.promptPayId}
              onChange={handleInputChange}
            />
          </div>
        )}

        <div>
          <div className="w-full grow shrink basis-0 h-px bg-gray-400 mt-[44px]" />
          <h5 className="pt-[32px]">Promotion Code</h5>
          <input
            type="text"
            name="discountCode"
            value={formData.discountCode}
            onChange={handleInputChange}
            placeholder={t("checkout_page.checkout_page_cvv_please")}
            className="w-[331px] h-[auto] px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex"
          />

          <button
            className="ButtonPrimaryMedium w-[90px] h-11 px-6 py-2.5 ml-[24px] bg-blue-600 rounded-lg justify-center items-center gap-2 inline-flex text-white "
            onClick={handleUseCode}
          >
            {t("checkout_page.checkout_page_use_code")}
          </button>
        </div>
      </div>
      {/* <Summary /> */}
    </div>
  );
};

export default CheckoutPage;
