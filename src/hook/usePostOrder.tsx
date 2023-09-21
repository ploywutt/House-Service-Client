import useFetchUserEmail from "./useFetchUserEmail";
import { useState } from "react";
import axios from "axios";

const useCreateOrder = async (data) => {
  const userEmail = useFetchUserEmail();
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //   const [order, setOrder] = useState({});

  try {
    setIsError(false);
    setIsLoading(true);

    const postData = {
      ...data,
      email: userEmail,
    };

    const response = await axios.post(
      `http://localhost:4000/v1/user/orderdetails`,
      postData
    );

    // setOrder(response.data);
    setIsLoading(false);
  } catch (error) {
    setIsError(true);
    setIsLoading(false);
  }

  return {
    // setOrder
    // order,
    isError,
    isLoading,
  };
};

export default useCreateOrder;
