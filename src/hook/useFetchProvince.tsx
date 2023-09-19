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
  const [isProvince, setIsProvince] = useState(true);

  const fetchProvince = async () => {
    try {
      const data = await axios.get("http://localhost:4000/area");
      console.log("provinces:", data.data);
      console.log(isProvince);
      setProvinces(data.data);
    } catch (error) {
      console.error(error, "Error 400");
    }
  };

  const fetchDistrict = async () => {
    // if (provinces && !selectedProvince) {
    //   setIsProvince(false);
    //   console.log(isProvince);
    // }

    if (selectedProvince) {
      try {
        const data = await axios.get(
          `http://localhost:4000/area/amphure/${selectedProvince}`
        );
        console.log("amphures:", data.data);
        setAmphures(data.data);
        console.log(isProvince);
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
        console.log("tambons:", data.data);
        setTambons(data.data);
      } catch (error) {
        console.error(error, "Error 400");
      }
    }
  };

  useEffect(() => {
    fetchProvince();
    setAmphures([]);
    setIsProvince(true);
  }, []);

  useEffect(() => {
    fetchDistrict();
    setSelectedAmphure("");
    setSelectedTambon("");
    setTambons([]);
    // setIsProvince(true);
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
    isProvince,
    setIsProvince,
  };
}

export default useFetchProvince;