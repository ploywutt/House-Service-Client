import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

import avatar from "../../assets/image/Avatar-image-profile.png";

import { useTranslation } from "react-i18next";

function EditProfile(props) {
  const { t } = useTranslation();
  console.log(props.fetchData);
  const fullName = props.fetchData[0]?.name || "";
  const phone = props.fetchData[0]?.phone || "";
  const email = props.fetchData[0]?.email || "";

  const userInfo = [
    {
      label: t("edit_profile_page.name_fullname"),
      placeholder: fullName,
    },
    {
      label: t("edit_profile_page.telephone"),
      placeholder: phone,
    },
    {
      label: t("edit_profile_page.email"),
      placeholder: email,
    },
    {
      label: t("edit_profile_page.current_password"),
      placeholder: "xxxxxxxx",
    },
    {
      label: t("edit_profile_page.new_password"),
      placeholder: "xxxxxxxx",
    },
    {
      label: t("edit_profile_page.confirm_password"),
      placeholder: "xxxxxxxx",
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
          <img src={avatar} alt="avatar" />
          <div id="upload" className="flex flex-col gap-1">
            <input
              id="file"
              type="file"
              accept=".jpg, .jpeg, .png, .gif"
              className="hidden"
              // onChange={this.handleFileUpload}
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
              <Input id={item.label} placeholder={item.placeholder} />
            </div>
          ))}

          <div id="buttons" className="flex justify-between mt-20">
            <Button variant={"secondary"} className="px-2.5 py-6 w-[166px]">
              {t("edit_profile_page.cancel")}
            </Button>
            <Button className="px-2.5 py-6 w-[166px]">
              {t("edit_profile_page.save")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
