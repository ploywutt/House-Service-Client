import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "./layouts/main";
import Homepage from "./pages/Homepage";
import Registerpage from "./pages/Registerpage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/register" element={<Registerpage />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
