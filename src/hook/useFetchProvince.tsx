import { useEffect, useState } from "react";
import axios from "axios";

function useFetchProvince() {
  const [provinces, setProvinces] = useState([]);
  const [amphures, setAmphures] = useState([]);
  const [tambons, setTambons] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedAmphure, setSelectedAmphure] = useState("");
  const [selectedTambon, setSelectedTambon] = useState("");
  const [address, setAddress] = useState("");

  const fetchProvince = async () => {
    try {
      const data = await axios.get("http://localhost:4000/v1/user/province");
      // console.log("provinces:", data.data);
      setProvinces(data.data);
    } catch (error) {
      console.error(error, "Error 400");
    }
  };

  const fetchDistrict = async () => {
    if (selectedProvince) {
      try {
        const data = await axios.get(
          `http://localhost:4000/v1/user/province/amphure/${selectedProvince}`
        );
        // console.log("amphures:", data.data);
        setAmphures(data.data);
      } catch (error) {
        console.error(error, "Error 400");
      }
    }
  };

  const fetchSubDistrict = async () => {
    if (selectedAmphure) {
      try {
        const data = await axios.get(
          `http://localhost:4000/v1/user/province/tambon/${selectedAmphure}`
        );
        // console.log("tambons:", data.data);
        setTambons(data.data);
      } catch (error) {
        console.error(error, "Error 400");
      }
    }
  };

  useEffect(() => {
    fetchProvince();
    setAmphures([]);
  }, []);

  useEffect(() => {
    fetchDistrict();
    setSelectedAmphure("");
    setSelectedTambon("");
    setTambons([]);
  }, [selectedProvince]);

  useEffect(() => {
    fetchSubDistrict();
  }, [selectedAmphure]);

  return {
    provinces,
    amphures,
    tambons,
    selectedProvince,
    setSelectedProvince,
    selectedAmphure,
    setSelectedAmphure,
    selectedTambon,
    setSelectedTambon,
    address,
    setAddress,
  };
}

export default useFetchProvince;
