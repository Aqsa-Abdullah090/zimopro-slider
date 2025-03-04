import { useEffect } from "react";
import MiniNav from "../navbar/mini-nav";
import useThemeContext from "./useThemeContext";
import { useDispatch } from "react-redux";
import { navbarColorReducer } from "@/store/featues/navbar.slice";
import { NAV_BEHEIVIOURS } from "@/lib/constants";

function MiniNavProvider() {
  const { theme } = useThemeContext();
  const dispath = useDispatch();

  //   change navbar themes according to current page theme
  useEffect(() => {
    if (theme === "light") {
      dispath(navbarColorReducer(NAV_BEHEIVIOURS.solidwhiteBg));
    } else {
      dispath(navbarColorReducer(NAV_BEHEIVIOURS.solidBg));
    }
  }, [theme]);

  return <MiniNav page="home" />;
}
export default MiniNavProvider;
