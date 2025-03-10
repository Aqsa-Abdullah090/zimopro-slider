import { useContext } from "react";
import { ThemeContext } from "../../context/theme-context";

function useThemeContext() {
  const data = useContext(ThemeContext);
  return data;
}
export default useThemeContext;
