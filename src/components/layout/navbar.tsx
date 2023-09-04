import AppIcon from "@/assets/icon/AppIcon.png";
import { Button } from "../ui/button";

function Navbar() {
  return (
    <>
      <nav className="px-52 flex justify-between shadow-lg shadow-black-200 py-3">
        <div className="flex items-center col-span-3">
          <Button variant="link" className="hover:no-underline text-blue-600">
            <img src={AppIcon} alt="Logo" />
            <div className="flex text-lg pl-3">HomeServices</div>
          </Button>
          <Button variant="link">บริการของเรา</Button>
        </div>
        <div className="flex items-center">
          <Button variant="outline-primary">เข้าสู่ระบบ</Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
