import React, { useState } from 'react';
import { number, expirationDate, cvv } from 'card-validator';

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    creditCardNumber: "",
    cardHolderName: "",
    expirationDate: "",
    cvc: "",
    discountCode: "",
  });
  const [errors, setErrors] = useState({
    creditCardNumber: '',
    cardHolderName: '',
    expirationDate: '',
    cvc: '',
  });

  const [discountCode, setDiscountCode] = useState('');
  const [isCodeApplied, setIsCodeApplied] = useState(false);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const updatedErrors = { ...errors };

    switch (name) {
      case 'creditCardNumber':
        const cardNumberValidation = number(value);
        if (!cardNumberValidation.isValid) {
          updatedErrors.creditCardNumber = 'หมายเลขบัตรไม่ถูกต้อง';
        } else {
          updatedErrors.creditCardNumber = '';
        }
        break;
      case 'cardHolderName':
        if (value.trim() === '') {
          updatedErrors.cardHolderName = 'ชื่อบนบัตรไม่ถูกต้อง';
        } else if (value.length > 30) {
          updatedErrors.cardHolderName = '';
        } else {
          updatedErrors.cardHolderName = '';
        }
        break;
      case 'expirationDate':
        const expirationDateValidation = expirationDate(value);
        if (!expirationDateValidation.isValid) {
          updatedErrors.expirationDate = 'วันหมดอายุไม่ถูกต้อง MM/YY';
        } else {
          updatedErrors.expirationDate = '';
        }
        break;
      case 'cvc':
        const cvvValidation = cvv(value);
        if (!cvvValidation.isValid) {
          updatedErrors.cvc = 'รหัส CVC / CVV ไม่ถูกต้อง';
        } else {
          updatedErrors.cvc = '';
        }
        break;
      default:
        break;
    }
  
    setErrors(updatedErrors);
  };

  const handleUseCode = () => {
    setIsCodeApplied(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (paymentMethod === 'card') {
      if (
        errors.creditCardNumber ||
        errors.cardHolderName ||
        errors.expirationDate ||
        errors.cvc
      ) {
        return;
      }


    } else if (paymentMethod === 'promptpay') {}
  };

  return (
    <div className="flex justify-center pt-12">
      <div className="w-[735px] h-[auto]  bg-white rounded-lg border border-zinc-300 p-5">
        <h1 className="text-grey-700cr">ชำระเงิน</h1>
        <div className="flex flex-row">
          <div className="flex flex-row">
            <button
              onClick={() => handlePaymentMethodChange('card')}
              className={`flex flex-col items-center justify-center w-[331px] h-[86px] py-[13px] rounded-[5px] border border-gray-300 ${
                paymentMethod === 'card' ? 'bg-blue-200 border-blue-500' : ''
              }`}
            >
              <div className="w-[35px] h-[35px] relative" />
              <img src="/src/assets/icon/card.png" alt="Logo" />
              <span className="ml-[10px] text-sm font-semibold font-[Prompt]">
                บัตรเครดิต
              </span>
            </button>

            <button
              onClick={() => handlePaymentMethodChange('promptpay')}
              className={`flex flex-col items-center justify-center w-[331px] h-[86px] py-[13px] rounded-[5px] border border-gray-300 ml-[24px] ${
                paymentMethod === 'promptpay' ? 'bg-blue-200 border-blue-500 ' : ''
              }`}
            >
              <div className="w-[35px] h-[35px] relative" />
              <img src="/src/assets/icon/qr_code.png" alt="Logo" />
              <span className="ml-[10px] text-sm font-semibold font-[Prompt]">
                พร้อมเพ
              </span>
            </button>
          </div>
        </div>

        {paymentMethod === "card" && (
          <div>
            <div className="w-[686px] pt-[36px] flex flex-col ">
              <label htmlFor="creditCardNumber" className="mb-[10px]">
                หมายเลขบัตรเครดิต <span className="text-utility-red">*</span>{" "}
              </label>
              <input
                type="text"
                name="creditCardNumber"
                value={formData.creditCardNumber}
                onChange={handleInputChange}
                placeholder="กรุณากรอกหมายเลขบัตรเครดิต"
                className="w-[686px] h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex"
              />
              {errors.creditCardNumber && (
                <p className="text-red-500">{errors.creditCardNumber}</p>
              )}
            </div>
            <div className="w-[686px] pt-[36px] flex flex-col ">
              <label htmlFor="cardHolderName" className="">
                ชื่อบนบัตรเครดิต <span className="text-utility-red">*</span>{" "}
              </label>
              <input
                type="text"
                name="cardHolderName"
                value={formData.cardHolderName}
                onChange={handleInputChange}
                placeholder="กรุณากรอกชื่อบนบัตร"
                className="w-[686px] h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex"
              />
              {errors.cardHolderName && (
                <p className="text-red-500">{errors.cardHolderName}</p>
              )}
            </div>
            <div className="w-[686px] h-auto pt-[36px] flex flex-row">
              <div className="w-[331px] h-[72px] flex-col justify-start items-start gap-1 inline-flex">
                <label htmlFor="expirationDate" className="">
                  วันหมดอายุ <span className="text-utility-red">*</span>{" "}
                </label>
                <input
                  type="text"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  className="w-[331px] h-auto px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex"
                  maxLength={5}
                />
                {errors.expirationDate && (
                  <p className="text-red-500">{errors.expirationDate}</p>
                )}
              </div>
              <div className="w-[331px] h-[72px] flex-col justify-start items-start gap-1 inline-flex ml-[24px]">
                <label htmlFor="cvc" className="">
                  รหัส CVC / CVV{' '}
                  <span className="text-utility-red">*</span>{' '}
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
                {errors.cvc && (
                  <p className="text-red-500">{errors.cvc}</p>
                )}
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
            value={discountCode}
            onChange={handleInputChange}
            placeholder="กรุณากรอกโค้ดส่วนลด (ถ้ามี)"
            className="w-[331px] h-[auto] px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex"
          />

          <button
            className="ButtonPrimaryMedium w-[90px] h-11 px-6 py-2.5 ml-[24px] bg-blue-600 rounded-lg justify-center items-center gap-2 inline-flex text-white"
            onClick={handleUseCode}
          >
            ใช้โค้ด
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
