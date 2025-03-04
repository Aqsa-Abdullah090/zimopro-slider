import { useContext } from "react";
import { ThemeContext } from "./theme-context";

function useThemeContext() {
  const data = useContext(ThemeContext);
  return data;
}
export default useThemeContext;
