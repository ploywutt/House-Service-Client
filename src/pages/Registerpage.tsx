import { Button } from "@/components/ui/button";
import googleLogo from "../assets/icon/google_logos.svg";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import useRegister from "../hook/useRegister";
import { Modals } from "@/components/Modal";
import { Loader2 } from "lucide-react";
import error from "../assets/icon/error_icon.png";
import Terms from "@/components/Terms";
import Policy from "@/components/PrivacyPolicy";

import { useTranslation } from "react-i18next";

const Registerpage = () => {
  const { t } = useTranslation();
  const {
    formData,
    handleChange,
    handleSubmit,
    navigate,
    signInWithGoogle,
    isValid,
    isLoading,
  } = useRegister();

  return (
    <div className="flex justify-center pt-2 ">
      <div className="w-[550px] h-auto py-[32px] px-[12px]  mt-[52px] mb-[82px] bg-white rounded-lg border border-gray-300 flex-col justify-center  items-center inline-flex">
        <h1>{t("register_page.register_header")}</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
        >
          <div className="inline-flex flex-col gap-[20px] m-2 w-96">
            <div className="relative">
              <label
                className="mt-[16px] text-gray-900 text-base font-medium leading-normal"
                htmlFor="fullName"
              >
                {t("register_page.register_name_fullname")}
                <span className="text-utility-red">*</span>
              </label>
              <br />
              <Input
                className={`${
                  !isValid ? "border-[#C82438]" : "focus:border-blue-600"
                }`}
                type="text"
                id="name"
                name="name"
                placeholder={t("register_page.register_name_please")}
                value={formData.name}
                onChange={handleChange}
                required
              />
              <img
                src={error}
                alt="error"
                className={`${
                  !isValid ? "absolute right-4 bottom-4" : "hidden"
                }`}
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="text-gray-900 text-base font-medium leading-normal"
              >
                {t("register_page.register_telephone")}
                <span className="text-utility-red">*</span>
              </label>
              <br />
              <Input
                className={
                  !isValid ? "border-[#C82438]" : "focus:border-blue-600"
                }
                type="tel"
                id="phone"
                name="phone"
                placeholder={t("register_page.register_telephone_please")}
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <img
                src={error}
                alt="error"
                className={`${
                  !isValid ? "absolute right-4 bottom-4" : "hidden"
                }`}
              />
            </div>

            <div className="">
              <label
                htmlFor="email"
                className="text-gray-900 text-base font-medium leading-normal"
              >
                {t("register_page.register_email")}
                <span className="text-utility-red">*</span>
              </label>
              <br />
              <Input
                className={
                  !isValid ? "border-[#C82438]" : "focus:border-blue-600"
                }
                type="email"
                id="email"
                name="email"
                placeholder={t("register_page.register_email_please")}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <img
                src={error}
                alt="error"
                className={`${
                  !isValid ? "absolute right-4 bottom-4" : "hidden"
                }`}
              />
            </div>

            <div className="">
              <label
                htmlFor="password"
                className="text-gray-900 text-base font-medium leading-normal"
              >
                {t("register_page.register_password")}
                <span className="text-utility-red">*</span>
              </label>
              <br />
              <Input
                className={
                  !isValid ? "border-[#C82438]" : "focus:border-blue-600"
                }
                type="password"
                id="password"
                name="password"
                placeholder={t("register_page.register_password_please")}
                value={formData.password}
                onChange={handleChange}
                required
              />
              <img
                src={error}
                alt="error"
                className={`${
                  !isValid ? "absolute right-4 bottom-4" : "hidden"
                }`}
              />
            </div>
          </div>
          <div className="mt-[30px]  flex justify-center items-center ">
            <Checkbox
              className="mr-4 w-6 h-6 rounded-[6px] border-gray-300 hover:border-blue-600"
              id="acceptTerms"
              name="acceptTerms"
              required
            />

            <label htmlFor="acceptTerms">
              <span className="p3 mr-1 text-gray-900">
                {t("register_page.register_confirm")}
              </span>
              <Modals
                variant="link"
                className="p-0 h-0 mr-1 text-sm font-semibold dark:text-gray-800"
                button={t("register_page.register_terms")}
                title={t("register_page.register_terms_popup")}
                description={<Terms />}
              />
              <span className="p3 mr-1 text-gray-900">
                {t("register_page.register_and_break")}
              </span>
              <Modals
                variant="link"
                className="p-0 h-0 mr-1 text-sm font-semibold dark:text-gray-800"
                button={t("register_page.register_policy")}
                title={t("register_page.register_policy_popup")}
                description={<Policy />}
              />
            </label>
          </div>
          <Button
            className="w-96 h-11 px-6 py-2.5 bg-blue-600 rounded-lg justify-center items-center gap-2 inline-flex m-8 dark:bg-black dark:text-white"
            type="submit"
          >
            {t("register_page.register_button")}
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
          </Button>

          <div className="w-96 h-5 justify-center items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-px bg-gray-500" />
            <div className="text-center text-gray-700 text-sm font-normal leading-tight">
              {t("register_page.register_alternative")}
            </div>
            <div className="grow shrink basis-0 h-px bg-gray-500" />
          </div>

          <Button
            variant="secondary"
            className="w-96 h-11 hover:opacity-50 border border-gray-300 text-gray-600 hover:text-gray-600 hover:border-gray-300 active:text-gray-900 active:border-gray-800 gap-2 m-8"
            onClick={signInWithGoogle}
          >
            <img src={googleLogo} className="mr-2 h-4 w-4" />
            {t("register_page.register_google")}
          </Button>

          <Button
            variant="link"
            className="dark:text-black"
            onClick={() => navigate("/login")}
          >
            {t("register_page.register_back_to_login")}
          </Button>
        </form>
        
      </div>
    </div>
  );
};

export default Registerpage;
