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
      <div className="h-[700px] flex justify-between items-center p-[20rem]">
        <ClientInput
          provinces={provinces}
          amphures={amphures}
          tambons={tambons}
          selectedProvince={selectedProvince}
          setSelectedProvince={setSelectedProvince}
          setSelectedAmphure={setSelectedAmphure}
          selectedAmphure={selectedAmphure}
          setSelectedTambon={setSelectedTambon}
          selectedTambon={selectedTambon}
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
          date={date}
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
