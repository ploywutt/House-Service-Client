import PageHeader from "@/components/orders/PageHeader";
import SidebarMenu from "@/components/orders/SidebarMenu";
import Profile from "@/components/profile/Profile";
// import OrderListItem from "@/components/orders/OrderListItem";

import useFetchData from "@/hook/useFetchData";
import useFetchUserEmail from "@/hook/useFetchUserEmail";

function OrderListPage() {
  const currentUserEmail = useFetchUserEmail();
  const fetchData = useFetchData(
    `http://localhost:4000/v1/user/history?email=${currentUserEmail}`,
    currentUserEmail
  );

  return (
    <div id="container" className="flex flex-col gap-7">
      <PageHeader title="ข้อมูลผู้ใช้งาน" />
      <main className="flex flex-row gap-9 justify-center">
        <SidebarMenu />
        <Profile />
        {/* <OrderListItem fetchData={fetchData.fetchData} /> */}
      </main>
    </div>
  );
}

export default OrderListPage;
