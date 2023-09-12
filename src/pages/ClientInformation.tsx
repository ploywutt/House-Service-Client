import ServiceHeadImage from "../components/layout/serviceheadimage";
import ClientInput from "../components/ClientInput";

function ClientInformation() {
  return (
    <>
      <ServiceHeadImage />
      <div className="h-[700px] flex justify-center items-center">
        <ClientInput />
      </div>
    </>
  );
}

export default ClientInformation;
