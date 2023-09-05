// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import faceBookLogo from "../assets/icon/facebook_logos.png";

function UserLogin() {
  // const [input, setInput] = useState<string>();

  return (
    <div className="flex justify-center pt-12">
      <div className="w-300 h-300 pt-8 pb-8 px-12 bg-white rounded-lg border border-gray-300 flex-col justify-center items-center inline-flex">
        <h1 className=" text-center text-blue-950 leading-10">เข้าสู่ระบบ</h1>
        <div className="w-96 h-40 flex-col justify-start items-start gap-5 inline-flex">
          <div className="w-96 h-16 flex-col justify-start items-start gap-1 inline-flex">
            <label htmlFor="email">
              <span className="text-zinc-700 text-base font-medium leading-normal">
                อีเมล
              </span>
              <span className="text-rose-700 text-base font-medium leading-normal">
                *
              </span>
            </label>
            <Input
              className="w-96 h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="w-96 h-16 flex-col justify-start items-start gap-1 inline-flex">
            <label htmlFor="password">
              <span className="text-zinc-700 text-base font-medium leading-normal">
                รหัสผ่าน
              </span>
              <span className="text-rose-700 text-base font-medium leading-normal">
                *
              </span>
            </label>
            <Input
              className="w-96 h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div>
          <Button className="w-96 h-11 px-6 py-2.5 no-underline marker:rounded-lg justify-center items-center gap-2 inline-flex m-8">
            เข้าสู่ระบบ
          </Button>
        </div>
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
      </div>
    </div>
  );
}

export default UserLogin;
