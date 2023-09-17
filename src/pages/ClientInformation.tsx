// import ServiceHeadImage from "../components/layout/serviceheadimage";
import "../assets/css/servicedetailbanner.css";
import ClientInput from "../components/ClientInput";
import OrderDetail from "@/components/OrderDetail";

function ClientInformation() {
  return (
    <>
      {/* <ServiceHeadImage /> */}
      <div className="service-detail-banner w-full h-60"></div>
      <div className="h-[700px] flex justify-between items-center p-[20rem]">
        <ClientInput />
        <OrderDetail />
      </div>
    </>
  );
}

export default ClientInformation;
