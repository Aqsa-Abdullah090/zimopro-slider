import FixedSidebarBtn from "../sidebar/fixed-sidebar-btn";
import useThemeContext from "./useThemeContext";

function ThemedFixedSidenavBtn() {
  const { theme } = useThemeContext();

  return (
    <FixedSidebarBtn page="reels" className={theme === "light" && "invert"} />
  );
}
export default ThemedFixedSidenavBtn;
