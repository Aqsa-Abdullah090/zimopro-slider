/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import HeaderBtns from "../header/header-btns";
import useThemeContext from "../heroSection/useThemeContext";

function Header() {
  const { theme } = useThemeContext();

  return (
    <header className="desc-drop-header flex justify-between items-center">
      <div>
        <img
          src="/assets/ZigPro.svg"
          alt=""
          className={clsx("h-8 3xl:h-10", theme === "dark" && "invert")}
        />
      </div>

      <div className="hidden lg:flex text-[10px] 2xl:text-[14px] justify-center items-center gap-3 uppercase">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimo%2Fcategories%2F1701925788521.png?alt=media&token=e639c433-2a76-40a2-a31f-9d1d9684d7f2"
          className="h-3 lg:h-6"
          alt=""
        />
        <p>Regent Street</p>
        <p>The Lloyd’s Building</p>
        <p>London</p>
        <p>WC2N</p>
        <p>United Kingdom</p>
      </div>

      <div className="flex gap-2 lg:gap-4 2xl:gap-6 justify-end">
        <HeaderBtns />
      </div>
    </header>
  );
}
export default Header;
