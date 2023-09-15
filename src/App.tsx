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
import ServiceDetail from "./pages/Servicedetail";
import ClientInformation from "./pages/ClientInformation";
import TimePicker from "./components/TimePicker";
import OrderListPage from "./pages/OrderListPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/servicelist" element={<Servicelistpage />}></Route>
            <Route path="/shadcn" element={<Shadcn />}></Route>
          </Route>
          <Route element={<NoFooter />}>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<Registerpage />}></Route>
          </Route>
          <Route element={<ServiceFooter />}>
            <Route path="/test" element={<TimePicker />}></Route>
            <Route path="/address" element={<ClientInformation />}></Route>
            <Route path="/checkout" element={<CheckoutPage />}></Route>
            <Route path="/orders" element={<OrderListPage />}></Route>
            <Route path="/service/:id" element={<ServiceDetail />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
