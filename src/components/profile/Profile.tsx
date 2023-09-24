import { useNavigate } from "react-router-dom";
// import useFetchData from "@/hook/useFetchData";
// import useFetchUserEmail from "@/hook/useFetchUserEmail";

import { Button } from "../ui/button";

import nameIcon from "../../assets/icon/info.svg";
import emailIcon from "../../assets/icon/email.svg";
import phoneIcon from "../../assets/icon/phone.svg";
import avatar from "../../assets/image/Avatar-image-profile.png";

import { useTranslation } from "react-i18next";

function Profile(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // const currentUserEmail = useFetchUserEmail();
  // const fetchData = useFetchData(
  //   `http://localhost:4000/v1/user/profile?email=${currentUserEmail}`,
  //   currentUserEmail
  // );
  // console.log(fetchData);

  const fullName = props.fetchData[0]?.name || "";
  const phone = props.fetchData[0]?.phone || "";
  const email = props.fetchData[0]?.email || "";

  // const fullName = fetchData.fetchData[0].name;
  // const phone = fetchData.fetchData[0].phone;
  // const email = fetchData.fetchData[0].email;

  const userData = [
    {
      id: "name",
      icon: nameIcon,
      content: fullName,
    },
    {
      id: "email",
      icon: emailIcon,
      content: email,
    },
    {
      id: "telephone",
      icon: phoneIcon,
      content: phone,
    },
  ];

  return (
    <div
      id="profile-box"
      className="w-[831px] h-fit bg-white border border-gray-300 p-6 flex flex-col gap-3 rounded-lg"
    >
      <div id="profile-content" className="flex gap-44 m-24 justify-evenly">
        <div id="avatar" className="flex flex-col gap-6 justify-center">
          <img src={avatar} alt="avatar" />
          <Button variant="secondary" onClick={() => navigate("/edit-profile")}>
            {t("edit_profile")}
          </Button>
        </div>
        <div id="info" className="flex flex-col gap-6 justify-center">
          {userData.map((item, index) => {
            return (
              <div key={index} id={item.id} className="flex gap-3">
                <img src={item.icon} alt={item.id} />
                <h2 className="text-blue-600">{item.content}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
