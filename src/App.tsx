import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/main";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
