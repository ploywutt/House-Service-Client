import AppIcon from "@/assets/icon/AppIcon.png";
import { Button } from "../ui/button";
import Email from "@/assets/icon/email.svg";
import Phone from "@/assets/icon/phone.svg";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const homepage = () => {
    navigate("/");
  };
  return (
    <>
      <footer>
        <div className="flex flex-col items-center xl:flex-row lg:justify-between 2xl:px-52 2xl:py-10">
          <Button
            variant="link"
            className="hover:no-underline text-blue-600 no-underline"
            onClick={homepage}
          >
            <img src={AppIcon} alt="Logo" />
            <div className="flex text-lg pl-3">HomeServices</div>
          </Button>
          <div className="flex flex-col items-center lg:items-start py-2 ">
            <div>บริษัท โฮมเซอร์วิสเซส จำกัด</div>
            <div className="text-gray-800 text-center">
              452 ซอยสุขุมวิท 79 แขวงพระโขนงเหนือ เขตวัฒนา กรุงเทพมหานคร 10260
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center p-2">
            <div className="p-2">
              <a href="tel:+66805406357" className="flex text-gray-800">
                <img src={Phone} alt="Phone" className="pr-2" />
                <div>080-540-6357</div>
              </a>
              <a
                href="mailto:contact@homeservices.co"
                className="flex text-gray-800"
              >
                <img src={Email} alt="Letter" className="pr-2" />
                <div>contact@homeservices.co</div>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex 2xl:px-52 lg:flex-row  flex-col items-center justify-between text-gray-800 py-1 text-center p-10">
          <div>copyright © 2021 HomeServices.com All rights reserved</div>
          <div>
            <Button variant="link" className="text-gray-800 no-underline">
              เงื่อนไขและข้อตกลงการใช้งานเว็บไซต์
            </Button>
            <Button variant="link" className="text-gray-800 no-underline">
              นโยบายความเป็นส่วนตัว
            </Button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
