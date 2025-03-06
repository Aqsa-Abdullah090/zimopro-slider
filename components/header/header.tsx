/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import ForwardArrowSvg from "../svgs/forward_arrow_svg";
import HeaderBtns from "./header-btns";
import { useTheme } from "@/context/theme-context"; // Import theme context

function Header() {
  const { theme } = useTheme(); // Get theme from context

  const handleBackClick = () => {
    console.log("back");
  };

  return (
    <header className="lg:pl-12 2xl:pl-16 px-4 flex flex-col mb-2 2xl:mb-4 w-full lg:pr-8 2xl:pr-12 mt-[8vh] lg:mt-[6vh] 2xl:mt-[12vh]">
      <button
        onClick={handleBackClick}
        className="flex items-center justify-between gap-2 lg:gap-4 group w-max"
      >
        <ForwardArrowSvg
          className={clsx("h-[9px] 3xl:h-[11px] -scale-x-100", {
            "fill-white": theme === "dark",
            "fill-black": theme === "light",
          })}
        />
        <p className="uppercase text-[9px] 2xl:text-[12px] opacity-25 group-hover:opacity-100">
          back
        </p>
      </button>

      <div className="flex gap-3 lg:gap-4 3xl:gap-6 ml-auto">
        <HeaderBtns />
      </div>
    </header>
  );
}

export default Header;


