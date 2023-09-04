import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/main";
import Homepage from "./pages/Homepage";
import UserLogin from "./pages/UserLogin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/login" element={<UserLogin />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
