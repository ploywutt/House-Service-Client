import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/main";
import Homepage from "./pages/Homepage";
import UserLogin from "./pages/LoginPage";
import Registerpage from "./pages/Registerpage";
import Shadcn from "./pages/shadecn-test";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/login" element={<UserLogin />}></Route>
            <Route path="/register" element={<Registerpage />}></Route>
            <Route path="/shadcn" element={<Shadcn />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
