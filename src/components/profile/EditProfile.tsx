import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

import avatar from "../../assets/image/Avatar-image-profile.png";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import supabase from "@/auth/supabaseauth";
import axios from "axios";
import useFetchUserEmail from "@/hook/useFetchUserEmail";

function EditProfile(props) {
  const { t } = useTranslation();

  const currentUserEmail = useFetchUserEmail();
  console.log(`edit ${currentUserEmail}`);

  console.log(props.fetchData);
  const fullName = props.fetchData[0]?.name || "";
  const phone = props.fetchData[0]?.phone || "";
  const email = props.fetchData[0]?.email || "";
  const urlFromSPB = props.fetchData[0]?.avatar_url || avatar;
  // const urlFromSPB = `https://xgtmarqfhoqpodfgxvse.supabase.co/storage/v1/object/public/testing/HomeService/avatar/${currentUserEmail}`;

  // useEffect(() => {
  //   const urlFromSPB = props.fetchData[0]?.avatar_url || avatar;
  // }, []);

  useEffect(() => {
    setUrl(urlFromSPB);
  }, [urlFromSPB]);

  console.log(`urlFromSPB: ${urlFromSPB}`);

  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(urlFromSPB);
  const [inputValues, setInputValues] = useState({});
  const [passwordError, setPasswordError] = useState("");
  const [rePasswordError, setRePasswordError] = useState("");

  console.log(`url: ${url}`);

  console.log(inputValues);
  console.log(file);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });

    // Password validation
    // if (name === "newPassword") {
    //   if (value.length < 6) {
    //     setPasswordError("Password must be at least 6 characters long.");
    //   } else {
    //     setPasswordError("");
    //   }
    // }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setUrl(URL.createObjectURL(event.target.files[0]));
    // const { name } = event.target;
    // setInputValues({
    //   ...inputValues,
    //   [name]: `${URL.createObjectURL(event.target.files[0])}`,
    // });
  };

  const handleUpload = async () => {
    try {
      const { error } = await supabase.storage
        .from("testing")
        .remove([`HomeService/avatar/${currentUserEmail}`]);
      if (error) throw error;
    } catch (error) {
      console.log(`remove: ${error.message}`);
    }

    try {
      console.log("File deleted successfully");
      const { data, error } = await supabase.storage
        .from("testing")
        .upload(`HomeService/avatar/${currentUserEmail}`, file);
      console.log("File uploaded: ", data);
      if (error) throw error;
    } catch (error) {
      console.log(`upload: ${error.message}`);
    }

    try {
      const supabaseAvatarUrl = await supabase.storage
        .from("testing")
        .getPublicUrl(`HomeService/avatar/${currentUserEmail}`);

      console.log(supabaseAvatarUrl.data.publicUrl);

      setInputValues({
        ...inputValues,
        avatar_url: supabaseAvatarUrl.data.publicUrl,
      });
    } catch (error) {
      console.log(`getPublicUrl: ${error.message}`);
    }

    try {
      const response = await axios.put(
        `http://localhost:4000/v1/user/profile?email=${currentUserEmail}`,
        inputValues
      );
      console.log(response.data.message);
    } catch (error) {
      console.log(`getPublicUrl: ${error.message}`);
    }
  };

  const handleUpdate = async () => {
    if (file) {
      if (inputValues.newPassword !== inputValues.reNewPassword) {
        setRePasswordError("Passwords do not match.");
        return; // Do not proceed with the update
      } else {
        setRePasswordError("");
      }

      handleUpload();
    } else {
      // Check if newPassword and reNewPassword match
      if (inputValues.newPassword !== inputValues.reNewPassword) {
        setRePasswordError("Passwords do not match.");
        return; // Do not proceed with the update
      } else {
        setRePasswordError("");
      }

      try {
        const response = await axios.put(
          `http://localhost:4000/v1/user/profile?email=${currentUserEmail}`,
          inputValues
        );
        console.log(response.data.message);
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
  };

  const userInfo = [
    {
      label: t("edit_profile_page.name_fullname"),
      placeholder: fullName,
      varName: "name",
    },
    {
      label: t("edit_profile_page.telephone"),
      placeholder: phone,
      varName: "phone",
    },
    {
      label: t("edit_profile_page.email"),
      placeholder: email,
      varName: "email",
    },
  ];

  const userPasswordInfo = [
    {
      label: t("edit_profile_page.current_password"),
      placeholder: "xxxxxxxx",
      varName: "password",
    },
    {
      label: t("edit_profile_page.new_password"),
      placeholder: "xxxxxxxx",
      varName: "newPassword",
    },
    {
      label: t("edit_profile_page.confirm_password"),
      placeholder: "xxxxxxxx",
      varName: "reNewPassword",
    },
  ];

  return (
    <div
      id="profile-box"
      className="w-[831px] h-fit bg-white border border-gray-300 flex flex-col gap-3 rounded-lg"
    >
      <div
        id="container"
        className="flex gap-24 justify-evenly items-center m-16"
      >
        <div id="avatar" className="flex flex-col gap-10 items-center">
          <img
            src={url}
            alt="avatar"
            id="avatar"
            className="w-[150px] h-[150px] rounded-full"
          />
          <div id="upload" className="flex flex-col gap-1">
            <input
              id="file"
              type="file"
              name="avatar_url"
              accept=".jpg, .jpeg, .png, .gif"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file"
              className="flex flex-col items-center cursor-pointer"
            >
              <span className="p3 border border-blue-600 rounded-lg px-[6px] py-0 text-blue-600 ">
                {t("edit_profile_page.upload_picture")}
              </span>
            </label>
            <p className="p4 w-[223px] text-center text-gray-700">
              {t("edit_profile_page.required_picture")}
            </p>
          </div>
        </div>
        <div id="user-info" className="flex flex-col gap-5">
          {userInfo.map((item, index) => (
            <div id="input-container" key={index}>
              <Label htmlFor={item.label}>{item.label}</Label>
              <Input
                id={item.varName}
                name={item.varName}
                placeholder={item.placeholder}
                value={inputValues[item.varName]}
                onChange={handleInputChange}
              />
            </div>
          ))}
          <hr />
          <h6 className="text-center text-gray-600">เปลี่ยนรหัสผ่าน</h6>
          {userPasswordInfo.map((item, index) => (
            <div id="input-container" key={index}>
              <Label htmlFor={item.label}>{item.label}</Label>
              <Input
                id={item.varName}
                name={item.varName}
                placeholder={item.placeholder}
                value={inputValues[item.varName]}
                onChange={handleInputChange}
                disabled={item.varName !== "password" && !inputValues.password}
              />
              {item.varName === "newPassword" && passwordError && (
                <p className="text-red-500">{passwordError}</p>
              )}
              {item.varName === "reNewPassword" && rePasswordError && (
                <p className="text-red-500">{rePasswordError}</p>
              )}
            </div>
          ))}

          <div id="buttons" className="flex justify-between mt-20">
            <Button variant={"secondary"} className="px-2.5 py-6 w-[166px]">
              {t("edit_profile_page.cancel")}
            </Button>
            <Button className="px-2.5 py-6 w-[166px]" onClick={handleUpdate}>
              {t("edit_profile_page.save")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
