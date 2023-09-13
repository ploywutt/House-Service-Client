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
<<<<<<< HEAD
<<<<<<< HEAD

import ServiceDetail from "./pages/Servicedetail";
=======
<<<<<<< HEAD
=======
>>>>>>> 2f4f3b3 (rebase: solve conflict)
import Servicedetail from "./pages/Servicedetail";
>>>>>>> b4330df (rebase: solve conflict)
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
            <Route path="/orders" element={<OrderListPage />}></Route>
            <Route path="/shadcn" element={<Shadcn />}></Route>
          </Route>
          <Route element={<NoFooter />}>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<Registerpage />}></Route>
<<<<<<< HEAD
<<<<<<< HEAD
            <Route path="/service/:id" element={<ServiceDetail />}></Route>
=======
<<<<<<< HEAD
>>>>>>> b4330df (rebase: solve conflict)
=======
>>>>>>> 2f4f3b3 (rebase: solve conflict)
          </Route>
          <Route element={<ServiceFooter />}>
            <Route path="/test" element={<TimePicker />}></Route>
            <Route path="/address" element={<ClientInformation />}></Route>
<<<<<<< HEAD
           
            <Route path="/checkout" element={<CheckoutPage/>}></Route>
=======
            <Route path="/service" element={<Servicedetail />}></Route>
<<<<<<< HEAD
=======
            <Route path="/orders" element={<OrderListPage />}></Route>
            <Route path="/shadcn" element={<Shadcn />}></Route>
>>>>>>> 3b40dd0 (feat: make orderlist page)
>>>>>>> b4330df (rebase: solve conflict)
=======
>>>>>>> 2f4f3b3 (rebase: solve conflict)
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
