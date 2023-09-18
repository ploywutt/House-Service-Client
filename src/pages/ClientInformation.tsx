import "../assets/css/servicedetailbanner.css";
import ClientInput from "../components/ClientInput";
import OrderDetail from "@/components/OrderDetail";

import useFetchProvince from "../hook/useFetchProvince";
import useTimePicker from "@/components/addressInput/useTimePicker";
import useDayPicker from "@/components/addressInput/useDayPicker";

function ClientInformation() {
  const {
    provinces,
    amphures,
    tambons,
    selectedProvince,
    setSelectedProvince,
    selectedAmphure,
    setSelectedAmphure,
    selectedTambon,
    setSelectedTambon,
    address,
    setAddress,
  } = useFetchProvince();

  const {
    hour,
    minute,
    handleHour,
    handleMinute,
    clickHour,
    clickMinute,
    selectedTime,
    setSelectedTime,
  } = useTimePicker();

  const { thaiDate, date, setDate } = useDayPicker();

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
          setAddress={setAddress}
          hour={hour}
          minute={minute}
          handleHour={handleHour}
          handleMinute={handleMinute}
          clickHour={clickHour}
          clickMinute={clickMinute}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          date={date}
          setDate={setDate}
        />
        <OrderDetail
          thaiDate={thaiDate}
          selectedProvince={selectedProvince}
          selectedAmphure={selectedAmphure}
          selectedTambon={selectedTambon}
          address={address}
          selectedTime={selectedTime}
        />
      </div>
    </>
  );
}

export default ClientInformation;
