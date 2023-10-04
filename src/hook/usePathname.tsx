import { useLocation, useNavigate } from "react-router-dom";

function usePathname() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  console.log(location);

  return { pathname, navigate };
}

export default usePathname;
