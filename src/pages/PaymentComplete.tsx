import { Button } from "@/components/ui/button";
import CheckSymbol from "../assets/icon/CheckSymbol.svg";
import { useNavigate } from "react-router-dom";

function PaymentComplete() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-full py-32">
      <div className="w-[542px] h-fit mx-auto p-8 flex flex-col bg-white rounded-xl ">
        <div className="flex flex-col items-center pt-8">
          <img src={CheckSymbol} alt="Confirm Payment Icon" />
          <div className="pt-8">
            <h1>ชำระเงินเรียบร้อย !</h1>
          </div>
        </div>
        <div className="p-16 ">
          <Button
            className="w-full"
            onClick={() => {
              navigate("/orders");
            }}
          >
            เช็ครายการซ่อม
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PaymentComplete;
