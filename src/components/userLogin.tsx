function UserLogin() {
  return (
    <div className="Login w-96 h-96 pb-72 bg-gray-100 flex-col justify-start items-center gap-12 inline-flex">
      <div className="NavBar w-96 h-20 relative bg-white shadow flex-col justify-start items-start flex">
        <div className="Frame73 justify-start items-start gap-8 inline-flex">
          <div className="Frame69 p-2.5 justify-start items-center gap-1 flex">
            <div className=" text-black text-base font-medium leading-normal">
              บริการของเรา
            </div>
          </div>
        </div>
        <div className="Frame70 px-6 py-2 rounded-lg border border-blue-600 justify-start items-start gap-2.5 inline-flex">
          <div className=" text-center text-blue-600 text-base font-medium">
            เข้าสู่ระบบ
          </div>
        </div>
        <div className="Frame68 justify-start items-center gap-2 inline-flex">
          <img
            className="House1 w-8 h-8"
            src="https://via.placeholder.com/32x32"
          />
          <div className="Homeservices text-blue-600 text-2xl font-medium">
            HomeServices
          </div>
        </div>
      </div>
      <div className="Frame12 w-96 h-96 relative bg-white rounded-lg border border-gray-300 flex-col justify-start items-start flex">
        <div className=" text-center text-blue-950 text-3xl font-medium leading-10">
          เข้าสู่ระบบ
        </div>
        <div className="Frame56621 h-40 flex-col justify-start items-start gap-5 inline-flex">
          <div className="InputStyle h-16 flex-col justify-start items-start gap-1 flex">
            <div className="Normal">
              <span className="text-zinc-700 text-base font-medium leading-normal">
                อีเมล
              </span>
              <span className="text-rose-700 text-base font-medium leading-normal">
                *
              </span>
            </div>
            <div className="Frame83 self-stretch px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
              <div className="PlaceHolder text-gray-500 text-base font-normal leading-normal">
                กรุณากรอกอีเมล
              </div>
            </div>
          </div>
          <div className="InputStyle h-16 flex-col justify-start items-start gap-1 flex">
            <div className="Normal">
              <span className="text-zinc-700 text-base font-medium leading-normal">
                รหัสผ่าน
              </span>
              <span className="text-rose-700 text-base font-medium leading-normal">
                *
              </span>
            </div>
            <div className="Frame83 self-stretch px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex">
              <div className="PlaceHolder text-gray-500 text-base font-normal leading-normal">
                กรุณากรอกรหัสผ่าน
              </div>
            </div>
          </div>
        </div>
        <div className="ButtonPrimaryMedium w-96 px-6 py-2.5 bg-blue-600 rounded-lg justify-center items-center gap-2 inline-flex">
          <div className="ButtonPrimary text-center text-white text-base font-medium leading-normal">
            เข้าสู่ระบบ
          </div>
        </div>
        <div className="Ribbon w-96 justify-center items-center gap-2 inline-flex">
          <div className="Divider grow shrink basis-0 h-px bg-gray-400" />
          <div className="Text text-center text-gray-500 text-sm font-normal leading-tight">
            หรือลงชื่อเข้าใช้ผ่าน
          </div>
          <div className="Divider grow shrink basis-0 h-px bg-gray-400" />
        </div>
        <div className="ButtonSecondaryMedium w-96 h-11 px-6 py-2.5 rounded-lg border border-blue-600 justify-center items-center gap-2 inline-flex">
          <div className="Frame56622 justify-start items-center gap-4 flex">
            <img
              className="FacebookLogosPng197531 w-6 h-5"
              src="https://via.placeholder.com/23x22"
            />
            <div className="ButtonSecondary text-blue-600 text-base font-medium leading-normal">
              เข้าสู่ระบบด้วย Facebook
            </div>
          </div>
        </div>
        <div className="Frame56620 justify-center items-center gap-2 inline-flex">
          <div className="Text text-center text-gray-500 text-base font-normal leading-normal">
            ยังไม่มีบัญชีผู้ใช้ HomeService?
          </div>
          <div className="Text text-center text-blue-600 text-base font-semibold underline leading-normal">
            ลงทะเบียน
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
