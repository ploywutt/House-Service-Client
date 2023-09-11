import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/main";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import Registerpage from "./pages/Registerpage";
import Shadcn from "./pages/shadecn-test";
import Servicedetail from "./pages/Servicedetail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<Registerpage />}></Route>
            <Route path="/service" element={<Servicedetail />}></Route>
            <Route path="/shadcn" element={<Shadcn />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
