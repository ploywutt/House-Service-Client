import { useEffect } from "react";
import nameIcon from "../../assets/icon/info.svg";
import emailIcon from "../../assets/icon/email.svg";
import phoneIcon from "../../assets/icon/phone.svg";

function Profile() {
  useEffect(() => {}, []);

  const userData = [
    {
      id: "name",
      icon: nameIcon,
      content: "fullname",
    },
    {
      id: "email",
      icon: emailIcon,
      content: "admin@mail.com",
    },
    {
      id: "telephone",
      icon: phoneIcon,
      content: "0123456789",
    },
  ];

  return (
    <div
      id="profile"
      className="w-[831px] h-fit bg-white border border-gray-300 p-6 flex flex-col gap-3 rounded-lg"
    >
      <div id="avatar"></div>
      <div id="info">
        {userData.map((item, index) => {
          return (
            <div key={index} id={item.id}>
              <img src={item.icon} alt={item.id} />
              <p id={item.content}></p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
