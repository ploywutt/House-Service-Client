import RightArrow from "../../assets/icon/Right_Arrow.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function BreadCrumb(props: { serviceName: string }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const toservicelist = () => {
    navigate("/servicelist");
  };

  return (
    <div className="w-fit h-fit bg-white flex flex-row justify-center items-center rounded-lg border border-gray-300 p-2 dark:bg-gray-800">
      <h5
        onClick={toservicelist}
        className="text-gray-700 mr-2 p-2 cursor-pointer dark:text-white"
      >
        {t("service_breadcrumb")}
      </h5>
      <img src={RightArrow} alt="Right Arrow" className="h-2 w-2" />
      <h1 className="text-blue-600 ml-2 p-2 dark:text-white">
        {props.serviceName}
      </h1>
    </div>
  );
}

export default BreadCrumb;
