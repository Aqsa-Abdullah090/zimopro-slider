/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import HeaderBtns from "../header/header-btns";
import useThemeContext from "../heroSection/useThemeContext";

interface Props {
  data: any;
}

function Header({ data }: Props) {
  const { theme } = useThemeContext();

  return (
    <header className="desc-drop-header grid grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] items-center">
      <div>
        <img
          src="/assets/ZigPro.svg"
          alt=""
          className={clsx("h-8 3xl:h-10", theme === "dark" && "invert")}
        />
      </div>

      <div className="hidden lg:flex text__14 justify-center items-center gap-3">
        <img src={data.flag_url} className="h-3 lg:h-6" alt="" />
        <p>{data.address_line_1}</p>
        <p>{data.address_line_2}</p>
        <p>{data.city}</p>
        <p>{data.postal_code}</p>
        <p>{data.country_name}</p>
      </div>

      <div className="flex gap-3 lg:gap-4 3xl:gap-6 justify-end">
        <HeaderBtns />
      </div>
    </header>
  );
}
export default Header;
