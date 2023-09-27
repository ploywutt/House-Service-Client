import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

import avatar from "../../assets/image/null-avatar.svg";

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
  // const imagePath = 'https://xgtmarqfhoqpodfgxvse.supabase.co/storage/v1/object/public/testing/HomeService/avatar/admin@mail.com'

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

  // console.log(inputValues);
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
      // Step 1: Remove the existing avatar image
      const { error: removeError } = await supabase.storage
        .from("testing")
        .remove([`HomeService/avatar/${currentUserEmail}`]);

      if (removeError) {
        throw removeError;
      }

      console.log("Step 1: File removed successfully");

      // Step 2: Upload the new avatar image
      const { data, error: uploadError } = await supabase.storage
        .from("testing")
        .upload(`HomeService/avatar/${currentUserEmail}`, file);

      if (uploadError) {
        throw uploadError;
      }

      console.log("Step 2: File uploaded successfully", data);

      // Step 3: Download the new avatar image
      const { data: downloadedData, error: downloadError } =
        await supabase.storage
          .from("testing")
          .download(`HomeService/avatar/${currentUserEmail}`);

      if (downloadError) {
        throw downloadError;
      }

      console.log("Step 3: File downloaded successfully", downloadedData);

      // Step 4: Set the new avatar URL in the state
      // setInputValues({
      //   ...inputValues,
      //   avatar_url: `${URL.createObjectURL(downloadedData)}`,
      // });

      const createdUrl = URL.createObjectURL(downloadedData);
      console.log("createdUrl", createdUrl);

      const { data: updateUrlData, error: updateUrlError } = await supabase
        .from("Customer_profile")
        .update({ avatar_url: createdUrl });

      if (updateUrlError) {
        throw updateUrlError;
      }

      console.log("Step 4: Avatar URL set in state", updateUrlData);

      // Step 5: Update user profile with input values
      const response = await axios.put(
        `http://localhost:4000/v1/user/profile?email=${currentUserEmail}`,
        inputValues
      );

      console.log("Step 5: User profile updated successfully", response.data);
    } catch (error) {
      console.error("Error during avatar upload/update:", error.message);
    }
  };

  const handleUpdate = async () => {
    // Step 1: Check if a file is selected for avatar update
    if (file) {
      // Step 2: Check if newPassword and reNewPassword match
      if (inputValues.newPassword !== inputValues.reNewPassword) {
        setRePasswordError("Passwords do not match.");
        return; // Do not proceed with the update
      } else {
        setRePasswordError("");
      }

      // Step 3: Upload the new avatar and update the profile
      handleUpload();
    } else {
      // Step 4: Check if newPassword and reNewPassword match
      if (inputValues.newPassword !== inputValues.reNewPassword) {
        setRePasswordError("Passwords do not match.");
        return; // Do not proceed with the update
      } else {
        setRePasswordError("");
      }

      try {
        // Step 5: Update user profile without avatar change
        const response = await axios.put(
          `http://localhost:4000/v1/user/profile?email=${currentUserEmail}`,
          inputValues
        );

        // Step 6: Log the response data
        console.log("Step 6: User profile updated successfully", response.data);
      } catch (error) {
        console.log(
          "Error during profile update:",
          error.response.data.message
        );
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
            className="w-[150px] h-[150px] rounded-full object-cover"
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
