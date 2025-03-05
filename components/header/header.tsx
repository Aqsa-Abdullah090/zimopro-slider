/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import ForwardArrowSvg from "../svgs/forward_arrow_svg";
import HeaderBtns from "./header-btns";

function Header() {


  const handleBackClick = () => {
    console.log("back")
  };

  return (
    <header className="lg:pl-12 3xl:pl-16 px-4 flex flex-col mb-2 3xl:mb-4 w-full lg:pr-8 3xl:pr-12 mt-[8vh] lg:mt-[6vh] 2xl:mt-[8vh] 3xl:mt-[12vh]">
      <button
        onClick={handleBackClick}
        className="flex items-center justify-between gap-2 lg:gap-4 group w-max"
      >
        <ForwardArrowSvg className="h-[9px] 3xl:h-[11px] -scale-x-[1] fill-white" />
        <p className="uppercase text-[9px] opacity-25 group-hover:opacity-100">
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

