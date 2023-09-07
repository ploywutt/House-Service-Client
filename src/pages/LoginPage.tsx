import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import faceBookLogo from "../assets/icon/facebook_logos.png";
import supabase from "@/auth/supabaseauth";

function UserLogin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (data.session) {
        console.log(data);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  async function signInWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      console.log("เหมือนชอ", data, error);
    } catch (error) {
      console.error(error);
    }
  }

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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
        </div>
        <div>
          <Button
            className="w-96 h-11 px-6 py-2.5 no-underline zmarker:rounded-lg justify-center items-center gap-2 inline-flex m-8"
            type="submit"
            onClick={handleLogin}
          >
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
            onClick={signInWithGoogle}
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
      </div>
    </div>
  );
}

export default UserLogin;
