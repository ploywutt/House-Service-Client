// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import faceBookLogo from "../assets/icon/facebook_logos.png";

function UserLogin() {
  // const [input, setInput] = useState<string>();

  return (
    <>
      <div>
        <h1 className="color-[#001C59]">เข้าสู่ระบบ</h1>
        <label htmlFor="email">อีเมล*</label>
        <Input type="email" id="email" placeholder="Email" />
        <label htmlFor="password">รหัสผ่าน*</label>
        <Input type="password" id="password" placeholder="Password" />
      </div>
      <div>
        <Button className="w-96 h-11 px-6 py-2.5 no-underline marker:rounded-lg justify-center items-center gap-2 inline-flex m-8">
          เข้าสู่ระบบ
        </Button>
      </div>
      <div className="w-96 h-5 justify-center items-center gap-2 inline-flex">
        <div className="grow shrink basis-0 h-px bg-gray-400" />
        <div className="text-center text-gray-500 text-sm font-normal leading-tight">
          หรือลงชื่อเข้าใช้ผ่าน
        </div>
        <div className="grow shrink basis-0 h-px bg-gray-400" />
      </div>
      <div>
        <Button
          variant="secondary"
          className="w-96 h-11 px-6 py-2.5 no-underline rounded-lg border border-blue-600 text-blue-600  justify-center items-center gap-2 inline-flex m-8"
        >
          <img src={faceBookLogo} className="mr-2 h-4 w-4" />
          เข้าสู่ระบบด้วย Facebook
        </Button>
      </div>
      <div className="text-center text-gray-500 text-base font-normal leading-normal m-4">
        ยังไม่มีบัญชีผู้ใช้ HomeService?
        <Button
          variant="link"
          className="text-center text-blue-600 text-base font-semibold underline leading-normal"
        >
          ลงทะเบียน
        </Button>
      </div>
    </>
  );
}

export default UserLogin;
