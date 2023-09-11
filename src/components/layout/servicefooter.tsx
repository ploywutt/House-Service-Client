import { Button } from "../ui/button";
import ArrowLeft from "../../assets/icon/arrow_left.png";
import ArrowRight from "../../assets/icon/arrow_right.png";

function ServiceFooter() {
  return (
    <div className="w-1440 h-92 flex justify-evenly mt-24">
      <Button className="w-40 h-11 bg-white ">
        <img src={ArrowLeft} alt="ArrowLeft" />
        <p className="text-blue-600 ml-1">ย้อนกลับ</p>
      </Button>

      <Button className="w-40 h-11  bg-gray-300">
        <p className="mr-1 ">ดำเนินการต่อ</p>
        <img src={ArrowRight} alt="ArrowRight" />
      </Button>
    </div>
  );
}

export default ServiceFooter;
