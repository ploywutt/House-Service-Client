import AppIcon from "@/assets/icon/AppIcon.png";
import { Button } from "../ui/button";
import Email from "@/assets/icon/email.svg";
import Phone from "@/assets/icon/phone.svg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Modals } from "@/components/Modal";
import Terms from "@/components/Terms";
import Policy from "@/components/PrivacyPolicy";

function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const homepage = () => {
    navigate("/");
  };
  return (
    <>
      <footer>
        <div className="flex flex-col items-center xl:flex-row lg:justify-between 2xl:px-52 2xl:py-10 dark:bg-gray-600">
          <Button
            variant="link"
            className="hover:no-underline text-blue-600 no-underline"
            onClick={homepage}
          >
            <img src={AppIcon} alt="Logo" />
            <div className="flex text-lg pl-3">HomeServices</div>
          </Button>
          <div className="flex flex-col items-center lg:items-start py-2 dark:text-white">
            <div>{t("footer.company")}</div>
            <div className="text-gray-800 text-center dark:text-white">
              {t("footer.location")}
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center p-2">
            <div className="p-2">
              <a
                href="tel:+66805406357"
                className="flex text-gray-800 dark:text-white"
              >
                <img src={Phone} alt="Phone" className="pr-2" />
                <div>080-540-6357</div>
              </a>
              <a
                href="mailto:contact@homeservices.co"
                className="flex text-gray-800"
              >
                <img src={Email} alt="Letter" className="pr-2 " />
                <div className="dark:text-white">contact@homeservices.co</div>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex 2xl:px-52 lg:flex-row  flex-col items-center justify-between text-gray-800 py-1 text-center p-10 dark:bg-black">
          <div className="dark:text-white">
            copyright © 2021 HomeServices.com All rights reserved
          </div>
          <div className="flex dark:text-white">
            <div>
              <Modals
                variant="TermsAndPolicy"
                className="text-bold text-[16px]"
                button={t("footer.terms")}
                title={t("register_page.register_terms_popup")}
                description={<Terms />}
              />
            </div>
            <div>
              <Modals
                variant="TermsAndPolicy"
                className="text-bold text-[16px]"
                button={t("footer.privacy")}
                title={t("register_page.register_policy_popup")}
                description={<Policy />}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
