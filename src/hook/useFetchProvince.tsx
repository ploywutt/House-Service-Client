import { useEffect, useState } from "react";
import axios from "axios";

function useFetchProvince() {
  const [provinces, setProvinces] = useState([]);
  const [amphures, setAmphures] = useState([]);
  const [tambons, setTambons] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedAmphure, setSelectedAmphure] = useState("");
  const [selectedTambon, setSelectedTambon] = useState("");

  const fetchProvince = async () => {
    try {
      const data = await axios.get("http://localhost:4000/area");
      // console.log(data.data);
      setProvinces(data.data);
    } catch (error) {
      console.error(error, "Error 400");
    }
  };

  const fetchDistrict = async () => {
    if (selectedProvince) {
      try {
        const data = await axios.get(
          `http://localhost:4000/area/amphure/${selectedProvince}`
        );
        // console.log(data.data);
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
          `http://localhost:4000/area/tambon/${selectedAmphure}`
        );
        // console.log(data.data);
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
    setSelectedAmphure("เลือกเขต / อำเภอ");
    setSelectedTambon("เลือกแขวง / ตำบล");
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
  };
}

export default useFetchProvince;
