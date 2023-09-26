import { Button } from "@/components/ui/button";
import WorkerImageFooter from "@/assets/image/WorkerImageFooter.jpg";
import "@/assets/css/homepage.css";
import ProductCard from "@/components/product-card";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Services } from "@/core/types/services";
import { useEffect, useState } from "react";
import ServiceAPI from "@/core/services/services";

function Homepage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [items, setItems] = useState<Services[]>([]);
  const toservicelist = () => {
    navigate("/servicelist");
  };

  const fetchData = async () => {
    const response = await ServiceAPI.get({ page: 1, pageSize: 4 });
    setItems(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // document.documentElement.style.setProperty("--color-primary-700", "255 0 0 ");
  return (
    <>
      <div className="banner">
        <div className="flex items-center justify-between lg:pl-[12rem] pl-[4rem] md:pl-[6rem] lg:py-[5rem] py-[3rem] 2xl:pl-[26rem] dark:bg-black dark:text-white">
          <div>
            <div className="text-primary text-[2rem] lg:text-[4rem] font-bold">
              {t("banner_title1")}
            </div>
            <div className="text-[1.25rem] lg:text-[2.65rem] pt-[1rem] font-bold">
              {t("banner_title2")}
            </div>
            <div
              className="text-gray-700 text-[0.85rem] lg:text-[1.5rem] py-[2rem] dark:text-white"
              dangerouslySetInnerHTML={{ __html: t("banner_title3") }}
            ></div>
            <Button
              variant="myPrimary"
              className="lg:text-[1.25rem] text-[0.95rem] lg:px-[2rem] py-[1.5rem]"
            >
              {t("check_serviceprice")}
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:pb-[8rem] pb-[2rem] dark:bg-black">
        <div className="text-center text-blue-950 font-bold text-[2rem] pt-8 pb-6 dark:text-white">
          {t("popular_service")}
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 2xl:px-52 xl:px-24 px-4">
          {items.map((item) => (
            <ProductCard key={item.id} items={item}></ProductCard>
          ))}
        </div>
        <div className="text-center lg:mt-[4rem] mt-[2rem]">
          <Button variant="myPrimary" onClick={toservicelist}>
            {t("view_all_services")}
          </Button>
        </div>
      </div>
      <div className="footerLogo">
        <div className="relative">
          <div className="opacity-image">
            <img
              src={WorkerImageFooter}
              alt="Worker"
              className="hidden lg:block w-[60rem]"
            />
          </div>
        </div>
        <div className="lg:p-0 text-center lg:text-left w-full p-4 md:p-6 lg:pl-[4rem] 2xl:pl-[16rem]">
          <div
            className="text-white lg:text-[2.5rem] md:text-[1.75rem] lg:pb-[1.5rem] md:pb-[0.75rem] font-bold"
            dangerouslySetInnerHTML={{ __html: t("homepage_footer1") }}
          ></div>
          <div
            className="text-white lg:text-[1.25rem] lg:pb-[1.25rem] md:pb-[0.75rem]"
            dangerouslySetInnerHTML={{ __html: t("homepage_footer2") }}
          ></div>
          <div className="text-white lg:text-[2rem]">
            {t("contact_email")}: job@homeservices.co
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
