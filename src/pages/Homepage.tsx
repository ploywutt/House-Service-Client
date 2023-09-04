import { Button } from "@/components/ui/button";
import "@/assets/css/homepage.css";

function Homepage() {
  return (
    <div className="banner">
      <div className="flex items-center justify-between px-[24rem] py-[5rem]">
        <div>
          <div className="text-blue-700 text-[4rem] font-bold">
            เรื่องบ้าน...ให้เราช่วยดูแลคุณ
          </div>
          <div className="text-[2.65rem] font-bold">
            “สะดวก ราคาคุ้มค่า เชื่อถือได้“
          </div>
          <div className="text-gray-700 text-[1.5rem] py-[2rem]">
            ซ่อมเครื่องใช้ไฟฟ้า ซ่อมแอร์ ทำความสะอาดบ้าน <br />
            โดยพนักงานแม่บ้าน และช่างมืออาชีพ
          </div>
          <Button
            variant="myPrimary"
            className="text-[1.25rem] px-[2rem] py-[1.5rem]"
          >
            เช็คราคาบริการ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
