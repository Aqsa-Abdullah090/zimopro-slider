import { Theme } from "@/lib/types";
import { createContext, ReactNode, useState } from "react";

export const ThemeContext = createContext();

interface Props {
  children: ReactNode;
}

function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [description, setDescription] = useState<boolean>(false);
  const [zimoji, setZimoji] = useState<boolean>(false);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        description,
        setDescription,
        zimoji,
        setZimoji,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
