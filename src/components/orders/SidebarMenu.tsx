import history from "../../assets/icon/history.svg";
import historyBlue from "../../assets/icon/history-blue.svg";
import info from "../../assets/icon/info.svg";
import infoBlue from "../../assets/icon/info-blue.svg";
import orderBlue from "../../assets/icon/order-blue.svg";
import order from "../../assets/icon/order.svg";

import usePathname from "@/hook/usePathname";

import { useTranslation } from "react-i18next";

function SidebarMenu() {
  const { t } = useTranslation();
  const { pathname, navigate } = usePathname();

  const data = [
    {
      title: t("sidebar.user_profile"),
      icon: info,
      iconSelected: infoBlue,
      navigate: "/profile",
    },
    {
      title: t("sidebar.order_list"),
      icon: order,
      iconSelected: orderBlue,
      navigate: "/orders",
    },
    {
      title: t("sidebar.order_history"),
      icon: history,
      iconSelected: historyBlue,
      navigate: "/history",
    },
  ];
  return (
    <section
      id="sidebar"
      className="w-64 h-fit bg-white border border-gray-300 rounded-lg p-6 sticky top-[64px]"
    >
      <h3 className="text-gray-700">{t("sidebar.user_profile_header")}</h3>
      <hr className="mt-5 mb-4 border-gray-300" />
      {data.map((item, index) => {
        return (
          <div
            id="menu1"
            className="flex flex-row items-center gap-3 py-3 cursor-pointer"
            key={index}
            onClick={() => navigate(`${item.navigate}`)}
          >
            {pathname === item.navigate ? (
              <img src={item.iconSelected} alt={item.icon} />
            ) : (
              <img src={item.icon} alt={item.icon} />
            )}
            <p
              className={
                pathname === item.navigate
                  ? "p1 text-blue-700"
                  : "p1 text-gray-950"
              }
            >
              {item.title}
            </p>
          </div>
        );
      })}
    </section>
  );
}

export default SidebarMenu;
