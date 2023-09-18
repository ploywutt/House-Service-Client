import history from "../../assets/icon/history.svg";
import info from "../../assets/icon/info.svg";
import order from "../../assets/icon/order.svg";

function SidebarMenu(props) {
  return (
    <section
      id="sidebar"
      className="w-64 h-fit bg-white border border-gray-300 rounded-lg p-6 sticky top-[64px]"
    >
      <h3 className="text-gray-700">บัญชีผู้ใช้</h3>
      <hr className="mt-5 mb-4 border-gray-300" />
      <div id="menu1" className="flex flex-row items-center gap-3 py-3">
        <img src={info} alt="info" />
        <p className="p1 text-gray-950">ข้อมูลผู้ใช้งาน</p>
      </div>
      <div id="menu2" className="flex flex-row items-center gap-3 py-3">
        <img src={order} alt="info" />
        <p className="p1 text-blue-700">รายการคำสั่งซ่อม</p>
      </div>
      <div id="menu3" className="flex flex-row items-center gap-3 py-3">
        <img src={history} alt="info" />
        <p className="p1 text-gray-950">ประวัติการซ่อม</p>
      </div>
    </section>
  );
}

export default SidebarMenu;
