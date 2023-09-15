import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollTop from "@/components/scrolltop";

function MainLayout() {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <div className="bg-[#F3F4F6]" style={{ minHeight: "calc(100vh)" }}>
        <Outlet />
      </div>

      <Footer></Footer>
      <ScrollTop />
    </div>
  );
}

export default MainLayout;
