// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

function UserLogin() {
  // const [input, setInput] = useState<string>();

  return (
    <div className="w-96 h-96 relative bg-white rounded-lg border border-gray-300 flex-col justify-start items-start inline-flex">
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
    </div>
  );
}

export default UserLogin;
