import { Button } from "@/components/ui/button";
import WorkerImageFooter from "@/assets/image/WorkerImageFooter.jpg";
import "@/assets/css/homepage.css";
import ProductCard from "@/components/product-card";

function Homepage() {
  return (
    <>
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
      <div className="pb-[8rem]">
        <div className="text-center text-blue-950 font-bold text-[2rem] pt-8 pb-6">
          บริการยอดฮิตของเรา
        </div>
        <div className="grid grid-cols-3 gap-8 px-52">
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
        <div className="text-center mt-[4rem]">
          <Button variant="myPrimary">ดูบริการทั้งหมด</Button>
        </div>
      </div>
      <div className="footerLogo">
        <div className="relative">
          <div className="opacity-image">
            <img src={WorkerImageFooter} alt="Worker" />
          </div>
        </div>
        <div className="pl-[10rem]">
          <div className="text-white text-[2.5rem] pb-[1.5rem] font-bold">
            มาร่วมเป็นพนักงานซ่อม <br /> กับ HomeServices
          </div>
          <div className="text-white text-[1.25rem] pb-[1.25rem]">
            เข้ารับการฝึกอบรมที่ได้มาตรฐาน ฟรี! <br />
            และยังได้รับค่าตอบแทนที่มากขึ้นกว่าเดิม
          </div>
          <div className="text-white text-[2rem]">
            ติดต่อมาที่อีเมล: job@homeservices.co
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
