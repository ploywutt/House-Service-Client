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
  const [detail, setDetail] = useState("");

  const fetchProvince = async () => {
    try {
      const data = await axios.get(
        "https://home-service-server.onrender.com/v1/user/province"
      );
      // console.log("provinces:", data.data);
      setProvinces(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDistrict = async () => {
    if (selectedProvince) {
      try {
        const data = await axios.get(
          `https://home-service-server.onrender.com/v1/user/province/amphure/${selectedProvince}`
        );
        // console.log("amphures:", data.data);
        setAmphures(data.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const fetchSubDistrict = async () => {
    if (selectedAmphure) {
      try {
        const data = await axios.get(
          `https://home-service-server.onrender.com/v1/user/province/tambon/${selectedAmphure}`
        );
        // console.log("tambons:", data.data);
        setTambons(data.data);
      } catch (error) {
        console.error(error);
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
    detail,
    setDetail,
  };
}

export default useFetchProvince;
