import {useLocation} from "react-router-dom";

export function useChartsPath() {
  const location = useLocation();
  return location.pathname === "/charts";
}
