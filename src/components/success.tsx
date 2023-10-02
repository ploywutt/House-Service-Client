
<<<<<<< HEAD
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { Separator } from "./ui/separator";
// import CheckSymbol from "../assets/icon/CheckSymbol.svg";

// function Success(props) {
//   const { t } = useTranslation();
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/orders");
//   };

//   return (
//     <div className="w-[542px] h-[600px] mx-auto mt-8 flex-col bg-white " >
//       <div className="flex flex-col items-center">
//         <img src={CheckSymbol} alt="Confirm Payment Icon" />
//         <div className="pt-8">
//           <h1>ชำระเงินเรียบร้อย !</h1>
//         </div>
//       </div>
//       <div className="flex flex-col items-center justify-center">
//       {props.counts &&
//     props.counts.map(
//       (
//         item: { name: string; count: number; unit: string },
//         index: number
//       ) => {
//         return (
//           <div
//             key={index}
//             className="w-[422px] flex flex-row justify-between px-4"
//           >
//             {item.count > 0 && (
//               <>
//                 <h4>{item.name}</h4>
//                 <h4 className="w-1/3 text-end">
//                   {item.count} {item.unit}
//                 </h4>
//               </>
//             )}
//           </div>
//               );
//             }
//           )}
//       </div>
//       <Separator className="w-96 border-gray-300 px-4 mt-4" />
//       <div className="flex flex-row justify-between w-[422px] p-4">
//         <span className="p3 text-gray-500">
//           {t("alert_payment.alert_payment_day")}
//         </span>
//         <span className="p3 text-right text-black">
//           {props.thaiDate || ""}
//         </span>
//       </div>
//       <div className="flex flex-row justify-between w-[422px] p-4">
//         <span className="p3 text-gray-500">
//           {t("alert_payment.alert_payment_time")}
//         </span>
//         <span className="p3 text-right text-black">
//           {props.selectedTime || ""}
//         </span>
//       </div>
//       <div className="flex flex-row justify-between w-[422px] p-4">
//         <span className="p3 text-gray-500">
//           {t("alert_payment.alert_payment_location")}
//         </span>
//         <span className="p3 text-right text-black w-5/6">
//           {props.address?.address || ""} {props.address?.selectedTambon || ""}{" "}
//           {props.address?.selectedAmphure || ""}{" "}
//           {props.address?.selectedProvince || ""}
//         </span>
//       </div>
//       <Separator className="w-96 border-gray-300" />
//       <div className="flex flex-row justify-between w-[422px] p-4 pb-8">
//         <span className="p3 text-gray-500">
//           {t("alert_payment.alert_payment_finale")}
//         </span>
//         <h5>{(props.totalprice || 0).toFixed(2)} ฿</h5>
//       </div>
//         <div className="px-6">
//           <button
//             className="w-full"
//             onClick={() => {
//               navigate("/orders");
//             }}
//           >
//             เช็ครายการซ่อม
//           </button>
//         </div>
//     </div>
//   );
// }

// export default Success;
=======
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Separator } from "./ui/separator";
import CheckSymbol from "../assets/icon/CheckSymbol.svg";

function Success(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/orders");
  };

  return (
    <div className="w-[542px] h-[600px] mx-auto mt-8 flex-col bg-white " >
      <div className="flex flex-col items-center">
        <img src={CheckSymbol} alt="Confirm Payment Icon" />
        <div className="pt-8">
          <h1>ชำระเงินเรียบร้อย !</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
      {props.counts &&
    props.counts.map(
      (
        item: { name: string; count: number; unit: string },
        index: number
      ) => {
        return (
          <div
            key={index}
            className="w-[422px] flex flex-row justify-between px-4"
          >
            {item.count > 0 && (
              <>
                <h4>{item.name}</h4>
                <h4 className="w-1/3 text-end">
                  {item.count} {item.unit}
                </h4>
              </>
            )}
          </div>
              );
            }
          )}
      </div>
      <Separator className="w-96 border-gray-300 px-4 mt-4" />
      <div className="flex flex-row justify-between w-[422px] p-4">
        <span className="p3 text-gray-500">
          {t("alert_payment.alert_payment_day")}
        </span>
        <span className="p3 text-right text-black">
          {props.thaiDate || ""}
        </span>
      </div>
      <div className="flex flex-row justify-between w-[422px] p-4">
        <span className="p3 text-gray-500">
          {t("alert_payment.alert_payment_time")}
        </span>
        <span className="p3 text-right text-black">
          {props.selectedTime || ""}
        </span>
      </div>
      <div className="flex flex-row justify-between w-[422px] p-4">
        <span className="p3 text-gray-500">
          {t("alert_payment.alert_payment_location")}
        </span>
        <span className="p3 text-right text-black w-5/6">
          {props.address?.address || ""} {props.address?.selectedTambon || ""}{" "}
          {props.address?.selectedAmphure || ""}{" "}
          {props.address?.selectedProvince || ""}
        </span>
      </div>
      <Separator className="w-96 border-gray-300" />
      <div className="flex flex-row justify-between w-[422px] p-4 pb-8">
        <span className="p3 text-gray-500">
          {t("alert_payment.alert_payment_finale")}
        </span>
        <h5>{(props.totalprice || 0).toFixed(2)} ฿</h5>
      </div>
        <div className="px-6">
          <button
            className="w-full"
            onClick={() => {
              navigate("/orders");
            }}
          >
            เช็ครายการซ่อม
          </button>
        </div>
    </div>
  );
}

export default Success;
>>>>>>> 702ff04 (stripeFix)
