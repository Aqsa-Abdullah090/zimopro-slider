/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import useThemeContext from "../heroSection/useThemeContext";

function Header() {
  const { theme } = useThemeContext();

  return (
    <header className="zimoji-drop-header grid grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] items-center">
      <div>
        <img
          src="/assets/ZigPro.svg"
          alt=""
          className={clsx("h-8 3xl:h-10", theme === "dark" && "invert")}
        />
      </div>

      <div className="hidden lg:flex text-[10px] 2xl:text-[14px] justify-center items-center gap-3 uppercase text-white">
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

      <div className="flex justify-end">
        <div className="relative w-max">
          <img
            src="/assets/zimoji.svg"
            className={clsx("h-8 2xl:h-10", theme === "light" && "invert")}
            alt=""
          />
          <div className="absolute flex flex-col items-start gap-4 pt-4">
            <img
              src="/assets/icons/listing-zimoji-code.svg"
              className={clsx(
                "w-[128px] 2xl:w-[160px]",
                theme === "light" && "invert"
              )}
              alt=""
            />
            <p className="text-[13px] 2xl:text-[15px] tracking-[3px] 2xl:tracking-[4px] leading-[0.7]">
              #786123456
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
