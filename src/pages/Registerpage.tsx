import React, { useState } from "react";
import axios from "axios";
// import { Button } from "@/components/ui/button";
// import faceBookLogo from "../assets/icon/facebook_logos.png";

const Registerpage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/register", formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center pt-12">
      <div className="w-300 h-300 pt-8 pb-8 px-12 bg-white rounded-lg border border-gray-300 flex-col justify-center items-center inline-flex">
        <h2>ลงทะเบียนผู้ใช้ใหม่</h2>
        <form onSubmit={handleSubmit}>
          <div className="InputStyle w-[440px] h-[72px] flex-col justify-start items-start gap-1 inline-flex">
            <label
              className=" w-[126px] h-4 text-gray-600 text-lg font-medium"
              htmlFor="fullName"
            >
              ชื่อ-นามสกุล
            </label>
            <br />
            <input
              className="Rectangle7 w-[460px] h-[38px] bg-white rounded-[5px] border border-zinc-400"
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="Frame17 w-[460px] h-[73px] flex-col justify-center items-start gap-[19px] inline-flex">
            <label htmlFor="phoneNumber">เบอร์โทรศัพท์</label>
            <br />
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">อีเมลล์</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="username">ชื่อผู้ใช้</label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">รหัสผ่าน</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <p>
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              required
            />
            <label htmlFor="acceptTerms">
              คุณได้ยอมรับ ข้อตกลงและเงื่อนไข และ นโยบายความเป็นส่วนตัว
            </label>
          </p>

          <button type="submit">ลงทะเบียน</button>
          <button type="button">เข้าสู่ระบบ</button>
          <p>หรือ</p>
          <button type="button">เข้าสู่ระบบด้วย Facebook</button>
        </form>
        <button type="button" onClick={() => history.push("/login")}>
          กลับเข้าสู่หน้าเข้าสู่ระบบ
        </button>
      </div>
    </div>
  );
};

//term
//

export default Registerpage;
