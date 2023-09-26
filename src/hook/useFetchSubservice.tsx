import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function useFetchSubservice() {
  const { id } = useParams();

  const [subservice, setSubservice] = useState([]);
  const [counts, setCounts] = useState([]);
  const [serviceName, setServiceName] = useState<string>("");

  const fetchSubService = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/v1/user/subservices/${id}`
      );
      // console.log("res", response.data.data);
      setSubservice(response.data.data);
      // console.log("name", response.data.data[0].services?.service_name);
      setServiceName(response.data.data[0].services?.service_name);

      setCounts(
        response.data.data.map((item) => ({
          count: 0,
          price: item.price_per_unit,
          name: item.sub_service_name,
          unit: item.unit,
        }))
      );
    } catch (error) {
      console.error(error, "Error 400");
    }
  };

  useEffect(() => {
    fetchSubService();
  }, []);

  const handleIncrement = (index: number) => {
    const updatedCounts = [...counts];
    updatedCounts[index].count += 1;
    setCounts(updatedCounts);
  };
  const handleDecrement = (index: number) => {
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

  // console.log(calculateTotalPrice());
  // console.log(`Hook: ${subservice}`);

  return {
    subservice,
    setSubservice,
    handleIncrement,
    handleDecrement,
    setCounts,
    counts,
    totalprice,
    serviceName,
  };
}
