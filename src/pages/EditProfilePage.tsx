import PageHeader from "@/components/orders/PageHeader";
import SidebarMenu from "@/components/orders/SidebarMenu";
import EditProfile from "@/components/profile/EditProfile";

import useFetchData from "@/hook/useFetchData";
import useFetchUserEmail from "@/hook/useFetchUserEmail";

import { useTranslation } from "react-i18next";

function OrderListPage() {
  const { t } = useTranslation();
  const currentUserEmail = useFetchUserEmail();
  const fetchData = useFetchData(
    `https://home-service-server.onrender.com/v1/user/profile?email=${currentUserEmail}`,
    currentUserEmail ?? ""
  );

  return (
    <div id="container" className="flex flex-col gap-7">
      <PageHeader title={t("profile_page_header")} />
      <main className="flex flex-row gap-9 justify-center">
        <SidebarMenu />
        <EditProfile fetchData={fetchData.fetchData} />
      </main>
    </div>
  );
}

export default OrderListPage;
