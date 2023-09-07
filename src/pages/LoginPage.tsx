import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import googleLogo from "../assets/icon/google_logos.svg";
import error from "../assets/icon/error_icon.png";
import useLogin from "../hook/useLogin";

const UserLogin = () => {
  const {
    handleLogin,
    signInWithGoogle,
    navigate,
    setEmail,
    setPassword,
    email,
    password,
    isValid,
    isLoading,
  } = useLogin();

  return (
    <div className="flex justify-center pt-12">
      <div className="w-300 h-300 pt-8 pb-8 px-12 bg-white rounded-lg border border-gray-300 flex-col justify-center items-center inline-flex">
        <h1 className=" text-center text-blue-950 leading-10">เข้าสู่ระบบ</h1>
        <div className="w-96 h-40 flex-col justify-start items-start gap-5 inline-flex">
          <div className="w-96 h-16 flex-col justify-start items-start gap-1 inline-flex relative">
            <label htmlFor="email">
              <span className="text-zinc-700 text-base font-medium leading-normal">
                อีเมล
              </span>
              <span className="text-rose-700 text-base font-medium leading-normal">
                *
              </span>
            </label>
            <Input
              className={`w-96 h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex ${
                !isValid ? "border-[#C82438]" : "focus:border-blue-600"
              }`}
              type="email"
              id="email"
              placeholder="กรุณากรอกอีเมล"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <img
              src={error}
              alt="error"
              className={`${!isValid ? "absolute right-4 bottom-2" : "hidden"}`}
            />
          </div>
          <div className="w-96 h-16 flex-col justify-start items-start gap-1 inline-flex relative">
            <label htmlFor="password">
              <span className="text-zinc-700 text-base font-medium leading-normal">
                รหัสผ่าน
              </span>
              <span className="text-rose-700 text-base font-medium leading-normal">
                *
              </span>
            </label>
            <Input
              className={`w-96 h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex ${
                !isValid ? "border-[#C82438]" : "focus:border-blue-600"
              }`}
              type="password"
              id="password"
              placeholder="กรอกรหัสผ่าน"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <img
              src={error}
              alt="error"
              className={`${!isValid ? "absolute right-4 bottom-2" : "hidden"}`}
            />
          </div>
        </div>
        <div>
          <Button
            className={`w-96 h-11 px-6 py-2.5 no-underline zmarker:rounded-lg justify-center items-center gap-2 inline-flex m-8`}
            type="submit"
            onClick={handleLogin}
          >
            เข้าสู่ระบบ
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
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
            className="w-96 h-11 hover:opacity-50 border border-gray-300 text-gray-600 hover:text-gray-600 hover:border-gray-300 active:text-gray-900 active:border-gray-800 gap-2  m-8"
          >
            <img src={googleLogo} className="mr-2 h-4 w-4" />
            เข้าสู่ระบบด้วย Google
          </Button>
        </div>
        <div className="text-center text-gray-500 text-base font-normal leading-normal m-4">
          ยังไม่มีบัญชีผู้ใช้ HomeService?
          <Button
            onClick={() => navigate("/register")}
            variant="link"
            className="text-center text-blue-600 text-base font-semibold underline leading-normal"
          >
            ลงทะเบียน
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
