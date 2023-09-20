import axios from "axios";
import { count } from "console";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function useFetchSubservice() {
  const { id } = useParams();

  const [subservice, setSubservice] = useState([]);
  const [counts, setCounts] = useState([]);

  const fetchSubService = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/v1/user/subservices/${id}`
      );
      console.log(response.data.data);
      setSubservice(response.data.data);

      setCounts(
        response.data.data.map((item) => ({
          count: 0,
          price: item.price_per_unit,
        }))
      );
    } catch (error) {
      console.error(error, "Error 400");
    }
  };

  useEffect(() => {
    fetchSubService();
  }, []);

  // ตัวจริง
  // const [count, setCount] = useState(0);
  // const handleIncrement = () => setCount(count + 1);
  // const handleDecrement = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };
  // console.log(`countHook: ${count}`);

  // ตัวลอง
  const handleIncrement = (index) => {
    const updatedCounts = [...counts];
    updatedCounts[index].count += 1;
    setCounts(updatedCounts);
  };
  const handleDecrement = (index) => {
    if (counts[index].count > 0) {
      const updatedCounts = [...counts];
      updatedCounts[index].count -= 1;
      setCounts(updatedCounts);
    }
  };

  console.log(counts);

  const calculateTotalPrice = () => {
    return counts.reduce((total, item) => total + item.price * item.count, 0);
  };

  const totalprice = calculateTotalPrice();

  console.log(calculateTotalPrice());

  return {
    subservice,
    setSubservice,
    handleIncrement,
    handleDecrement,
    setCounts,
    counts,
    totalprice,
  };
}
