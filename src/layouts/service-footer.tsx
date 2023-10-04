import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/navbar";
import ServiceFooterButton from "../components/service/servicefooterbutton";


function ServiceFooter() {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <div
        className="bg-[#F3F4F6] dark:bg-black"
        style={{ minHeight: "calc(100vh)" }}
      >
        <Outlet />
      </div>
      <ServiceFooterButton />
    </div>
  );
}

export default ServiceFooter;
