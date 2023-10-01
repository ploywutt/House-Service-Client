import React, { useState, ChangeEvent, useEffect } from "react";
import { number, expirationDate, cvv } from "card-validator";
import creditcardIcon from "../assets/icon/creditcard.svg";
import creditcardBlueIcon from "../assets/icon/creditcardBlue.svg";
import qrCodeIcon from "../assets/icon/qr_code.svg";
import qrCodeBlueIcon from "../assets/icon/qrcodeblue.svg";
import { Separator } from "../components/ui/separator";
import { useTranslation } from "react-i18next";

import axios from "axios";

import "../assets/css/checkout.css";

interface CheckoutPageProps {
  setOrderTotalPrice: (totalPrice: number) => void;
  setType: (type: any) => void;
  setDiscount: (discount: number) => void;
  totalprice: number;
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
  formData: {
    creditCardNumber: string;
    cardHolderName: string;
    expirationDate: string;
    cvc: string;
    discountCode: string;
    promptPayId: string;
  };
  errors: {
    creditCardNumber: string;
    cardHolderName: string;
    expirationDate: string;
    cvc: string;
  };
  setFormData(data: any): void;
  setErrors(errors: any): void;
}

const CheckoutPage = (props: CheckoutPageProps) => {
  const { t } = useTranslation();

  const handlePaymentMethodChange = (method: string) => {
    props.setPaymentMethod(method);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    props.setFormData({ ...props.formData, [name]: value });

    const updatedErrors = { ...props.errors };

    switch (name) {
      case "creditCardNumber":
        const cardNumberValidation = number(value);
        if (!cardNumberValidation.isValid) {
          updatedErrors.creditCardNumber = "หมายเลขบัตรไม่ถูกต้อง";
        } else {
          updatedErrors.creditCardNumber = "";
        }
        break;
      case "cardHolderName":
        if (value.trim() === "") {
          updatedErrors.cardHolderName = "ชื่อบนบัตรไม่ถูกต้อง";
        } else if (value.length > 30) {
          updatedErrors.cardHolderName = "";
        } else {
          updatedErrors.cardHolderName = "";
        }
        break;
      case "expirationDate":
        const expirationDateValidation = expirationDate(value);
        if (!expirationDateValidation.isValid) {
          updatedErrors.expirationDate = "วันหมดอายุไม่ถูกต้อง MM/YY";
        } else {
          updatedErrors.expirationDate = "";
        }
        break;
      case "cvc":
        const cvvValidation = cvv(value);
        if (!cvvValidation.isValid) {
          updatedErrors.cvc = "รหัส CVC / CVV ไม่ถูกต้อง";
        } else {
          updatedErrors.cvc = "";
        }
        break;
      default:
        break;
    }
    props.setErrors(updatedErrors);
  };

  const [codeName, setCodeName] = useState<string>();
  const [promoData, setPromoData] = useState<any>();
  const [totalPriceWithDiscount, setTotalPriceWithDiscount] =
    useState<number>();

  console.log("codeName", codeName);
  console.log("promoData state", promoData);
  console.log("totalPriceWithDiscount", totalPriceWithDiscount);
  console.log("หน้า CheckoutPage", props.totalprice);

  const handlePromoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCodeName(event.target.value);
  };

  const handleOnClickPromotionCode = async () => {
    try {
      console.log("codeName in onCLick", codeName);
      const { data } = await axios.get(
        `http://localhost:4000/v1/user/promotions/${codeName}`
      );
      console.log("Promo Data fetch:", data.data);
      setPromoData(data.data);
    } catch (error) {
      console.error("Promo fetch error:", error);
    }
  };

  useEffect(() => {
    const discount = promoData?.discount_amount;
    props.setDiscount(discount);
    const type = promoData?.type;
    props.setType(type);
    if (promoData?.type === "Fixed") {
      const totalPriceWithDiscount = props.totalprice - discount;
      setTotalPriceWithDiscount(totalPriceWithDiscount);
      props.setOrderTotalPrice(totalPriceWithDiscount);
    } else if (promoData?.type === "Percent") {
      const totalPriceWithDiscount =
        props.totalprice - props.totalprice * (discount / 100);
      setTotalPriceWithDiscount(totalPriceWithDiscount);
      props.setOrderTotalPrice(totalPriceWithDiscount);
    }
  }, [promoData]);

  return (
    <div className="flex justify-center w-[735px] h-[auto] bg-white rounded-lg border border-zinc-300">
      <div>
        <h3 className="text-gray-700 py-4">
          {t("checkout_page.checkout_page_checkout")}
        </h3>
        <div className="flex justify-between">
          <button
            id="creditcard-btn"
            onClick={() => handlePaymentMethodChange("card")}
            className="flex flex-col items-center justify-evenly w-[331px] h-[86px] py-[13px] rounded-[5px] border border-gray-300 hover:bg-white hover:text-blue-500 hover:font-medium  hover:border-blue-600 focus:bg-blue-100 focus:text-blue-600 focus:border-blue-500"
          >
            <img src={creditcardIcon} alt="Credit Card Icon" className="gray" />
            <img
              src={creditcardBlueIcon}
              alt="Credit Card Icon"
              className="blue"
            />

            <h5>{t("checkout_page.checkout_page_credit")}</h5>
          </button>

          <button
            id="qrcode-btn"
            onClick={() => handlePaymentMethodChange("promptpay")}
            className="flex flex-col items-center justify-evenly w-[331px] h-[86px] py-[13px] rounded-[5px] border border-gray-300 hover:bg-white hover:text-blue-600 focus:bg-blue-100 hover:border-blue-500 focus:text-blue-600 focus:border-blue-500"
          >
            <img src={qrCodeIcon} alt="QR Code Icon" className="gray" />
            <img src={qrCodeBlueIcon} alt="QR Code Icon" className="blue" />
            <h5>{t("checkout_page.checkout_page_promptpay")}</h5>
          </button>
        </div>

        {props.paymentMethod === "card" && (
          <div>
            <div className="w-[686px] pt-[36px] flex flex-col gap-1">
              <label htmlFor="creditCardNumber" className=" text-slate-900">
                <h5>
                  {t("checkout_page.checkout_page_credit_number")}
                  <span className="text-utility-red">*</span>
                </h5>
              </label>
              <input
                type="text"
                name="creditCardNumber"
                value={props.formData.creditCardNumber}
                onChange={handleInputChange}
                placeholder={t("checkout_page.checkout_page_credit_please")}
                className="w-[686px] h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex focus:outline-none focus:border-blue-600 focus:border-1 placeholder:text-gray-700 hover:bg-slate-100 placeholder:hover:text-slate-900"
              />
              {props.errors.creditCardNumber && (
                <p className="text-utility-red">
                  {props.errors.creditCardNumber}
                </p>
              )}
            </div>
            <div className="w-[686px] pt-[36px] flex flex-col gap-1">
              <label htmlFor="cardHolderName" className="text-slate-900">
                <h5>
                  {t("checkout_page.checkout_page_credit_name")}
                  <span className="text-utility-red">*</span>
                </h5>
              </label>
              <input
                type="text"
                name="cardHolderName"
                value={props.formData.cardHolderName}
                onChange={handleInputChange}
                placeholder={t(
                  "checkout_page.checkout_page_credit_name_please"
                )}
                className="w-[686px] h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex focus:outline-none focus:border-blue-600 focus:border-1 placeholder:text-gray-700 hover:bg-slate-100 placeholder:hover:text-slate-900"
              />
              {props.errors.cardHolderName && (
                <p className="text-utility-red">
                  {props.errors.cardHolderName}
                </p>
              )}
            </div>
            <div className="w-[686px] h-auto pt-[36px] flex flex-row">
              <div className="w-[331px] h-[72px] flex-col justify-start items-start gap-1 inline-flex">
                <label htmlFor="expirationDate" className="text-slate-900">
                  <h5>
                    {t("checkout_page.checkout_page_expired_date")}
                    <span className="text-utility-red">*</span>
                  </h5>
                </label>
                <input
                  type="text"
                  name="expirationDate"
                  value={props.formData.expirationDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  className="w-[331px] h-auto px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex focus:outline-none focus:border-blue-600 focus:border-1 placeholder:text-gray-700 hover:bg-slate-100 placeholder:hover:text-slate-900"
                  maxLength={5}
                />
                {props.errors.expirationDate && (
                  <p className="text-utility-red">
                    {props.errors.expirationDate}
                  </p>
                )}
              </div>
              <div className="w-[331px] h-[72px] flex-col justify-start items-start gap-1 inline-flex ml-[24px]">
                <label htmlFor="cvc" className="text-slate-900">
                  <h5>
                    {t("checkout_page.checkout_page_cvv")}
                    <span className="text-utility-red">*</span>
                  </h5>
                </label>
                <input
                  type="text"
                  name="cvc"
                  value={props.formData.cvc}
                  onChange={handleInputChange}
                  placeholder="xxx"
                  className="w-[331px] h-auto px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex focus:outline-none focus:border-blue-600 focus:border-1 placeholder:text-gray-700 hover:bg-slate-100 placeholder:hover:text-slate-900"
                  maxLength={3}
                />
                {props.errors.cvc && (
                  <p className="text-utility-red">{props.errors.cvc}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {props.paymentMethod === "promptpay" && (
          <div>
            <h3>Enter PromptPay Info</h3>
            <input
              type="text"
              name="promptPayId"
              value={props.formData.promptPayId}
              onChange={handleInputChange}
            />
          </div>
        )}
        <Separator className="mt-12 mb-9" />
        <div className="pb-10">
          <h5 className="text-slate-900 pb-1">Promotion Code</h5>
          <input
            type="text"
            name="discountCode"
            value={codeName}
            onChange={handlePromoChange}
            placeholder={t("checkout_page.checkout_page_cvv_please")}
            className="w-[331px] h-[auto] px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex focus:outline-none focus:border-blue-600 focus:border-1 placeholder:text-gray-700 hover:bg-slate-100 placeholder:hover:text-slate-900"
          />
          <button
            className="ButtonPrimaryMedium w-[90px] h-11 px-6 py-2.5 ml-[24px] bg-blue-600 rounded-lg justify-center items-center gap-2 inline-flex text-white"
            onClick={handleOnClickPromotionCode}
          >
            {t("checkout_page.checkout_page_use_code")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
