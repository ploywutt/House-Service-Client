import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <div>
        <Button className="bg-blue-500">Click me</Button>
      </div>
    </>
  );
}

export default App;
