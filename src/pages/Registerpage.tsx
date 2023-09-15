import { Button } from "@/components/ui/button";
import googleLogo from "../assets/icon/google_logos.svg";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import useRegister from "../hook/useRegister";
import { Modals } from "@/components/Modal";

const Registerpage = () => {
  const {
    formData,
    handleChange,
    handleSubmit,
    navigate,
    signInWithGoogle,
    
  } = useRegister();
 
  return (
    <div className="flex justify-center pt-12">
      <div className="w-[550px] h-auto py-[32px] px-[12px]  mt-[52px] mb-[82px] bg-white rounded-lg border border-gray-300 flex-col justify-center  items-center inline-flex">
        <h1>ลงทะเบียน</h1>
        
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
        >
          <div className="inline-flex flex-col gap-[20px] m-2">
            <div>
              <label className="mt-[16px] " htmlFor="fullName">
                ชื่อ-นามสกุล <span className="text-utility-red">*</span>
              </label>
              <br />
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="กรุณากรอกชื่อ นามสกุล"
                value={formData.name}
                onChange={handleChange}
                required
              />
              
           
            </div>

            <div>
              <label htmlFor="phoneNumber">
                เบอร์โทรศัพท์ <span className="text-utility-red">*</span>{" "}
              </label>
              <br />
              <Input
                type="tel"
                id="phone"
                name="phone"
                placeholder="กรุณากรอกเบอร์โทรศัพท์"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              
            </div>
            <div>
              <label htmlFor="email">
                อีเมล <span className="text-utility-red">*</span>{" "}
              </label>
              <br />
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="กรุณากรอกอีเมล"
                value={formData.email}
                onChange={handleChange}
                required
              />
              
            </div>

            <div>
              <label htmlFor="password">
                รหัสผ่าน <span className="text-utility-red">*</span>
              </label>
              <br />
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="กรุณากรอกรหัสผ่าน"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          
          </div>
          <div className="mt-[30px]  flex justify-center items-center ">
            <Checkbox
              className="mr-4 w-6 h-6 rounded-[6px] border-gray-300 hover:border-blue-600"
              id="acceptTerms"
              name="acceptTerms"
              required
            />

            <label htmlFor="acceptTerms">
              <span className="p3 mr-1">ยอมรับ</span>
              <Modals variant="link" className="p-0 h-0 mr-1" button="ข้อตกลงและเงื่อนไข" title="ข้อตกลงและเงื่อนไข" description="นโยบายความเป็นส่วนตัว ยาวๆ"/>
              <span className="p3 mr-1">และ</span>
              <Modals variant="link" className="p-0 h-0 mr-1" button="นโยบายความเป็นส่วนตัว" title="นโยบายความเป็นส่วนตัว" description="นโยบายความเป็นส่วนตัว ยาวๆ" />
              
            </label>
          </div>
          <Button
            className="w-96 h-11 px-6 py-2.5 bg-blue-600 rounded-lg justify-center items-center gap-2 inline-flex m-8"
            type="submit"
          >
            ลงทะเบียน
          </Button>

          <div className="w-96 h-5 justify-center items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-px bg-gray-400" />
            <div className="text-center text-gray-500 text-sm font-normal leading-tight">
              หรือลงชื่อเข้าใช้ผ่าน
            </div>
            <div className="grow shrink basis-0 h-px bg-gray-400" />
          </div>

          <Button
            variant="secondary"
            className="w-96 h-11 hover:opacity-50 border border-gray-300 text-gray-600 hover:text-gray-600 hover:border-gray-300 active:text-gray-900 active:border-gray-800 gap-2 m-8"
            onClick={signInWithGoogle}
          >
            <img src={googleLogo} className="mr-2 h-4 w-4" />
            เข้าสู่ระบบด้วย Google
          </Button>

          <Button variant="link" onClick={() => navigate("/login")}>
            กลับไปหน้าเข้าสู่ระบบ
          </Button>
        </form>
      </div>
    </div>
    
  );
};

export default Registerpage;
