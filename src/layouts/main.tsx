import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

function MainLayout() {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-[#F3F4F6]">
        <Outlet />
      </div>

      <Footer></Footer>
    </>
  );
}

export default MainLayout;
