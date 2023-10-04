import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import googleLogo from "../assets/icon/google_logos.svg";
import error from "../assets/icon/error_icon.png";
import useLogin from "../hook/useLogin";

import { useTranslation } from "react-i18next";

const UserLogin = () => {
  const { t } = useTranslation();
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
    <div className="flex justify-center pt-14 pb-24">
      <div className="w-300 h-300 pt-8 pb-8 px-12 bg-white rounded-lg border border-gray-300 flex-col justify-center items-center inline-flex">
        <h1 className=" text-center text-blue-950 leading-10 mb-4">
          {t("login_page.login_header")}
        </h1>
        <div className="w-96 h-40 flex-col justify-start items-start gap-5 inline-flex">
          <div className="w-96 h-16 flex-col justify-start items-start gap-1 inline-flex relative">
            <label htmlFor="email">
              <span className="text-zinc-700 text-base font-medium leading-normal">
                {t("login_page.login_email")}
              </span>
              <span className="text-rose-700 text-base font-medium leading-normal">
                *
              </span>
            </label>
            <Input
              className={`w-96 h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 dark:text-white justify-start items-center gap-2.5 inline-flex ${
                !isValid ? "border-[#C82438]" : "focus:border-blue-600"
              }`}
              type="email"
              id="email"
              placeholder={t("login_page.email_please")}
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
                {t("login_page.login_password")}
              </span>
              <span className="text-rose-700 text-base font-medium leading-normal">
                *
              </span>
            </label>
            <Input
              className={`w-96 h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 dark:text-white justify-start items-center gap-2.5 inline-flex ${
                !isValid ? "border-[#C82438]" : "focus:border-blue-600"
              }`}
              type="password"
              id="password"
              placeholder={t("login_page.password_please")}
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
            className={`w-96 h-11 px-6 py-2.5 no-underline zmarker:rounded-lg justify-center items-center gap-2 inline-flex m-8 dark:bg-gray-800 dark:text-white hover:dark:bg-gray-600`}
            type="submit"
            onClick={handleLogin}
          >
            {t("login_page.login_button")}
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
          </Button>
        </div>
        <div className="w-96 h-5 justify-center items-center gap-2 inline-flex">
          <div className="grow shrink basis-0 h-px bg-gray-500" />
          <div className="text-center text-gray-700 text-sm font-normal leading-tight">
            {t("login_page.login_alternative")}
          </div>
          <div className="grow shrink basis-0 h-px bg-gray-500" />
        </div>
        <div>
          <Button
            variant="secondary"
            onClick={signInWithGoogle}
            className="w-96 h-11 hover:opacity-50 border border-gray-300 text-gray-600 hover:text-gray-600 hover:border-gray-300 active:text-gray-900 active:border-gray-800 gap-2  m-8"
          >
            <img src={googleLogo} className="mr-2 h-4 w-4" />
            {t("login_page.google_login")}
          </Button>
        </div>
        <div className="text-center text-gray-700 text-base font-normal leading-normal m-4">
          {t("login_page.to_register")}
          <Button
            onClick={() => navigate("/register")}
            variant="link"
            className="text-center text-blue-600 text-base font-semibold underline leading-normal dark:text-gray-800"
          >
            {t("login_page.register_please")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
