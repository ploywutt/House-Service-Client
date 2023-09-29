import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/main";
import NoFooter from "./layouts/withoutfooter";
import ServiceFooter from "./layouts/service-footer";
import Homepage from "./pages/Homepage";
import Servicelistpage from "./pages/Servicelistpage";
import LoginPage from "./pages/LoginPage";
import Registerpage from "./pages/Registerpage";
import Shadcn from "./pages/shadecn-test";
// import ClientInformation from "./pages/ClientInformation";
import ServiceDetail from "./pages/Servicedetail";
import OrderListPage from "./pages/OrderListPage";
// import ServicePayment from "./pages/Servicepayment";
import HistoryPage from "./pages/HistoryPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "@/components/ThemeProvider";
import CheckoutForm from "./pages/CheckoutPage";

// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe(
//   "pk_test_51NozskHa6CHfGgr1Mlek2lwtRJjpDwWxNA0gn2HOsVJpCHvdw8IU3SC49hc4w38V8tAW8i3AexxQD7PJ9JACmlt800wDbJcXNt"
// );

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <I18nextProvider i18n={i18n}>
        {/* <Elements stripe={stripePromise}> */}
        <Router>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/servicelist" element={<Servicelistpage />}></Route>
              <Route path="/shadcn" element={<Shadcn />}></Route>
              <Route path="/orders" element={<OrderListPage />}></Route>
              <Route path="/history" element={<HistoryPage />}></Route>
              <Route path="/profile" element={<ProfilePage />}></Route>
              <Route path="/edit-profile" element={<EditProfilePage />}></Route>
            </Route>
            <Route element={<NoFooter />}>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/register" element={<Registerpage />}></Route>
              <Route path="/service/:id" element={<ServiceDetail />}></Route>
              {/* <Route path="/payment" element={<ServicePayment />}></Route> */}
              {/* <Route path="/address" element={<ClientInformation />}></Route> */}
            </Route>
            <Route element={<ServiceFooter />}>
              <Route path="/checkout" element={<CheckoutForm />}></Route>
            </Route>
          </Routes>
        </Router>
        {/* </Elements> */}
      </I18nextProvider>
    </ThemeProvider>
  );
}
export default App;
