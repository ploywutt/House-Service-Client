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
import Servicedetail from "./pages/Servicedetail";

import CalendarDemo from "./components/DayPicker";

import AddressInput from "./pages/AddressPage";

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
            <Route path="/test" element={<CalendarDemo />}></Route>
            <Route path="/address" element={<AddressInput />}></Route>
          </Route>
          <Route element={<ServiceFooter />}>
            <Route path="/service" element={<Servicedetail />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
