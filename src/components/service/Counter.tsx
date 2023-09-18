import PlusIcon from "../../assets/icon/plus_icon.png";
import NegativeIcon from "../../assets/icon/negative_icon.png";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="w-36 h-11 justify-center items-start inline-flex">
      <button
        onClick={handleDecrement}
        className="w-11 pl-3 pr-2.5 pt-2.5 pb-3 bg-white hover:opacity-50 rounded-lg border border-blue-600 "
      >
        <img src={NegativeIcon} alt="Negative Icon" className="h-4 w-4" />
      </button>
      <div className="grow shrink py-2 justify-center items-center">
        <h5 className="text-center text-gray-600">{count}</h5>
      </div>
      <button
        onClick={handleIncrement}
        className="w-11 pl-3 pr-2.5 pt-2.5 pb-3 bg-white hover:opacity-50 rounded-lg border border-blue-600 "
      >
        <img src={PlusIcon} alt="Plus Icon" className="h-4 w-4" />
      </button>
    </div>
  );
}
