// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

function UserLogin() {
  // const [input, setInput] = useState<string>();

  return (
    <div>
      <h1 className="color-[#001C59]">เข้าสู่ระบบ</h1>
      <label htmlFor="email">อีเมล*</label>
      <Input type="email" id="email" placeholder="Email" />
      <label htmlFor="password">รหัสผ่าน*</label>
      <Input type="password" id="password" placeholder="Password" />
    </div>
  );
}

export default UserLogin;
