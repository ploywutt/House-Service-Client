import { Button } from "../ui/button";
import ArrowLeft from "../../assets/icon/arrow_left.png";
import ArrowRight from "../../assets/icon/arrow_right.png";

function ServiceFooterButton() {
  return (
    <div className="w-full h-92 bg-pink-300 flex justify-evenly mt-24">
      <Button variant="secondary" className="w-40 h-11 bg-white">
        <img src={ArrowLeft} alt="ArrowLeft" />
        <p className="ml-2">ย้อนกลับ</p>
      </Button>

      <Button className="w-40 h-11 ">
        <p className="mr-2 ">ดำเนินการต่อ</p>
        <img src={ArrowRight} alt="ArrowRight" />
      </Button>
    </div>
  );
}

export default ServiceFooterButton;
