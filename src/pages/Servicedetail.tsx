import "../assets/css/servicedetailbanner.css";

import BreadCrumb from "@/components/service/servicebreadcrumb";
import Stepper from "@/components/stepper";
import ServiceFooterButton from "@/components/service/servicefooterbutton";

import Subservice from "../components/service/Subservice";
import ClientInput from "@/components/ClientInput";
import CheckoutPage from "./CheckoutPage";
import OrderDetail from "../components/OrderDetail";

import useStepper from "@/hook/useStepper";
import useFetchSubservice from "@/hook/useFetchSubservice";
import useFetchProvince from "@/hook/useFetchProvince";
import useTimePicker from "@/components/addressInput/useTimePicker";
import useDayPicker from "@/components/addressInput/useDayPicker";

import AlertPayment from "./Servicepayment";

function Servicedetail() {
  const navigate = useNavigate();
  const pathname = usePathname();

  useEffect(() => {
    try {
      async () => {
        const { data, error } = await supabase.auth.getUser();
        console.log("session", data);
        if (data.user) {
          navigate(pathname);
        } else {
          navigate("/login");
        }
      };
    } catch (error) {
      console.error(error);
    }
  }, []);

  const { currentStep, steppermenu, handleBack, handleNext } = useStepper();
  const {
    serviceName,
    subservice,
    handleIncrement,
    handleDecrement,
    counts,
    totalprice,
  } = useFetchSubservice();

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
      <div className="flex flex-col">
        <div className="relative">
          <div className="service-detail-banner w-full h-60">
            <section>
              <div
                id="container-1"
                className="z-10 relative flex flex-col gap-12 px-52 py-[5rem]"
              >
                <BreadCrumb serviceName={serviceName} />

                <div className="w-full h-[129px] bg-white  rounded-lg border border-gray-300">
                  <div>
                    <Stepper
                      value={steppermenu}
                      currentStep={currentStep}
                      className="w-[50rem]"
                    ></Stepper>
                  </div>
                </div>
                <div
                  id="container-2"
                  className="flex flex-row justify-between h-full"
                >
                  {currentStep === 1 && (
                    <Subservice
                      subservice={subservice}
                      counts={counts}
                      handleDecrement={handleDecrement}
                      handleIncrement={handleIncrement}
                    />
                  )}
                  {currentStep === 2 && (
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
                  )}
                  {currentStep === 3 && <CheckoutPage />}
                  <OrderDetail
                    totalprice={totalprice}
                    counts={counts}
                    date={date}
                    thaiDate={thaiDate}
                    selectedProvince={selectedProvince}
                    selectedAmphure={selectedAmphure}
                    selectedTambon={selectedTambon}
                    address={address}
                    selectedTime={selectedTime}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 z-10 w-full">
        <ServiceFooterButton
          handleBack={handleBack}
          handleNext={handleNext}
          currentStep={currentStep}
        ></ServiceFooterButton>
      </div>
    </>
  );
}

export default Servicedetail;
