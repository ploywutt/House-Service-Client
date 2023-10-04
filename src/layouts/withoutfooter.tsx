import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/navbar";

function NoFooter() {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <div
        className="bg-[#F3F4F6] dark:bg-black"
        style={{ minHeight: "calc(100vh)" }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default NoFooter;
