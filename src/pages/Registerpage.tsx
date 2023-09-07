import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import faceBookLogo from "../assets/icon/facebook_logos.png";
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router";

const Registerpage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  
  const handleChange = async (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/register', formData);
      console.log(response.data.message);
      navigate("/")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-start items-center">
      <div className="w-[614px] h-auto py-[32px] px-[12px]  mt-[52px] mb-[82px] bg-white rounded-lg border border-gray-300 flex-col justify-center  items-center inline-flex"
>
      <h1 className="mt-[32px]">ลงทะเบียน</h1>
      
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
        <div className="inline-flex flex-col gap-[20px]">
          <div>
            <label className="mt-[16px] " htmlFor="fullName">ชื่อ-นามสกุล <span className= "text-utility-red">*</span></label>
            <br />
            <Input
              type="text"
              id="name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div >
            <label htmlFor="phoneNumber">เบอร์โทรศัพท์ <span className= "text-utility-red">*</span> </label>
            <br />
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">อีเมล <span className= "text-utility-red">*</span> </label>
            <br />
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <label htmlFor="password">รหัสผ่าน <span className= "text-utility-red">*</span></label>
            <br />
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mt-[42px] mb-[1px] flex justify-center items-center inline-flex">
          
            <input className="mr-[16px] w-[24px] h-[24px]"
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              required
            />
            
            <label htmlFor="acceptTerms">
              ยอมรับ  <Button variant="link" className="p-0 h-0" >ข้อตกลงและเงื่อนไข</Button> และ <Button variant="link" className="p-0 h-0">นโยบายความเป็นส่วนตัว</Button>
            </label>
         
        </div>
        


        <Button className="mt-[20px]"   type="submit">ลงทะเบียน</Button>


        <div className="mt-[32px] mb-[31px] w-96 h-5 justify-center items-center gap-2 inline-flex">
          <div className="grow shrink basis-0 h-px bg-gray-400" />
          <div className="text-center text-gray-500 text-sm font-normal leading-tight">
            หรือลงชื่อเข้าใช้ผ่าน
          </div>
          <div className="grow shrink basis-0 h-px bg-gray-400" />
        </div>
      
        
          <Button
              variant="secondary"
              className="w-96 h-11 px-6 py-2.5 no-underline rounded-lg border border-blue-600 text-blue-600  justify-center items-center gap-2 inline-flex m-8"
            >
              <img src={faceBookLogo} className="mr-2 h-4 w-4" />
              เข้าสู่ระบบด้วย Facebook
            </Button>
            <br/>
            <Button variant="link"   onClick={() =>("/login")}>
            กลับไปหน้าเข้าสู่ระบบ
        </Button>
      </form>
      

      
    </div>
    </div>
  );
};




export default Registerpage ;
