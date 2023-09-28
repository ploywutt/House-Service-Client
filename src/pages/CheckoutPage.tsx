import React, { useState, ChangeEvent } from "react";
import { number, expirationDate, cvv } from "card-validator";
import creditcardIcon from "../assets/icon/creditcard.svg";
import creditcardBlueIcon from "../assets/icon/creditcardBlue.svg";
import qrCodeIcon from "../assets/icon/qr_code.svg";
import qrCodeBlueIcon from "../assets/icon/qrcodeblue.svg";
import { Separator } from "../components/ui/separator";

import axios from "axios";

import "../assets/css/checkout.css";

interface FormData {
  creditCardNumber: string;
  cardHolderName: string;
  expirationDate: string;
  cvc: string;
  discountCode: string;
}

interface Errors {
  creditCardNumber: string;
  cardHolderName: string;
  expirationDate: string;
  cvc: string;
}

const CheckoutPage: React.FC = (props: { totalprice: number }) => {
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const [formData, setFormData] = useState<FormData>({
    creditCardNumber: "",
    cardHolderName: "",
    expirationDate: "",
    cvc: "",
    discountCode: "",
  });
  const [errors, setErrors] = useState<Errors>({
    creditCardNumber: "",
    cardHolderName: "",
    expirationDate: "",
    cvc: "",
  });

  const [discountCode, setDiscountCode] = useState<string>("");
  const [isCodeApplied, setIsCodeApplied] = useState<boolean>(false);

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const updatedErrors = { ...errors };

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
    setErrors(updatedErrors);
  };

  const handleUseCode = () => {
    setIsCodeApplied(true);
    checkPromotionCode(formData.discountCode);
  };

  // const checkPromotionCode = async (code) => {
  //   try {
  //     const response = await axios.get(`/api/promotion/${code}`);
  //     setCodeValidationResult(response.data);
  //   } catch (error) {
  //     console.error('Error checking promotion code:', error);
  //   }
  // };

  // useEffect(() => {
  //   if (codeValidationResult) {
  //     if (codeValidationResult.isExpired) {
  //       console.log('Promotion code has expired');
  //     } else if (codeValidationResult.isMaxUsageReached) {
  //       console.log('Maximum usage reached for the promotion code');
  //     } else {
  //       console.log('Promotion code is valid');
  //     }
  //   }
  // }, [codeValidationResult]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (paymentMethod === "card") {
      if (
        errors.creditCardNumber ||
        errors.cardHolderName ||
        errors.expirationDate ||
        errors.cvc
      ) {
        return;
      }
    } else if (paymentMethod === "promptpay") {
    }
  };

  return (
    <div className="flex justify-center w-[735px] h-[auto] bg-white rounded-lg border border-zinc-300">
      <div>
        <h3 className="text-gray-700 py-4">ชำระเงิน</h3>
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

            <h5>บัตรเครดิต</h5>
          </button>

          <button
            id="qrcode-btn"
            onClick={() => handlePaymentMethodChange("promptpay")}
            className="flex flex-col items-center justify-evenly w-[331px] h-[86px] py-[13px] rounded-[5px] border border-gray-300 hover:bg-white hover:text-blue-600 focus:bg-blue-100 hover:border-blue-500 focus:text-blue-600 focus:border-blue-500"
          >
            <img src={qrCodeIcon} alt="QR Code Icon" className="gray" />
            <img src={qrCodeBlueIcon} alt="QR Code Icon" className="blue" />
            <h5>พร้อมเพย์</h5>
          </button>
        </div>

        {paymentMethod === "card" && (
          <div>
            <div className="w-[686px] pt-[36px] flex flex-col gap-1">
              <label htmlFor="creditCardNumber" className=" text-slate-900">
                <h5>
                  หมายเลขบัตรเครดิต <span className="text-utility-red">*</span>
                </h5>
              </label>
              <input
                type="text"
                name="creditCardNumber"
                value={formData.creditCardNumber}
                onChange={handleInputChange}
                placeholder="กรุณากรอกหมายเลขบัตรเครดิต"
                className="w-[686px] h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex focus:outline-none focus:border-blue-600 focus:border-1 placeholder:text-gray-700 hover:bg-slate-100 placeholder:hover:text-slate-900"
              />
              {errors.creditCardNumber && (
                <p className="text-utility-red">{errors.creditCardNumber}</p>
              )}
            </div>
            <div className="w-[686px] pt-[36px] flex flex-col gap-1">
              <label htmlFor="cardHolderName" className="text-slate-900">
                <h5>
                  ชื่อบนบัตรเครดิต <span className="text-utility-red">*</span>
                </h5>
              </label>
              <input
                type="text"
                name="cardHolderName"
                value={formData.cardHolderName}
                onChange={handleInputChange}
                placeholder="กรุณากรอกชื่อบนบัตร"
                className="w-[686px] h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex focus:outline-none focus:border-blue-600 focus:border-1 placeholder:text-gray-700 hover:bg-slate-100 placeholder:hover:text-slate-900"
              />
              {errors.cardHolderName && (
                <p className="text-utility-red">{errors.cardHolderName}</p>
              )}
            </div>
            <div className="w-[686px] h-auto pt-[36px] flex flex-row">
              <div className="w-[331px] h-[72px] flex-col justify-start items-start gap-1 inline-flex">
                <label htmlFor="expirationDate" className="text-slate-900">
                  <h5>
                    วันหมดอายุ <span className="text-utility-red">*</span>
                  </h5>
                </label>
                <input
                  type="text"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  className="w-[331px] h-auto px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex focus:outline-none focus:border-blue-600 focus:border-1 placeholder:text-gray-700 hover:bg-slate-100 placeholder:hover:text-slate-900"
                  maxLength={5}
                />
                {errors.expirationDate && (
                  <p className="text-utility-red">{errors.expirationDate}</p>
                )}
              </div>
              <div className="w-[331px] h-[72px] flex-col justify-start items-start gap-1 inline-flex ml-[24px]">
                <label htmlFor="cvc" className="text-slate-900">
                  <h5>
                    รหัส CVC / CVV <span className="text-utility-red">*</span>
                  </h5>
                </label>
                <input
                  type="text"
                  name="cvc"
                  value={formData.cvc}
                  onChange={handleInputChange}
                  placeholder="xxx"
                  className="w-[331px] h-auto px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex focus:outline-none focus:border-blue-600 focus:border-1 placeholder:text-gray-700 hover:bg-slate-100 placeholder:hover:text-slate-900"
                  maxLength={3}
                />
                {errors.cvc && <p className="text-utility-red">{errors.cvc}</p>}
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
        <Separator className="mt-12 mb-9" />
        <div className="pb-10">
          <h5 className="text-slate-900 pb-1">Promotion Code</h5>
          <input
            type="text"
            name="discountCode"
            value={codeName}
            onChange={() => {
              setCodeName(event.target.value);
            }}
            placeholder="กรุณากรอกโค้ดส่วนลด (ถ้ามี)"
            className="w-[331px] h-[auto] px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex focus:outline-none focus:border-blue-600 focus:border-1 placeholder:text-gray-700 hover:bg-slate-100 placeholder:hover:text-slate-900"
          />
          <button
            className="ButtonPrimaryMedium w-[90px] h-11 px-6 py-2.5 ml-[24px] bg-blue-600 rounded-lg justify-center items-center gap-2 inline-flex text-white"
            onClick={handleOnClickPromotionCode}
          >
            ใช้โค้ด
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
