import AppIcon from "@/assets/icon/AppIcon.png";
import { Button } from "../ui/button";
import Email from "@/assets/icon/email.svg";
import Phone from "@/assets/icon/phone.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className="flex justify-between px-52 py-10">
          <Button
            variant="link"
            className="hover:no-underline text-blue-600 no-underline"
          >
            <img src={AppIcon} alt="Logo" />
            <div className="flex text-lg pl-3">HomeServices</div>
          </Button>
          <div>
            <div>บริษัท โฮมเซอร์วิสเซส จำกัด</div>
            <div className="text-gray-800">
              452 ซอยสุขุมวิท 79 แขวงพระโขนงเหนือ เขตวัฒนา กรุงเทพมหานคร 10260
            </div>
          </div>
          <div>
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
        <div className="bg-gray-100 px-52 flex items-center justify-between text-gray-800 py-1">
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
