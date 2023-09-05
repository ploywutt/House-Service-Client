import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/main";
import Homepage from "./pages/Homepage";
<<<<<<< HEAD
import UserLogin from "./pages/LoginPage";
=======
>>>>>>> ad48b4b140cd6cb6b282b6feb911637807c98bb4
import Registerpage from "./pages/Registerpage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />}></Route>
<<<<<<< HEAD
            <Route path="/login" element={<UserLogin />}></Route>
=======
>>>>>>> ad48b4b140cd6cb6b282b6feb911637807c98bb4
            <Route path="/register" element={<Registerpage />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
