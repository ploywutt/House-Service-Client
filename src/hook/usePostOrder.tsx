// useCreateOrder.js
import useFetchUserEmail from "./useFetchUserEmail";
import { useState } from "react";
import axios from "axios";

const useCreateOrder = async (data: any) => {
  const userEmail = useFetchUserEmail();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  setIsLoading(true);

  const postData = {
    ...data,
    email: userEmail,
  };

  const response = await axios.post(
    `http://localhost:4000/v1/user/orderdetails`,
    postData
  );
  setIsLoading(false);

  return {
    responseData: response.data,
  };
};

export default useCreateOrder;
