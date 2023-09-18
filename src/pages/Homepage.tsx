import { Button } from "@/components/ui/button";
import WorkerImageFooter from "@/assets/image/WorkerImageFooter.jpg";
import "@/assets/css/homepage.css";
import ProductCard from "@/components/product-card";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  const toservicelist = () => {
    navigate("/servicelist");
  };
  return (
    <>
      <div className="banner">
        <div className="flex items-center justify-between lg:pl-[12rem] pl-[4rem] md:pl-[6rem] lg:py-[5rem] py-[3rem] 2xl:pl-[26rem]">
          <div>
            <div className="text-blue-700 text-[2rem] lg:text-[4rem] font-bold">
              เรื่องบ้าน...ให้เราช่วยดูแลคุณ
            </div>
            <div className="text-[1.25rem] lg:text-[2.65rem] pt-[1rem] font-bold">
              “สะดวก ราคาคุ้มค่า เชื่อถือได้“
            </div>
            <div className="text-gray-700 text-[0.85rem] lg:text-[1.5rem] py-[2rem]">
              ซ่อมเครื่องใช้ไฟฟ้า ซ่อมแอร์ ทำความสะอาดบ้าน <br />
              โดยพนักงานแม่บ้าน และช่างมืออาชีพ
            </div>
            <Button
              variant="myPrimary"
              className="lg:text-[1.25rem] text-[0.95rem] lg:px-[2rem] py-[1.5rem]"
            >
              เช็คราคาบริการ
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:pb-[8rem] pb-[2rem]">
        <div className="text-center text-blue-950 font-bold text-[2rem] pt-8 pb-6">
          บริการยอดฮิตของเรา
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 2xl:px-52 xl:px-24 px-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="text-center lg:mt-[4rem] mt-[2rem]">
          <Button variant="myPrimary" onClick={toservicelist}>
            ดูบริการทั้งหมด
          </Button>
        </div>
      </div>
      <div className="footerLogo ">
        <div className="relative">
          <div className="opacity-image">
            <img
              src={WorkerImageFooter}
              alt="Worker"
              className="hidden lg:block w-[60rem]"
            />
          </div>
        </div>
        <div className="lg:p-0 text-center lg:text-left w-full p-4 md:p-6 lg:pl-[4rem] 2xl:pl-[16rem]">
          <div className="text-white lg:text-[2.5rem] md:text-[1.75rem] lg:pb-[1.5rem] md:pb-[0.75rem] font-bold">
            มาร่วมเป็นพนักงานซ่อม <br /> กับ HomeServices
          </div>
          <div className="text-white lg:text-[1.25rem] lg:pb-[1.25rem] md:pb-[0.75rem]">
            เข้ารับการฝึกอบรมที่ได้มาตรฐาน ฟรี! <br />
            และยังได้รับค่าตอบแทนที่มากขึ้นกว่าเดิม
          </div>
          <div className="text-white lg:text-[2rem]">
            ติดต่อมาที่อีเมล: job@homeservices.co
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
