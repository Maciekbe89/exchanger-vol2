import {useLocation} from "react-router-dom";

export function useNewsPath() {
  const location = useLocation();
  return location.pathname === "/news";
}
