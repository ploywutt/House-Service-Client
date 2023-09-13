import RightArrow from "../../assets/icon/Right_Arrow.png";
// import { useNavigate } from "react-router-dom";

function BreadCrumb() {
  return (
    <div className="w-[300px] h-fit bg-white flex flex-row justify-center items-center rounded-lg border border-gray-300 p-2">
      <h5 className="text-gray-700 mr-2 p-2">บริการของเรา</h5>
      <img src={RightArrow} alt="Right Arrow" className="h-2 w-2" />
      <h1 className="text-blue-600 ml-2 p-2">ล้างแอร์</h1>
    </div>
  );
}

export default BreadCrumb;
