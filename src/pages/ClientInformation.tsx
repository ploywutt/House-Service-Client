import "../assets/css/servicedetailbanner.css";
import ClientInput from "../components/ClientInput";
import OrderDetail from "@/components/OrderDetail";

import useFetchProvince from "../hook/useFetchProvince";

function ClientInformation() {
  const {
    // function OrderDetail(props) {
    //   console.log(props.selectedProvince);
    //   console.log(props.selectedAmphure);
    //   console.log(props.selectedTambon);
    provinces,
    amphures,
    tambons,
    selectedProvince,
    setSelectedProvince,
    selectedAmphure,
    setSelectedAmphure,
    selectedTambon,
    setSelectedTambon,
    isLoading,
  } = useFetchProvince();
  return (
    <>
      <div className="service-detail-banner w-full h-60"></div>
      <div className="h-[700px] flex justify-between items-center p-[20rem]">
        <ClientInput
          provinces={provinces}
          amphures={amphures}
          tambons={tambons}
          setSelectedProvince={setSelectedProvince}
          setSelectedAmphure={setSelectedAmphure}
          setSelectedTambon={setSelectedTambon}
          isLoading={isLoading}
        />
        <OrderDetail
          selectedProvince={selectedProvince}
          selectedAmphure={selectedAmphure}
          selectedTambon={selectedTambon}
        />
      </div>
    </>
  );
}

export default ClientInformation;
