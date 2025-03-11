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
    <header className=" flex justify-between items-center">
      <div>
        <img
          src="/assets/ZigPro.svg"
          alt=""
          className={clsx("h-8 3xl:h-10", theme === "dark" && "invert")}
        />
      </div>

      <div className="hidden lg:flex text-[10px] 2xl:text-[14px] justify-center items-center gap-3 uppercase text-white">
        <img src={data.flag_url} className="h-3 lg:h-6" alt="" />
        <p>Regent Street</p>
        <p>The Lloyd’s Building</p>
        <p>London</p>
        <p>WC2N</p>
        <p>United Kingdom</p>
      </div>

      <div className="flex gap-2 lg:gap-4 3xl:gap-6 justify-end">
        <HeaderBtns />
      </div>
    </header>
  );
}
export default Header;
