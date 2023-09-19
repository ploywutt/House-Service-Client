import { useLocation, useNavigate } from "react-router-dom";

function usePathname() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return { pathname, navigate };
}

export default usePathname;
