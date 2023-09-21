import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

import avatar from "../../assets/image/Avatar-image-profile.png";

function EditProfile(props) {
  console.log(props.fetchData);
  const fullName = props.fetchData[0]?.name || "";
  const phone = props.fetchData[0]?.phone || "";
  const email = props.fetchData[0]?.email || "";

  const userInfo = [
    {
      label: "ชื่อ - นามสกุล",
      placeholder: fullName,
    },
    {
      label: "เบอร์โทร",
      placeholder: phone,
    },
    {
      label: "อีเมล",
      placeholder: email,
    },
    {
      label: "รหัสผ่านปัจจุบัน",
      placeholder: "xxxxxxxx",
    },
    {
      label: "รหัสผ่านใหม่",
      placeholder: "xxxxxxxx",
    },
    {
      label: "ยืนยันรหัสผ่านใหม่",
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
                อัพโหลดรูปภาพ
              </span>
            </label>
            <p className="p4 w-[223px] text-center text-gray-700">
              PNG, JPG ขนาดไม่เกิน 10MB
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
              ยกเลิก
            </Button>
            <Button className="px-2.5 py-6 w-[166px]">บันทึก</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
