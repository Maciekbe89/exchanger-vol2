import {useLocation} from "react-router-dom";

export function useCalcPath() {
  const location = useLocation();
  return location.pathname === "/";
}
