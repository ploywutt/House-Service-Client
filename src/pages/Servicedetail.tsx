import "../assets/css/servicedetailbanner.css";

import BreadCrumb from "@/components/service/servicebreadcrumb";
import Stepper from "@/components/stepper";
import ServiceFooterButton from "@/components/service/servicefooterbutton";

import Subservice from "../components/service/Subservice";
import ClientInput from "@/components/ClientInput";
import OrderDetail from "../components/OrderDetail";
import CheckoutForm from "./PaymentForm";
// import CheckoutPage from "./CheckoutPage";

import useStepper from "@/hook/useStepper";
import useFetchSubservice from "@/hook/useFetchSubservice";
import useFetchProvince from "@/hook/useFetchProvince";
import useTimePicker from "@/components/addressInput/useTimePicker";
import useDayPicker from "@/components/addressInput/useDayPicker";
import usePathname from "@/hook/usePathname";
import { useEffect, useState } from "react";

import supabase from "@/auth/supabaseauth";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useClientSecretStripe from "@/hook/useClientSecretStripe";

const stripePromise = loadStripe(
  "pk_test_51NozskHa6CHfGgr1Mlek2lwtRJjpDwWxNA0gn2HOsVJpCHvdw8IU3SC49hc4w38V8tAW8i3AexxQD7PJ9JACmlt800wDbJcXNt"
);

//login----------------------------------------------------//
function Servicedetail() {
  const { pathname, navigate } = usePathname();

  useEffect(() => {
    async function fetchUser() {
      try {
        const { data, error } = await supabase.auth.getSession();
        console.log(data);
        if (data.session) {
          navigate(pathname);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchUser();
  }, []);

  //stripe----------------------------------------------------//

  const { clientSecret, createPaymentIntent } = useClientSecretStripe();

  useEffect(() => {
    createPaymentIntent();
  }, []);

  // const [clientSecret, setClientSecret] = useState("");
  // const createPaymentIntent = async () => {
  //   const data = await axios.post(
  //     "http://localhost:4000/create-payment-intent",
  //     { price: 500000 }
  //   );
  //   console.log("stripe", data.data);
  //   setClientSecret(data.data.clientSecret);
  // };

  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#336DF2",
      colorBackground: "#fff",
    },
  };

  const options = {
    appearance,
    clientSecret,
  };

  //-------------------------------------------------------------------------//
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
    detail,
    setDetail,
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

  const addressInfo = {
    address,
    selectedTambon,
    selectedAmphure,
    selectedProvince,
  };

  return (
    <>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <div className="flex flex-col h-[1150px]">
            <div className="relative">
              <div className="service-detail-banner w-full h-60">
                <section>
                  <div
                    id="container-1"
                    className="z-10 relative flex flex-col gap-12 px-52 py-[5rem]"
                  >
                    <BreadCrumb serviceName={serviceName} />

                    <div className="w-full h-[129px] bg-white  rounded-lg border border-gray-300 dark:bg-gray-800">
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
                          thaiDate={thaiDate}
                          setDetail={setDetail}
                        />
                      )}

                      {currentStep === 3 && (
                        <CheckoutForm
                          totalprice={totalprice}
                          counts={counts}
                          date={date}
                          thaiDate={thaiDate}
                          selectedTime={selectedTime}
                          address={address}
                          detail={detail}
                        />
                      )}

                      <OrderDetail
                        totalprice={totalprice}
                        counts={counts}
                        date={date}
                        thaiDate={thaiDate}
                        address={addressInfo}
                        selectedTime={selectedTime}
                        //promotion={}
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
              totalprice={totalprice}
              counts={counts}
              date={date}
              thaiDate={thaiDate}
              selectedTime={selectedTime}
              address={addressInfo}
              detail={detail}
            ></ServiceFooterButton>
          </div>
        </Elements>
      )}
    </>
  );
}

export default Servicedetail;
