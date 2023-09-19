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
import ClientInformation from "./pages/ClientInformation";
import ServiceDetail from "./pages/Servicedetail";
import OrderListPage from "./pages/OrderListPage";
import CheckoutPage from "./pages/CheckoutPage";
import ServicePayment from "./pages/Servicepayment";
import HistoryPage from "./pages/HistoryPage";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/servicelist" element={<Servicelistpage />}></Route>
            <Route path="/shadcn" element={<Shadcn />}></Route>
            <Route path="/orders" element={<OrderListPage />}></Route>
            <Route path="/history" element={<HistoryPage />}></Route>
          </Route>
          <Route element={<NoFooter />}>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<Registerpage />}></Route>
            <Route path="/service/:id" element={<ServiceDetail />}></Route>
            <Route path="/payment" element={<ServicePayment />}></Route>
            <Route path="/address" element={<ClientInformation />}></Route>
          </Route>
          <Route element={<ServiceFooter />}>
            <Route path="/checkout" element={<CheckoutPage />}></Route>
          </Route>
        </Routes>
      </Router>
    </I18nextProvider>
  );
}
export default App;
