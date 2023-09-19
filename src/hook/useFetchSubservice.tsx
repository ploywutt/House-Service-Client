import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function useFetchSubservice() {
  const { id } = useParams();

  const [subservice, setSubservice] = useState([]);

  const fetchSubService = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/v1/user/subservices/${id}`
      );
      console.log(response.data.data);
      setSubservice(response.data.data);
    } catch (error) {
      console.error(error, "Error 400");
    }
  };

  useEffect(() => {
    fetchSubService();
  }, []);

  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  //
  // const price = subservice.price_per_unit;
  // console.log(`price: ${price}`);
  // console.log(`subservice: ${subservice}`);
  // let totalprices = [];

  // {
  //   subservice.map((item) => {
  //     const price = item.price_per_unit;
  //     const amount = count;
  //     const totalprice = price * amount;
  //     totalprices.push(totalprice);
  //     console.log(`totalprice: ${totalprice}`);
  //   });
  // }

  // console.log(`totalprices: ${totalprices}`);

  return {
    subservice,
    setSubservice,
    handleIncrement,
    handleDecrement,
    setCount,
    count,
  };
}
