import { useState, useEffect } from "react";
import axios from "axios";

function useFetchData(endpoint, currentUserEmail) {
  const [fetchData, setFetchData] = useState<any>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(endpoint);
        console.log(response.data.data);
        setFetchData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [currentUserEmail]);

  return { fetchData };
}

export default useFetchData;
